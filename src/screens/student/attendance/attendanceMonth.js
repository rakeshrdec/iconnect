import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, ActivityIndicator } from "react-native";
import { Calendar } from "react-native-calendars";
import { useSelector } from "react-redux";
import Loader from "../../homepage/loader";

const AttendanceMonth = ({ navigation }) => {

    const [showLoader, setShowLoader] = useState(true)

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
        var date = new Date();
        getWeeklyOffFromServer(date.getMonth() + 1, date.getFullYear())
    }, []);

    useEffect(() => {

        setDateColor({ ...presentDates, ...holidaysDates, ...weekelyOffDates })
    }, [presentDates, weekelyOffDates, holidaysDates]);

    async function getWeeklyOffFromServer(month, year) {
        const weeklyOffResponse = await fetch(`http://13.127.128.192:8085/utils/getAllWeeklyOff`);
        const weeklyOffData = await weeklyOffResponse.json();
        const weeklyOffMap = new Map();
        weeklyOffData.forEach(element => {
            weeklyOffMap.set(element.weekDaysNumber, element.active);
        });
        setWeeklyOff(weeklyOffMap);
        getTimeTables(month, year);
    }


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

    async function getTimeTables(month, year) {
        getWeeklyOffCalculation(month - 1, year);

        const holidaysResponse = await fetch(`http://13.127.128.192:8085/holiday/findAllHolidaysByMonthAndYear?month=${month}&year=${year}`);
        const holidaysData = await holidaysResponse.json();
        if (holidaysData != '') {
            var holidaysDates = {}
            holidaysData.map((d, i) => {
                const holiday = { [d.holidayDate]: { selected: true, marked: true, selectedColor: '#f58a42' } };
                holidaysDates = { ...holidaysDates, ...holiday };
            });
            setHolidaysDates(holidaysDates);
        }

        setTotalPresent('0');
        setTotalAbsent('0');
        setTotalHoliDays('0');
        setTotalWeekend('0');
        const daysInMonth = getDays(year, month);

        var startDate = year + '-' + (month < 10 ? '0' + month : month) + '-01';
        var endDate = year + '-' + (month < 10 ? '0' + month : month) + '-' + daysInMonth;

        const studentAttendanceResponse = await fetch(`http://13.127.128.192:8085/student/getStudentAttendancesByStudentAndSession?studentId=${selectedStudent.id}&startDate=${startDate}&endDate=${endDate}&sessionYear=${session.id}`);
        const studentAttendanceData = await studentAttendanceResponse.json();
        if (studentAttendanceData != '') {
            setTotalWeekend(studentAttendanceData[0].totalWeekend);
            setTotalHoliDays(studentAttendanceData[0].totalHolidays);
            setTotalPresent(studentAttendanceData[0].present);
            setTotalAbsent(studentAttendanceData[0].absent);
        }

        var presentDates = {}
        const studentApprovedAttendanceResponse = await fetch(`http://13.127.128.192:8085/student/getStudentApprovedAttendances?studentId=${selectedStudent.id}&startDate=${startDate}&endDate=${endDate}`);
        const studentApprovedAttendanceData = await studentApprovedAttendanceResponse.json();
        studentApprovedAttendanceData.map((e, i) => {
            var presentDate = { [e.attendanceDate]: { selected: true, marked: true, selectedColor: 'lightgreen' } };
            presentDates = { ...presentDates, ...presentDate };
        })
        setPresentDates(presentDates);
        setShowLoader(false);
    }

    const getDays = (year, month) => {
        return new Date(year, month, 0).getDate();
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View>
                <Calendar
                    onMonthChange={(e) => {
                        setShowLoader(true);
                        setDateColor({})
                        getTimeTables(e.month, e.year);
                    }}
                    style={{ margin: 20, borderRadius: 15 }}
                    markedDates={DateColor}
                />

                {/* present absent box */}
                <View style={{ flexDirection: 'row', height: 90, justifyContent: 'space-around' }}>
                    <View style={{ flex: 1, borderRadius: 20, margin: 10, backgroundColor: 'lightgreen', justifyContent: 'space-around' }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: "bold", fontSize: 14 }}>Total Present</Text>
                        <View style={{ height: 40, width: 40, backgroundColor: 'white', alignSelf: 'center', borderRadius: 150, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'green', fontWeight: "bold" }}>{totalPresent}</Text>
                        </View>

                    </View>
                    <View style={{ flex: 1, borderRadius: 20, margin: 10, backgroundColor: 'red', justifyContent: 'space-around' }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: "bold", fontSize: 14 }}>Total Absent</Text>
                        <View style={{ height: 40, width: 40, backgroundColor: 'white', alignSelf: 'center', borderRadius: 150, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'red', fontWeight: "bold" }}>{totalAbsent}</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', height: 90, justifyContent: 'space-around' }}>
                    <View style={{ flex: 1, borderRadius: 20, margin: 10, backgroundColor: '#f58a42', justifyContent: 'space-around' }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: "bold", fontSize: 14 }}>Total Holidays</Text>
                        <View style={{ height: 40, width: 40, backgroundColor: 'white', alignSelf: 'center', borderRadius: 150, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'green', fontWeight: "bold" }}>{totalHoliDays}</Text>
                        </View>

                    </View>
                    <View style={{ flex: 1, borderRadius: 20, margin: 10, backgroundColor: '#b942f5', justifyContent: 'space-around' }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: "bold", fontSize: 14 }}>Total W/F</Text>
                        <View style={{ height: 40, width: 40, backgroundColor: 'white', alignSelf: 'center', borderRadius: 150, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'red', fontWeight: "bold" }}>{totalWeekend}</Text>
                        </View>
                    </View>
                </View>
                <Loader message="Loading Attendance ......." showLoader={showLoader} />
            </View>


        </SafeAreaView>
    );
}

export default AttendanceMonth;