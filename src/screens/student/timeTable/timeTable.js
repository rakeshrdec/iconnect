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

const classSubjectMap = new Map();
const timeTableData = new Map();
const timeTablemap = new Map();





const TimeTable = ({ navigation }) => {
    // useEffect(() => {
        // getClassSubjects(2);
        let day1 = [];
        let day2 = []
        let day3 = []
        let day4 = []
        let day5 = []
        let day6 = []
        let day7 = []
        const [listOfPeriods,setListOfPeriods] = useState([{time:'time',subject_name:'subjectName',teacher_name:'teacherName'}]);
        const [selectedDay, setSelectedDay] = useState('Sun');
        
        fetch(`http://13.127.128.192:8081/class/getAllClassTimetableDetails?sectionId=2`).then((res) => {
            res.json().then((data) => {
                if (data != '') {
                                 data.forEach( (e,i)=>{
                                    // const teacher_name_by_id =  getTeacherNamebyTeacherId(e.staffId,teacherList)
                                    // const time_by_id =  getTimebyTimeId(e.timetableId)
                                    // const subject_name_by_id =  getSubjectBySubjectId(e.subjectId)
                                    if(e.weekDaysNumber==1) {
                                        day1.push({time:e.timetableId,subject_name:e.subjectId,teacher_name:e.staffId})
                                    }
                                    if(e.weekDaysNumber==2) {
                                        day2.push({time:e.timetableId,subject_name:e.subjectId,teacher_name:e.staffId})
                                    }
                                    if(e.weekDaysNumber==3) {
                                        day3.push({time:e.timetableId,subject_name:e.subjectId,teacher_name:e.staffId})
                                    }
                                    if(e.weekDaysNumber==4) {
                                        day4.push({time:e.timetableId,subject_name:e.subjectId,teacher_name:e.staffId})
                                    }
                                    if(e.weekDaysNumber==5) {
                                        day5.push({time:e.timetableId,subject_name:e.subjectId,teacher_name:e.staffId})
                                    }
                                    if(e.weekDaysNumber==6) {
                                        day6.push({time:e.timetableId,subject_name:e.subjectId,teacher_name:e.staffId})
                                    }
                                    if(e.weekDaysNumber==7) {
                                        day7.push({time:e.timetableId,subject_name:e.subjectId,teacher_name:e.staffId})
                                    }
                                })
                }
            })
        })

    // useEffect(()=> {
     

    // },[selectedDay,listOfPeriods])

    // useEffect(() => {
    //     // getClassSubjects(2);
    //     fetch(`http://13.127.128.192:8081/class/getAllClassTimetableDetails?sectionId=2`).then((res) => {
    //         res.json().then((data) => {
    //             if (data != '') {
    //                 let teacherList = []
    //                 fetch(`http://13.127.128.192:8081/user/getAllActiveUsers?sessionYear=2&userType=3`).then((res) => {
    //                     res.json().then(async (data2) => {
    //                         if (data2 != '') {
    //                             teacherList = data2
    //                            await  data.forEach( (e,i)=>{
    //                                 console.log(e.staffId)
    //                                 // const teacher_name_by_id =  getTeacherNamebyTeacherId(e.staffId,teacherList)
    //                                 const time_by_id =  getTimebyTimeId(e.timetableId)
    //                                 const subject_name_by_id =  getSubjectBySubjectId(e.subjectId)
    //                                 if(e.weekDaysNumber==1) {
    //                                     day1.push({time:time_by_id,subject_name:subject_name_by_id,teacher_name:teacher_name_by_id})
    //                                 }
    //                                 if(e.weekDaysNumber==2) {
    //                                     day2.push({time:time_by_id,subject_name:subject_name_by_id,teacher_name:teacher_name_by_id})
    //                                 }
    //                                 if(e.weekDaysNumber==3) {
    //                                     day3.push({time:time_by_id,subject_name:subject_name_by_id,teacher_name:teacher_name_by_id})
    //                                 }
    //                                 if(e.weekDaysNumber==4) {
    //                                     day4.push({time:time_by_id,subject_name:subject_name_by_id,teacher_name:teacher_name_by_id})
    //                                 }
    //                                 if(e.weekDaysNumber==5) {
    //                                     day5.push({time:time_by_id,subject_name:subject_name_by_id,teacher_name:teacher_name_by_id})
    //                                 }
    //                                 if(e.weekDaysNumber==6) {
    //                                     day6.push({time:time_by_id,subject_name:subject_name_by_id,teacher_name:teacher_name_by_id})
    //                                 }
    //                                 if(e.weekDaysNumber==7) {
    //                                     day7.push({time:time_by_id,subject_name:subject_name_by_id,teacher_name:teacher_name_by_id})
    //                                 }
    //                             })
    //                             {selectedDay == 'Mon' ? setListOfPeriods(day1) : {}}
    //                             {selectedDay == 'Tue' ? setListOfPeriods(day2) : {}}
    //                             {selectedDay == 'Wed' ? setListOfPeriods(day3) : {}}
    //                             {selectedDay == 'Thu' ? setListOfPeriods(day4) : {}}
    //                             {selectedDay == 'Fri' ? setListOfPeriods(day5) : {}}
    //                             {selectedDay == 'Sat' ? setListOfPeriods(day6) : {}}
    //                             {selectedDay == 'Sun' ? setListOfPeriods(day7) : {}}
    //                         }

    //                     })
    //                 })
    //                 // console.log("THIS IS TEACHER LIST",teacherList)
                   
    //             }
    //         })
    //     })

        
    //     // day1.push(teacher_name)
    //     // console.log(day1)


    // }, [selectedDay])

    const getTeacherNamebyTeacherId = async (teacherId) =>{
        let tName = ''
        const d = await fetch(`http://13.127.128.192:8081/user/getAllActiveUsers?sessionYear=2&userType=3`).then((res) => {
            res.json().then((data) => {
                if (data != '') {
            data.forEach((e,i)=>{
                // console.log(e.id, teacherId)
                    if ( e.id === teacherId )
                    {
                        console.log(e.id,e.name,"matched")
                        tName = e.name
                        return e.name;
                        console.log("&&&&&&&&&&&&&&&&&&&&&&77")
                     }
                   })
                   
                }
            })
        })
        return d
    }
    const getTimebyTimeId = (teacherId) =>{
        return "jhjhjhjh"
    }
    const getSubjectBySubjectId = (teacherId) =>{
        return "jhjhjhjh"
    }

    // const [student, setStudent] = useState([]);
    // const [studentTimeTableData, setStudentTimeTableData] = useState(new Map());

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
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center', marginVertical: 40 }}>
                            <Pressable style={selectedDay == 'Mon' ? { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#2E4AA0' } : { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#F0BA19' }} onPress={() => { setSelectedDay('Mon'); setListOfPeriods(day1) }}><Text style={selectedDay == 'Mon' ? { color: 'white', fontWeight: 'bold' } : { color: 'blue' }}>Mon</Text></Pressable>
                            <Pressable style={selectedDay == 'Tue' ? { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#2E4AA0' } : { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#F0BA19' }} onPress={() => { setSelectedDay('Tue'); setListOfPeriods(day2) }}><Text style={selectedDay == 'Tue' ? { color: 'white', fontWeight: 'bold' } : { color: 'blue' }}>Tue</Text></Pressable>
                            <Pressable style={selectedDay == 'Wed' ? { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#2E4AA0' } : { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#F0BA19' }} onPress={() => { setSelectedDay('Wed'); setListOfPeriods(day3) }}><Text style={selectedDay == 'Wed' ? { color: 'white', fontWeight: 'bold' } : { color: 'blue' }}>Wed</Text></Pressable>
                            <Pressable style={selectedDay == 'Thu' ? { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#2E4AA0' } : { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#F0BA19' }} onPress={() => { setSelectedDay('Thu'); setListOfPeriods(day4) }}><Text style={selectedDay == 'Thu' ? { color: 'white', fontWeight: 'bold' } : { color: 'blue' }}>Thu</Text></Pressable>
                            <Pressable style={selectedDay == 'Fri' ? { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#2E4AA0' } : { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#F0BA19' }} onPress={() => { setSelectedDay('Fri'); setListOfPeriods(day5) }}><Text style={selectedDay == 'Fri' ? { color: 'white', fontWeight: 'bold' } : { color: 'blue' }}>Fri</Text></Pressable>
                            <Pressable style={selectedDay == 'Sat' ? { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#2E4AA0' } : { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#F0BA19' }} onPress={() => { setSelectedDay('Sat'); setListOfPeriods(day6) }}><Text style={selectedDay == 'Sat' ? { color: 'white', fontWeight: 'bold' } : { color: 'blue' }}>Sat</Text></Pressable>
                            <Pressable style={selectedDay == 'Sun' ? { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#2E4AA0' } : { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#F0BA19' }} onPress={() => { setSelectedDay('Sun'); setListOfPeriods(day7) }}><Text style={selectedDay == 'Sun' ? { color: 'white', fontWeight: 'bold' } : { color: 'blue' }}>Sun</Text></Pressable>
                        </View>
                        {/* subjects */}
                            <ScrollView>
                                {listOfPeriods.map((e,i)=>(
                                    // console.log(e,i);
                                    <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                    <Image source={require('../../../../assets/logo/document.png')} style={{ height: 50, width: 50, resizeMode: 'stretch' }} />
                                    <View style={{ marginHorizontal: 40 }}>
                                    <Text style={{color:'black', fontWeight: 'bold' }}>{e.time}</Text>
                                    <Text style={{color:'black' }}>{e.subject_name}</Text>
                                    <Text style={{color:'black' }}>{e.teacher_name}</Text>
                                    </View>
                                </Pressable>
                                ))
                                }
                                
                            </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}

export default TimeTable;