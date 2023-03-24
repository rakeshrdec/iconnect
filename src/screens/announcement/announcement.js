import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Loader from "../homepage/loader";
import BackgroundScreen from "../homepage/backgroundScreen";


const Announcement = ({ navigation }) => {
    useEffect(() => {
        getAllAnnouncement();
    }, [])

    const [announcementList, setAnnouncementList] = useState([]);
    const [showLoader, setShowLoader] = useState(true)

    const getAllAnnouncement = () => {
        fetch(`http://13.127.128.192:8081/announcement/getAllAnnouncement`).then((res) => {
            res.json().then((data) => {
                if (data != '') {
                    setAnnouncementList(data);
                    setShowLoader(false);
                }
            })
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
                    </View>
                </View>
                <Loader message="Loading Announcement ......." showLoader={showLoader} />
            </SafeAreaView>
        </>
    );
}

export default Announcement;