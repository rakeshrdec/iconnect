import Icon from 'react-native-vector-icons/Entypo';
import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable, Image, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { monthMap } from '../../../models/data';
import { useSelector } from "react-redux";
import StudentHeader from "../../homepage/studentHeader";
import Loader from "../../homepage/loader";
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const AttendanceYear = ({ navigation }) => {
    const data = useSelector((state) => state)
    const sessionData = data.session;
    const [session, setSession] = useState(sessionData.data);
    const selectedStudentData = data.selectedStudentDetails;
    const [selectedStudent, setSelectedStudent] = useState(selectedStudentData.data);
    const [showLoader, setShowLoader] = useState(true)



    useEffect(() => {
        getStudentAttendanceByMonth();
    }, [])

    const getStudentAttendanceByMonth = () => {

        fetch(`http://13.127.128.192:8082/student/getStudentAttendancesByStudentAndSession?studentId=${selectedStudent.id}&startDate=${session.fromDate}&endDate=${session.toDate}&sessionYear=${session.id}`).then((res) => {
            res.json().then((data) => {
                if (data != '') {
                    var atendanceDataMap = new Map();

                    data.map((d, i) => {
                        atendanceDataMap.set(d.month, {
                            absent: d.absent,
                            present: d.present,
                            totalWeekend: d.totalWeekend,
                            totalHolidays: d.totalHolidays,
                            month: monthMap.get(d.month).short + '-' + d.year,
                            year: d.year
                        });

                    })
                    setAttendanceDataMap(atendanceDataMap);
                    setMonths([3, 2, 1, 12, 11, 10, 9, 8, 7, 6, 5, 4]);
                    setShowLoader(false);
                }
            })
        })

    }

    const [yearToggle, setYearToggle] = useState(false);
    const [months, setMonths] = useState([]);
    const [attendanceDataMap, setAttendanceDataMap] = useState({});

    const [year, setYear] = useState(session.name)


    const createPDF = async (e) => {
        let p = 101
        // document.getElementById('junePresent').innerHTML = presentCount[0];
        // document.getElementById('june').innerText  = "Rakesh kumar mishra";

        // Alert.alert("clicked")
        let options = {
            html: `<html>\
                    <style>\
            th,td {\
            border:1px solid black;\
            }\
            </style>\
            <head><title>Page Title</title></head><body><h1 style="color:red">Attendence Of Compelte Year</h1><p></p>\
                    <table>\
            <tr>\
                <th>Month</th>\
                <th>Present</th>\
                <th>Absent</th>\
                <th>Public Holiday</th>\
                <th>Weekly off</th>\
            </tr>\
            <tr>\
                <td>June</td>\
                <td></td>\
                <td>${p}</td>\
                <td></td>\
                <td>${p}</td>\
            </tr>\
            </table>\
            </body></html>`,
            fileName: 'test',
            directory: 'Documents',
        };

        let file = await RNHTMLtoPDF.convert(options)
        alert(file.filePath);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* USER PROFILE */}
            <View style={{ flex: 1 }}><StudentHeader /></View>
            <View style={{ flex: 6, justifyContent: 'center', marginTop: -40 }}>
                <View style={{ flex: 0.8, marginHorizontal: 5, borderRadius: 15, backgroundColor: 'white', }}>
                    <View style={{ flex: 1, backgroundColor: 'white', borderBottomWidth: 1, borderTopEndRadius: 15, borderTopStartRadius: 15, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20, alignItems: 'center' }}>
                        <Text style={{ color: 'darkblue', fontWeight: "bold" }}>Year of {year}</Text>
                        <Icon name="download" size={24} color="darkblue" onPress={() => {
                            createPDF(1001)
                        }} />
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'white', borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }}>
                        <Text style={{ color: 'darkblue', fontSize: 15, fontWeight: "bold" }}>Month</Text>
                        <View style={{ position: 'absolute', right: 5, flexDirection: 'row', }}>
                            <Text style={{ color: 'green', marginHorizontal: 5, width: 50, textAlign: 'center', fontSize: 14, fontWeight: "bold" }}>Present</Text>
                            <Text style={{ color: '#b942f5', marginHorizontal: 5, width: 50, textAlign: 'center', fontSize: 14, fontWeight: "bold" }}>W/F</Text>
                            <Text style={{ color: '#f58a42', marginHorizontal: 5, width: 50, textAlign: 'center', fontSize: 14, fontWeight: "bold" }}>P/H</Text>
                            <Text style={{ color: 'red', marginHorizontal: 5, width: 50, textAlign: 'center', fontSize: 14, fontWeight: "bold" }}>Absent</Text>
                        </View>
                    </View>

                    {months.map((e, i) => (
                        <View style={{ flex: 1, backgroundColor: 'white', borderBottomWidth: 1, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, paddingHorizontal: 10, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={{ color: 'darkblue', fontWeight: "bold" }}>{attendanceDataMap.get(e).month}</Text>
                            <View style={{ position: 'absolute', right: 5, flexDirection: 'row', }}>
                                <Text style={{ color: 'green', marginHorizontal: 5, width: 50, textAlign: 'center' }}>{attendanceDataMap.get(e).present}</Text>
                                <Text style={{ color: '#b942f5', marginHorizontal: 5, width: 50, textAlign: 'center' }}>{attendanceDataMap.get(e).totalWeekend}</Text>
                                <Text style={{ color: '#f58a42', marginHorizontal: 5, width: 50, textAlign: 'center' }}>{attendanceDataMap.get(e).totalHolidays}</Text>
                                <Text style={{ color: 'red', marginHorizontal: 5, width: 50, textAlign: 'center' }}>{attendanceDataMap.get(e).absent}</Text>
                            </View>
                        </View>
                    ))}

                    {yearToggle ? <View style={{ height: 200, width: 150, backgroundColor: 'midnightblue', position: 'absolute', top: 30, right: 10, borderRadius: 15 }}>
                        <ScrollView style={{ backgroundColor: 'white', height: 130, width: 100, margin: 10 }}>
                            <Pressable style={{ justifyContent: 'center', backgroundColor: 'midnightblue', padding: 10, borderRadius: 15 }}
                                onPress={() => {
                                    setYearToggle(false)
                                    setYear('2022-2023')
                                }}
                            >
                                <Text style={{ color: 'white' }}>2022-2023</Text>
                            </Pressable>
                            <Pressable style={{ justifyContent: 'center', backgroundColor: 'midnightblue', padding: 10, borderRadius: 15 }}
                                onPress={() => {
                                    setYearToggle(false)
                                    setYear('2021-2022')
                                }}
                            >
                                <Text style={{ color: 'white' }}>2021-2022</Text>
                            </Pressable>
                        </ScrollView>
                    </View> : <View />}

                </View>
            </View>
            <Loader message="Loading Attendance ......." showLoader={showLoader} />
        </SafeAreaView>
    );
}

export default AttendanceYear;