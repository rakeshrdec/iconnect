import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { useSelector } from "react-redux";

const StudentHeader = () => {

    const data = useSelector((state) => state)
    const selectedStudentData = data.selectedStudentDetails;
    const [selectedStudent, setSelectedStudent] = useState(selectedStudentData.data);

    return (
        <View style={{ height: 100, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', borderRadius: 10 }}>
            {selectedStudent.uploadImg === null ? <Image source={require('../../../assets/logo/male_student_avatar.png')} style={{ width: 70, height: 70, resizeMode: 'stretch', borderRadius: 150 }} /> : <Image source={{ uri: 'http://13.127.128.192:8082/' + selectedStudent.uploadImg }} style={{ width: 70, height: 70, resizeMode: 'stretch', borderRadius: 150 }} />}
            <View style={{}}>
                <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>{selectedStudent.name}</Text>
                <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>{selectedStudent.className}</Text>
                <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>{selectedStudent.sectionName}</Text>
            </View>
        </View>
    );

}

export default StudentHeader;