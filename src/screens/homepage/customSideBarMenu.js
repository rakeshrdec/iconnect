// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  Alert,
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
                  style: 'cancel',
                },
                { text: 'OK', onPress: () => RNExitApp.exitApp() },
              ]);
            }}
          />
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default CustomSidebarMenu;