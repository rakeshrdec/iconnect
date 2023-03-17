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
import { StudentModel } from "../studentModel";
import { useSelector } from "react-redux";


const StudentProfile = ({navigation}) =>{
    const [className,setClassName] = useState('Section');

    const [sectionName,setSectionName] = useState('Section');

    const [student, setStudent] = useState({
        student: {},
        studentActivityModel: {},
        studentLoginModel: {}
    });

    const data = useSelector((state) => state)
    const sessionData = data.session;
    const [session, setSession] = useState(sessionData.data);
    const selectedStudentData = data.selectedStudentDetails;
    const [selectedStudent, setSelectedStudent] = useState(selectedStudentData.data);

    useEffect(()=>{
      

        getStudentDetails( );
        
    },[])

    getStudentDetails = ( ) =>{
        fetch(`http://13.127.128.192:8081/student/getStudentFullDetails?sessionYear=${session.id}&studentId=${selectedStudent.id}`)
        .then((res)=>{
            res.json().then((data)=>{
                setStudent(data);
                getStudentClassDetails();
            })
        })
    }

    getStudentClassDetails = ( ) =>{
        fetch(`http://13.127.128.192:8081/class/getClassById?classId=${student.studentActivityModel.classId}`)
        .then((res)=>{
            res.json().then((data)=>{
                setClassName(data.classDetails.name);
        for (const section of data.sections) {
          if (section.id === student.studentActivityModel.sectionId) {
            setSectionName(section.name);
            break;
          }
        }
            })
        })
    }

    const infoList = ['personal','parents','other']
    const [infoOf,setInfoOf] = useState('personal')

    return(
    <SafeAreaView style={{flex:1}}> 
            {/* USER PROFILE */}
            <View style={{flex:1,backgroundColor:'lightgray',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                <Image source={require('../../../../assets/profile/studentProfile.jpg')} style={{height:80,width:80,borderRadius:190}} />
                <View style={{}}>
                {/* <Text style={{color:'black'}}>{name}</Text> */}

                   <Text style={{color:'black'}}>{student.student.name}</Text>
                    <Text style={{color:'black'}}>{className}</Text>
                    <Text style={{color:'black'}}>{sectionName}</Text>
                    
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
                        <Text style={{color:'black'}}>Academic</Text>
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