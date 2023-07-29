import React from "react";
import { SafeAreaView, View, Text, Pressable, Image, Alert } from "react-native";
import { useSelector } from "react-redux";
import StudentHeader from "../homepage/studentHeader";
import BackgroundScreen from "../homepage/backgroundScreen";
import { ScrollView } from "react-native-gesture-handler";

const StudentDashBoard = ({ navigation }) => {
  const data = useSelector((state) => state)
  const selectedStudent = data.selectedStudentDetails.data;
  return (
    <>
      <BackgroundScreen />
      <SafeAreaView style={{ flex: 1, position: 'absolute', width: '100%', height: '100%', padding: 10 }}>
        <View style={{ flex: 1 }}><StudentHeader /></View>
        <View style={{ flex: 6, justifyContent: "space-between", paddingTop: 35 }}>
          <ScrollView>
            <View style={{ flexDirection: 'row', height: 100 }}>
              <Pressable
                onPress={() => {
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
            <View style={{ flexDirection: 'row', height: 100, marginTop: 10 }}>
              <Pressable
                onPress={() => {
                  navigation.navigate('FeeStatus')
                }}
                style={{ borderRadius: 5, margin: 5, flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../../assets/logo/fee.png')} style={{ height: 50, width: 50 }} />
                <Text style={{ color: '#2E4AA0', fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>Fees</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  Alert.alert('Under Development')
                  // navigation.navigate('ExamMarks')
                }}
                style={{ borderRadius: 5, margin: 5, flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../../assets/logo/award.png')} style={{ height: 50, width: 50 }} />
                <Text style={{ color: '#2E4AA0', fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>Exams</Text>
              </Pressable>
            </View>
            <View style={{ flexDirection: 'row', height: 100, marginTop: 10 }}>
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
                  navigation.navigate('Holidays')
                }}
                style={{ borderRadius: 5, margin: 5, flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../../assets/logo/holidays.png')} style={{ height: 50, width: 50 }} />
                <Text style={{ color: '#2E4AA0', fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>Holidays</Text>
              </Pressable>
            </View>
            <View style={{ flexDirection: 'row', height: 100, marginTop: 10 }}>
              <Pressable
                onPress={() => {
                  navigation.navigate('TimeTable')
                }}
                style={{ borderRadius: 5, margin: 5, flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../../assets/logo/timetable.png')} style={{ height: 50, width: 50 }} />
                <Text style={{ color: '#2E4AA0', fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>Time Table</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate('StudentProfile')
                }}
                style={{ borderRadius: 5, margin: 5, flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../../assets/logo/resume.png')} style={{ height: 50, width: 50 }} />
                <Text style={{ color: '#2E4AA0', fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>Profile</Text>
              </Pressable>
            </View>
            <View style={{ flexDirection: 'row', height: 100, marginTop: 10 }}>
              <Pressable
                onPress={() => {
                  navigation.navigate('Announcement')
                }}
                style={{ borderRadius: 5, margin: 5, flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../../assets/logo/megaphone.png')} style={{ height: 50, width: 50 }} />
                <Text style={{ color: '#2E4AA0', fontSize: 16, alignSelf: 'center', fontWeight: 'bold' }}>Announcement</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate('Conveyance')
                }}
                style={{ borderRadius: 5, margin: 5, flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../../assets/logo/schoolbus.png')} style={{ height: 50, width: 50 }} />
                <Text style={{ color: '#2E4AA0', fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>Conveyance</Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}

export default StudentDashBoard;