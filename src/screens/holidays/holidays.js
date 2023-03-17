import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

const Holidays = ({ navigation }) => {
    const data = useSelector((state)=>state)        
    const userData = data.session;
    const [session, setSession] = useState(userData.data);

    useEffect(() => {
        getStudentAttendenceByMonth();
    }, [])

    const [holidayList, setHolidayList] = useState([]);

    const getStudentAttendenceByMonth = () => {
        fetch(`http://13.127.128.192:8081/holiday/getAllHolidays?sessionYear=${session.id}`).then((res) => {
            res.json().then((data) => {
                if (data != '') {
                    setHolidayList(data);
                }
            })
        })
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: "space-between" }}>
                <View style={{ flex: 6, justifyContent: "space-between" }}>
                    <ScrollView>
                        {holidayList.map((holiday, i) => (
                            <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                <View style={{ marginHorizontal: 40 }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>{holiday.name}</Text>
                                    <Text style={{ color: 'black' }}>{holiday.holidayDate}</Text>
                                </View>
                            </Pressable>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Holidays;