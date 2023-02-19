import { Avatar } from "@rneui/base";
import React from "react";
import { SafeAreaView, View, Text, Pressable,Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
// import { Divider } from 'react-native-elements';
import { Divider } from '@rneui/themed';


const StudentCard = ({navigation}) =>{
    // const studentList = [1,2,3]
    const studentList = [{name:'rakesh kumar mishra', rollno:'12', class:'One(A)', mobile:'9891979411'},{name:'Ayansh', rollno:'12', class:'Six(A)', mobile:'9891979411'},{name:'sonu kumar', rollno:'2', class:'One(A)', mobile:'9891979411'}]
    return(
    <SafeAreaView style={{flex:1}}>
        <View style={{height:55,backgroundColor:'#0c123b',justifyContent:'center'}}>
            <Text style={{color:'white', fontSize:25, alignSelf:'center'}}>Home</Text>
        </View>
        <ScrollView style={{backgroundColor:'lightblue'}}>
            {studentList.map((e,i)=>(
                <Pressable 
                onPress={()=>{
                    navigation.navigate('HomePage');
                }}
                style={{elevation:10,backgroundColor:'white', minHeight:250, margin:10, borderRadius:15,padding:5}}>
                    <View style={{flex:1,margin:10, flexDirection:'row'}}>
                        <View style={{flex:1,  justifyContent:'center',alignItems:'center'}}>
                            {/* <Avatar 
                            // source={uri="../../../assets/profile/studentProfile.jpg"}
                            source={{uri:'https://randomuser.me/api/portraits/women/57.jpg'}}
                            size={75}
                            rounded 
                            // style={{backgroundColor:'red', }
                            onPress={()=>{console.log("avtar is being press")}}
                            /> */}
                             <Image source={require('../../../assets/logo/student.png')} style={{width: 70,height: 70,resizeMode: 'stretch', borderRadius:150}}/>
                        </View>
                        <View style={{flex:2, }}>
                            <Text style={{color:'black', fontWeight:'bold'}}>{e.name}</Text>
                            <Text style={{color:'black', fontWeight:'bold'}}>Roll : {e.rollno}</Text>
                            <Text style={{color:'black', fontWeight:'bold',}}>Class : {e.class} </Text>
                        </View>
                    </View>
                    <View style={{flex:1,backgroundColor:'darkgray',marginHorizontal:10, flexDirection:'row'}}>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            {/* <image src='../../' /> */}
                            <Image source={require('../../../assets/profile/studentProfile.jpg')} style={{width: 50,height: 50,resizeMode: 'stretch', borderRadius:150}}/>
                        </View>
                        <View style={{flex:3, alignSelf:'center',}}>
                            <Text>Username</Text>
                            <Text>{e.name}</Text>
                        </View>
                    </View>
                    <Divider orientation="horizontal" style={{marginHorizontal:10}}/>                
                    <View style={{flex:1,backgroundColor:'darkgray',marginHorizontal:10, flexDirection:'row'}}>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../../../assets/logo/mobile.jpg')} style={{width: 50,height: 50,resizeMode: 'stretch', borderRadius:150}}/>
                        </View>
                        <View style={{flex:3, alignSelf:'center'}}>
                            <Text>Mobile</Text>
                            <Text>9891979411</Text>
                        </View>
                    </View>
                </Pressable>
            ))}
        </ScrollView>
    </SafeAreaView>
    );
}

export default StudentCard;