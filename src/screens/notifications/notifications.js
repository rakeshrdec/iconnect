import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable, Dimensions, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { useSelector } from "react-redux";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')





const Notifications = ({ navigation }) => {

    const data = useSelector((state) => state)
    const sessionData = data.session;
    const [session, setSession] = useState(sessionData.data);
    const selectedStudentData = data.selectedStudentDetails;
    const [selectedStudent, setSelectedStudent] = useState(selectedStudentData.data);

    useEffect(() => {
        getStudentAttendenceByMonth();
    }, [])

    const [notifications, setNotifications] = useState([]);

    const getStudentAttendenceByMonth = () => {
        fetch(`http://13.127.128.192:8081/notification/getNotificationDetails?studentId=${selectedStudent.id}`).then((res) => {
            res.json().then((data) => {
                if (data != '') {
                    setNotifications(data);
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
                     {/* USER PROFILE */}
                <View style={{ flex: 1, backgroundColor: 'lightgray', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    {selectedStudent.uploadImg === null ? <Image source={require('../../../assets/logo/male_student_avatar.png')} style={{ width: 70, height: 70, resizeMode: 'stretch', borderRadius: 150 }} /> : <Image source={{ uri: 'http://13.127.128.192:8081/' + selectedStudent.uploadImg }} style={{ width: 70, height: 70, resizeMode: 'stretch', borderRadius: 150 }} />}
                    <View style={{}}>
                        <Text style={{ color: 'black' }}>{selectedStudent.name}</Text>
                        <Text style={{ color: 'black' }}>{selectedStudent.className}</Text>
                        <Text style={{ color: 'black' }}>{selectedStudent.sectionName}</Text>
                    </View>
                </View>
                    <View style={{ flex: 6, justifyContent: "space-between" }}>
                        <ScrollView>
                            {notifications.map((notification, i) => (
                                <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                    <View style={{ marginHorizontal: 40 }}>
                                        <Text style={{ color: 'black', fontWeight: 'bold' }}>{notification.notification.notificationName}</Text>
                                        <Text style={{ color: 'black' }}>{notification.notification.createdBy}</Text>
                                        <Text style={{ color: 'black' }}>{notification.notification.publishedOn}</Text>

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

export default Notifications;