import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const ViewDocuments = ({ navigation }) => {
    useEffect(() => {
        getStudentAttendenceByMonth(1);
    }, [])

    const [studentDocuments, setStudentDocuments] = useState([]);

    const getStudentAttendenceByMonth = (studentId) => {
        fetch(`http://13.127.128.192:8081/student/getStudentDocuments?studentId=${studentId}`).then((res) => {
            res.json().then((data) => {
                console.log(data);
                if (data != '') {
                    setStudentDocuments(data);
                }
            })
        })
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: "space-between" }}>
                <View style={{ flex: 6, justifyContent: "space-between" }}>
                    <ScrollView>
                        {studentDocuments.map((studentDocument, i) => (
                            <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                <View style={{ marginHorizontal: 40 }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>{studentDocument.documentName}</Text>
                                    <Text style={{ color: 'black' }}>{studentDocument.uploadDocument}</Text>
                                </View>
                            </Pressable>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default ViewDocuments;