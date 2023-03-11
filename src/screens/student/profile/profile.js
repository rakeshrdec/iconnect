import { Avatar } from "@rneui/base";
import React, { useEffect, useState } from "react";
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
    const [name,setName] = useState('name');
    const [Class,setClass] = useState('class');
    const [rollno,setRollno] = useState('roll no');
    const [enroll, setEnroll] = useState('enroll')

    useEffect(()=>{
        // http://13.127.128.192:8081/student/getStudentFullDetails?sessionYear=2&studentId=1
        // http://13.127.128.192:8081/class/getClassById?classId=2
        // http://13.127.128.192:8081/utils/getGenders
        // http://13.127.128.192:8081/utils/getCategory
        const studentId = 1;
        const sessionYear = 2;
        fetch(`http://13.127.128.192:8081/student/getStudentFullDetails?sessionYear=${sessionYear}&studentId=${studentId}`)
        .then((res)=>{
            res.json().then((data)=>{
                // console.log("student basic details", data)
                setName(data.student.name);
                setRollno(data.student.id);
                setEnroll(data.student.enroll)
                // setClass
                if(data.studentActivityModel.classId=='2'){
                    setClass('UKG')
                }
            })
        })
    },[])

    const studentList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,1];
    const infoList = ['personal','parents','other']
    const [infoOf,setInfoOf] = useState('personal')

    return(
    <SafeAreaView style={{flex:1}}> 
            {/* USER PROFILE */}
            <View style={{flex:1,backgroundColor:'lightgray',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                <Image source={require('../../../../assets/profile/studentProfile.jpg')} style={{height:80,width:80,borderRadius:190}} />
                <View style={{}}>
                    <Text style={{color:'black'}}>{name}</Text>
                    <Text style={{color:'black'}}>Class {Class}</Text>
                    <Text style={{color:'black'}}>Enroll no. {enroll}</Text>
                    <Text style={{color:'black'}}>Roll No. {rollno}</Text>
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