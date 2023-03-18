import { Avatar } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable, Dimensions, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
// import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import { Calendar } from "react-native-calendars";
import Icon from 'react-native-vector-icons/AntDesign';
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

import AttendenceYear from "../attendence/attendenceYear";
// import  Calendar from "react-native-calendars/src/calendar/index.js";
import { useSelector } from "react-redux";




const TimeTable = ({ navigation }) => {

    const data = useSelector((state) => state)
    const sessionData = data.session;
    const [session, setSession] = useState(sessionData.data);
    const selectedStudentData = data.selectedStudentDetails;
    const [selectedStudent, setSelectedStudent] = useState(selectedStudentData.data);




    const [listOfPeriods, setListOfPeriods] = useState([{ time: 'time', subject_name: 'subjectName', teacher_name: 'teacherName' }]);
    const [selectedDay, setSelectedDay] = useState('Sun');
    const [listOfPeriods1, setListOfPeriods1] = useState([]);
    const [days, setDays] = useState([1, 2, 3, 4, 5, 6, 0]);




    useEffect(() => {
        getAllActiveUsers();
    }, [])

    async function getAllActiveUsers() {
        const response = await fetch(`http://13.127.128.192:8081/user/getAllActiveUsers?sessionYear=2&userType=3`);
        const data = await response.json();



        const staffsMap = new Map();
        data.forEach((staff, i) => {
            staffsMap.set(staff.id, staff.name);
        })
        console.log("1=====", staffsMap);

        const classResponse = await fetch(`http://13.127.128.192:8081/class/getClassById?classId=2`);
        const classData = await classResponse.json();
        const classSubjectMap = new Map();

        for (const subjects of classData.subjects) {
            classSubjectMap.set(subjects.subjectId, subjects);
        }

        console.log("2====>", classSubjectMap);


        const subjectResponse = await fetch(`http://13.127.128.192:8081/subject/getAllSubjects`);
        const subjectData = await subjectResponse.json();

        const subjectMap = new Map();


        subjectData.forEach(element => subjectMap.set(element.id, element.name));
        console.log("3====>", subjectMap);


        const timeTableResponse = await fetch(`http://13.127.128.192:8081/timeTable/getAllTimeTable`);
        const timeTableData = await timeTableResponse.json();


        const timeTablemap = new Map();
        timeTableData.forEach(element => {
            timeTablemap.set(element.id, element);
        });
        console.log("4====>", timeTablemap);

        const classTimeTableResponse = await fetch(`http://13.127.128.192:8081/class/getAllClassTimetableDetails?sectionId=2`);
        const classTimeTableData = await classTimeTableResponse.json();


        let day1 = [];
        let day2 = [];
        let day3 = [];
        let day4 = [];
        let day5 = [];
        let day6 = [];
        let day7 = [];
        classTimeTableData.forEach((e, i) => {
            if (e.weekDaysNumber == 1) {
                day1.push({ time: e.timetableId, subject_name: e.subjectId, teacher_name: e.staffId })
            }
            if (e.weekDaysNumber == 2) {
                day2.push({ time: e.timetableId, subject_name: e.subjectId, teacher_name: e.staffId })
            }
            if (e.weekDaysNumber == 3) {
                day3.push({ time: e.timetableId, subject_name: e.subjectId, teacher_name: e.staffId })
            }
            if (e.weekDaysNumber == 4) {
                day4.push({ time: e.timetableId, subject_name: e.subjectId, teacher_name: e.staffId })
            }
            if (e.weekDaysNumber == 5) {
                day5.push({ time: e.timetableId, subject_name: e.subjectId, teacher_name: e.staffId })
            }
            if (e.weekDaysNumber == 6) {
                day6.push({ time: e.timetableId, subject_name: e.subjectId, teacher_name: e.staffId })
            }
            if (e.weekDaysNumber == 7) {
                day7.push({ time: e.timetableId, subject_name: e.subjectId, teacher_name: e.staffId })
            }
        })

        var listOfPeriodsnew = [];
        listOfPeriodsnew.push(day1);
        listOfPeriodsnew.push(day2);
        listOfPeriodsnew.push(day3);
        listOfPeriodsnew.push(day4);
        listOfPeriodsnew.push(day5);
        listOfPeriodsnew.push(day6);
        listOfPeriodsnew.push(day7);

        setListOfPeriods1(listOfPeriodsnew);
        console.log("5====>", day1);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: "space-between" }}>
                <View style={{ flex: 6, justifyContent: "space-between" }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center', marginVertical: 40 }}>

                        {/* {days.map((e, i) => (
                            // console.log(e,i);
                            <Pressable style={selectedDay == 'Mon' ? { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#2E4AA0' } : { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#F0BA19' }} onPress={() => { setSelectedDay('Mon'); setListOfPeriods(listOfPeriods1[0]) }}><Text style={selectedDay == 'Mon' ? { color: 'white', fontWeight: 'bold' } : { color: 'blue' }}>Mon</Text></Pressable>

                        ))
                        } */}

                        <Pressable style={selectedDay == 'Mon' ? { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#2E4AA0' } : { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#F0BA19' }} onPress={() => { setSelectedDay('Mon'); setListOfPeriods(listOfPeriods1[0]) }}><Text style={selectedDay == 'Mon' ? { color: 'white', fontWeight: 'bold' } : { color: 'blue' }}>Mon</Text></Pressable>
                        <Pressable style={selectedDay == 'Tue' ? { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#2E4AA0' } : { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#F0BA19' }} onPress={() => { setSelectedDay('Tue'); setListOfPeriods(listOfPeriods1[1]) }}><Text style={selectedDay == 'Tue' ? { color: 'white', fontWeight: 'bold' } : { color: 'blue' }}>Tue</Text></Pressable>
                        <Pressable style={selectedDay == 'Wed' ? { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#2E4AA0' } : { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#F0BA19' }} onPress={() => { setSelectedDay('Wed'); setListOfPeriods(listOfPeriods1[2]) }}><Text style={selectedDay == 'Wed' ? { color: 'white', fontWeight: 'bold' } : { color: 'blue' }}>Wed</Text></Pressable>
                        <Pressable style={selectedDay == 'Thu' ? { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#2E4AA0' } : { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#F0BA19' }} onPress={() => { setSelectedDay('Thu'); setListOfPeriods(listOfPeriods1[3]) }}><Text style={selectedDay == 'Thu' ? { color: 'white', fontWeight: 'bold' } : { color: 'blue' }}>Thu</Text></Pressable>
                        <Pressable style={selectedDay == 'Fri' ? { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#2E4AA0' } : { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#F0BA19' }} onPress={() => { setSelectedDay('Fri'); setListOfPeriods(listOfPeriods1[4]) }}><Text style={selectedDay == 'Fri' ? { color: 'white', fontWeight: 'bold' } : { color: 'blue' }}>Fri</Text></Pressable>
                        <Pressable style={selectedDay == 'Sat' ? { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#2E4AA0' } : { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#F0BA19' }} onPress={() => { setSelectedDay('Sat'); setListOfPeriods(listOfPeriods1[5]) }}><Text style={selectedDay == 'Sat' ? { color: 'white', fontWeight: 'bold' } : { color: 'blue' }}>Sat</Text></Pressable>
                        <Pressable style={selectedDay == 'Sun' ? { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#2E4AA0' } : { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#F0BA19' }} onPress={() => { setSelectedDay('Sun'); setListOfPeriods(listOfPeriods1[6]) }}><Text style={selectedDay == 'Sun' ? { color: 'white', fontWeight: 'bold' } : { color: 'blue' }}>Sun</Text></Pressable>
                    </View>
                    {/* subjects */}
                    <ScrollView>
                        {listOfPeriods.map((e, i) => (
                            <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                <Image source={require('../../../../assets/logo/document.png')} style={{ height: 50, width: 50, resizeMode: 'stretch' }} />
                                <View style={{ marginHorizontal: 40 }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>{e.time}</Text>
                                    <Text style={{ color: 'black' }}>{e.subject_name}</Text>
                                    <Text style={{ color: 'black' }}>{e.teacher_name}</Text>
                                </View>
                            </Pressable>
                        ))
                        }

                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default TimeTable;