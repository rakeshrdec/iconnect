import { Avatar } from "@rneui/base";
import React, { useState } from "react";
import { SafeAreaView, View, Text, Pressable,Image,Dimensions,Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
// import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import { Calendar } from "react-native-calendars";
import Icon from 'react-native-vector-icons/AntDesign';

// import AttendenceYear from "./attendenceYear";
import { Divider } from "@rneui/themed";
import { getTimestamp } from "react-native-reanimated/lib/reanimated2/core";
// import  Calendar from "react-native-calendars/src/calendar/index.js";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')
import PersonalInfo from "./personalInfo";
import ParentsInfo from "./parentsInfo";
import OthersInfo from "./othersInfo";


const StudentProfile = ({navigation}) =>{

    const studentList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,1];
    const infoList = ['personal','parents','other']
    const [infoOf,setInfoOf] = useState('personal')

    return(
    <SafeAreaView style={{flex:1}}> 
            {/* USER PROFILE */}
            <View style={{flex:1,backgroundColor:'lightgray',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                <Image source={require('../../../../assets/profile/studentProfile.jpg')} style={{height:80,width:80,borderRadius:190}} />
                <View style={{}}>
                    <Text style={{color:'black'}}>Rakesh Mishra</Text>
                    <Text style={{color:'black'}}>Class 1 - A</Text>
                    <Text style={{color:'black'}}>Adm no. 132434</Text>
                    <Text style={{color:'black'}}>Roll No. 74343441</Text>
                </View>
            </View>
            <View style={{flex:6,backgroundColor:'white'}}>
                <View style={{flexDirection:'row',width:'100%',justifyContent:'space-around'}}>
                    <Pressable
                        onPress={()=>{
                            setInfoOf('personal')
                        }}
                         style={infoOf=='personal'?{borderBottomWidth:2,flex:1,justifyContent:'center',alignItems:'center',padding:3}:{flex:1,justifyContent:'center',alignItems:'center',padding:3}}>
                        <Text style={{color:'black'}}>PERSONAL</Text>
                    </Pressable>
                    <Pressable
                        onPress={()=>{
                            setInfoOf('parents')
                        }}
                         style={infoOf=='parents'?{borderBottomWidth:2,flex:1,justifyContent:'center',alignItems:'center',padding:3}:{flex:1,justifyContent:'center',alignItems:'center',padding:3}}>
                        <Text style={{color:'black'}}>PARENTS</Text>
                    </Pressable>
                    <Pressable
                        onPress={()=>{
                            setInfoOf('others')
                        }}
                         style={infoOf=='others'?{borderBottomWidth:2,flex:1,justifyContent:'center',alignItems:'center',padding:3}:{flex:1,justifyContent:'center',alignItems:'center',padding:3}}>
                        <Text style={{color:'black'}}>OTHERS</Text>
                    </Pressable>
                </View>
                {/*DETAILS   */}
                {infoOf=='personal'?<View style={{flex:1}}><PersonalInfo /></View>:<View />}
                {infoOf=='parents'?<View style={{flex:1}}><ParentsInfo/></View>:<View />}
                {infoOf=='others'?<View style={{flex:1}}><OthersInfo /></View>:<View />}
            </View>
           
            
    </SafeAreaView>
    );
}

export default StudentProfile;