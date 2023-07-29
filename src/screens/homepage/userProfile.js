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
import AttendanceIndex from '../student/attendance/attendanceIndex';
import AboutSchool from '../aboutSchool/aboutSchool';
import ChangePassword from '../changePassword/changePassword';
import Conveyance from '../student/conveyance/conveyance';

import {
  Text,
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import StudentDashBoard from '../student/studentDashBoard';
import StudentProfile from '../student/profile/profile';
import { Icon } from 'react-native-elements';


const GradientHeader = props => (
  <View style={{ backgroundColor: '#2E4AA0', paddingTop: 30 }}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10 }}>

      <Icon name="list" type="Ionicons" size={30} color="white" onPress={() => {
        props.navigation.openDrawer()
      }} />
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>{props.route.name}</Text>

      <Icon name="home" type="material" size={30} color="white" onPress={() => {
        props.navigation.jumpTo('Home')
      }} />
      <Icon name="settings" type="material" size={30} color="white" onPress={() => {
        props.navigation.jumpTo('ChangePassword')
      }} />

      <Icon name="logout" type="Ionicons" size={30} color="white" onPress={() => {
        Alert.alert('Hold on', 'Do you really want to exit?', [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          { text: 'OK', onPress: () => RNExitApp.exitApp() },
        ]);
      }} />
    </View>

  </View>
)

const Drawer = createDrawerNavigator();
const HomePage = () => {

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home" style={{ borderWidth: '1' }}
        screenOptions={{
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={props => <CustomSidebarMenu {...props} />}
      >

        <Drawer.Screen name="Home" component={StudentDashBoard} options={{
          headerTintColor: 'white',
          headerShown: 'false',
          header: props => <GradientHeader {...props} />,
          headerStyle: {
            backgroundColor: '#2E4AA0',
          },
        }} />


        <Drawer.Screen name="Attendance" component={AttendanceIndex}
          options={{
            title: 'Attendance',
            headerTintColor: 'white',
            headerShown: 'false',
            header: props => <GradientHeader {...props} />,
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
          }} />
        <Drawer.Screen name="TimeTable" component={TimeTable}
          options={{
            title: 'Time Table',
            headerTintColor: 'white',
            headerShown: 'false',
            header: props => <GradientHeader {...props} />,
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
          }}
        />
        <Drawer.Screen name="Holidays" component={Holidays}
          options={{
            title: 'Holidays',
            headerTintColor: 'white',
            headerShown: 'false',
            header: props => <GradientHeader {...props} />,
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
          }}
        />

        <Drawer.Screen name="Announcement" component={Announcement}
          options={{
            title: 'Announcement',
            headerTintColor: 'white',
            headerShown: 'false',
            header: props => <GradientHeader {...props} />,
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
          }}
        />

        <Drawer.Screen name="ExamMarks" component={ExamMarks}
          options={{
            title: 'Exams',
            headerTintColor: 'white',
            headerShown: 'false',
            header: props => <GradientHeader {...props} />,
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
          }}
        />

        <Drawer.Screen name="Notifications" component={Notifications}
          options={{
            title: 'Notifications',
            headerTintColor: 'white',
            headerShown: 'false',
            header: props => <GradientHeader {...props} />,
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
          }}
        />

        <Drawer.Screen name="ViewDocuments" component={ViewDocuments}
          options={{
            title: 'View Documents',
            headerTintColor: 'white',
            headerShown: 'false',
            header: props => <GradientHeader {...props} />,
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
          }}
        />

        <Drawer.Screen name="FeeStatus" component={FeeStatus}
          options={{
            title: 'Fee Status',
            headerTintColor: 'white',
            headerShown: 'false',
            header: props => <GradientHeader {...props} />,
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
          }}
        />
        <Drawer.Screen name="StudentProfile" component={StudentProfile}
          options={{
            title: 'Student Profile',
            headerTintColor: 'white',
            headerShown: 'false',
            header: props => <GradientHeader {...props} />,
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
          }}
        />

        <Drawer.Screen name="AboutSchool" component={AboutSchool}
          options={{
            title: 'About School',
            headerTintColor: 'white',
            headerShown: 'false',
            header: props => <GradientHeader {...props} />,
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
          }}
        />

        <Drawer.Screen name="ChangePassword" component={ChangePassword}
          options={{
            title: 'Change Password',
            headerTintColor: 'white',
            headerShown: 'false',
            header: props => <GradientHeader {...props} />,
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
          }}
        />

        <Drawer.Screen name="Conveyance" component={Conveyance}
          options={{
            title: 'Conveyance',
            headerTintColor: 'white',
            headerShown: 'false',
            header: props => <GradientHeader {...props} />,
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>



  );
};

export default HomePage;
