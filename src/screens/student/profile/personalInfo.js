import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const PersonalInfo = () => {

    const data = useSelector((state) => state)
    const selectedStudentData = data.selectedStudentDetails;
    const [selectedStudent, setSelectedStudent] = useState(selectedStudentData.data);

    useEffect(() => {

    }, [])


    return (<SafeAreaView style={{ flex: 1 }}>
        <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Personal Information</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
            <Text style={{ color: 'black' }}>Name :</Text>
            <Text style={{ color: 'black' }}>{selectedStudent.name}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
            <Text style={{ color: 'black' }}>DOB :</Text>
            <Text style={{ color: 'black' }}>{selectedStudent.dob}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
            <Text style={{ color: 'black' }}>Father Name :</Text>
            <Text style={{ color: 'black' }}>{selectedStudent.fatherName}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
            <Text style={{ color: 'black' }}>Mother Name :</Text>
            <Text style={{ color: 'black' }}>{selectedStudent.motherName}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
            <Text style={{ color: 'black' }}>Gender :</Text>
            <Text style={{ color: 'black' }}>{selectedStudent.genderName}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
            <Text style={{ color: 'black' }}>Category :</Text>
            <Text style={{ color: 'black' }}>{selectedStudent.categoryName}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
            <Text style={{ color: 'black' }}>Mobile :</Text>
            <Text style={{ color: 'black' }}>{selectedStudent.mobile}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
            <Text style={{ color: 'black' }}>Emergency Mobile :</Text>
            <Text style={{ color: 'black' }}>{selectedStudent.emergencyMobile}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
            <Text style={{ color: 'black' }}>Email :</Text>
            <Text style={{ color: 'black' }}>{selectedStudent.email}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
            <Text style={{ color: 'black' }}>Address :</Text>
            <Text style={{ color: 'black' }}>{selectedStudent.address}</Text>
        </View>
    </SafeAreaView>);

}

export default PersonalInfo;