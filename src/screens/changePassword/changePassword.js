import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Pressable, Text, View, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { useSelector } from "react-redux";
import BackgroundScreen from "../homepage/backgroundScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import Loader from "../homepage/loader";
import { apiUrl } from '../../models/data';

const Stack = createNativeStackNavigator();

const ChangePassword = ({ navigation }) => {

  const data = useSelector((state) => state)
  const selectedStudentData = data.selectedStudentDetails;
  const [selectedStudent, setSelectedStudent] = useState(selectedStudentData.data);

  const [hideOldPassword, setHideOldPassword] = useState(true);
  const [hideNewPassword, setHideNewPassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showLoader, setShowLoader] = useState(false);

  const onLogin = async () => {
    setShowLoader(true);
    console.log(oldPassword, newPassword, confirmPassword, selectedStudent.mobile);
    if (oldPassword == undefined || oldPassword.length == 0) {
      Alert.alert("Old Password is Blank")
      setShowLoader(false);
    } else if (newPassword == undefined || newPassword.length == 0) {
      Alert.alert("New Password is Blank")
      setShowLoader(false);
    } else if (confirmPassword == undefined || confirmPassword.length == 0) {
      Alert.alert("Confirm Password is Blank")
      setShowLoader(false);
    } else if (newPassword !== confirmPassword) {
      Alert.alert("Confirm Password Does Not Match.")
      setShowLoader(false);
    } else {
      {

        await fetch(apiUrl +`/student/changePassword`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              "mobile": selectedStudent.mobile,
              "oldPassword": oldPassword,
              "newPassword": newPassword
            }
          )
        }).then((res) => {
          if (res.status == 200) {
            setShowLoader(false)
            Alert.alert("Password has been Updated Successfully.")
          }
          else {
            setShowLoader(false)
            Alert.alert("Password is Wrong. So, Unable to Update")
          }
        }).catch(function (error) {
          setShowLoader(false)
          console.log('There has been a problem with your fetch operation: ' + error.message);
        });
      }
    }
  }

  return (
    <>
      <BackgroundScreen />
      <SafeAreaView style={{ flex: 1, position: 'absolute', width: '100%', height: '100%', justifyContent: 'center' }}>
        <View style={{ backgroundColor: 'white', width: '95%', alignSelf: 'center', borderRadius: 15, minHeight: 300, paddingTop: 5 }}>

          <View style={{ borderColor: '#F0BA19', width: '100%', justifyContent: 'center', padding: 10, borderRadius: 20, }}>

            <Input
              onChangeText={(e) => {
                setOldPassword(e)
              }}
              inputStyle={{ color: 'black', height: 30, fontSize: 18 }}
              placeholder='Enter Old Password'
              placeholderTextColor='black'
              secureTextEntry={hideOldPassword}
              leftIconContainerStyle={{ borderWidth: 0, marginRight: 20 }}

              leftIcon={
                <Icon
                  type='entypo'
                  name='lock'
                  size={20}
                  color='black'
                />}
              rightIcon={
                hideOldPassword ?
                  <Icon
                    onPress={() => { setHideOldPassword(!hideOldPassword) }}
                    type='entypo'
                    name='eye-with-line'
                    size={20}
                    color='black'
                  /> :
                  <Icon
                    onPress={() => { setHideOldPassword(!hideOldPassword) }}
                    type='entypo'
                    name='eye'
                    size={20}
                    color='black'
                  />
              }
            />

            <Input
              onChangeText={(e) => {
                setNewPassword(e)
              }}
              inputStyle={{ color: 'black', height: 30, fontSize: 18 }}
              placeholder='Enter New Password'
              placeholderTextColor='black'
              secureTextEntry={hideNewPassword}
              leftIconContainerStyle={{ borderWidth: 0, marginRight: 20 }}

              leftIcon={
                <Icon
                  type='entypo'
                  name='lock'
                  size={20}
                  color='black'
                />}
              rightIcon={
                hideNewPassword ?
                  <Icon
                    onPress={() => { setHideNewPassword(!hideNewPassword) }}
                    type='entypo'
                    name='eye-with-line'
                    size={20}
                    color='black'
                  /> :
                  <Icon
                    onPress={() => { setHideNewPassword(!hideNewPassword) }}
                    type='entypo'
                    name='eye'
                    size={20}
                    color='black'
                  />
              }
            />

            <Input
              onChangeText={(e) => {
                setConfirmPassword(e)
              }}
              inputStyle={{ color: 'black', height: 30, fontSize: 18 }}
              placeholder='Confirm Password'
              placeholderTextColor='black'
              secureTextEntry={hideConfirmPassword}
              leftIconContainerStyle={{ borderWidth: 0, marginRight: 20 }}

              leftIcon={
                <Icon
                  type='entypo'
                  name='lock'
                  size={20}
                  color='black'
                />}
              rightIcon={
                hideConfirmPassword ?
                  <Icon
                    onPress={() => { setHideConfirmPassword(!hideConfirmPassword) }}
                    type='entypo'
                    name='eye-with-line'
                    size={20}
                    color='black'
                  /> :
                  <Icon
                    onPress={() => { setHideConfirmPassword(!hideConfirmPassword) }}
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
              <Text style={{ color: 'white', textAlign: 'center', alignSelf: 'center', fontSize: 25 }}>Update Password</Text>
            </Pressable>
            <Loader message="Updating Password ......." showLoader={showLoader} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ChangePassword;
