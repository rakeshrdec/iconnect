import { Avatar } from "@rneui/base";
import React, { useState } from "react";
import { SafeAreaView, View, Text, Pressable,Image,Dimensions,Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
// import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import { Calendar } from "react-native-calendars";
import Icon from 'react-native-vector-icons/AntDesign';

import AttendenceYear from "./attendenceYear";
import { Divider } from "@rneui/themed";
import { getTimestamp } from "react-native-reanimated/lib/reanimated2/core";
// import  Calendar from "react-native-calendars/src/calendar/index.js";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')




const AttendenceUpload = ({navigation}) =>{

    const studentList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,1];
    const infoList = ['personal','parents','other']
    const [infoOf,setInfoOf] = useState('personal')

    return(
    <SafeAreaView style={{flex:1}}> 
        {/* <View style={{
            width: SCREEN_WIDTH,
            height: 0,
            borderTopColor: "#0c123b",
            borderTopWidth: SCREEN_HEIGHT ,
            borderRightWidth: SCREEN_WIDTH,
            borderRightColor: 'yellow'
            }}>
                
            </View> */}
            <View style={{ flex:1}}>
                {/* UPPER SECTION */}
                    <View style={{ flex:1, flexDirection:"row",width:'100%',justifyContent:'space-around',backgroundColor:'lightgray',alignItems:'center'}}>
                        <Pressable style={{backgroundColor:"lightgray"}}><Text style={{color:'orange'}}>Class VI - A</Text></Pressable>
                        <Divider width={2}  orientation="vertical" />
                        <Pressable style={{backgroundColor:"lightgray"}}>
                            <Text style={{color:'orange'}}>Date</Text>
                            <Text>{Date().toString().slice(0,15)}</Text>
                        </Pressable>
                    </View>
                    {/* LOWER SECTION */}
                    <View style={{ flex:7, width:'100%',backgroundColor:'lightgray',padding:10}}>
                        <View style={{flexDirection:'row',width:'100%',backgroundColor:'gray',justifyContent:'space-between',paddingHorizontal:15}}>
                            <Text style={{color:'black'}}>Roll No</Text>
                            <Text style={{color:'black'}}>Name</Text>
                            <Text style={{color:'black'}}>Status</Text>
                        </View>
                        <ScrollView style={{paddingVertical:0,marginBottom:10}}>
                            {studentList.map((e,i)=>(
                                <>
                                    <View style={{flexDirection:'row',width:'100%',backgroundColor:'white',justifyContent:'space-between',paddingHorizontal:15,marginVertical:5,paddingVertical:5}}>
                                        <Text style={{color:'black'}}>{i+1}</Text>
                                        <Text style={{color:'black'}}>Name</Text>
                                        <Pressable 
                                        onPress={()=>{
                                            Alert.alert("able to take attendence when data is avilable")
                                        }}
                                        style={{backgroundColor:'red',borderRadius:100,height:20,width:20,alignItems:'center',justifyContent:'center'}}>
                                            <Text style={{color:'white'}}>A</Text>
                                        </Pressable>
                                    </View>
                                </>
                            )
                            )}
                        </ScrollView>
                        <Pressable 
                        onPress={()=>{
                            Alert.alert("Attendence uoloaded successfully !")
                        }}
                        style={{backgroundColor:"orange",height:40,borderRadius:25,width:'100%',alignItems:'center',justifyContent:'center'}}><Text style={{color:'white',textAlign:'center'}}>SUBMIT ATTENDENCE</Text></Pressable>
                    </View>
            </View>
            {/* ATTENDENCE UPLOAD PAGE CODE  */}

            {/* USER PROFILE */}
            {/* <View style={{flex:1,backgroundColor:'lightgray',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                <Image source={require('../../../../assets/profile/studentProfile.jpg')} style={{height:80,width:80,borderRadius:190}} />
                <View style={{}}>
                    <Text style={{color:'black'}}>Rakesh Mishra</Text>
                    <Text style={{color:'black'}}>Class 1 - A</Text>
                    <Text style={{color:'black'}}>Adm no. 132434</Text>
                    <Text style={{color:'black'}}>Roll No. 74343441</Text>
                </View>
            </View> */}
            {/* <View style={{flex:6,backgroundColor:'white'}}>
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
                {infoOf=='personal'?<View style={{justifyContent:"center",alignItems:'center'}}><Text>These are information of student</Text></View>:<View />}
                {infoOf=='parents'?<View style={{justifyContent:"center",alignItems:'center'}}><Text>These are information of parents</Text></View>:<View />}
                {infoOf=='others'?<View style={{justifyContent:"center",alignItems:'center'}}><Text> others inormation</Text></View>:<View />}
            </View>
            */}
            
    </SafeAreaView>
    );
}

export default AttendenceUpload;