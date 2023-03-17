import { Avatar } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Calendar } from "react-native-calendars";
import Icon from 'react-native-vector-icons/AntDesign';

import AttendenceYear from "./attendenceYear";
import AttendenceUpload from "./attendenceUpload";
import { useSelector } from "react-redux";

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
    })

    const data = useSelector((state) => state)
    const sessionData = data.session;
    const [session, setSession] = useState(sessionData.data);
    const selectedStudentData = data.selectedStudentDetails;
    const [selectedStudent, setSelectedStudent] = useState(selectedStudentData.data);

    useEffect(() => {
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear()
        getWeeklyOffFromServer(month, year);

        getAllHoliDays(month, year);
        getStudentAttendenceByMonth(month, year);
        getStudentPresentAttendence(month, year)
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

        setWeeklyOffDates(WeekelyOffDates);

    }



    getWeeklyOffFromServer = (month, year) => {
        fetch(`http://13.127.128.192:8081/utils/getAllWeeklyOff`).then((res) => {
            res.json().then((data) => {
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
                if (data != '') {
                    var holidaysDates = {}
                    data.map((d, i) => {
                        const holiday = { [d.holidayDate]: { selected: true, marked: true, selectedColor: '#f58a42' } };
                        holidaysDates = { ...holidaysDates, ...holiday };
                    });
                    setHolidaysDates(holidaysDates);
                }
            })
        })

    }

    const getStudentPresentAttendence = (monthVal, selectedYear) => {
        const daysInMonth = getDays(selectedYear, monthVal);

        var startDate = selectedYear + '-' + (monthVal < 10 ? '0' + monthVal : monthVal) + '-01';
        var endDate = selectedYear + '-' + (monthVal < 10 ? '0' + monthVal : monthVal) + '-' + daysInMonth;


        var presentDates = {}
        fetch(`http://13.127.128.192:8081/student/getStudentApprovedAttendances?studentId=${selectedStudent.id}&startDate=${startDate}&endDate=${endDate}`).then((res) => {
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

    const getStudentAttendenceByMonth = (monthVal, selectedYear) => {

        setTotalPresent('0');
        setTotalAbsent('0');
        setTotalHoliDays('0');
        setTotalWeekend('0');
        const daysInMonth = getDays(selectedYear, monthVal);

        var startDate = selectedYear + '-' + (monthVal < 10 ? '0' + monthVal : monthVal) + '-01';
        var endDate = selectedYear + '-' + (monthVal < 10 ? '0' + monthVal : monthVal) + '-' + daysInMonth;

        fetch(`http://13.127.128.192:8081/student/getStudentAttendancesByStudentAndSession?studentId=${selectedStudent.id}&startDate=${startDate}&endDate=${endDate}&sessionYear=${session.id}`).then((res) => {
            res.json().then((data) => {
                if (data != '') {
                    setTotalWeekend(data[0].totalWeekend);
                    setTotalHoliDays(data[0].totalHolidays);
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
                            setDateColor({})
                            getStudentAttendenceByMonth(e.month, e.year);
                            getWeeklyOffCalculation(e.month - 1, e.year);
                            getAllHoliDays(e.month, e.year);
                            getStudentPresentAttendence(e.month, e.year)
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