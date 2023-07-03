import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Loader from "../homepage/loader";
import BackgroundScreen from "../homepage/backgroundScreen";
import PushNotification from "react-native-push-notification";


const Announcement = ({ navigation }) => {
    useEffect(() => {
        getAllAnnouncement();
        createChannels();
    }, [])

    const [announcementList, setAnnouncementList] = useState([]);
    const [showLoader, setShowLoader] = useState(true)

    const getAllAnnouncement = () => {
        fetch(`http://13.127.128.192:8082/announcement/getAllAnnouncement`).then((res) => {
            res.json().then((data) => {
                if (data != '') {
                    setAnnouncementList(data);
                    setShowLoader(false);
                }
                setShowLoader(false);
            })
        }).catch((e) => {
            setShowLoader(false);
        })
    }

    const createChannels = () => {
        PushNotification.createChannel({
            channelId: "testChannel",
            channelName: "Test Channel"
        })

    }

    /**
      * @desc: A function will get a notification from android 
     * */
    const handlePsuhNotifications = () => {
        console.log("i clicke d");
        PushNotification.localNotification({
            channelId: "testChannel",
            title: "you push a new notification",
            message: "RR"
        })
    }

    return (
        <>
            <BackgroundScreen />
            <SafeAreaView style={{ flex: 1, position: 'absolute', width: '100%', height: '100%' }}>
                <View style={{ flex: 1, justifyContent: "space-between" }}>
                    <View style={{ flex: 6, justifyContent: "space-between" }}>
                        <ScrollView>
                            {announcementList.map((announcement, i) => (
                                <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                    <View style={{ marginHorizontal: 40 }}>
                                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>{announcement.name}</Text>
                                        <Text style={{ color: 'green', fontWeight: 'bold', marginLeft: 15 }}>{announcement.message}</Text>
                                        <Text style={{ color: 'black', marginLeft: 15 }}>{announcement.expiryDate}</Text>

                                    </View>
                                </Pressable>
                            ))}
                        </ScrollView>
                        {/**
                         * @desc: A pressable area by pressing will get a notification from android 
                         * 
                        <Pressable style={{position:'absolute',height:40,backgroundColor:'lightblue',alignSelf:"center",justifyContent:"center",bottom:100,padding:4}} onPress={handlePsuhNotifications}>
                            <Text>PressMeForAnewNotification</Text>
                            </Pressable>*/}
                    </View>
                </View>
                <Loader message="Loading Announcement ......." showLoader={showLoader} />
            </SafeAreaView>
        </>
    );
}

export default Announcement;