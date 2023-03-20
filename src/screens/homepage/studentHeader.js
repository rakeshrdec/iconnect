import React, { useEffect, useState } from "react";
import { View, Text, Image  } from "react-native";
import { useSelector } from "react-redux";

const StudentHeader = () => {

    const data = useSelector((state) => state)
    const selectedStudentData = data.selectedStudentDetails;
    const [selectedStudent, setSelectedStudent] = useState(selectedStudentData.data);

    useEffect(() => {

    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: 'lightgray', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            {selectedStudent.uploadImg === null ? <Image source={require('../../../assets/logo/male_student_avatar.png')} style={{ width: 70, height: 70, resizeMode: 'stretch', borderRadius: 150 }} /> : <Image source={{ uri: 'http://13.127.128.192:8081/' + selectedStudent.uploadImg }} style={{ width: 70, height: 70, resizeMode: 'stretch', borderRadius: 150 }} />}

            <View style={{}}>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>{selectedStudent.name}</Text>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>{selectedStudent.className}</Text>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>{selectedStudent.sectionName}</Text>
            </View>
        </View>
    );

}

export default StudentHeader;