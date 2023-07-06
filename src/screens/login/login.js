import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Pressable, Text, Image, View, Alert, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements';
import { Input } from 'react-native-elements';
import actions from '../../redux/actions';
import { Overlay } from '@rneui/themed';
import { Header } from 'react-native-elements';

const Stack = createNativeStackNavigator();

const Login = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [loginFor, setLoginFor] = useState('student')
  const [loginId, setLoginId] = useState()
  const [password, setPassword] = useState()
  const [showLoader, setShowLoader] = useState(false)

  const onLogin = async () => {
    setShowLoader(true)

    if (loginFor == 'student') {
      {
        console.log(loginId, password)
        await fetch('http://13.127.128.192:8085/auth/validateStudentLogin', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              "userName": loginId,
              "password": password,
              "tokenType": 1,
              "createdAt": "createdAt",
              "expiredAt": "expiredAt"
            }
          )
        }).then((res) => {
          if (res.status == 200) {
            setShowLoader(false)
            res.json().then(data => {
              if (!(data.students == '')) {
                actions.studentList(data.students)
                actions.session(data.session)
                verify = true
                navigation.navigate('StudentCard')
              }
              else {
                Alert.alert("your account have not any students please cntact your school admin")
              }
            })
          }
          else {
            setShowLoader(false)
            Alert.alert("please enter valid credentials")
          }
        }).catch(function (error) {
          setShowLoader(false)
          console.log('There has been a problem with your fetch operation: ' + error.message);
        });
      }
    }

    if (loginFor == 'staff') {
      setShowLoader(false)
      Alert.alert('you are not eligible for staff login')
    }
  }

  return (
    <>
      <View style={{ display: 'none' }}>
        <Header
          backgroundColor='#2E4AA0'
        />
      </View>
      <View style={{ flex: 1, backgroundColor: '#2E4AA0', justifyContent: 'center', }}>
        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 30, margin: 0 }}>St. S. D. Memorial School</Text>
        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20, margin: 0, paddingBottom: 10 }}>Rehna Nala, Bihari Nagar, Firozabad</Text>

        <View style={{ backgroundColor: 'white', width: '95%', alignSelf: 'center', borderRadius: 15, minHeight: 450, paddingTop: 5 }}>
          {/* logo section */}
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/logo/applogo.png')} style={{ width: 100, height: 100, alignSelf: 'center' }} />
          </View>
          {/* login section */}
          <View style={{ borderColor: '#F0BA19', width: '100%', justifyContent: 'center', padding: 10, borderRadius: 20, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 40 }}>
              {/* <Pressable
                onPress={() => {
                  setLoginFor('staff')
                }}
                style={loginFor == 'staff' ? { elevation: 10, backgroundColor: '#F0BA19', borderRadius: 5, width: '35%', height: 40, alignItems: 'center', justifyContent: 'center' } : { borderWidth: 1, backgroundColor: 'white', borderRadius: 5, width: '35%', height: 40, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'blue', fontSize: 25 }}>staff</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  setLoginFor('student')
                }}
                style={loginFor == 'student' ? { elevation: 10, backgroundColor: '#F0BA19', borderRadius: 5, width: '35%', height: 40, alignItems: 'center', justifyContent: 'center' } : { borderWidth: 1, backgroundColor: 'white', borderRadius: 5, width: '35%', height: 40, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'blue', fontSize: 25 }}>student</Text>
              </Pressable> */}

              <Text style={{ color: '#2E4AA0', fontWeight: 'bold', textAlign: 'center', fontSize: 25, margin: 0 }}>Student Login</Text>
            </View>
            <Input
              onChangeText={(e) => {
                setLoginId(e)
              }}
              inputStyle={{ color: 'black', height: 30, fontSize: 18 }}
              placeholder='Mobile Number'
              placeholderTextColor='black'
              leftIconContainerStyle={{ borderWidth: 0, marginRight: 20 }}

              leftIcon={
                <Icon
                  type='entypo'
                  name='user'
                  size={20}
                  color='black'
                />
              }
            />
            <Input
              onChangeText={(e) => {
                setPassword(e)
              }}
              inputStyle={{ color: 'black', height: 30, fontSize: 18 }}
              placeholder='Enter Password'
              placeholderTextColor='black'
              secureTextEntry={hidePassword}
              leftIconContainerStyle={{ borderWidth: 0, marginRight: 20 }}

              leftIcon={
                <Icon
                  type='entypo'
                  name='lock'
                  size={20}
                  color='black'
                />}
              rightIcon={
                hidePassword ?
                  <Icon
                    onPress={() => { setHidePassword(!hidePassword) }}
                    type='entypo'
                    name='eye-with-line'
                    size={20}
                    color='black'
                  /> :
                  <Icon
                    onPress={() => { setHidePassword(!hidePassword) }}
                    type='entypo'
                    name='eye'
                    size={20}
                    color='black'
                  />
              }
            />

            <Pressable
              onPress={onLogin}
              style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#F0BA19', marginTop: 10, borderRadius: 150, height: 40, alignItems: 'center', elevation: 200 }}>
              <Text style={{ color: 'white', textAlign: 'center', alignSelf: 'center', fontSize: 25 }}>Login</Text>
            </Pressable>
            <Overlay
              isVisible={showLoader}
              overlayStyle={{
                backgroundColor: 'transparent',
                borderWidth: 0,
                opacity: 1,
                flex: 1,
                width: '100%',
                height: '100%',
                justifyContent: 'center'
              }}
            >
              <ActivityIndicator size='large' />
            </Overlay>
          </View>
        </View>
        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Powered by i-class</Text>
        <Image source={require('../../../assets/logo/iclassLogo.jpeg')} style={{ width: 20, height: 20, borderRadius: 15, resizeMode: 'stretch', alignSelf: 'center' }} />
      </View>
    </>
  );
};

export default Login;
