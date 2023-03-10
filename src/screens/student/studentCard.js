import { Avatar } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable,Image,Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
// import { Divider } from 'react-native-elements';
import { Divider } from '@rneui/themed';


const StudentCard = ({navigation}) =>{
    useEffect(()=>{
        getStudentsList();
    },[])

    const getStudentsList = () =>{
        fetch('http://13.127.128.192:8081/auth/validateStudentLogin', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "createdAt": "string",
              "expiredAt": "string",
              "password": "7669991129",
              "tokenType": 0,
              "userName": "7669991129"
            })
          }).then((res)=>{ res.json().then(data=>{
            console.log("student Details :",data.students)
            setStudentList(data.students)
          })})
    }
    // const studentList = [1,2,3]
    const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')
    // const studentList = [{name:'rakesh kumar mishra', rollno:'12', class:'One(A)', mobile:'9891979411'},{name:'Ayansh', rollno:'12', class:'Six(A)', mobile:'9891979411'},{name:'sonu kumar', rollno:'2', class:'One(A)', mobile:'9891979411'}]
    const [studentList,setStudentList] = useState([]);
    return(
        <>
        <SafeAreaView style={{flex:1}}>
            <View style={{
            width: SCREEN_WIDTH,
            height: 0,
            borderTopColor: "#2E4AA0",
            borderTopWidth: SCREEN_HEIGHT ,
            borderRightWidth: SCREEN_WIDTH+30,
            borderRightColor: '#F0BA19'
            }}>
            </View>
            {/* <Text style={{color:'white',position:'absolute'}}>HIIIIII</Text> */}
            {/* <View style={{backgroundColor:'red',height:100,borderWidth:1,position:'absolute'}}>
                <Text style={{color:'white', fontSize:25, alignSelf:'center'}}>Home</Text>
            </View> */}
                <View style={{height:55,backgroundColor:'#2E4AA0',justifyContent:'center',position:'absolute',width:'100%'}}>
                    <Text style={{color:'white', fontSize:20, alignSelf:'center'}}>Student List</Text>
                </View>
                <ScrollView style={{position:'absolute',width:'100%',marginTop:70}}>
                    {studentList.map((e,i)=>(
                        <Pressable 
                        onPress={()=>{
                            navigation.navigate('HomePage');
                        }}
                        style={{elevation:10,backgroundColor:'white', minHeight:120, margin:10, borderRadius:15,padding:5,alignItems:'center'}}>
                            <View style={{flex:1,margin:10, flexDirection:'row',alignItems:'center'}}>
                                <View style={{flex:1,  justifyContent:'center',alignItems:'center'}}>
                                    <Image source={require('../../../assets/logo/male_student_avatar.png')} style={{width: 70,height: 70,resizeMode: 'stretch', borderRadius:150}}/>
                                </View>
                                <View style={{flex:2, }}>
                                    <Text style={{color:'black', fontWeight:'bold'}}>{e.name}</Text>
                                    <Text style={{color:'black', fontWeight:'bold'}}>Roll No : {e.id}</Text>
                                    <Text style={{color:'black', fontWeight:'bold',}}>Mobile : {e.mobile} </Text>
                                </View>
                            </View>
                        </Pressable>
                    ))} 
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

export default StudentCard;