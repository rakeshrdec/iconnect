import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Loader from "../homepage/loader";
import BackgroundScreen from "../homepage/backgroundScreen";
import PushNotification from "react-native-push-notification";


const AboutSchool = ({ navigation }) => {
    useEffect(() => {
        getAllAnnouncement();
        createChannels();
    }, [])

    const [academyDetails, setAcademyDetails] = useState([]);
    const [showLoader, setShowLoader] = useState(true)

    const getAllAnnouncement = () => {
        fetch(`http://13.127.128.192:8082/acedemy/getAcedemyDetails`).then((res) => {
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
            <SafeAreaView style={{ flex: 1 }}>
                <BackgroundScreen />
                <ScrollView style={{ position: 'absolute', width: '100%', marginTop: 0 }}>
                    <Pressable
                        style={{ elevation: 10, backgroundColor: 'white', minHeight: 120, margin: 10, borderRadius: 15, padding: 5, alignItems: 'center' }}>
                        <View style={{ flex: 1, margin: 10, flexDirection: 'row', alignItems: 'center' }}>

                            <View style={{ flex: 2, }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>{academyDetails.name}</Text>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>Roll No : {academyDetails.id}</Text>
                                <Text style={{ color: 'black', fontWeight: 'bold', }}>Mobile : {academyDetails.mobile} </Text>
                            </View>
                        </View>
                    </Pressable>
                </ScrollView>
                <Loader message="Loading Student List ......." showLoader={showLoader} />
            </SafeAreaView>
        </>
    );
}

export default AboutSchool;