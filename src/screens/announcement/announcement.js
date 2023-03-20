import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable, Image, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')


const Announcement = ({ navigation }) => {
    useEffect(() => {
        getStudentAttendanceByMonth();
    }, [])

    const [announcementList, setAnnouncementList] = useState([]);

    const getStudentAttendanceByMonth = () => {
        fetch(`http://13.127.128.192:8081/announcement/getAllAnnouncement`).then((res) => {
            res.json().then((data) => {
                if (data != '') {
                    setAnnouncementList(data);
                }
            })
        })
    }

    return (
        <>
            <View style={{
                width: SCREEN_WIDTH,
                height: 0,
                borderTopColor: "#2E4AA0",
                borderTopWidth: SCREEN_HEIGHT,
                borderRightWidth: SCREEN_WIDTH,
                borderRightColor: '#F0BA19'
            }}>
            </View>
            <SafeAreaView style={{ flex: 1, position: 'absolute', width: '100%', height: '100%' }}>
             <View style={{ flex: 1, justifyContent: "space-between" }}>
                    <View style={{ flex: 6, justifyContent: "space-between" }}>
                        <ScrollView>
                            {announcementList.map((announcement, i) => (
                                <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                    <View style={{ marginHorizontal: 40 }}>
                                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>{announcement.name}</Text>
                                        <Text style={{ color: 'green', fontWeight: 'bold', marginLeft: 15}}>{announcement.message}</Text>
                                        <Text style={{ color: 'black', marginLeft: 15}}>{announcement.expiryDate}</Text>

                                    </View>
                                </Pressable>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}

export default Announcement;