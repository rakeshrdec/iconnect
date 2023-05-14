// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  Alert,
  BackHandler,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import RNExitApp from 'react-native-exit-app';


import { useSelector } from "react-redux";

const CustomSidebarMenu = (props) => {

  const data = useSelector((state) => state)
  const selectedStudentData = data.selectedStudentDetails;
  const [selectedStudent, setSelectedStudent] = useState(selectedStudentData.data);
  useEffect(() => {
  }, [])


  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*Top Large Image RED SECTION */}
      <View style={{ backgroundColor: '#2E4AA0', height: '25%', justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
          {/* <Avatar
            size={85}
            rounded
            source={{
              uri: ""
            }} /> */}
          {selectedStudent.uploadImg === null ? <Image source={require('../../../assets/logo/male_student_avatar.png')} style={{ width: 70, height: 70, resizeMode: 'stretch', borderRadius: 150 }} /> : <Image source={{ uri: 'http://13.127.128.192:8081/' + selectedStudent.uploadImg }} style={{ width: 70, height: 70, resizeMode: 'stretch', borderRadius: 150 }} />}
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 10 }}>{selectedStudent.name}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 10 }}>
                {selectedStudent.className} {selectedStudent.sectionName}
              </Text>
            </View>
            <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 10 }}>
              Roll No  {selectedStudent.rollNo}
            </Text>
            <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 10 }}>
              {selectedStudent.fatherName}
            </Text>
          </View>
        </View>
      </View>

      {/* LIST ITEMS */}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <DrawerItem
            style={{ width: 200 }}
            label="About"
            onPress={() => {
              // Linking.openURL('https://aboutreact.com/')
              Alert.alert('this section is in development mode')
            }}
          />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <DrawerItem
            style={{ width: 200 }}
            label="LogOut"
            onPress={() => {
              Alert.alert('Hold on', 'do you want to exit from this app', [
                {
                  text: 'Cancel',
                  // onPress: () => ,
                  style: 'cancel',
                },
                { text: 'OK', onPress: () => RNExitApp.exitApp() },
              ]);
              // BackHandler.exitApp
            }}
          />
        </View>
        {/* <DrawerItem
          label="Teacher"
          onPress={() => {
            // Linking.openURL('https://aboutreact.com/')
            Alert.alert('this section is in development mode')
          }}
        />
        <DrawerItem
          label="Academic"
          onPress={() => {
            // Linking.openURL('https://aboutreact.com/')
            Alert.alert('this section is in development mode')
          }}
        />
        <DrawerItem
          label="Student Attendence"
          onPress={() => {
            // Linking.openURL('https://aboutreact.com/')
            Alert.alert('this section is in development mode')
          }}
        />
        <DrawerItem
          label="Exam Schedule"
          onPress={() => {
            // Linking.openURL('https://aboutreact.com/')
            Alert.alert('this section is in development mode')
          }}
        />
        <DrawerItem
          label="Mark"
          onPress={() => {
            // Linking.openURL('https://aboutreact.com/')
            Alert.alert('this section is in development mode')
          }}
        />
        <DrawerItem
          label="Leave Apply"
          onPress={() => {
            // Linking.openURL('https://aboutreact.com/')
            Alert.alert('this section is in development mode')
          }}
        />
        <DrawerItem
          label="Activities"
          onPress={() => {
            // Linking.openURL('https://aboutreact.com/')
            Alert.alert('this section is in development mode')
          }}
        />
        <DrawerItem
          label="Library"
          onPress={() => {
            // Linking.openURL('https://aboutreact.com/')
            Alert.alert('this section is in development mode')
          }}
        />
        <DrawerItem
          label="Transport"
          onPress={() => {
            // Linking.openURL('https://aboutreact.com/')
            Alert.alert('this section is in development mode')
          }}
        />
        /> */}
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;