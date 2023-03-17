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
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import { Avatar } from '@react-native-material/core';
import { Avatar } from '@rneui/themed';

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
          <Avatar
            size={85}
            rounded
            source={{
              uri: "https://fastly.picsum.photos/id/1045/200/200.jpg?hmac=NOMPYGOtm89-zlf7NNDG7qSjCOy3XpvrdQRBF4aUZgE"
            }} />
          <View>
            <View style={{ flexDirection: 'row' }}>

              <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 10 }}>{selectedStudent.name}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 10 }}>
                {selectedStudent.className} {selectedStudent.sectionName}
              </Text>
            </View>
          </View>
        </View>
        {/* <Image
          source={{ uri: BASE_PATH + proileImage }}
          style={styles.sideMenuProfileIcon}
        /> */}
      </View>

      {/* LIST ITEMS */}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          {/* <Icon name="account" size={20} /> */}
          <DrawerItem
            style={{ width: 200 }}
            label="Student"
            onPress={() => {
              // Linking.openURL('https://aboutreact.com/')
              Alert.alert('this section is in development mode')
            }}
          />
        </View>
        <DrawerItem
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
        {/* <View style={styles.customItem}>
          <Text
            onPress={() => {
              Linking.openURL('https://aboutreact.com/');
            }}>
            Rate Us
          </Text>
          <Image
            source={{ uri: BASE_PATH + 'star_filled.png' }}
            style={styles.iconStyle}
          />
        </View> */}
      </DrawerContentScrollView>
      {/* <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey'
        }}>
        www.aboutreact.com
      </Text> */}
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