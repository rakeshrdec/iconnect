import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable } from "react-native";
import PersonalInfo from "./personalInfo";
import AcademicInfo from "./academicInfo";
import StudentHeader from "../../homepage/studentHeader";
import { useSelector } from "react-redux";

const StudentProfile = ({ navigation }) => {

    const data = useSelector((state) => state)

    useEffect(() => {

    }, [])


    const [infoOf, setInfoOf] = useState('personal')

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* USER PROFILE */}
            <View style={{ flex: 1 }}><StudentHeader /></View>

            <View style={{ flex: 6, backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>
                    <Pressable
                        onPress={() => {
                            setInfoOf('personal')
                        }}
                        style={infoOf == 'personal' ? { borderBottomWidth: 2, flex: 1, justifyContent: 'center', alignItems: 'center', padding: 3 } : { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 3 }}>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: "bold" }}>PERSONAL</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setInfoOf('academic')
                        }}
                        style={infoOf == 'academic' ? { borderBottomWidth: 2, flex: 1, justifyContent: 'center', alignItems: 'center', padding: 3 } : { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 3 }}>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: "bold" }}>ACADEMIC</Text>
                    </Pressable>

                </View>
                {/*DETAILS   */}
                {infoOf == 'personal' ? <View style={{ flex: 1 }}><PersonalInfo /></View> : <View />}
                {infoOf == 'academic' ? <View style={{ flex: 1 }}><AcademicInfo /></View> : <View />}
            </View>


        </SafeAreaView>
    );
}

export default StudentProfile;