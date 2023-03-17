import { Avatar } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable, Image, Dimensions, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
// import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import { Calendar } from "react-native-calendars";
import Icon from 'react-native-vector-icons/AntDesign';

// import AttendenceYear from "./attendenceYear";
import { Divider } from "@rneui/themed";
import { getTimestamp } from "react-native-reanimated/lib/reanimated2/core";
// import  Calendar from "react-native-calendars/src/calendar/index.js";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')
import PersonalInfo from "./personalInfo";
import AcademicInfo from "./academicInfo";
import { useSelector } from "react-redux";

const StudentProfile = ({ navigation }) => {

    const data = useSelector((state) => state)
    const selectedStudentData = data.selectedStudentDetails;
    const [selectedStudent, setSelectedStudent] = useState(selectedStudentData.data);

    useEffect(() => {


    }, [])


    const [infoOf, setInfoOf] = useState('personal')

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* USER PROFILE */}
            <View style={{ flex: 1, backgroundColor: 'lightgray', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>

                {selectedStudent.uploadImg === null ? <Image source={require('../../../../assets/logo/male_student_avatar.png')} style={{ width: 70, height: 70, resizeMode: 'stretch', borderRadius: 150 }} /> : <Image source={{ uri: 'http://13.127.128.192:8081/' + selectedStudent.uploadImg }} style={{ width: 70, height: 70, resizeMode: 'stretch', borderRadius: 150 }} />}

                <View style={{}}>
                    <Text style={{ color: 'black' }}>{selectedStudent.name}</Text>
                    <Text style={{ color: 'black' }}>{selectedStudent.className}</Text>
                    <Text style={{ color: 'black' }}>{selectedStudent.sectionName}</Text>

                </View>
            </View>
            <View style={{ flex: 6, backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>
                    <Pressable
                        onPress={() => {
                            setInfoOf('personal')
                        }}
                        style={infoOf == 'personal' ? { borderBottomWidth: 2, flex: 1, justifyContent: 'center', alignItems: 'center', padding: 3 } : { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 3 }}>
                        <Text style={{ color: 'black' }}>PERSONAL</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setInfoOf('academic')
                        }}
                        style={infoOf == 'academic' ? { borderBottomWidth: 2, flex: 1, justifyContent: 'center', alignItems: 'center', padding: 3 } : { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 3 }}>
                        <Text style={{ color: 'black' }}>Academic</Text>
                    </Pressable>

                </View>
                {/*DETAILS   */}
                {infoOf == 'personal' ? <View style={{ flex: 1 }}><PersonalInfo /></View> : <View />}
                {infoOf == 'academic' ? <View style={{ flex: 1 }}><AcademicInfo /></View> : <View />}
            </View>


        </SafeAreaView>
    );
}

export default StudentProfile;