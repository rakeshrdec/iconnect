import React, { useState } from "react";
import { SafeAreaView, View, Text, Pressable, Image, Dimensions, Alert } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

import AttendanceMonth from "./attendanceMonth";
import AttendanceYear from "./attendanceYear";

const AttendanceIndex = ({ navigation }) => {
    const [selecComponent, setSelectComponent] = useState('index');

    return (
        <>
            {selecComponent == 'index' ?
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{
                        width: SCREEN_WIDTH,
                        height: 0,
                        borderTopColor: "#2E4AA0",
                        borderTopWidth: SCREEN_HEIGHT,
                        borderRightWidth: SCREEN_WIDTH,
                        borderRightColor: '#F0BA19'
                    }}>
                    </View>
                    <Pressable
                        onPress={() => {
                            setSelectComponent('attendanceMonth')
                        }}
                        style={{ borderRadius: 15, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: 80, width: '90%', position: 'absolute', top: 15 }}><Text style={{ color: 'black' }}>View This Month Attendance</Text></Pressable>
                    <Pressable
                        onPress={() => {
                            setSelectComponent('attendanceYear')
                        }}
                        style={{ borderRadius: 15, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: 80, width: '90%', position: 'absolute', top: 115 }}><Text style={{ color: 'black' }}>View This Year Attendance</Text></Pressable>
                </SafeAreaView> : <View></View>}
            {selecComponent == 'attendanceMonth' ?
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
                    <View style={{ flex: 1, position: 'absolute', width: '100%', height: '100%' }}>
                        <AttendanceMonth />
                        <Pressable
                            onPress={() => { setSelectComponent('index') }}
                            style={{ elevation: 20, backgroundColor: 'lightyellow', margin: 20, height: 40, justifyContent: 'center', borderRadius: 25, flexDirection: 'row' }}>
                            <Text style={{ color: 'darkblue', textAlign: 'center', alignSelf: 'center' }}>Go to Attendance Page</Text>
                            <Icon name="rightcircle" size={35} color="#0c123b" style={{ position: 'absolute', right: 0, alignSelf: 'center' }} />
                        </Pressable>
                    </View>
                </>
                :
                <View></View>}
            {selecComponent == 'attendanceYear' ?
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
                    <View style={{ flex: 1, position: 'absolute', width: '100%', height: '100%' }}>
                        <AttendanceYear />
                        <Pressable
                            onPress={() => { setSelectComponent('index') }}
                            style={{ elevation: 20, backgroundColor: 'lightyellow', margin: 20, height: 40, justifyContent: 'center', borderRadius: 25, flexDirection: 'row' }}>
                            <Text style={{ color: 'darkblue', textAlign: 'center', alignSelf: 'center' }}>Go to Attendance Page</Text>
                            <Icon name="rightcircle" size={35} color="#0c123b" style={{ position: 'absolute', right: 0, alignSelf: 'center' }} />
                        </Pressable>
                    </View>
                </>
                : <View></View>}
            {selecComponent == 'attendanceUpload' ?
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
                    <View style={{ flex: 1, position: 'absolute', width: '100%', height: '100%' }}>
                        <AttendanceUpload />
                        <Pressable
                            onPress={() => { setSelectComponent('index') }}
                            style={{ elevation: 20, backgroundColor: 'lightyellow', margin: 20, height: 40, justifyContent: 'center', borderRadius: 25, flexDirection: 'row' }}>
                            <Text style={{ color: 'darkblue', textAlign: 'center', alignSelf: 'center' }}>Go to Attendance Page</Text>
                            <Icon name="rightcircle" size={35} color="#0c123b" style={{ position: 'absolute', right: 0, alignSelf: 'center' }} />
                        </Pressable>
                    </View>
                </>
                : <View></View>}
        </>
    );
}

export default AttendanceIndex;