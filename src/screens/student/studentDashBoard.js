import { Avatar } from "@rneui/base";
import React from "react";
import { ScrollView, View, Text, Pressable, Image, Alert, Dimensions } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')
import { useSelector } from "react-redux";
import StudentHeader from "../homepage/studentHeader";


const StudentDashBoard = ({ navigation }) => {
  const data = useSelector((state) => state)
  const selectedStudent = data.selectedStudentDetails.data;
  return (
    <>
      <View style={{
        width: SCREEN_WIDTH,
        height: 0,
        borderTopColor: "#2E4AA0",
        borderTopWidth: SCREEN_HEIGHT,
        borderRightWidth: SCREEN_WIDTH,
        borderRightColor: '#F0BA19'
      }}>
      </View>
      <View style={{ flex: 1, position: 'absolute', width: '100%' }}>
      <View style={{ flex: 1 }}><StudentHeader /></View>


        <View style={{ flexDirection: 'row', height: 100 }}>
          <Pressable
            onPress={() => {
              // Alert.alert('work in prgres')
              navigation.navigate('Attendence')
            }}
            style={{ borderRadius: 5, margin: 5, flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/logo/attendance.png')} style={{ height: 50, width: 50 }} />
            <Text style={{ color: '#2E4AA0', fontSize: 20, fontWeight: 'bold' }}>Attendence</Text>
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
          {/* <Pressable
                    onPress={()=>{
                      Alert.alert('work in prgres')
                    }}
                    style={{borderRadius:5,margin:5, flex:1, backgroundColor:'lightgray',alignItems:'center', justifyContent:'center'}}>
                      <Image source={require('../../../assets/logo/document.png')} style={{height:50,width:50}} />
                      <Text>Document</Text>
                  </Pressable>
                  <Pressable
                    onPress={()=>{
                      Alert.alert('work in prgres')
                    }}
                    style={{borderRadius:5,margin:5, flex:1, backgroundColor:'lightgray',alignItems:'center', justifyContent:'center'}}>
                      <Image source={require('../../../assets/logo/holidays.png')} style={{height:50,width:50}} />
                      <Text>Holidays</Text>
                  </Pressable> */}
        </View>


        {/* <View style={{flex:0.4,marginTop:5, backgroundColor:'lightgray',padding:10}}>
                <Text style={{color:'black'}}>ACTIVITIES</Text>
                <Pressable style={{position:'absolute', right:10, top:5, borderRadius:15, backgroundColor:'darkgray', paddingHorizontal:5, elevation:10}}>
                  <Text>See All</Text>
                </Pressable>

                <ScrollView horizontal={true} style={{flexDirection:'row', paddingVertical:10}}>
                  <Pressable style={{height:90,width:90,backgroundColor:'red', margin:3,borderRadius:15}}>

                  </Pressable>
                  <Pressable style={{height:90,width:90,backgroundColor:'green', margin:3,borderRadius:15}}>

                  </Pressable>
                  <Pressable style={{height:90,width:90,backgroundColor:'red', margin:3,borderRadius:15}}>

                  </Pressable>
                 
                  <Pressable style={{height:90,width:90,backgroundColor:'yellow', margin:3,borderRadius:15}}>

                  </Pressable>
                  <Pressable style={{height:90,width:90,backgroundColor:'yellow', margin:3,borderRadius:15}}>

</Pressable>
                </ScrollView> */}
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
        {/* </View> */}
      </View>
    </>
  );
}

export default StudentDashBoard;