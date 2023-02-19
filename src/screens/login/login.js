/**
 * Sample React Native Login
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import type {Node} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TextInput,
  useColorScheme,
  View,
  Alert,
} from 'react-native';
// import { Icon } from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/AntDesign';


const Stack = createNativeStackNavigator();

const Login = ({ navigation }) => {
  const [loginFor, setLoginFor] = useState('Student')
 const [loginId,setLoginId] = useState()
 const [password,setPassword] = useState()
  const onLogin = () =>{
    if(loginFor=='Student') {
      // Alert.alert('student Login');
      if(loginId==12345678&&password==12345678) {
      navigation.navigate('StudentCard')
      }
      else{
        setLoginId('');
        setPassword('');
        Alert.alert('please enter coreect login credentials')
      }
    }
    
    if(loginFor=='Staff') {
      Alert.alert('staff Login is in development mode')
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#0c123b', justifyContent: 'center',  }}>
      {/* <View style={{ borderWidth: 1, width: '95%', backgroundColor: 'yellow', borderRadius: 25, padding: 20,height:350 ,justifyContent:'space-around'}}>
        <Text style={{ color: 'black', textAlign: 'center', justifyContent: 'center', fontWeight: 'bold' }}>iNi Labs SCHOOL</Text>
        <Text style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Username</Text>
        <TextInput style={{ width: '100%', borderWidth: 1, color: 'black', textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', placeholder: 'Username', borderRadius: 25, height: 40 }}
          placeholder='Enter Username'
          placeholderTextColor='black'></TextInput>
        <Text style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Password</Text>
        <TextInput style={{ width: '100%', borderWidth: 1, color: 'black', textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', placeholder: 'Username', borderRadius: 25, height: 40 }}
          placeholder='Enter Password'
          placeholderTextColor='black'></TextInput>
        <Pressable
          onPress={() => { 
            navigation.navigate('StudentCard');
            // navigation.navigate("HomePage")
           }}
          style={{ backgroundColor: 'white', borderRadius: 25, width: '100%', height: 40, elevation: 10, marginVertical: 10, justifyContent: 'center' }}>
          <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>Login</Text>
        </Pressable>        
      </View> */}
      {/* logo section */}
      <View>
        <Image source={require('../../../assets/logo/applogo.jpeg')} style={{width:100,height:100, borderRadius:15, resizeMode:'stretch', alignSelf:'center'}}/>
        <Text style={{color:'white', fontWeight:'bold',textAlign:'center', fontSize:20}}>i-Class</Text>
      </View>
      {/* login section */}
      <View style={{ borderColor:'yellow', width:'100%', justifyContent:'center',padding:20, borderRadius:20,}}>
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <Pressable
             onPress={()=>{
                  setLoginFor('Staff')
              }} 
              style={{backgroundColor:'yellow', borderRadius:5, width:'25%', height:40, alignItems:'center', justifyContent:'center'}}>
              <Text style={{color:'blue'}}>staff</Text>
            </Pressable>
            <Pressable
             onPress={()=>{
                  setLoginFor('Student')
              }} 
              // value={loginId}
              style={{backgroundColor:'yellow', borderRadius:5, width:'25%', height:40, alignItems:'center', justifyContent:'center'}}>
              <Text style={{color:'blue'}}>student</Text>
            </Pressable>
        </View>
          <Text style={{color:'white', fontWeight:'bold', textAlign:'center', fontSize:20, marginTop:20, borderRadius:5, height:40}}>{loginFor} Login</Text>
          <Text style={{color:'white'}}>Mobile</Text>
          <TextInput
            onChangeText={(e)=>{
              console.log(e)
                setLoginId(e)
              }}
              // value={password}
             style={{backgroundColor:'lightyellow',width:'100%',  borderWidth:1, borderRadius:5 , color:'midnightblue'}}/>
          <Text style={{color:'white'}}>Password</Text>
          <TextInput
            onChangeText={(e)=>{
                setPassword(e)
              }}
             style={{backgroundColor:'lightyellow',width:'100%',  borderWidth:1, borderRadius:5 , color:'midnightblue'}}/>
        <Pressable
            onPress={onLogin}
             style={{flexDirection:'row',justifyContent:'space-around', backgroundColor:'yellow', marginTop:10, padding:8, borderRadius:5}}>
            <Text style={{color:'darkblue', fontWeight:'bold',textAlign:'center', alignSelf:'center', fontSize:25}}>Login</Text>
            <Icon name="rightcircle" size={30} color="darkblue" />
        </Pressable>
      </View>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default Login;
