import Icon from 'react-native-vector-icons/Entypo';
import { Avatar } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { monthMap } from '../../../models/data';
import { useSelector } from "react-redux";
import StudentHeader from "../../homepage/studentHeader";

const AttendenceYear = ({ navigation }) => {
    const data = useSelector((state) => state)
    const sessionData = data.session;
    const [session, setSession] = useState(sessionData.data);
    const selectedStudentData = data.selectedStudentDetails;
    const [selectedStudent, setSelectedStudent] = useState(selectedStudentData.data);


    useEffect(() => {
        getStudentAttendenceByMonth();
    }, [])

    const getStudentAttendenceByMonth = () => {

        fetch(`http://13.127.128.192:8081/student/getStudentAttendancesByStudentAndSession?studentId=${selectedStudent.id}&startDate=${session.fromDate}&endDate=${session.toDate}&sessionYear=${session.id}`).then((res) => {
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
                }
            })
        })

    }

    const [yearToggle, setYearToggle] = useState(false);
    const [months, setMonths] = useState([]);
    const [attendanceDataMap, setAttendanceDataMap] = useState({});

    const [year, setYear] = useState('2022-2023')
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* USER PROFILE */}
            <View style={{ flex: 1 }}><StudentHeader /></View>
            <View style={{ flex: 6, justifyContent: 'center', marginTop: -40 }}>
                {/* <Text style={{color:'white', fontSize:26, fontWeight:'bold',alignSelf:'center'}}>Home</Text> */}
                <View style={{ flex: 0.8, marginHorizontal: 20, borderRadius: 15, backgroundColor: 'white', }}>
                    <View style={{ flex: 1, backgroundColor: 'white', borderBottomWidth: 1, borderTopEndRadius: 15, borderTopStartRadius: 15, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20, alignItems: 'center' }}>
                        <Text style={{ color: 'darkblue', fontWeight: "bold" }}>Year of {year}</Text>
                        <Icon name="dots-three-horizontal" size={30} color='darkblue' onPress={() => { setYearToggle(!yearToggle) }} />
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'white', borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }}>
                        <Text style={{ color: 'darkblue', fontSize: 15, fontWeight: "bold" }}>Month</Text>
                        <Text style={{ color: 'darkblue', fontSize: 15, fontWeight: "bold", textAlign: 'center', marginLeft: 40 }}>Present</Text>
                        <Text style={{ color: 'darkblue', fontSize: 15, fontWeight: "bold" }}>W/F</Text>
                        <Text style={{ color: 'darkblue', fontSize: 15, fontWeight: "bold" }}>P/H</Text>
                        <Text style={{ color: 'darkblue', fontSize: 15, fontWeight: "bold" }}>Absent</Text>

                        {/* <Text style={{ color: 'green',  width: 50, textAlign: 'center',fontSize: 15, fontWeight: "bold" }}>Present</Text> */}

                        {/* <View style={{ position: 'absolute', right: 0, flexDirection: 'row', }}>
                            <Text style={{ color: '#b942f5', marginHorizontal: 5, width: 50, textAlign: 'center',fontSize: 15, fontWeight: "bold" }}>W/F</Text>
                            <Text style={{ color: '#f58a42', marginHorizontal: 5, width: 50, textAlign: 'center',fontSize: 15, fontWeight: "bold" }}>P/H</Text>
                            <Text style={{ color: 'red', marginHorizontal: 5, width: 50, textAlign: 'center',fontSize: 15, fontWeight: "bold" }}>Absent</Text>
                        </View> */}
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

        </SafeAreaView>
    );
}

export default AttendenceYear;