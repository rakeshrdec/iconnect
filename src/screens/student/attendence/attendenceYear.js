import Icon from 'react-native-vector-icons/Entypo';
import { Avatar } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { monthMap } from '../../../models/data';

const AttendenceYear = ({ navigation }) => {
    useEffect(() => {
        getStudentAttendenceByMonth();
    }, [])

    const getStudentAttendenceByMonth = () => {
        fetch(`http://13.127.128.192:8081/student/getStudentAttendancesByStudentAndSession?studentId=1&startDate=2022-04-01&endDate=2023-03-31&sessionYear=2`).then((res) => {

            // fetch(`http://13.127.128.192:8081/student/getStudentAttendancesByStudentAndSession?studentId=${studentId}&startDate=${startDate}&endDate=${endDate}&sessionYear=${sessionYear}`).then((res) => {
            res.json().then((data) => {
                if (data != '') {
                    var atendanceDataMap = new Map();

                    console.log(monthMap);
                    data.map((d, i) => {
                        atendanceDataMap.set(d.month, {
                            absent: d.absent,
                            present: d.present,
                            totalWeekend: d.totalWeekend,
                            totalHolidays: d.totalHolidays,
                            month: monthMap.get(d.month).short +'-'+d.year,
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
            <View style={{ flex: 3, justifyContent: 'center', marginTop: -40 }}>
                {/* <Text style={{color:'white', fontSize:26, fontWeight:'bold',alignSelf:'center'}}>Home</Text> */}
                <View style={{ flex: 0.8, marginHorizontal: 20, borderRadius: 15, backgroundColor: 'white', }}>
                    <View style={{ flex: 1, backgroundColor: 'white', borderBottomWidth: 1, borderTopEndRadius: 15, borderTopStartRadius: 15, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20, alignItems: 'center' }}>
                        <Text style={{ color: 'darkblue' }}>Year of {year}</Text>
                        <Icon name="dots-three-horizontal" size={30} color='darkblue' onPress={() => { setYearToggle(!yearToggle) }} />
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'white', borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }}>
                        <Text style={{ color: 'darkblue' }}>Month</Text>
                        <View style={{ position: 'absolute', right: 5, flexDirection: 'row', }}>
                            <Text style={{ color: 'green', marginHorizontal: 5, width: 50, textAlign: 'center' }}>Present</Text>
                            <Text style={{ color: '#b942f5', marginHorizontal: 5, width: 50, textAlign: 'center' }}>W/F</Text>
                            <Text style={{ color: '#f58a42', marginHorizontal: 5, width: 50, textAlign: 'center' }}>P/H</Text>
                            <Text style={{ color: 'red', marginHorizontal: 5, width: 50, textAlign: 'center' }}>Absent</Text>
                        </View>
                    </View>

                    {months.map((e, i) => (
                        <View style={{ flex: 1, backgroundColor: 'white', borderBottomWidth: 1, paddingHorizontal: 10, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={{ color: 'darkblue' }}>{attendanceDataMap.get(e).month}</Text>
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
                            {/* <Pressable style={{justifyContent:'center', backgroundColor:'midnightblue', padding:10,borderRadius:15}}>
                            <Text style={{color:'white'}}>2018-1019</Text>
                        </Pressable>
                        <Pressable style={{justifyContent:'center', backgroundColor:'midnightblue', padding:10,borderRadius:15}}>
                            <Text style={{color:'white'}}>2018-1019</Text>
                        </Pressable>
                        <Pressable style={{justifyContent:'center', backgroundColor:'midnightblue', padding:10,borderRadius:15}}>
                            <Text style={{color:'white'}}>2018-1019</Text>
                        </Pressable> */}
                        </ScrollView>
                    </View> : <View />}

                </View>
            </View>

        </SafeAreaView>
    );
}

export default AttendenceYear;