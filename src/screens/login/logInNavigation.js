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
import AttendenceMonth from '../student/attendence/attendenceMonth';
import AttendenceYear from '../student/attendence/attendenceYear';
import TimeTable from '../student/timeTable/timeTable';
import studentProfile from '../student/profile/profile';
import Holidays from '../holidays/holidays';
import FeeStatus from '../student/fees/FeeStatus';

// import HomePage from '../homepage/userProfile';

// import type {Node} from 'react';
import {
    Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import Login from './login';
import HomePage from '../homepage/userProfile';
import { Provider } from 'react-redux';
import store from '../../redux/store'

const Stack = createNativeStackNavigator();

const LoginNavigation = () =>{

  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator initialRouteName={'Login'}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false, title: 'Welcome' }}
      />
        {/* <Stack.Navigator initialRouteName={'homePage'}> */}
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false, title: 'Welcome' }}
      />
      <Stack.Screen
        name="StudentCard"
        component={StudentCard}
        options={{ headerShown: false, title: 'Home' }}
      />
      <Stack.Screen
        name="StudentDashBoard"
        component={StudentDashBoard}
        options={{ headerShown: false, title: 'Home' }}
      />
      <Stack.Screen
        name="AttendenceMonth"
        component={AttendenceMonth}
        options={{ headerShown: false, title: 'Home' }}
      />
      <Stack.Screen
        name="AttendenceYear"
        component={AttendenceYear}
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
        name="FeeStatus"
        component={FeeStatus}
        options={{ headerShown: false, title: 'Home' }}
      />
      <Stack.Screen
        name='StudentProfile'
        component={studentProfile}
        />
      {/* <Stack.Screen name="loginOTP" component={LoginOTPPage} options={{ headerShown: false, title: 'Welcome' }} />
      <Stack.Screen name="loginUserDetail" component={LoginUserDetailPage} options={{ headerShown: false, title: 'Welcome' }} />
      <Stack.Screen name="userProfile" component={UserProfile} options={{ headerShown: false, title: 'Welcome' }} />
      <Stack.Screen name="EmployeeOnBoardingNavigations" component={EmployeeOnBoardingNavigations} options={{
        headerShown: false,
        header: props => <GradientHeader {...props} />,
        headerStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },

        // (
        //   <LinearGradient
        //     colors={['#a13388', '#10356c']}
        //     style={{ flex: 1 }}
        //     start={{ x: 0, y: 0 }}
        //     end={{ x: 1, y: 0 }}
        //   />
        // ),
      }}
      /> */}
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  );
};

const styles = StyleSheet.create({
  
});

export default LoginNavigation;
