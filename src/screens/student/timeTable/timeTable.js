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
            <View style={{flex:1,justifyContent:"space-between"}}>
                {/* background circular design */}
                <View style={{flex:1, backgroundColor:'#2D48A1', borderBottomEndRadius:25, borderBottomStartRadius:25}} >
                    <View style={{height:45, backgroundColor:'white', borderRadius:15, width:'90%', alignSelf:'center',justifyContent:'center',position:'absolute',bottom:-20}}>
                        <Text style={{textAlign:'center', color:'#0c123b', fontWeight:'bold', alignItems:'center',justifyContent:'center',alignSelf:'center'}}>Class - 9A</Text>
                    </View>
                </View>           
                {/* <View style={{height:45, backgroundColor:'white', borderRadius:15,marginTop:-25, width:'90%', alignSelf:'center',justifyContent:'center'}}>
                    <Text style={{textAlign:'center', color:'#0c123b', fontWeight:'bold', alignItems:'center',justifyContent:'center',alignSelf:'center'}}>Class - 9A</Text>
                </View>  */}
                <View style={{flex:6,justifyContent:"space-between"}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', width:'90%',alignSelf:'center',marginVertical:40}}>
                        <Pressable style={selectedDay=='Mon'?{borderWidth:1,padding:5,borderRadius:5, backgroundColor:'darkblue'}:{borderWidth:1,padding:5,borderRadius:5}}  onPress={()=>{setSelectedDay('Mon')}}><Text style={selectedDay=='Mon'?{color:'white', fontWeight:'bold'}:{color:'blue'}}>Mon</Text></Pressable>
                        <Pressable style={selectedDay=='Tue'?{borderWidth:1,padding:5,borderRadius:5, backgroundColor:'darkblue'}:{borderWidth:1,padding:5,borderRadius:5}}  onPress={()=>{setSelectedDay('Tue')}}><Text style={selectedDay=='Tue'?{color:'white', fontWeight:'bold'}:{color:'blue'}}>Tue</Text></Pressable>
                        <Pressable style={selectedDay=='Wed'?{borderWidth:1,padding:5,borderRadius:5, backgroundColor:'darkblue'}:{borderWidth:1,padding:5,borderRadius:5}}  onPress={()=>{setSelectedDay('Wed')}}><Text style={selectedDay=='Wed'?{color:'white', fontWeight:'bold'}:{color:'blue'}}>Wed</Text></Pressable>
                        <Pressable style={selectedDay=='Thu'?{borderWidth:1,padding:5,borderRadius:5, backgroundColor:'darkblue'}:{borderWidth:1,padding:5,borderRadius:5}}  onPress={()=>{setSelectedDay('Thu')}}><Text style={selectedDay=='Thu'?{color:'white', fontWeight:'bold'}:{color:'blue'}}>Thu</Text></Pressable>
                        <Pressable style={selectedDay=='Fri'?{borderWidth:1,padding:5,borderRadius:5, backgroundColor:'darkblue'}:{borderWidth:1,padding:5,borderRadius:5}}  onPress={()=>{setSelectedDay('Fri')}}><Text style={selectedDay=='Fri'?{color:'white', fontWeight:'bold'}:{color:'blue'}}>Fri</Text></Pressable>
                        <Pressable style={selectedDay=='Sat'?{borderWidth:1,padding:5,borderRadius:5, backgroundColor:'darkblue'}:{borderWidth:1,padding:5,borderRadius:5}}  onPress={()=>{setSelectedDay('Sat')}}><Text style={selectedDay=='Sat'?{color:'white', fontWeight:'bold'}:{color:'blue'}}>Sat</Text></Pressable>
                        <Pressable style={selectedDay=='Sun'?{borderWidth:1,padding:5,borderRadius:5, backgroundColor:'darkblue'}:{borderWidth:1,padding:5,borderRadius:5}}  onPress={()=>{setSelectedDay('Sun')}}><Text style={selectedDay=='Sun'?{color:'white', fontWeight:'bold'}:{color:'blue'}}>Sun</Text></Pressable>
                    </View>
                    {/* subjects */}
                    <ScrollView>
                        <Pressable style={{elevation:15,flexDirection:'row',width:'90%', alignSelf:'center',margin:10,alignItems:'center',backgroundColor:'lightgray',borderRadius:15,padding:10}}>                            
                            <Image source={require('../../../../assets/logo/document.png')} style={{height:50,width:50, resizeMode:'stretch'}}/>
                            <View style={{marginHorizontal:40}}>
                                <Text style={{color:'black',fontWeight:'bold'}}>8:00 Am -9:00 Am</Text>
                                <Text style={{color:'black'}}>Maths</Text>
                                <Text style={{color:'black'}}>rakesh mishra</Text>
                            </View>
                        </Pressable>
                        <Pressable style={{elevation:15,flexDirection:'row',width:'90%', alignSelf:'center',margin:10,alignItems:'center',backgroundColor:'lightgray',borderRadius:15,padding:10}}>                            
                            <Image source={require('../../../../assets/logo/document.png')} style={{height:50,width:50, resizeMode:'stretch'}}/>
                            <View style={{marginHorizontal:40}}>
                                <Text style={{color:'black',fontWeight:'bold'}}>9:00 Am -10:00 Am</Text>
                                <Text style={{color:'black'}}>English</Text>
                                <Text style={{color:'black'}}>sk sahu</Text>
                            </View>
                        </Pressable>
                        <Pressable style={{elevation:15,flexDirection:'row',width:'90%', alignSelf:'center',margin:10,alignItems:'center',backgroundColor:'lightgray',borderRadius:15,padding:10}}>                            
                            <Image source={require('../../../../assets/logo/document.png')} style={{height:50,width:50, resizeMode:'stretch'}}/>
                            <View style={{marginHorizontal:40}}>
                                <Text style={{color:'black',fontWeight:'bold'}}>10:00 Am -11:00 Am</Text>
                                <Text style={{color:'black'}}>Hindi</Text>
                                <Text style={{color:'black'}}>shivram</Text>
                            </View>
                        </Pressable>
                        <Pressable style={{elevation:15,flexDirection:'row',width:'90%', alignSelf:'center',margin:10,alignItems:'center',backgroundColor:'lightgray',borderRadius:15,padding:10}}>                            
                            <Image source={require('../../../../assets/logo/document.png')} style={{height:50,width:50, resizeMode:'stretch'}}/>
                            <View style={{marginHorizontal:40}}>
                                <Text style={{color:'black',fontWeight:'bold'}}>12:00 Pm -1:00 Pm</Text>
                                <Text style={{color:'black'}}>Science</Text>
                                <Text style={{color:'black'}}>Dr Sanjay</Text>
                            </View>
                        </Pressable>
                        <Pressable style={{elevation:15,flexDirection:'row',width:'90%', alignSelf:'center',margin:10,alignItems:'center',backgroundColor:'lightgray',borderRadius:15,padding:10}}>                            
                            <Image source={require('../../../../assets/logo/document.png')} style={{height:50,width:50, resizeMode:'stretch'}}/>
                            <View style={{marginHorizontal:40}}>
                                <Text style={{color:'black',fontWeight:'bold'}}>1:00 Pm -2:00 Pm</Text>
                                <Text style={{color:'black'}}>Social Studies</Text>
                                <Text style={{color:'black'}}>sunil</Text>
                            </View>
                        </Pressable>
                        <Pressable style={{elevation:15,flexDirection:'row',width:'90%', alignSelf:'center',margin:10,alignItems:'center',backgroundColor:'lightgray',borderRadius:15,padding:10}}>                            
                            <Image source={require('../../../../assets/logo/document.png')} style={{height:50,width:50, resizeMode:'stretch'}}/>
                            <View style={{marginHorizontal:40}}>
                                <Text style={{color:'black',fontWeight:'bold'}}>2:00 Pm -3:00 Pm</Text>
                                <Text style={{color:'black'}}>drwaing</Text>
                                <Text style={{color:'black'}}>seema luthra</Text>
                            </View>
                        </Pressable>
                        <Pressable style={{elevation:15,flexDirection:'row',width:'90%', alignSelf:'center',margin:10,alignItems:'center',backgroundColor:'lightgray',borderRadius:15,padding:10}}>                            
                            <Image source={require('../../../../assets/logo/document.png')} style={{height:50,width:50, resizeMode:'stretch'}}/>
                            <View style={{marginHorizontal:40}}>
                                <Text style={{color:'black',fontWeight:'bold'}}>3:00 Pm -4:00 Pm</Text>
                                <Text style={{color:'black'}}>Game</Text>
                                <Text style={{color:'black'}}>rakesh mishra</Text>
                            </View>
                        </Pressable>
                    </ScrollView>
                </View>
            

            </View>
        }
    </SafeAreaView>
    );
}

export default TimeTable;