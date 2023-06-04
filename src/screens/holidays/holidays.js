import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import Loader from "../homepage/loader";
import BackgroundScreen from "../homepage/backgroundScreen";


const Holidays = ({ navigation }) => {
    const data = useSelector((state) => state)
    const userData = data.session;
    const [session, setSession] = useState(userData.data);
    const [showLoader, setShowLoader] = useState(true)

    useEffect(() => {
        getHolidays();
    }, [])

    const [holidayList, setHolidayList] = useState([]);

    const getHolidays = () => {
        fetch(`http://13.127.128.192:8081/holiday/getAllHolidays?sessionYear=${session.id}`).then((res) => {
            res.json().then((data) => {
                if (data != '') {
                    setHolidayList(data);
                }

                setShowLoader(false);
            })
        })
    }

    return (
        <>

            <BackgroundScreen />

            <SafeAreaView style={{ flex: 1, position: 'absolute', width: '100%', height: '100%' }}>
                <View style={{ flex: 1, justifyContent: "space-between" }}>
                    <View style={{ flex: 6, justifyContent: "space-between" }}>
                        <ScrollView>
                            {holidayList.map((holiday, i) => (
                                <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                    <View style={{ marginHorizontal: 40 }}>
                                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>{holiday.name}</Text>
                                        <Text style={{ color: 'black', fontSize: 12, marginLeft: 15 }}>{holiday.holidayDate}</Text>
                                    </View>
                                </Pressable>
                            ))}
                        </ScrollView>
                    </View>
                </View>
                <Loader message="Loading Holidays ......." showLoader={showLoader} />
            </SafeAreaView>
        </>
    );
}

export default Holidays;