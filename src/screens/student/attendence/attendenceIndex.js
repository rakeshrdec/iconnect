import { Avatar } from "@rneui/base";
import React, { useState } from "react";
import { SafeAreaView, View, Text, Pressable, Image, Dimensions, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
// import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import { Calendar } from "react-native-calendars";
import Icon from 'react-native-vector-icons/AntDesign';

// import AttendenceYear from "./attendenceYear";
import { Divider } from "@rneui/themed";
import { getTimestamp } from "react-native-reanimated/lib/reanimated2/core";
// import  Calendar from "react-native-calendars/src/calendar/index.js";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

import AttendenceMonth from "./attendenceMonth";
import AttendenceYear from "./attendenceYear";
import AttendenceUpload from "./attendenceUpload";

const AttendenceIndex = ({ navigation }) => {
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
                            setSelectComponent('attendenceMonth')
                        }}
                        style={{ borderRadius: 15, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: 80, width: '90%', position: 'absolute', top: 15 }}><Text style={{ color: 'black' }}>View This Month Attendence</Text></Pressable>
                    <Pressable
                        onPress={() => {
                            setSelectComponent('attendenceYear')
                        }}
                        style={{ borderRadius: 15, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: 80, width: '90%', position: 'absolute', top: 115 }}><Text style={{ color: 'black' }}>View This Year Attendence</Text></Pressable>
                    {/* <Pressable
                        onPress={() => {
                            setSelectComponent('attendenceUpload')
                        }}
                        style={{ borderRadius: 15, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: 80, width: '90%', position: 'absolute', top: 215 }}><Text style={{ color: 'black' }}>Upload Attendence</Text>
                        </Pressable> */}
                </SafeAreaView> : <View></View>}
            {/* components */}
            {selecComponent == 'attendenceMonth' ?
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
                        <AttendenceMonth />
                        <Pressable
                            onPress={() => { setSelectComponent('index') }}
                            style={{ elevation: 20, backgroundColor: 'lightyellow', margin: 20, height: 40, justifyContent: 'center', borderRadius: 25, flexDirection: 'row' }}>
                            <Text style={{ color: 'darkblue', textAlign: 'center', alignSelf: 'center' }}>Go to Attendence Page</Text>
                            <Icon name="rightcircle" size={35} color="#0c123b" style={{ position: 'absolute', right: 0, alignSelf: 'center' }} />
                        </Pressable>
                    </View>
                </>
                :
                <View></View>}
            {selecComponent == 'attendenceYear' ?
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
                        <AttendenceYear />
                        <Pressable
                            onPress={() => { setSelectComponent('index') }}
                            style={{ elevation: 20, backgroundColor: 'lightyellow', margin: 20, height: 40, justifyContent: 'center', borderRadius: 25, flexDirection: 'row' }}>
                            <Text style={{ color: 'darkblue', textAlign: 'center', alignSelf: 'center' }}>Go to Attendence Page</Text>
                            <Icon name="rightcircle" size={35} color="#0c123b" style={{ position: 'absolute', right: 0, alignSelf: 'center' }} />
                        </Pressable>
                    </View>
                </>
                : <View></View>}
            {selecComponent == 'attendenceUpload' ?
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
                        <AttendenceUpload />
                        <Pressable
                            onPress={() => { setSelectComponent('index') }}
                            style={{ elevation: 20, backgroundColor: 'lightyellow', margin: 20, height: 40, justifyContent: 'center', borderRadius: 25, flexDirection: 'row' }}>
                            <Text style={{ color: 'darkblue', textAlign: 'center', alignSelf: 'center' }}>Go to Attendence Page</Text>
                            <Icon name="rightcircle" size={35} color="#0c123b" style={{ position: 'absolute', right: 0, alignSelf: 'center' }} />
                        </Pressable>
                    </View>
                </>
                : <View></View>}
        </>
    );
}

export default AttendenceIndex;