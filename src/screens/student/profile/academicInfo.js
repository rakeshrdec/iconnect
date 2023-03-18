import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Dimensions, ScrollView } from "react-native";
import { useSelector } from "react-redux";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')


const AcademicInfo = () => {
    const data = useSelector((state) => state)
    const selectedStudentData = data.selectedStudentDetails;
    const [selectedStudent, setSelectedStudent] = useState(selectedStudentData.data);

    useEffect(() => {

    }, [])


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
            <ScrollView style={{ flex: 1, position: 'absolute', width: '100%', height: '100%' }}>
                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Academic Information</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}>Class Name :</Text>
                    <Text style={{ color: 'white' }}>{selectedStudent.className}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}>Section Name :</Text>
                    <Text style={{ color: 'white' }}>{selectedStudent.sectionName}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}>Roll No. :</Text>
                    <Text style={{ color: 'white' }}>{selectedStudent.rollNo}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}>SR. No. :</Text>
                    <Text style={{ color: 'white' }}>{selectedStudent.srNo}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}>Registration No. :</Text>
                    <Text style={{ color: 'white' }}>{selectedStudent.enroll}</Text>
                </View>
            </ScrollView>
        </>);


}

export default AcademicInfo;