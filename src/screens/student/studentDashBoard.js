import { Avatar } from "@rneui/base";
import React from "react";
import { ScrollView, View, Text, Pressable,Image,Alert } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";

const StudentDashBoard = ({navigation}) =>{
    const studentList = [1,2,3]
    return(      
            <View style={{ flex: 1 }}>
              <View style={{backgroundColor:'#0c123b',flex:0.3,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
                {/* <View style={{height:85,width:85, backgroundColor:'white', borderRadius:150}}></View> */}
                <Image source={require('../../../assets/profile/studentProfile.jpg')}  style={{height:90,width:90, borderRadius:150,resizeMode:'stretch'}}/>
                <Text style={{color:'white', textAlign:'left'}}>Rakesh Mishra</Text>
                {/* <Text>kjjlk</Text> */}
              </View>
              {/* <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
              /> */}
              <View style={{flexDirection:'row',height:100}}>
                  <Pressable
                    onPress={()=>{
                      // Alert.alert('work in prgres')
                      navigation.navigate('Attendence')
                    }}
                    style={{borderRadius:5,margin:5, flex:1,borderWidth:1, backgroundColor:'lightgray',alignItems:'center', justifyContent:'center'}}>
                        <Image source={require('../../../assets/logo/attendance.png')} style={{height:50,width:50}} />
                        <Text>attendence</Text>
                  </Pressable>
                  <Pressable
                    onPress={()=>{
                      Alert.alert('work in prgres')
                    }}
                    style={{borderRadius:5,margin:5, flex:1,borderWidth:1, backgroundColor:'lightgray',alignItems:'center', justifyContent:'center'}}>
                      <Image source={require('../../../assets/logo/notification.png')} style={{height:50,width:50}} />
                      <Text>messages</Text>
                  </Pressable>
                  <Pressable
                    onPress={()=>{
                      Alert.alert('work in prgres')
                    }}
                    style={{borderRadius:5,margin:5, flex:1,borderWidth:1, backgroundColor:'lightgray',alignItems:'center', justifyContent:'center'}}>
                    <Image source={require('../../../assets/logo/fee.png')} style={{height:50,width:50}} />
                      <Text>Fees</Text>
                  </Pressable>
              </View>
              <View style={{flexDirection:'row',height:100}}>
                  <Pressable
                    onPress={()=>{
                      Alert.alert('work in prgres')
                    }}
                    style={{borderRadius:5,margin:5, flex:1,borderWidth:1, backgroundColor:'lightgray',alignItems:'center', justifyContent:'center'}}>
                      <Image source={require('../../../assets/logo/award.png')} style={{height:50,width:50}} />
                      <Text>Exam Marks</Text>
                  </Pressable>
                  <Pressable
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
                  </Pressable>
              </View>
              <View style={{flexDirection:'row',height:100}}>
                  <Pressable
                    onPress={()=>{
                      Alert.alert('work in prgres')
                    }}
                    style={{borderRadius:5,margin:5, flex:1,borderWidth:1, backgroundColor:'lightgray',alignItems:'center', justifyContent:'center'}}>
                      <Image source={require('../../../assets/logo/timetable.png')} style={{height:50,width:50}} />
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
        
              <View style={{flex:0.4,marginTop:5, backgroundColor:'lightgray',padding:10}}>
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
                </ScrollView>
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

export default StudentDashBoard;