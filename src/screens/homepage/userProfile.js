/**
 * Sample React Native HomePage
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// import MenuDrawer from 'react-native-side-drawer';
import CustomSidebarMenu from './customSideBarMenu';

import TimeTable from '../student/timeTable/timeTable';
import Holidays from '../holidays/holidays';
import FeeStatus from '../student/fees/FeeStatus';
import Announcement from '../announcement/announcement';
import ViewDocuments from '../student/viewDocuments/viewDocuments';
import Notifications from '../notifications/notifications';
import ExamMarks from '../student/examMarks/examMarks';
import AttendanceMonth from '../student/attendance/attendanceMonth';
import AttendanceYear from '../student/attendance/attendanceYear';

import {
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Button,
  Pressable,
  Alert,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import StudentDashBoard from '../student/studentDashBoard';
import StudentProfile from '../student/profile/profile';
import AttendanceIndex from '../student/attendance/attendanceIndex';




function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#0c123b', flex: 0.3, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        <View style={{ height: 85, width: 85, backgroundColor: 'white', borderRadius: 150 }}></View>
        <Text style={{ color: 'white' }}>Rakesh Mishra</Text>
      </View>
      {/* <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      /> */}
      <View style={{ flexDirection: 'row', height: 100 }}>
        <Pressable
          onPress={() => {
            // Alert.alert('work in prgres')
            navigation.navigate('AttendanceMonth')
          }}
          style={{ borderRadius: 5, margin: 5, flex: 1, borderWidth: 1, backgroundColor: 'lightgray', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../../assets/logo/attendance.png')} style={{ height: 50, width: 50 }} />
          <Text>attendance</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            Alert.alert('work in prgres')
          }}
          style={{ borderRadius: 5, margin: 5, flex: 1, borderWidth: 1, backgroundColor: 'lightgray', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../../assets/logo/notification.png')} style={{ height: 50, width: 50 }} />
          <Text>messages</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            Alert.alert('work in prgres')
          }}
          style={{ borderRadius: 5, margin: 5, flex: 1, borderWidth: 1, backgroundColor: 'lightgray', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../../assets/logo/fee.png')} style={{ height: 50, width: 50 }} />
          <Text>Fees</Text>
        </Pressable>
      </View>
      <View style={{ flexDirection: 'row', height: 100 }}>
        <Pressable
          onPress={() => {
            Alert.alert('work in prgres')
          }}
          style={{ borderRadius: 5, margin: 5, flex: 1, borderWidth: 1, backgroundColor: 'lightgray', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../../assets/logo/award.png')} style={{ height: 50, width: 50 }} />
          <Text>Exams</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            Alert.alert('work in prgres')
          }}
          style={{ borderRadius: 5, margin: 5, flex: 1, borderWidth: 1, backgroundColor: 'lightgray', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../../assets/logo/document.png')} style={{ height: 50, width: 50 }} />
          <Text>Document</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            Alert.alert('work in prgres')
          }}
          style={{ borderRadius: 5, margin: 5, flex: 1, borderWidth: 1, backgroundColor: 'lightgray', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../../assets/logo/holidays.png')} style={{ height: 50, width: 50 }} />
          <Text>Holidays</Text>
        </Pressable>
      </View>
      <View style={{ flexDirection: 'row', height: 100 }}>
        <Pressable
          onPress={() => {
            Alert.alert('work in prgres')
          }}
          style={{ borderRadius: 5, margin: 5, flex: 1, borderWidth: 1, backgroundColor: 'lightgray', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../../assets/logo/timetable.png')} style={{ height: 50, width: 50 }} />
          <Text>Time Table</Text>
        </Pressable>
        {/* <Pressable
            onPress={()=>{
              Alert.alert('work in prgres')
            }}
            style={{borderRadius:5,margin:5, flex:1,borderWidth:1, backgroundColor:'lightgray',alignItems:'center', justifyContent:'center'}}>
              <Image source={require('../../../assets/logo/document.png')} style={{height:50,width:50}} />
              <Text>Document</Text>
          </Pressable>
          <Pressable
            onPress={()=>{
              Alert.alert('work in prgres')
            }}
            style={{borderRadius:5,margin:5, flex:1,borderWidth:1, backgroundColor:'lightgray',alignItems:'center', justifyContent:'center'}}>
              <Image source={require('../../../assets/logo/holidays.png')} style={{height:50,width:50}} />
              <Text>Holidays</Text>
          </Pressable> */}
      </View>

      <View style={{ flex: 0.3, marginTop: 5, backgroundColor: 'lightgray', padding: 10 }}>
        <Text style={{ color: 'black' }}>Activities</Text>
        {/* <ScrollView style={{height:100, flexDirection:'row', backgroundColor:'darkblue'}}>
        <Pressable
            onPress={()=>{
              Alert.alert('work in prgres')
            }}
            // style={{borderRadius:5,margin:5, flex:1,borderWidth:1, backgroundColor:'lightgray',alignItems:'center', justifyContent:'center'}}
            >
              <Image source={require('../../../assets/logo/timetable.png')} style={{height:50,width:50}} />
              <Text>Time Table</Text>
          </Pressable>
          <Pressable
            onPress={()=>{
              Alert.alert('work in prgres')
            }}
            // style={{borderRadius:5,margin:5, flex:1,borderWidth:1, backgroundColor:'lightgray',alignItems:'center', justifyContent:'center'}}
            >
              <Image source={require('../../../assets/logo/timetable.png')} style={{height:50,width:50}} />
              <Text>Time Table</Text>
          </Pressable>
          <Pressable
            onPress={()=>{
              Alert.alert('work in prgres')
            }}
            // style={{borderRadius:5,margin:5, flex:1,borderWidth:1, backgroundColor:'lightgray',alignItems:'center', justifyContent:'center'}}
            >
              <Image source={require('../../../assets/logo/timetable.png')} style={{height:50,width:50}} />
              <Text>Time Table</Text>
          </Pressable>
          <Pressable
            onPress={()=>{
              Alert.alert('work in prgres')
            }}
            // style={{borderRadius:5,margin:5, flex:1,borderWidth:1, backgroundColor:'lightgray',alignItems:'center', justifyContent:'center'}}
            >
              <Image source={require('../../../assets/logo/timetable.png')} style={{height:50,width:50}} />
              <Text>Time Table</Text>
          </Pressable>
          <Pressable
            onPress={()=>{
              Alert.alert('work in prgres')
            }}
            // style={{borderRadius:5,margin:5, flex:1,borderWidth:1, backgroundColor:'lightgray',alignItems:'center', justifyContent:'center'}}
            >
              <Image source={require('../../../assets/logo/timetable.png')} style={{height:50,width:50}} />
              <Text>Time Table</Text>
          </Pressable>
        </ScrollView> */}
      </View>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();
const HomePage = () => {

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home" style={{ borderWidth: '1' }}
        screenOptions={{
          activeTintColor: 'red',
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={props => <CustomSidebarMenu {...props} />}
      >
        {/* <Drawer.Screen name="Home" component={HomeScreen} options={{
        headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#0c123b',            
          },
      }}/> */}
        <Drawer.Screen name="Home" component={StudentDashBoard} options={{
          headerTintColor: 'white',
          headerShown: 'false',
          headerStyle: {
            backgroundColor: '#2E4AA0',
          },
        }} />
        {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
        <Drawer.Screen name="Attendance" component={AttendanceIndex}
          options={{
            headerTintColor: 'white',
            headerShown: 'false',
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
          }} />

        <Drawer.Screen name="AttendanceMonth" component={AttendanceMonth}
          options={{
            headerTintColor: 'white',
            headerShown: 'false',
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
            // headerTintColor:'red'
          }}
        />
        <Drawer.Screen name="AttendanceYear" component={AttendanceYear} />
        <Drawer.Screen name="TimeTable" component={TimeTable}
          options={{
            headerTintColor: 'white',
            headerShown: 'false',
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
            // headerTintColor:'red'
          }}
        />
        <Drawer.Screen name="Holidays" component={Holidays}
          options={{
            headerTintColor: 'white',
            headerShown: 'false',
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
            // headerTintColor:'red'
          }}
        />

        <Drawer.Screen name="Announcement" component={Announcement}
          options={{
            headerTintColor: 'white',
            headerShown: 'false',
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
            // headerTintColor:'red'
          }}
        />

        <Drawer.Screen name="ExamMarks" component={ExamMarks}
          options={{
            headerTintColor: 'white',
            headerShown: 'false',
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
            // headerTintColor:'red'
          }}
        />

        <Drawer.Screen name="Notifications" component={Notifications}
          options={{
            headerTintColor: 'white',
            headerShown: 'false',
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
            // headerTintColor:'red'
          }}
        />

        <Drawer.Screen name="ViewDocuments" component={ViewDocuments}
          options={{
            headerTintColor: 'white',
            headerShown: 'false',
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
            // headerTintColor:'red'
          }}
        />

        <Drawer.Screen name="FeeStatus" component={FeeStatus}
          options={{
            headerTintColor: 'white',
            headerShown: 'false',
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
            // headerTintColor:'red'
          }}
        />
        <Drawer.Screen name="StudentProfile" component={StudentProfile}
          options={{
            headerTintColor: 'white',
            headerShown: 'false',
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
            // headerTintColor:'red'
          }}
        />

      </Drawer.Navigator>
    </NavigationContainer>


    // <View>
    //    <MenuDrawer
    //       open={true}
    //       position={'left'}
    //       drawerContent={drawerContent()}
    //       drawerPercentage={45}
    //       animationTime={250}
    //       overlay={true}
    //       opacity={0.4}
    //     >
    //       <TouchableOpacity onPress={console.log("this is callled")} style={styles.body}>
    //         <Text>Open</Text>
    //       </TouchableOpacity>
    //     </MenuDrawer>
    // </View>
  );
};

const styles = StyleSheet.create({

});

export default HomePage;
