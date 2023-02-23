import { Avatar } from "@rneui/base";
import React, { useState } from "react";
import { SafeAreaView, View, Text, Pressable,Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
// import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import { Calendar } from "react-native-calendars";
import Icon from 'react-native-vector-icons/AntDesign';

import AttendenceYear from "../attendence/attendenceYear";
// import  Calendar from "react-native-calendars/src/calendar/index.js";



const TimeTable = ({navigation}) =>{
    const [showYearWiseAtt,setShowYearWiseAtt] = useState(false);
    const studentList = [1,2,3];
    const [selectedDay, setSelectedDay] = useState('Sun');
    return(
    <SafeAreaView style={{flex:1}}>            
        {showYearWiseAtt?
            <View style={{flex:1}}><AttendenceYear />
             <Pressable 
                onPress={()=>{setShowYearWiseAtt(false)}}
                style={{elevation:20, backgroundColor:'lightyellow',margin:20, height:40,justifyContent:'center',borderRadius:25, flexDirection:'row'}}>
                <Text style={{color:'darkblue', textAlign:'center',alignSelf:'center'}}>check attendence monthwise</Text>
                <Icon name="rightcircle" size={35} color="#0c123b" style={{position:'absolute',right:0, alignSelf:'center'}} />
            </Pressable>
            </View>
            :
            <View style={{flex:1}}>
                {/* background circular design */}
                <View style={{height:95, backgroundColor:'#0c123b', borderBottomEndRadius:25, borderBottomStartRadius:25}} >
                <View style={{height:45, backgroundColor:'white', borderRadius:15, width:'90%', alignSelf:'center',justifyContent:'center',position:'absolute',bottom:-20}}>
                    <Text style={{textAlign:'center', color:'#0c123b', fontWeight:'bold', alignItems:'center',justifyContent:'center',alignSelf:'center'}}>Class - 9A</Text>
                </View>
                    </View>           
                {/* <View style={{height:45, backgroundColor:'white', borderRadius:15,marginTop:-25, width:'90%', alignSelf:'center',justifyContent:'center'}}>
                    <Text style={{textAlign:'center', color:'#0c123b', fontWeight:'bold', alignItems:'center',justifyContent:'center',alignSelf:'center'}}>Class - 9A</Text>
                </View>  */}
                <View style={{flexDirection:'row', justifyContent:'space-between', width:'90%',alignSelf:'center'}}>
                    <Pressable style={selectedDay=='Mon'?{borderWidth:1,padding:5,borderRadius:5, backgroundColor:'blue'}:{borderWidth:1,padding:5,borderRadius:5}}  onPress={()=>{setSelectedDay('Mon')}}><Text>Mon</Text></Pressable>
                    <Pressable style={selectedDay=='Tue'?{borderWidth:1,padding:5,borderRadius:5, backgroundColor:'blue'}:{borderWidth:1,padding:5,borderRadius:5}}  onPress={()=>{setSelectedDay('Tue')}}><Text>Tue</Text></Pressable>
                    <Pressable style={selectedDay=='Wed'?{borderWidth:1,padding:5,borderRadius:5, backgroundColor:'blue'}:{borderWidth:1,padding:5,borderRadius:5}}  onPress={()=>{setSelectedDay('Wed')}}><Text>Wed</Text></Pressable>
                    <Pressable style={selectedDay=='Thu'?{borderWidth:1,padding:5,borderRadius:5, backgroundColor:'blue'}:{borderWidth:1,padding:5,borderRadius:5}}  onPress={()=>{setSelectedDay('Thu')}}><Text>Thu</Text></Pressable>
                    <Pressable style={selectedDay=='Fri'?{borderWidth:1,padding:5,borderRadius:5, backgroundColor:'blue'}:{borderWidth:1,padding:5,borderRadius:5}}  onPress={()=>{setSelectedDay('Fri')}}><Text>Fri</Text></Pressable>
                    <Pressable style={selectedDay=='Sat'?{borderWidth:1,padding:5,borderRadius:5, backgroundColor:'blue'}:{borderWidth:1,padding:5,borderRadius:5}}  onPress={()=>{setSelectedDay('Sat')}}><Text>Sat</Text></Pressable>
                    <Pressable style={selectedDay=='Sun'?{borderWidth:1,padding:5,borderRadius:5, backgroundColor:'blue'}:{borderWidth:1,padding:5,borderRadius:5}}  onPress={()=>{setSelectedDay('Sun')}}><Text>Sun</Text></Pressable>
                </View>
                <View style={{justifyContent:'space-around',borderWidth:1,}}>
                    <Pressable style={{elevation:5,flexDirection:'row',width:'90%', alignSelf:'center'}}>
                        <Image source={require('../../../../assets/logo/document.png')} style={{height:50,width:50, resizeMode:'stretch'}}/>
                        <View>
                            <Text>8:00 Am -9:00 Am</Text>
                            <Text>Maths</Text>
                            <Text>rakesh mishra</Text>
                        </View>
                    </Pressable>
                    <Pressable style={{elevation:5,flexDirection:'row',width:'90%', alignSelf:'center'}}>
                        <Image source={require('../../../../assets/logo/document.png')} style={{height:50,width:50, resizeMode:'stretch'}}/>
                        <View>
                            <Text>8:00 Am -9:00 Am</Text>
                            <Text>Maths</Text>
                            <Text>rakesh mishra</Text>
                        </View>
                    </Pressable>
                    <Pressable style={{elevation:5,flexDirection:'row',width:'90%', alignSelf:'center'}}>
                        <Image source={require('../../../../assets/logo/document.png')} style={{height:50,width:50, resizeMode:'stretch'}}/>
                        <View>
                            <Text>8:00 Am -9:00 Am</Text>
                            <Text>Maths</Text>
                            <Text>rakesh mishra</Text>
                        </View>
                    </Pressable>
                    <Pressable style={{elevation:5,flexDirection:'row',width:'90%', alignSelf:'center'}}>
                        <Image source={require('../../../../assets/logo/document.png')} style={{height:50,width:50, resizeMode:'stretch'}}/>
                        <View>
                            <Text>8:00 Am -9:00 Am</Text>
                            <Text>Maths</Text>
                            <Text>rakesh mishra</Text>
                        </View>
                    </Pressable>
                    <Pressable style={{elevation:5,flexDirection:'row',width:'90%', alignSelf:'center'}}>
                        <Image source={require('../../../../assets/logo/document.png')} style={{height:50,width:50, resizeMode:'stretch'}}/>
                        <View>
                            <Text>8:00 Am -9:00 Am</Text>
                            <Text>Maths</Text>
                            <Text>rakesh mishra</Text>
                        </View>
                    </Pressable>
                    <Pressable style={{elevation:5,flexDirection:'row',width:'90%', alignSelf:'center'}}>
                        <Image source={require('../../../../assets/logo/document.png')} style={{height:50,width:50, resizeMode:'stretch'}}/>
                        <View>
                            <Text>8:00 Am -9:00 Am</Text>
                            <Text>Maths</Text>
                            <Text>rakesh mishra</Text>
                        </View>
                    </Pressable>
                    <Pressable style={{elevation:5,flexDirection:'row',width:'90%', alignSelf:'center'}}>
                        <Image source={require('../../../../assets/logo/document.png')} style={{height:50,width:50, resizeMode:'stretch'}}/>
                        <View>
                            <Text>8:00 Am -9:00 Am</Text>
                            <Text>Maths</Text>
                            <Text>rakesh mishra</Text>
                        </View>
                    </Pressable>
                </View>

            </View>
        }
    </SafeAreaView>
    );
}

export default TimeTable;