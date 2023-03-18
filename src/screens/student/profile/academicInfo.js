import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

const AcademicInfo = () => {
    const data = useSelector((state) => state)
    const selectedStudentData = data.selectedStudentDetails;
    const [selectedStudent, setSelectedStudent] = useState(selectedStudentData.data);

    useEffect(() => {

    }, [])


    return (<SafeAreaView style={{ flex: 1 }}>
        <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Academic Information</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
            <Text style={{ color: 'black' }}>Class Name :</Text>
            <Text style={{ color: 'black' }}>{selectedStudent.className}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
            <Text style={{ color: 'black' }}>Section Name :</Text>
            <Text style={{ color: 'black' }}>{selectedStudent.sectionName}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
            <Text style={{ color: 'black' }}>Roll No. :</Text>
            <Text style={{ color: 'black' }}>{selectedStudent.rollNo}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
            <Text style={{ color: 'black' }}>SR. No.  :</Text>
            <Text style={{ color: 'black' }}>{selectedStudent.srNo}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
            <Text style={{ color: 'black' }}>Registration No. :</Text>
            <Text style={{ color: 'black' }}>{selectedStudent.enroll}</Text>
        </View>
    </SafeAreaView>);


}

export default AcademicInfo;