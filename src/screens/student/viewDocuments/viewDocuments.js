import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";





const ViewDocuments = ({ navigation }) => {

    const [studentDocuments, setStudentDocuments] = useState([]);
    const data = useSelector((state) => state)
    const sessionData = data.session;
    const [session, setSession] = useState(sessionData.data);
    const selectedStudentData = data.selectedStudentDetails;
    const [selectedStudent, setSelectedStudent] = useState(selectedStudentData.data);


    useEffect(() => {
        getStudentAttendenceByMonth();
    }, [])



    const getStudentAttendenceByMonth = () => {
        fetch(`http://13.127.128.192:8081/student/getStudentDocuments?studentId=${selectedStudent.id}`).then((res) => {
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