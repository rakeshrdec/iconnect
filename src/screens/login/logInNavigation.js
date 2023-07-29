/**
 * Sample React Native LoginNavigation
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentCard from '../student/studentCard';
import StudentDashBoard from '../student/studentDashBoard';
import AttendanceMonth from '../student/attendance/attendanceMonth';
import AttendanceYear from '../student/attendance/attendanceYear';
import TimeTable from '../student/timeTable/timeTable';
import Conveyance from '../student/conveyance/conveyance';

import studentProfile from '../student/profile/profile';
import Holidays from '../holidays/holidays';
import FeeStatus from '../student/fees/FeeStatus';
import Announcement from '../announcement/announcement';
import ViewDocuments from '../student/viewDocuments/viewDocuments';
import Notifications from '../notifications/notifications';
import ExamMarks from '../student/examMarks/examMarks';
import Login from './login';
import HomePage from '../homepage/userProfile';
import AboutSchool from '../aboutSchool/aboutSchool';
import ChangePassword from '../changePassword/changePassword';
import { Provider } from 'react-redux';
import store from '../../redux/store'

const Stack = createNativeStackNavigator();

const LoginNavigation = () => {
  console.disableYellowBox = true;

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Login'}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false, title: 'Welcome' }}
          />
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{ headerShown: false, title: 'Welcome' }}
          />
          <Stack.Screen
            name="StudentCard"
            component={StudentCard}
            options={{ headerShown: true, title: 'Student List',headerTintColor:'white',headerBackVisible:false,headerTitleAlign:'center',            
            headerStyle: {
              alignItems:'center',
              backgroundColor:'#2E4AA0',
              justifyContent:'center',
            } }}
            
          />
          <Stack.Screen
            name="StudentDashBoard"
            component={StudentDashBoard}
            options={{ headerShown: false, title: 'Home' }}
          />
          <Stack.Screen
            name="AttendanceMonth"
            component={AttendanceMonth}
            options={{ headerShown: false, title: 'Home' }}
          />
          <Stack.Screen
            name="AttendanceYear"
            component={AttendanceYear}
            options={{ headerShown: false, title: 'Home' }}
          />
          <Stack.Screen
            name="TimeTable"
            component={TimeTable}
            options={{ headerShown: false, title: 'Home' }}
          />
          <Stack.Screen
            name="Holidays"
            component={Holidays}
            options={{ headerShown: false, title: 'Home' }}
          />

          <Stack.Screen
            name="Announcement"
            component={Announcement}
            options={{ headerShown: false, title: 'Home' }}
          />
          <Stack.Screen
            name="Notifications"
            component={Notifications}
            options={{ headerShown: false, title: 'Home' }}
          />
          <Stack.Screen
            name="ExamMarks"
            component={ExamMarks}
            options={{ headerShown: false, title: 'Home' }}
          />
          <Stack.Screen
            name="ViewDocuments"
            component={ViewDocuments}
            options={{ headerShown: false, title: 'Home' }}
          />

          <Stack.Screen
            name="FeeStatus"
            component={FeeStatus}
            options={{ headerShown: false, title: 'Home' }}
          />
          <Stack.Screen
            name='StudentProfile'
            component={studentProfile}
          />
          <Stack.Screen
            name='AboutSchool'
            component={AboutSchool}
          />
            <Stack.Screen
            name='ChangePassword'
            component={ChangePassword}
          />
           <Stack.Screen
            name='Conveyance'
            component={Conveyance}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default LoginNavigation;
