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
import AttendanceIndex from '../student/attendance/attendanceIndex';

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
import ActionBarImage from './actionBarImage';
import { Header, Icon } from 'react-native-elements';



const GradientHeader = props => (
  <View style={{ backgroundColor: 'green' }}>
    <Header {...props}
      backgroundColor='#2E4AA0'
    />
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
          // title: 'Home',
          // drawerIcon: ({focused, size}) => (
          //    <Icon
          //       name="eye"
          //       size={size}
          //       color={focused ? 'green' : 'red'}
          //    />
          // ),
          header: props => <GradientHeader {...props} />,
          headerStyle: {
            backgroundColor: '#2E4AA0',
          },
        }} />
        {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
        <Drawer.Screen name="Attendance" component={AttendanceIndex}
          options={{
            title: 'Attendance',
            headerTintColor: 'white',
            headerShown: 'false',
            headerRight: () => <ActionBarImage />,
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
          }} />
        <Drawer.Screen name="TimeTable" component={TimeTable}
          options={{
            title: 'Time Table',
            headerTintColor: 'white',
            headerShown: 'false',
            headerRight: () => <ActionBarImage />,
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
            // headerTintColor:'red'
          }}
        />
        <Drawer.Screen name="Holidays" component={Holidays}
          options={{
            title: 'Holidays',
            headerTintColor: 'white',
            headerShown: 'false',
            headerRight: () => <ActionBarImage />,
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
            // headerTintColor:'red'
          }}
        />

        <Drawer.Screen name="Announcement" component={Announcement}
          options={{
            title: 'Announcement',
            headerTintColor: 'white',
            headerShown: 'false',
            headerRight: () => <ActionBarImage />,
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
            // headerTintColor:'red'
          }}
        />

        <Drawer.Screen name="ExamMarks" component={ExamMarks}
          options={{
            title: 'Exams',
            headerTintColor: 'white',
            headerShown: 'false',
            headerRight: () => <ActionBarImage />,
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
            // headerTintColor:'red'
          }}
        />

        <Drawer.Screen name="Notifications" component={Notifications}
          options={{
            title: 'Notifications',
            headerTintColor: 'white',
            headerShown: 'false',
            headerRight: () => <ActionBarImage />,
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
            // headerTintColor:'red'
          }}
        />

        <Drawer.Screen name="ViewDocuments" component={ViewDocuments}
          options={{
            title: 'View Documents',
            headerTintColor: 'white',
            headerShown: 'false',
            headerRight: () => <ActionBarImage />,
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
            headerRight: () => <ActionBarImage />,
            headerStyle: {
              backgroundColor: '#2E4AA0',
            },
            // headerTintColor:'red'
          }}
        />
        <Drawer.Screen name="StudentProfile" component={StudentProfile}
          options={{
            title: 'Student Profile',
            headerTintColor: 'white',
            headerShown: 'false',
            headerRight: () => <ActionBarImage />,
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
