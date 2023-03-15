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
    useEffect(() => {
        getClassSubjects(2);

    }, [])

    const [student, setStudent] = useState([]);
    const [studentTimeTableData, setStudentTimeTableData] = useState(new Map());


    getClassSubjects = (sectionIdVal) => {
        const sectionId = sectionIdVal
        fetch(`http://13.127.128.192:8081/class/getClassById?classId=${sectionId}`).then((res) => {
            res.json().then((data) => {
                if (data != '') {
                    for (const subjects of data.subjects) {
                        classSubjectMap.set(subjects.subjectId, subjects);
                    }
                    getTimeTable(2);
                }
            })
        })
    }

    getTimeTable = (sectionIdVal) => {
        const sectionId = sectionIdVal
        fetch(`http://13.127.128.192:8081/timeTable/getAllTimeTable`).then((res) => {
            res.json().then((data) => {
                if (data != '') {
                    data.forEach(element => {
                        timeTablemap.set(element.id, element);
                    });
                    getStudentTimeTable(2);
                }
            })
        })
    }


    getStudentTimeTable = (sectionIdVal) => {
        const sectionId = sectionIdVal
        fetch(`http://13.127.128.192:8081/class/getAllClassTimetableDetails?sectionId=${sectionId}`).then((res) => {
            res.json().then((data) => {

                if (data != '') {

                    data.map((element, i) => {

                        var array = timeTableData.get(element.weekDaysNumber);

                        if (array == undefined) {
                            array = [];
                        }
                        array.push({
                            summerStartTime: timeTablemap.get(element.timetableId).summerStartTime,
                            summerEndTime: timeTablemap.get(element.timetableId).summerEndTime,

                            winterStartTime: timeTablemap.get(element.timetableId).winterStartTime,
                            winterEndTime: timeTablemap.get(element.timetableId).winterEndTime,

                            theoryTitle: element.isPractical ? "Practical" : 'Theory',
                            subjectId: element.subjectId,
                            staffId: element.staffId,
                            practical: classSubjectMap.get(element.subjectId).isPractical
                        });
                        timeTableData.set(element.weekDaysNumber, array);
                    })
                    setStudentTimeTableData(timeTableData);
                }
            })
        })
    }

    const [selectedDay, setSelectedDay] = useState('Sun');
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: "space-between" }}>
                <View style={{ flex: 6, justifyContent: "space-between" }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center', marginVertical: 40 }}>
                        <Pressable style={selectedDay == 'Mon' ? { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#2E4AA0' } : { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#F0BA19' }} onPress={() => { setSelectedDay('Mon') }}><Text style={selectedDay == 'Mon' ? { color: 'white', fontWeight: 'bold' } : { color: 'blue' }}>Mon</Text></Pressable>
                        <Pressable style={selectedDay == 'Tue' ? { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#2E4AA0' } : { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#F0BA19' }} onPress={() => { setSelectedDay('Tue') }}><Text style={selectedDay == 'Tue' ? { color: 'white', fontWeight: 'bold' } : { color: 'blue' }}>Tue</Text></Pressable>
                        <Pressable style={selectedDay == 'Wed' ? { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#2E4AA0' } : { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#F0BA19' }} onPress={() => { setSelectedDay('Wed') }}><Text style={selectedDay == 'Wed' ? { color: 'white', fontWeight: 'bold' } : { color: 'blue' }}>Wed</Text></Pressable>
                        <Pressable style={selectedDay == 'Thu' ? { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#2E4AA0' } : { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#F0BA19' }} onPress={() => { setSelectedDay('Thu') }}><Text style={selectedDay == 'Thu' ? { color: 'white', fontWeight: 'bold' } : { color: 'blue' }}>Thu</Text></Pressable>
                        <Pressable style={selectedDay == 'Fri' ? { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#2E4AA0' } : { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#F0BA19' }} onPress={() => { setSelectedDay('Fri') }}><Text style={selectedDay == 'Fri' ? { color: 'white', fontWeight: 'bold' } : { color: 'blue' }}>Fri</Text></Pressable>
                        <Pressable style={selectedDay == 'Sat' ? { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#2E4AA0' } : { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#F0BA19' }} onPress={() => { setSelectedDay('Sat') }}><Text style={selectedDay == 'Sat' ? { color: 'white', fontWeight: 'bold' } : { color: 'blue' }}>Sat</Text></Pressable>
                        <Pressable style={selectedDay == 'Sun' ? { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#2E4AA0' } : { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#F0BA19' }} onPress={() => { setSelectedDay('Sun') }}><Text style={selectedDay == 'Sun' ? { color: 'white', fontWeight: 'bold' } : { color: 'blue' }}>Sun</Text></Pressable>
                    </View>
                    {/* subjects */}
                        <ScrollView>
                            <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>   
                                <Image source={require('../../../../assets/logo/document.png')} style={{ height: 50, width: 50, resizeMode: 'stretch' }} />
                                <View style={{ marginHorizontal: 40 }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>8:00 Am -9:00 Am</Text>
                                    <Text style={{ color: 'black' }}>Maths</Text>
                                    <Text style={{ color: 'black' }}>rakesh mishra</Text>
                                </View>
                            </Pressable>
                            <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                <Image source={require('../../../../assets/logo/document.png')} style={{ height: 50, width: 50, resizeMode: 'stretch' }} />
                                <View style={{ marginHorizontal: 40 }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>9:00 Am -10:00 Am</Text>
                                    <Text style={{ color: 'black' }}>English</Text>
                                    <Text style={{ color: 'black' }}>sk sahu</Text>
                                </View>
                            </Pressable>
                            <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                <Image source={require('../../../../assets/logo/document.png')} style={{ height: 50, width: 50, resizeMode: 'stretch' }} />
                                <View style={{ marginHorizontal: 40 }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>10:00 Am -11:00 Am</Text>
                                    <Text style={{ color: 'black' }}>Hindi</Text>
                                    <Text style={{ color: 'black' }}>shivram</Text>
                                </View>
                            </Pressable>
                            <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                <Image source={require('../../../../assets/logo/document.png')} style={{ height: 50, width: 50, resizeMode: 'stretch' }} />
                                <View style={{ marginHorizontal: 40 }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>12:00 Pm -1:00 Pm</Text>
                                    <Text style={{ color: 'black' }}>Science</Text>
                                    <Text style={{ color: 'black' }}>Dr Sanjay</Text>
                                </View>
                            </Pressable>
                            <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                <Image source={require('../../../../assets/logo/document.png')} style={{ height: 50, width: 50, resizeMode: 'stretch' }} />
                                <View style={{ marginHorizontal: 40 }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>1:00 Pm -2:00 Pm</Text>
                                    <Text style={{ color: 'black' }}>Social Studies</Text>
                                    <Text style={{ color: 'black' }}>sunil</Text>
                                </View>
                            </Pressable>
                            <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                <Image source={require('../../../../assets/logo/document.png')} style={{ height: 50, width: 50, resizeMode: 'stretch' }} />
                                <View style={{ marginHorizontal: 40 }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>2:00 Pm -3:00 Pm</Text>
                                    <Text style={{ color: 'black' }}>drwaing</Text>
                                    <Text style={{ color: 'black' }}>seema luthra</Text>
                                </View>
                            </Pressable>
                                <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                    <Image source={require('../../../../assets/logo/document.png')} style={{ height: 50, width: 50, resizeMode: 'stretch' }} />
                                    <View style={{ marginHorizontal: 40 }}>
                                    <Text style={{color:'black', fontWeight: 'bold' }}>3:00 Pm -4:00 Pm</Text>
                                    <Text style={{color:'black' }}>Game</Text>
                                    <Text style={{color:'black' }}>rakesh mishra</Text>
                                    </View>
                                </Pressable>
                        </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default TimeTable;