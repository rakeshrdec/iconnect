import { Avatar } from "@rneui/base";
import React, { useState } from "react";
import { SafeAreaView, View, Text, Pressable,Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
// import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import { Calendar } from "react-native-calendars";
import Icon from 'react-native-vector-icons/AntDesign';

import AttendenceYear from "./attendenceYear";
// import  Calendar from "react-native-calendars/src/calendar/index.js";
import AttendenceUpload from "./attendenceUpload";



const AttendenceMonth = ({navigation}) =>{
    const [showYearWiseAtt,setShowYearWiseAtt] = useState(false);
    const studentList = [1,2,3];
    // LocaleConfig.locales['fr'] = {
    //     monthNames: [
    //       'Janvier',
    //       'Février',
    //       'Mars',
    //       'Avril',
    //       'Mai',
    //       'Juin',
    //       'Juillet',
    //       'Août',
    //       'Septembre',
    //       'Octobre',
    //       'Novembre',
    //       'Décembre'
    //     ],
    //     monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    //     dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    //     dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
    //     today: "Aujourd'hui"
    //   };
    //   LocaleConfig.defaultLocale = 'fr';
    return(
    <SafeAreaView style={{flex:1}}>            
        {showYearWiseAtt?
            // <View style={{flex:1}}><AttendenceYear />
            <View style={{flex:1}}><AttendenceUpload />
             {/* <Pressable 
                onPress={()=>{setShowYearWiseAtt(false)}}
                style={{elevation:20, backgroundColor:'lightyellow',margin:20, height:40,justifyContent:'center',borderRadius:25, flexDirection:'row'}}>
                <Text style={{color:'darkblue', textAlign:'center',alignSelf:'center'}}>check attendence monthwise</Text>
                <Icon name="rightcircle" size={35} color="#0c123b" style={{position:'absolute',right:0, alignSelf:'center'}} />
            </Pressable> */}
            </View>:
            <View>
                <View style={{height:95, backgroundColor:'#0c123b', borderBottomEndRadius:25, borderBottomStartRadius:25}}>
                {/* <Text style={{alignSelf:'center', color:'white', fontWeight:'bold'}}>Attendence</Text> */}
            </View> 
            <View style={{height:45, backgroundColor:'white', borderRadius:15,marginTop:-25, width:'90%', alignSelf:'center',justifyContent:'center'}}>
                <Text style={{textAlign:'center', color:'#0c123b', fontWeight:'bold', alignItems:'center',justifyContent:'center',alignSelf:'center'}}>Attendence</Text>                
            </View> 
        {/* <View> */}
            {/* <Calendar></Calendar> */}
            <Calendar 
                style={{margin:20, borderRadius:15}}
                markedDates={{
                '2023-05-16': {selected: true, marked: true, selectedColor: 'lightgreen'},
                '2023-02-16': {selected: true, marked: true, selectedColor: 'lightgreen'},
                '2023-02-17': {selected: true, marked: true, selectedColor: 'lightgreen'},
                '2023-02-11': {selected: true, marked: true, selectedColor: 'lightgreen'},
                '2023-02-01': {selected: true, marked: true, selectedColor: 'red'},
                '2023-02-02': {selected: true, marked: true, selectedColor: 'red'},
                '2023-02-07': {selected: true, marked: true, selectedColor: 'red'},
                '2023-05-17': {marked: true},
                '2023-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                '2023-05-19': {disabled: true, disableTouchEvent: true}
              }} 
            //   theme={{
            //     backgroundColor: '#ffffff',
            //     calendarBackground: '#ffffff',
            //     textSectionTitleColor: '#b6c1cd',
            //     textSectionTitleDisabledColor: '#d9e1e8',
            //     selectedDayBackgroundColor: '#00adf5',
            //     selectedDayTextColor: '#ffffff',
            //     todayTextColor: '#00adf5',
            //     dayTextColor: '#2d4150',
            //     textDisabledColor: '#d9e1e8',
            //     dotColor: '#00adf5',
            //     selectedDotColor: '#ffffff',
            //     arrowColor: 'orange',
            //     disabledArrowColor: '#d9e1e8',
            //     monthTextColor: 'blue',
            //     indicatorColor: 'blue',
            //     textDayFontFamily: 'monospace',
            //     textMonthFontFamily: 'monospace',
            //     textDayHeaderFontFamily: 'monospace',
            //     textDayFontWeight: '300',
            //     textMonthFontWeight: 'bold',
            //     textDayHeaderFontWeight: '300',
            //     textDayFontSize: 16,
            //     textMonthFontSize: 16,
            //     textDayHeaderFontSize: 16
            //   }}
              />
        {/* </View> */}
{/* present absent box */}
        <View style={{flexDirection:'row',height:130, justifyContent:'space-around'}}>
            <View style={{flex:1,borderRadius:20,margin:10, backgroundColor:'lightgreen',justifyContent:'space-around' }}>
                <Text style={{textAlign:'center',color:'white'}}>Total Present</Text>
                <View style={{height:40,width:40,backgroundColor:'white',  alignSelf:'center', borderRadius:150,  justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'green'}}>3</Text>
                </View>
                
            </View>
            <View style={{flex:1,borderRadius:20,margin:10, backgroundColor:'red',justifyContent:'space-around' }}>
                <Text style={{textAlign:'center',color:'white'}}>Total Absent</Text>
                <View style={{height:40,width:40,backgroundColor:'white',  alignSelf:'center', borderRadius:150,  justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'red'}}>3</Text>
                </View>                
            </View>
        </View>
{/* yearly component */}
        {/* <Pressable 
        onPress={()=>{setShowYearWiseAtt(true)}}
        style={{elevation:20, backgroundColor:'lightyellow',margin:20, height:40,justifyContent:'center',borderRadius:25, flexDirection:'row'}}>
            <Text style={{color:'darkblue', textAlign:'center',alignSelf:'center'}}>check attendence yearwise</Text>
            <Icon name="rightcircle" size={35} color="#0c123b" style={{position:'absolute',right:0, alignSelf:'center'}} />
        </Pressable> */}
            </View>
        }
    </SafeAreaView>
    );
}

export default AttendenceMonth;