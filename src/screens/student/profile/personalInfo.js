import React, { useEffect, useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

import { ScrollView } from "react-native-gesture-handler";

const PersonalInfo = () => {

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
            <SafeAreaView style={{ flex: 1, position: 'absolute', width: '100%', height: '100%' }}>
                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Personal Information</Text>

                <ScrollView>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', height: 40, flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                        <Text style={{ color: 'white' }}>Name :</Text>
                        <Text style={{ color: 'white' }}>{selectedStudent.name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', height: 40, flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                        <Text style={{ color: 'white' }}>DOB :</Text>
                        <Text style={{ color: 'white' }}>{selectedStudent.dob}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', height: 40, flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                        <Text style={{ color: 'white' }}>Father Name :</Text>
                        <Text style={{ color: 'white' }}>{selectedStudent.fatherName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', height: 40, flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                        <Text style={{ color: 'white' }}>Mother Name :</Text>
                        <Text style={{ color: 'white' }}>{selectedStudent.motherName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', height: 40, flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                        <Text style={{ color: 'white' }}>Gender :</Text>
                        <Text style={{ color: 'white' }}>{selectedStudent.genderName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', height: 40, flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                        <Text style={{ color: 'white' }}>Category :</Text>
                        <Text style={{ color: 'white' }}>{selectedStudent.categoryName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', height: 40, flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                        <Text style={{ color: 'white' }}>Mobile :</Text>
                        <Text style={{ color: 'white' }}>{selectedStudent.mobile}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', height: 40, flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                        <Text style={{ color: 'white' }}>Emergency Mobile :</Text>
                        <Text style={{ color: 'white' }}>{selectedStudent.emergencyMobile}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', height: 40, flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                        <Text style={{ color: 'white' }}>Email :</Text>
                        <Text style={{ color: 'white' }}>{selectedStudent.email}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', height: 40, flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                        <Text style={{ color: 'white' }}>Address :</Text>
                        <Text style={{ color: 'white' }}>{selectedStudent.address}</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );

}

export default PersonalInfo;