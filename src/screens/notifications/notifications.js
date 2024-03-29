import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { useSelector } from "react-redux";
import StudentHeader from "../homepage/studentHeader";
import Loader from "../homepage/loader";
import BackgroundScreen from "../homepage/backgroundScreen";



const Notifications = ({ navigation }) => {

    const data = useSelector((state) => state)
    const sessionData = data.session;
    const [session, setSession] = useState(sessionData.data);
    const selectedStudentData = data.selectedStudentDetails;
    const [selectedStudent, setSelectedStudent] = useState(selectedStudentData.data);
    const [showLoader, setShowLoader] = useState(true)

    useEffect(() => {
        getNotifications();
    }, [])

    const [notifications, setNotifications] = useState([]);

    async function getNotifications() {
        const response = await fetch(`http://13.127.128.192:8081/user/getAllActiveUsers?sessionYear=${session.id}`);
        const data = await response.json();
        const staffsMap = new Map();
        data.forEach((staff, i) => {
            staffsMap.set(staff.id, staff.name);
        })

        const classResponse = await fetch(`http://13.127.128.192:8081/notification/getNotificationDetails?studentId=${selectedStudent.id}`);
        const notificationsData = await classResponse.json();
        const tempNotifications = [];
        if (notificationsData != '') {
            notificationsData.map((notification, i) => {
                tempNotifications.push({
                    name: notification.notification.notificationName,
                    createdBy: staffsMap.get(notification.notification.createdBy),
                    publishedOn: notification.notification.publishedOn
                });

            });
            setNotifications(tempNotifications);
            setShowLoader(false);
        }

    }

    return (
        <>
           <BackgroundScreen />
            <SafeAreaView style={{ flex: 1, position: 'absolute', width: '100%', height: '100%' }}>
                <View style={{ flex: 1, justifyContent: "space-between" }}>
                    {/* USER PROFILE */}
                    <View style={{ flex: 1 }}><StudentHeader /></View>
                    <View style={{ flex: 6, justifyContent: "space-between" }}>
                        <ScrollView>
                            {notifications.map((notification, i) => (
                                <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                    <View style={{ marginHorizontal: 40 }}>
                                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17 }}>{notification.name}</Text>
                                        <Text style={{ color: 'black' }}>{notification.createdBy}</Text>
                                        <Text style={{ color: 'black' }}>{notification.publishedOn}</Text>
                                    </View>
                                </Pressable>
                            ))}
                        </ScrollView>
                    </View>
                </View>
                <Loader message="Loading Notifications ......." showLoader={showLoader} />
            </SafeAreaView>
        </>
    );
}

export default Notifications;