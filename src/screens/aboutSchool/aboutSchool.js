import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Loader from "../homepage/loader";
import BackgroundScreen from "../homepage/backgroundScreen";
import { Icon } from 'react-native-elements';

const AboutSchool = ({ navigation }) => {
    useEffect(() => {
        getAcademy();
    }, [])

    const [academyDetails, setAcademyDetails] = useState([]);
    const [showLoader, setShowLoader] = useState(true)

    const getAcademy = () => {
        fetch(`http://13.127.128.192:8085/acedemy/getAcedemyDetails`).then((res) => {
            res.json().then((data) => {
                if (data != '') {
                    setAcademyDetails(data);
                    setShowLoader(false);
                }
                setShowLoader(false);
            })
        }).catch((e) => {
            setShowLoader(false);
        })
    }

    return (
        <>
            <BackgroundScreen />
            <SafeAreaView style={{ flex: 1, position: 'absolute', width: '100%', height: '100%' }}>
                <View style={{ flex: 1, justifyContent: "space-between" }}>
                    <View style={{ flex: 6, justifyContent: "space-between" }}>
                        <ScrollView>
                            <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                <View style={{ marginHorizontal: 0, alignSelf: 'center', alignItems: 'center' }}>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        {academyDetails.logoImg === null ? <Image source={require('../../../assets/logo/male_student_avatar.png')} style={{ width: 70, height: 70, resizeMode: 'stretch', borderRadius: 150 }} /> : <Image source={{ uri: 'http://13.127.128.192:8085/' + academyDetails.logoImg }} style={{ width: 70, height: 70, resizeMode: 'stretch', borderRadius: 150 }} />}
                                    </View>
                                    <Text style={{ color: 'green', fontWeight: 'bold', alignSelf: 'center', fontSize: 25 }}>{academyDetails.acedemyName}</Text>
                                </View>
                            </Pressable>

                            <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                <Icon name="phone" type="material" size={30} color="red" />
                                <View style={{ marginHorizontal: 20 }}>
                                    <Text style={{ fontWeight: 'bold', marginLeft: 0 }}>+91-{academyDetails.mobile}</Text>
                                    <Text style={{ fontWeight: 'bold', marginLeft: 0 }}>+91-{academyDetails.phoneNo}</Text>
                                </View>
                            </Pressable>

                            <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                <Icon name="email" type="material" size={30} color="red" />
                                <View style={{ marginHorizontal: 20 }}>
                                    <Text style={{ fontWeight: 'bold', marginLeft: 0 }}>{academyDetails.email}</Text>
                                    <Text style={{ fontWeight: 'bold', marginLeft: 0 }}>{academyDetails.website}</Text>
                                </View>
                            </Pressable>

                            <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                <Icon name="place" type="material" size={30} color="red" />
                                <View style={{ marginHorizontal: 20 }}>
                                    <Text style={{ fontWeight: 'bold', marginLeft: 0 }}>{academyDetails.address}</Text>
                                </View>
                            </Pressable>

                            <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                <Icon name="schedule" type="material" size={30} color="red" />
                                <View style={{ marginHorizontal: 10 }}>
                                    <Text style={{ fontWeight: 'bold', marginLeft: 0 }}>Summer Timing:  {academyDetails.summerStartTime} -  {academyDetails.summerEndTime}</Text>
                                    <Text style={{ fontWeight: 'bold', marginLeft: 0 }}>Winter Timing:     {academyDetails.winterStartTime} -  {academyDetails.winterEndTime}</Text>
                                </View>
                            </Pressable>
                        </ScrollView>

                    </View>
                </View>
                <Loader message="Loading Academy ......." showLoader={showLoader} />
            </SafeAreaView>
        </>
    );

}

export default AboutSchool;