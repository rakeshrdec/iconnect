import { Avatar } from "@rneui/base";
import React from "react";
import { View, Text, Pressable, Image, Alert } from "react-native";
import { useSelector } from "react-redux";
import StudentHeader from "../homepage/studentHeader";
import Icon from 'react-native-vector-icons/AntDesign';
import RNExitApp from "react-native-exit-app";
import BackgroundScreen from "../homepage/backgroundScreen";



const StudentDashBoard = ({ navigation }) => {
  const data = useSelector((state) => state)
  const selectedStudent = data.selectedStudentDetails.data;
  return (
    <>
      <BackgroundScreen />
      <View style={{ flex: 1, position: 'absolute', width: '100%',padding:10 }}>
        <View style={{ flex: 1 }}><StudentHeader /></View>
        <View  style={{ flexDirection: 'row', height: 100,marginTop:10 }}>
            <Pressable
              onPress={() => {
                // Alert.alert('work in prgres')
                navigation.navigate('Attendance')
              }}
              style={{ borderRadius: 5, margin: 5, flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('../../../assets/logo/attendance.png')} style={{ height: 50, width: 50 }} />
              <Text style={{ color: '#2E4AA0', fontSize: 20, fontWeight: 'bold' }}>Attendance</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate('Notifications')
              }}
              style={{ borderRadius: 5, margin: 5, flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('../../../assets/logo/notification.png')} style={{ height: 50, width: 50 }} />
              <Text style={{ color: '#2E4AA0', fontSize: 20, fontWeight: 'bold' }}>Messages</Text>
            </Pressable>
        </View>
        <View  style={{ flexDirection: 'row', height: 100,marginTop:10 }}>
            <Pressable
              onPress={() => {
                // Alert.alert('work in prgres')
                navigation.navigate('FeeStatus')
              }}
              style={{ borderRadius: 5, margin: 5, flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('../../../assets/logo/fee.png')} style={{ height: 50, width: 50 }} />
              <Text style={{ color: '#2E4AA0', fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>Fees</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate('ExamMarks')
              }}
              style={{ borderRadius: 5, margin: 5, flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('../../../assets/logo/award.png')} style={{ height: 50, width: 50 }} />
              <Text style={{ color: '#2E4AA0', fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>Exams</Text>
            </Pressable>
        </View>
        <View  style={{ flexDirection: 'row', height: 100,marginTop:10 }}>
            <Pressable
              onPress={() => {
                navigation.navigate('ViewDocuments')
              }}
              style={{ borderRadius: 5, margin: 5, flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('../../../assets/logo/document.png')} style={{ height: 50, width: 50 }} />
              <Text style={{ color: '#2E4AA0', fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>Document</Text>
            </Pressable>
            <Pressable
            onPress={() => {
              // Alert.alert('work in prgres')
              navigation.navigate('Holidays')
            }}
            style={{ borderRadius: 5, margin: 5, flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/logo/holidays.png')} style={{ height: 50, width: 50 }} />
            <Text style={{ color: '#2E4AA0', fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>Holidays</Text>
            </Pressable>
        </View>
        <View  style={{ flexDirection: 'row', height: 100,marginTop:10 }}>
            <Pressable
              onPress={() => {
                // Alert.alert('work in prgres')
                navigation.navigate('TimeTable')
              }}
              style={{ borderRadius: 5, margin: 5, flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('../../../assets/logo/timetable.png')} style={{ height: 50, width: 50 }} />
              <Text style={{ color: '#2E4AA0', fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>Time Table</Text>
            </Pressable>
            <Pressable
            onPress={() => {
              // Alert.alert('work in prgres')
              navigation.navigate('StudentProfile')
            }}
            style={{ borderRadius: 5, margin: 5, flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/logo/resume.png')} style={{ height: 50, width: 50 }} />
            <Text style={{ color: '#2E4AA0', fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>Profile</Text>
          </Pressable>
        </View>
        <View  style={{ flexDirection: 'row', height: 100,marginTop:10 }}>
            <Pressable
              onPress={() => {
                // Alert.alert('work in prgres')
                navigation.navigate('Announcement')
              }}
              style={{ borderRadius: 5, margin: 5, flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('../../../assets/logo/megaphone.png')} style={{ height: 50, width: 50 }} />
              <Text style={{ color: '#2E4AA0', fontSize: 16, alignSelf: 'center', fontWeight: 'bold' }}>Announcement</Text>
            </Pressable>
        </View>
        
        {/* <View style={{ flexDirection: 'row', height: 100 }}>
          <Pressable
            onPress={() => {
              // Alert.alert('work in prgres')
              navigation.navigate('Attendance')
            }}
            style={{ borderRadius: 5, margin: 5, flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/logo/attendance.png')} style={{ height: 50, width: 50 }} />
            <Text style={{ color: '#2E4AA0', fontSize: 20, fontWeight: 'bold' }}>Attendance</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('Notifications')
            }}
            style={{ borderRadius: 5, margin: 5, flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/logo/notification.png')} style={{ height: 50, width: 50 }} />
            <Text style={{ color: '#2E4AA0', fontSize: 20, fontWeight: 'bold' }}>Messages</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              // Alert.alert('work in prgres')
              navigation.navigate('FeeStatus')
            }}
            style={{ borderRadius: 5, margin: 5, flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/logo/fee.png')} style={{ height: 50, width: 50 }} />
            <Text style={{ color: '#2E4AA0', fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>Fees</Text>
          </Pressable>
        </View>
        <View style={{ flexDirection: 'row', height: 100 }}>
          <Pressable
            onPress={() => {
              navigation.navigate('ExamMarks')
            }}
            style={{ borderRadius: 5, margin: 5, flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/logo/award.png')} style={{ height: 50, width: 50 }} />
            <Text style={{ color: '#2E4AA0', fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>Exams</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('ViewDocuments')
            }}
            style={{ borderRadius: 5, margin: 5, flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/logo/document.png')} style={{ height: 50, width: 50 }} />
            <Text style={{ color: '#2E4AA0', fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>Document</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              // Alert.alert('work in prgres')
              navigation.navigate('Holidays')
            }}
            style={{ borderRadius: 5, margin: 5, flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/logo/holidays.png')} style={{ height: 50, width: 50 }} />
            <Text style={{ color: '#2E4AA0', fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>Holidays</Text>
          </Pressable>
        </View>
        <View style={{ flexDirection: 'row', height: 100 }}>
          <Pressable
            onPress={() => {
              // Alert.alert('work in prgres')
              navigation.navigate('TimeTable')
            }}
            style={{ borderRadius: 5, margin: 5, flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/logo/timetable.png')} style={{ height: 50, width: 50 }} />
            <Text style={{ color: '#2E4AA0', fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>Time Table</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              // Alert.alert('work in prgres')
              navigation.navigate('StudentProfile')
            }}
            style={{ borderRadius: 5, margin: 5, flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/logo/resume.png')} style={{ height: 50, width: 50 }} />
            <Text style={{ color: '#2E4AA0', fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>Profile</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              // Alert.alert('work in prgres')
              navigation.navigate('Announcement')
            }}
            style={{ borderRadius: 5, margin: 5, flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/logo/megaphone.png')} style={{ height: 50, width: 50 }} />
            <Text style={{ color: '#2E4AA0', fontSize: 16, alignSelf: 'center', fontWeight: 'bold' }}>Announcement</Text>
          </Pressable>
        </View> */}
      </View>
      <Pressable
            onPress={() => {
              Alert.alert('Hold on', 'Do you really want to exit?', [
                {
                  text: 'Cancel',
                  // onPress: () => ,
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => RNExitApp.exitApp()},
              ]);
             }}
            style={{ elevation: 20, backgroundColor: 'lightyellow',  height: 40, justifyContent: 'center', borderRadius: 25, flexDirection: 'row',position:'absolute',bottom:20, width:'90%',alignSelf:'center' }}>
            <Text style={{ color: 'darkblue', textAlign: 'center', alignSelf: 'center' }}>log out</Text>
            <Icon name="rightcircle" size={35} color="#0c123b" style={{ position: 'absolute', right: 0, alignSelf: 'center' }} />
        </Pressable>   
    </>
  );
}

export default StudentDashBoard;