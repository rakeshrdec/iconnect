import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Announcement = ({ navigation }) => {
    useEffect(() => {
        getStudentAttendenceByMonth();
    }, [])

    const [announcementList, setAnnouncementList] = useState([]);

    const getStudentAttendenceByMonth = () => {
        fetch(`http://13.127.128.192:8081/announcement/getAllAnnouncement`).then((res) => {
            res.json().then((data) => {
                if (data != '') {
                    setAnnouncementList(data);
                }
            })
        })
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: "space-between" }}>
                <View style={{ flex: 6, justifyContent: "space-between" }}>
                    <ScrollView>
                        {announcementList.map((announcement, i) => (
                            <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                <View style={{ marginHorizontal: 40 }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>{announcement.name}</Text>
                                    <Text style={{ color: 'black' }}>{announcement.message}</Text>
                                    <Text style={{ color: 'black' }}>{announcement.expiryDate}</Text>

                                </View>
                            </Pressable>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Announcement;