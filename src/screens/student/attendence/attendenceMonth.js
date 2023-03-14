import { Avatar } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
// import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import { Calendar } from "react-native-calendars";
import Icon from 'react-native-vector-icons/AntDesign';

import AttendenceYear from "./attendenceYear";
// import  Calendar from "react-native-calendars/src/calendar/index.js";
import AttendenceUpload from "./attendenceUpload";

const AttendenceMonth = ({ navigation }) => {
    const [showYearWiseAtt, setShowYearWiseAtt] = useState(false);
    const [totalPresent, setTotalPresent] = useState('0');
    const [totalAbsent, setTotalAbsent] = useState('0');
    const [totalHoliDays, setTotalHoliDays] = useState('0');
    const [totalWeekend, setTotalWeekend] = useState('0');

    const [presentDates, setPresentDates] = useState('')
    const [weekelyOffDates, setWeeklyOffDates] = useState('')
    const [holidaysDates, setHolidaysDates] = useState('')
    const [weeklyOff, setWeeklyOff] = useState(new Map());



    var [DateColor, setDateColor] = useState({
        // '2023-05-16': {selected: true, marked: true, selectedColor: 'lightgreen'},
        // '2023-02-16': {selected: true, marked: true, selectedColor: 'lightgreen'},
        // '2023-02-17': {selected: true, marked: true, selectedColor: 'lightgreen'},
        // '2023-02-11': {selected: true, marked: true, selectedColor: 'lightgreen'},
        // '2023-02-01': {selected: true, marked: true, selectedColor: 'red'},
        // '2023-02-02': {selected: true, marked: true, selectedColor: 'red'},
        // '2023-02-07': {selected: true, marked: true, selectedColor: 'red'},
        // '2023-02-05': {selected: true, marked: true, selectedColor: '#b942f5'},
        // '2023-03-08': {selected: true, marked: true, selectedColor: '#f58a42'},
        // '2023-05-17': {marked: true},
        // '2023-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
        // '2023-05-19': {disabled: true, disableTouchEvent: true}
    })


    // const studentList = [1,2,3];
    useEffect(() => {
        const month = new Date().getMonth() + 1;
        const studentId = 1;
        const sessionYear = 2;
        const year = new Date().getFullYear()
        getWeeklyOffFromServer(month, year);

        getAllHoliDays(month, year);
        getStudentAttendenceByMonth(month, year, studentId, sessionYear);
        getStudentPresentAttendence(month, year, studentId)
    }, []);

    useEffect(() => {
        setDateColor({ ...presentDates, ...holidaysDates, ...weekelyOffDates })
    }, [presentDates, weekelyOffDates, holidaysDates]);

    getWeeklyOffCalculation = (selectedMoth, selectedYear) => {
        var startdate = new Date(selectedYear, selectedMoth, 1);
        startdate.setDate(2);
        var enddate = new Date(selectedYear, selectedMoth + 1, 1);

        function getDefaultOffDays2(startdate, enddate) {
            const weekday = [6, 0, 1, 2, 3, 4, 5];
            var weekenddays = [];
            while (enddate >= startdate) {
                if (weeklyOff.get(weekday[startdate.getDay()])) {
                    var m = startdate.getMonth() + 1;
                    var d = startdate.getDate() - 1;
                    var years1 = startdate.getFullYear();
                    weekenddays.push(years1 + '-' +
                        (m < 10 ? '0' + m : m) + '-' +
                        (d < 10 ? '0' + d : d));
                }

                startdate.setDate(startdate.getDate() + 1);
            }
            return weekenddays;
        }

        var WeekelyOffDates = {}

        const allWeekelyOffDate = getDefaultOffDays2(startdate, enddate)
        allWeekelyOffDate.map((d, i) => {
            const weekOffDate = { [d]: { selected: true, marked: true, selectedColor: '#b942f5' } };
            WeekelyOffDates = { ...WeekelyOffDates, ...weekOffDate };
        });
        setTotalWeekend('0');
        setTotalWeekend(allWeekelyOffDate.length);
        setWeeklyOffDates(WeekelyOffDates);

    }



    getWeeklyOffFromServer = (month, year) => {
        fetch(`http://13.127.128.192:8081/utils/getAllWeeklyOff`).then((res) => {
            res.json().then((data) => {
                // console.log("data from api is ", (data))
                if (data != '') {
                    var weeklyOffMap = new Map();
                    data.map((element, i) => {
                        weeklyOffMap.set(element.weekDaysNumber, element.active);
                    })
                    setWeeklyOff(weeklyOffMap);
                    getWeeklyOffCalculation(month - 1, year);
                }
            })
        })

    }

    getAllHoliDays = (monthVal, year) => {
        fetch(`http://13.127.128.192:8081/holiday/findAllHolidaysByMonthAndYear?month=${monthVal}&year=${year}`).then((res) => {
            res.json().then((data) => {
                // console.log("data from api is ", (data))
                if (data != '') {
                    var holidaysDates = {}
                    data.map((d, i) => {
                        const holiday = { [d.holidayDate]: { selected: true, marked: true, selectedColor: '#f58a42' } };
                        holidaysDates = { ...holidaysDates, ...holiday };
                    });
                    console.log(data.length);
                    console.log(holidaysDates);

                    setTotalHoliDays('0');
                    setTotalHoliDays(data.length);
                    setHolidaysDates(holidaysDates);
                }
            })
        })

    }

    const getStudentPresentAttendence = (monthVal, selectedYear, studentIdVal) => {
        var studentId = studentIdVal;
        const daysInMonth = getDays(selectedYear, monthVal);

        var startDate = selectedYear + '-' + (monthVal < 10 ? '0' + monthVal : monthVal) + '-01';
        var endDate = selectedYear + '-' + (monthVal < 10 ? '0' + monthVal : monthVal) + '-' + daysInMonth;


        var presentDates = {}
        fetch(`http://13.127.128.192:8081/student/getStudentApprovedAttendances?studentId=${studentId}&startDate=${startDate}&endDate=${endDate}`).then((res) => {
            res.json().then((data) => {
                data.map((e, i) => {
                    const presentDate = { [e.attendanceDate]: { selected: true, marked: true, selectedColor: 'lightgreen' } };
                    presentDates = { ...presentDates, ...presentDate };
                })
                setPresentDates(presentDates);
            })
        })
    }


    const getDays = (year, month) => {
        return new Date(year, month, 0).getDate();
    };

    const getStudentAttendenceByMonth = (monthVal, selectedYear, studentIdVal, sessionYearVal) => {
        // console.log("function ais ready to trigerr");

        var studentId = studentIdVal
        var sessionYear = sessionYearVal

        setTotalPresent('0');
        setTotalAbsent('0');


        const daysInMonth = getDays(selectedYear, monthVal);

        var startDate = selectedYear + '-' + (monthVal < 10 ? '0' + monthVal : monthVal) + '-01';
        var endDate = selectedYear + '-' + (monthVal < 10 ? '0' + monthVal : monthVal) + '-' + daysInMonth;

        fetch(`http://13.127.128.192:8081/student/getStudentAttendancesByStudentAndSession?studentId=${studentId}&startDate=${startDate}&endDate=${endDate}&sessionYear=${sessionYear}`).then((res) => {
            res.json().then((data) => {
                // console.log("data from api is ", typeof(data))
                if (data != '') {
                    // console.log("we hvae some data hitting api")
                    setTotalPresent(data[0].present);
                    setTotalAbsent(data[0].absent);
                }
            })
        })

    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

            {showYearWiseAtt ?
                // <View style={{flex:1}}><AttendenceYear />
                <View style={{ flex: 1 }}><AttendenceUpload />
                </View> :
                <View>
                    {/* <Calendar></Calendar> */}
                    <Calendar
                        onMonthChange={(e) => {
                            var studentId = 1
                            var sessionYear = 2
                            setDateColor({})
                            getStudentAttendenceByMonth(e.month, e.year, studentId, sessionYear);
                            getWeeklyOffCalculation(e.month - 1, e.year);
                            getAllHoliDays(e.month, e.year);
                            getStudentPresentAttendence(e.month, e.year, studentId)
                        }}
                        style={{ margin: 20, borderRadius: 15 }}
                        markedDates={DateColor}
                    />
                    {/* </View> */}
                    {/* present absent box */}
                    <View style={{ flexDirection: 'row', height: 90, justifyContent: 'space-around' }}>
                        <View style={{ flex: 1, borderRadius: 20, margin: 10, backgroundColor: 'lightgreen', justifyContent: 'space-around' }}>
                            <Text style={{ textAlign: 'center', color: 'white' }}>Total Present</Text>
                            <View style={{ height: 40, width: 40, backgroundColor: 'white', alignSelf: 'center', borderRadius: 150, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'green' }}>{totalPresent}</Text>
                            </View>

                        </View>
                        <View style={{ flex: 1, borderRadius: 20, margin: 10, backgroundColor: 'red', justifyContent: 'space-around' }}>
                            <Text style={{ textAlign: 'center', color: 'white' }}>Total Absent</Text>
                            <View style={{ height: 40, width: 40, backgroundColor: 'white', alignSelf: 'center', borderRadius: 150, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'red' }}>{totalAbsent}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', height: 90, justifyContent: 'space-around' }}>
                        <View style={{ flex: 1, borderRadius: 20, margin: 10, backgroundColor: '#f58a42', justifyContent: 'space-around' }}>
                            <Text style={{ textAlign: 'center', color: 'white' }}>Total Holidays</Text>
                            <View style={{ height: 40, width: 40, backgroundColor: 'white', alignSelf: 'center', borderRadius: 150, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'green' }}>{totalHoliDays}</Text>
                            </View>

                        </View>
                        <View style={{ flex: 1, borderRadius: 20, margin: 10, backgroundColor: '#b942f5', justifyContent: 'space-around' }}>
                            <Text style={{ textAlign: 'center', color: 'white' }}>Total W/F</Text>
                            <View style={{ height: 40, width: 40, backgroundColor: 'white', alignSelf: 'center', borderRadius: 150, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'red' }}>{totalWeekend}</Text>
                            </View>
                        </View>
                    </View>
                    {/* yearly component */}
                    {/* <Pressable 
        onPress={()=>{setShowYearWiseAtt(true)}}
        style={{elevation:20, backgroundColor:'lightyellow',margin:20, height:40,justifyContent:'center',borderRadius:25, flexDirection:'row'}}>
            <Text style={{color:'darkblue', textAlign:'center',alignSelf:'center'}}>check attendence yearwise</Text>
            <Icon name="rightcircle" size={35} color="#0c123b" style={{position:'absolute',right:0, alignSelf:'center'}} />
        </Pressable> */}
                </View>
            }
        </SafeAreaView>
    );
}

export default AttendenceMonth;