import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable, Dimensions, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

const Holidays = ({ navigation }) => {
    const data = useSelector((state) => state)
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
                        <ScrollView>
                            {holidayList.map((holiday, i) => (
                                <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                    <View style={{ marginHorizontal: 40 }}>
                                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>{holiday.name}</Text>
                                        <Text style={{ color: 'black', fontSize: 15, marginLeft: 15 }}>{holiday.holidayDate}</Text>
                                    </View>
                                </Pressable>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}

export default Holidays;