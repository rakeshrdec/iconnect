import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { useSelector } from "react-redux";
import StudentHeader from "../../homepage/studentHeader";
import Loader from "../../homepage/loader";
import BackgroundScreen from "../../homepage/backgroundScreen";
import { apiUrl } from '../../../models/data';
import { Icon } from 'react-native-elements';
import { settings } from '../../../models/data';

const Conveyance = ({ navigation }) => {

    const data = useSelector((state) => state)
    const selectedStudentData = data.selectedStudentDetails;
    const [selectedStudent, setSelectedStudent] = useState(selectedStudentData.data);
    const sessionData = data.session;
    const [session, setSession] = useState(sessionData.data);
    const [showLoader, setShowLoader] = useState(true);
    const [showContent, setShowContent] = useState(0)

    const [conveyance, setConveyance] = useState({});

    const [stoppage, setStoppage] = useState({});

    useEffect(() => {
        getStudentDetails();
    }, [])


    async function getStudentDetails() {
        const studentResponse = await fetch(apiUrl + `/student/getStudentFullDetails?sessionYear=${session.id}&studentId=${selectedStudent.id}`);
        const studentData = await studentResponse.json();
        getStudentFeeStructure(studentData.studentActivityModel.conveyanceId, studentData.studentActivityModel.stoppageId);
    }

    async function getStudentFeeStructure(conveyanceId, stoppageId) {
        const conveyanceResponse = await fetch(apiUrl + `/conveyance/getAllConveyance`);
        const conveyanceData = await conveyanceResponse.json();
        conveyanceData.forEach((conveyance, i) => {

            if (conveyance.id == conveyanceId) {
                setConveyance(conveyance);
                setShowContent(1);
                conveyance.stoppages.forEach((stoppage, i) => {
                    if (stoppage.id == stoppageId) {
                        setStoppage(stoppage);
                    }

                })
            }

        });
        setShowLoader(false);
    }

    return (
        <>

            <BackgroundScreen />
            <SafeAreaView style={{ flex: 1, position: 'absolute', width: '100%', height: '100%', padding: 10 }}>
                <View style={{ flex: 1 }}><StudentHeader /></View>
                <View style={{ flex: 6, justifyContent: "space-between", paddingTop: 20 }}>
                    <ScrollView style={showContent == 0 ? { opacity: 0 } : { opacity: 1 }}>
                        <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                            <View style={{ marginHorizontal: 0, alignSelf: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'green', fontWeight: 'bold', alignSelf: 'center', fontSize: 20 }}>Driver Name:- {conveyance.driverName}</Text>
                            </View>
                        </Pressable>

                        <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                            <View style={{ marginHorizontal: 0 }}>
                                <Text style={{ fontWeight: 'bold', marginLeft: 0 }}>Driver Mobile:- +91-{conveyance.driverMobile}</Text>
                            </View>
                        </Pressable>

                        <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                            <View style={{ marginHorizontal: 0, alignSelf: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'green', fontWeight: 'bold', alignSelf: 'center', fontSize: 15 }}>Route:- {conveyance.vehicleName}</Text>
                            </View>
                        </Pressable>

                        <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                            <View style={{ marginHorizontal: 0 }}>
                                <Text style={{ fontWeight: 'bold', marginLeft: 0 }}>Vehicle No. :- {conveyance.vehicleRegNumber}</Text>
                            </View>
                        </Pressable>
                        <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                            <View style={{ marginHorizontal: 10 }}>
                                <Text style={{ fontWeight: 'bold', marginLeft: 0 }}>Stoppage:  {stoppage.stoppageName} </Text>
                                <Text style={{ fontWeight: 'bold', marginLeft: 0 }}>Amount:  {settings.CURRENCY + ' '}{stoppage.amount}/-</Text>

                            </View>
                        </Pressable>
                        <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                            <Icon name="schedule" type="material" size={30} color="red" />
                            <View style={{ marginHorizontal: 10 }}>
                                <Text style={{ fontWeight: 'bold', marginLeft: 0 }}>Pickup Timing:  {stoppage.pickTime} </Text>
                                <Text style={{ fontWeight: 'bold', marginLeft: 0 }}>Dropoff Timing:  {stoppage.dropOffTime}</Text>

                            </View>
                        </Pressable>
                    </ScrollView>
                </View>
                <Loader message="Loading Conveyance Details ......." showLoader={showLoader} />
            </SafeAreaView>
        </>
    );
}

export default Conveyance;