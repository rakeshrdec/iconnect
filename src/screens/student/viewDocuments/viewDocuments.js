import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable, Dimensions, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')
import { useSelector } from "react-redux";
import StudentHeader from "../../homepage/studentHeader";


const ViewDocuments = ({ navigation }) => {

    const [studentDocuments, setStudentDocuments] = useState([]);
    const data = useSelector((state) => state)

    const selectedStudentData = data.selectedStudentDetails;
    const [selectedStudent, setSelectedStudent] = useState(selectedStudentData.data);

    useEffect(() => {
        getStudentAttendanceByMonth();
    }, [])

    const getStudentAttendanceByMonth = () => {
        fetch(`http://13.127.128.192:8081/student/getStudentDocuments?studentId=${selectedStudent.id}`).then((res) => {
            res.json().then((data) => {
                console.log(data,);
                if (data != '') {
                    setStudentDocuments(data);
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
                    {/* USER PROFILE */}
                    <View style={{ flex: 1 }}><StudentHeader /></View>
                    <View style={{ flex: 6, justifyContent: "space-between" }}>
                        <ScrollView>
                            {studentDocuments.map((studentDocument, i) => (
                              
                                <Pressable
                                    style={{ elevation: 15, width: '90%', alignSelf: 'center', borderRadius: 5, margin: 10, paddingTop: 5, paddingBottom: 5, flex: 1, backgroundColor: 'white', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>

                                    <View style={{}}>
                                        <Text style={{ color: '#2E4AA0', fontSize: 16, fontWeight: 'bold', right: 0 }}>{i + 1}. {studentDocument.documentName}</Text>
                                    </View>
                                    <Image source={require('../../../../assets/logo/download.png')} style={{ height: 50, width: 50 }} />

                                    {/* <Text style={{ color: 'black' }}>{'http://13.127.128.192:8081/' + studentDocument.uploadDocument}</Text> */}
                                </Pressable>

                            ))}
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}

export default ViewDocuments;