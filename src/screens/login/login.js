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
import actions from '../../redux/actions';
import {useSelector,useDispatch} from 'react-redux';

// import { Icon, Input } from '@ui-kitten/components';


const Stack = createNativeStackNavigator();

const Login = ({ navigation }) => {
  const [hidePassword,setHidePassword] = useState(true);
  const [loginFor, setLoginFor] = useState('Student')
 const [loginId,setLoginId] = useState()
 const [password,setPassword] = useState()

 const data = useSelector((state)=>state)        
 const userData = data.userInformation;

  const onLogin = async () =>{
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
              "tokenType": 1,
              "userName": "7669991129"
            })
          }).then((res)=>{ 
            if (res.status == 200 ){
            res.json().then(data=>{
              actions.studentList(data.students)
              actions.session(data.session)
              navigation.navigate('StudentCard')
          })}})


    // if(loginFor=='Student') {
    //   // Alert.alert('student Login');
    //   if(loginId==12345678&&password==12345678) 
    //   {
    //   navigation.navigate('StudentCard')
    //   }
    //   else{
    //     navigation.navigate('StudentCard')
    //     setLoginId('');
    //     setPassword('');
    //     Alert.alert('please enter coreect login credentials')
    //   }
    // }
    
    // if(loginFor=='Staff') {
    //   Alert.alert('staff Login is in development mode')
    // }
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#2E4AA0', justifyContent: 'center',  }}>
      <View style={{backgroundColor:'white',width:'95%',alignSelf:'center',borderRadius:15,minHeight:450}}>
          {/* logo section */}
          <View>
            <Image source={require('../../../assets/logo/applogo.jpeg')} style={{width:70,height:70, borderRadius:15, resizeMode:'stretch', alignSelf:'center'}}/>
            <Text style={{color:'#2E4AA0', fontWeight:'bold',textAlign:'center', fontSize: 25}}>i-class</Text>
          </View>
          {/* login section */}
          <View style={{ borderColor:'#F0BA19', width:'100%', justifyContent:'center',padding:20, borderRadius:20,}}>
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                <Pressable
                onPress={()=>{
                      setLoginFor('Staff')
                  }} 
                  style={loginFor=='Staff'?{elevation:10,backgroundColor:'#F0BA19', borderRadius:5, width:'35%', height:40, alignItems:'center', justifyContent:'center'}:{borderWidth:1,backgroundColor:'white', borderRadius:5, width:'35%', height:40, alignItems:'center', justifyContent:'center'}}>
                  <Text style={{color:'blue',fontWeight:'bold', fontSize: 25}}>Staff</Text>
                </Pressable>
                <Pressable
                onPress={()=>{
                      setLoginFor('Student')
                  }} 
                  // value={loginId}
                  style={loginFor=='Student'?{elevation:10,backgroundColor:'#F0BA19', borderRadius:5, width:'35%', height:40, alignItems:'center', justifyContent:'center'}:{borderWidth:1,backgroundColor:'white', borderRadius:5, width:'35%', height:40, alignItems:'center', justifyContent:'center'}}>
                  <Text style={{color:'blue',fontWeight:'bold', fontSize: 25}}>Student</Text>
                </Pressable>
            </View>
              <Text style={{color:'black', fontWeight:'bold', textAlign:'center',  marginTop:10, borderRadius:5, height:40, fontSize: 2212345678}}>{loginFor} Login</Text>
              {/* <Text style={{color:'black'}}>Mobile</Text> */}
                <Input
                  inputStyle={{color:'black',fontSize:15,height:40, fontSize: 18}}
                  placeholder='Mobile No.'
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
                  inputStyle={{color:'black',fontSize:15,height:40, fontSize: 18}}
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
                style={{flexDirection:'row',justifyContent:'space-around', backgroundColor:'#F0BA19', marginTop:10,  borderRadius:150,height:40,alignItems:'center'}}>
                <Text style={{color:'white', fontWeight:'bold',textAlign:'center', alignSelf:'center', fontSize:25}}>Login</Text>
               
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
