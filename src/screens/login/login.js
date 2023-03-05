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
// import Icon from 'react-native-vector-icons/AntDesign';
import { Icon } from 'react-native-elements';
import { Input } from 'react-native-elements';

// import { Icon, Input } from '@ui-kitten/components';


const Stack = createNativeStackNavigator();

const Login = ({ navigation }) => {
  const [hidePassword,setHidePassword] = useState(true);
  const [loginFor, setLoginFor] = useState('Student')
 const [loginId,setLoginId] = useState()
 const [password,setPassword] = useState()
  const onLogin = () =>{
    if(loginFor=='Student') {
      // Alert.alert('student Login');
      if(loginId==12345678&&password==12345678) 
      {
      navigation.navigate('StudentCard')
      }
      else{
        navigation.navigate('StudentCard')
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
    <View style={{ flex: 1, backgroundColor: '#2D48A1', justifyContent: 'center',  }}>
      <View style={{backgroundColor:'white',width:'95%',alignSelf:'center',borderRadius:15,minHeight:450}}>
          {/* logo section */}
          <View>
            <Image source={require('../../../assets/logo/applogo.jpeg')} style={{width:70,height:70, borderRadius:15, resizeMode:'stretch', alignSelf:'center'}}/>
            <Text style={{color:'#2D48A1', fontWeight:'bold',textAlign:'center', }}>i-Class</Text>
          </View>
          {/* login section */}
          <View style={{ borderColor:'#F0BA1A', width:'100%', justifyContent:'center',padding:20, borderRadius:20,}}>
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                <Pressable
                onPress={()=>{
                      setLoginFor('Staff')
                  }} 
                  style={loginFor=='Staff'?{elevation:10,backgroundColor:'#F0BA1A', borderRadius:5, width:'35%', height:40, alignItems:'center', justifyContent:'center'}:{borderWidth:1,backgroundColor:'white', borderRadius:5, width:'35%', height:40, alignItems:'center', justifyContent:'center'}}>
                  <Text style={{color:'blue',fontWeight:'bold'}}>staff</Text>
                </Pressable>
                <Pressable
                onPress={()=>{
                      setLoginFor('Student')
                  }} 
                  // value={loginId}
                  style={loginFor=='Student'?{elevation:10,backgroundColor:'#F0BA1A', borderRadius:5, width:'35%', height:40, alignItems:'center', justifyContent:'center'}:{borderWidth:1,backgroundColor:'white', borderRadius:5, width:'35%', height:40, alignItems:'center', justifyContent:'center'}}>
                  <Text style={{color:'blue',fontWeight:'bold'}}>student</Text>
                </Pressable>
            </View>
              <Text style={{color:'black', fontWeight:'bold', textAlign:'center',  marginTop:10, borderRadius:5, height:40}}>{loginFor} Login</Text>
              {/* <Text style={{color:'black'}}>Mobile</Text> */}
                <Input
                  inputStyle={{color:'black',fontSize:15,height:40}}
                  placeholder='Enter User Id'
                  placeholderTextColor='black'
                  rightIcon={
                    <Icon
                      type='ant-design'
                      name='user'
                      size={20}
                      color='black'
                    />
                    }
                  />


                  {/* uiKITTEN */}
                  {/* <Input
                      value={loginId}
                      label='Password'
                      placeholder='Place your Text'
                      // caption={renderCaption}
                      // accessoryRight={renderIcon}
                      // secureTextEntry={secureTextEntry}
                      onChangeText={nextValue => setLoginId(nextValue)}
                    /> */}
              {/* <TextInput
                onChangeText={(e)=>{
                  console.log(e)
                    setLoginId(e)
                  }}
                  // value={password}
                style={{borderBottomWidth:1, width:'100%', borderRadius:5 , color:'midnightblue',height:40}}/> */}
              {/* <Text style={{color:'black'}}>Password</Text> */}
              {/* <TextInput
                placeholder='Enter Password'
                secure={true}
                secureTextEntry={true}
                caretHidden={true}
                onChangeText={(e)=>{
                    setPassword(e)
                  }}
                style={{borderBottomWidth:1, width:'100%', borderRadius:5 , color:'midnightblue',height:40}}>
              </TextInput> */}

                <Input
                  inputStyle={{color:'black',fontSize:15,height:40}}
                  placeholder='Enter Password'
                  placeholderTextColor='black'
                  secureTextEntry={hidePassword}
                  rightIcon={
                    hidePassword?
                        <Icon
                        onPress={()=>{setHidePassword(!hidePassword)}}
                        type='entypo'
                        name='eye-with-line'
                        size={20}
                        color='black'
                        />:
                        <Icon
                          onPress={()=>{setHidePassword(!hidePassword)}}
                          type='entypo'
                          name='eye'
                          size={20}
                          color='black'
                        />
                    }
                  />

            <Pressable
                onPress={onLogin}
                style={{flexDirection:'row',justifyContent:'space-around', backgroundColor:'#F0BA1A', marginTop:10,  borderRadius:150,height:40,alignItems:'center'}}>
                <Text style={{color:'white', fontWeight:'bold',textAlign:'center', alignSelf:'center', fontSize:18}}>Login123</Text>
                {/* <Icon name="rightcircle" size={27} color="darkblue" /> */}
            </Pressable>
          </View>          
      </View>
      <Text style={{color:'white', fontWeight:'bold', textAlign:'center'}}>powered by i-class</Text>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default Login;
