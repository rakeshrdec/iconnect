import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable, Dimensions, Image, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

import { useSelector } from "react-redux";
import { weekMap } from '../../../models/data';
import StudentHeader from "../../homepage/studentHeader";
import Loader from "../../homepage/loader";

const TimeTable = ({ navigation }) => {
    const [showLoader, setShowLoader] = useState(true)

    const data = useSelector((state) => state)
    const sessionData = data.session;
    const [session, setSession] = useState(sessionData.data);
    const selectedStudentData = data.selectedStudentDetails;
    const [selectedStudent, setSelectedStudent] = useState(selectedStudentData.data);

    const [listOfPeriods, setListOfPeriods] = useState([]);
    const [selectedDay, setSelectedDay] = useState(1);
    const [days, setDays] = useState([1, 2, 3, 4, 5, 6, 0]);
    const [daysName, setDaysName] = useState(weekMap);
    const [timeTableDataMap, setTimeTableDataMap] = useState(new Map());


    useEffect(() => {
        getTimeTables();
    }, [])

    async function getTimeTables() {
        const response = await fetch(`http://13.127.128.192:8081/user/getAllActiveUsers?sessionYear=${session.id}&userType=3`);
        const data = await response.json();
        const staffsMap = new Map();
        data.forEach((staff, i) => {
            staffsMap.set(staff.id, staff.name);
        })

        const classResponse = await fetch(`http://13.127.128.192:8081/class/getClassById?classId=${selectedStudent.classId}`);
        const classData = await classResponse.json();
        const classSubjectMap = new Map();
        for (const subjects of classData.subjects) {
            classSubjectMap.set(subjects.subjectId, subjects);
        }


        const subjectResponse = await fetch(`http://13.127.128.192:8081/subject/getAllSubjects`);
        const subjectData = await subjectResponse.json();
        const subjectMap = new Map();
        subjectData.forEach(element => subjectMap.set(element.id, element.name));

        const weeklyOffResponse = await fetch(`http://13.127.128.192:8081/utils/getAllWeeklyOff`);
        const weeklyOffData = await weeklyOffResponse.json();
        const weeklyOffMap = new Map();
        var daysWithoutOff = days;
        weeklyOffData.forEach(element => {
            weeklyOffMap.set(element.weekDaysNumber, element.active);
            if (element.active) {
                daysWithoutOff = daysWithoutOff.filter((value) => value !== element.weekDaysNumber);
                setDays(daysWithoutOff)
            }
        });

        const timeTableResponse = await fetch(`http://13.127.128.192:8081/timeTable/getAllTimeTable`);
        const timeTableData = await timeTableResponse.json();
        const timeTablemap = new Map();
        timeTableData.forEach(element => {
            timeTablemap.set(element.id, element);
        });

        const classTimeTableResponse = await fetch(`http://13.127.128.192:8081/class/getAllClassTimetableDetails?sectionId=${selectedStudent.sectionId}`);
        const classTimeTableData = await classTimeTableResponse.json();

        var tempTimeTableDataMap = new Map();
        daysWithoutOff.forEach(e => {
            tempTimeTableDataMap.set(e, []);
        })

        classTimeTableData.forEach((e, i) => {
            var timetableList = tempTimeTableDataMap.get(e.weekDaysNumber);
            if (timetableList == undefined) {
                timetableList = [];
            }
            timetableList.push({

                summerStartTime: timeTablemap.get(e.timetableId).summerStartTime,
                summerEndTime: timeTablemap.get(e.timetableId).summerEndTime,

                winterStartTime: timeTablemap.get(e.timetableId).winterStartTime,
                winterEndTime: timeTablemap.get(e.timetableId).winterEndTime,

                theoryTitle: e.isPractical ? "Practical" : 'Theory',
                practical: classSubjectMap.get(e.subjectId).isPractical,
                subject_name: subjectMap.get(e.subjectId),
                teacher_name: staffsMap.get(e.staffId)
            })

            tempTimeTableDataMap.set(e.weekDaysNumber, timetableList);
        })
        tempTimeTableDataMap.forEach((value) => {
            value.sort((a, b) => a.summerStartTime.localeCompare(b.summerStartTime));
        });


        var date = new Date();

        if (daysWithoutOff.indexOf(date.getDay()) !== -1) {
            setSelectedDay(date.getDay());
            setListOfPeriods(tempTimeTableDataMap.get(date.getDay()));
        } else {
            setSelectedDay(daysWithoutOff[0]);
            setListOfPeriods(tempTimeTableDataMap.get(daysWithoutOff[0]));
        }
        setTimeTableDataMap(tempTimeTableDataMap);
        setShowLoader(false);
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
                    <View style={{ flex: 1 }}><StudentHeader /></View>
                    <View style={{ flex: 6, justifyContent: "space-between" }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center', marginVertical: 10 }}>
                            {days.map((e, i) => (
                                <Pressable style={selectedDay == e ? { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#2E4AA0' } : { borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#F0BA19' }} onPress={() => { setSelectedDay(e); setListOfPeriods(timeTableDataMap.get(e)) }}><Text style={selectedDay == e ? { color: 'white', fontWeight: 'bold' } : { color: 'blue', fontWeight: 'bold' }}>{daysName.get(e).short}</Text></Pressable>
                            ))
                            }

                        </View>
                        {/* subjects */}
                        <ScrollView isVisible={!showLoader}>
                            {listOfPeriods.map((e, i) => (
                                <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                    <Image source={require('../../../../assets/logo/document.png')} style={{ height: 50, width: 50, resizeMode: 'stretch' }} />
                                    <View style={{ marginHorizontal: 40 }}>
                                        <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>{e.subject_name}</Text>
                                        <Text style={{ color: 'black' }}>{e.theoryTitle}</Text>
                                        <Text style={{ color: 'blue', fontWeight: 'bold' }}>{e.teacher_name}</Text>
                                        <Text style={{ color: 'black', fontWeight: 'bold' }}>S.T. :- {e.summerStartTime}-{e.summerEndTime}</Text>
                                        <Text style={{ color: 'black', fontWeight: 'bold' }}>W.T. :-  {e.winterStartTime}-{e.winterEndTime}</Text>
                                    </View>
                                </Pressable>
                            ))
                            }

                        </ScrollView>
                    </View>
                </View>
                <Loader message="Loading Time Table ......." showLoader={showLoader} />
            </SafeAreaView>
        </>
    );
}

export default TimeTable;