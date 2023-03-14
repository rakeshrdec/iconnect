import Icon from 'react-native-vector-icons/Entypo';
import { Avatar } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable,Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const AttendenceYear = ({navigation}) =>{
    useEffect(()=>{
        fetch(`http://13.127.128.192:8081/student/getStudentAttendancesByStudentAndSession?studentId=1&startDate=2022-06-01&endDate=2023-05-31&sessionYear=2`).then((res)=>{
            res.json().then((data)=>{
                // console.log("data from api is ", (data))
                if ( data != '') {
                //    var  holidaysDates = {}
                    data.map((d,i)=>{
                        // console.log("data  is ",d)
                        if(d.present != '' || d.absent != '') {
                                presentCount[i] = d.present
                                absentCount[i] = d.absent 
                                publicHoliday[i] = d.totalpresent
                                weeklyoff[i] = d.totalweekend
                        }
                    })
                //     setHolidaysDates(holidaysDates);
                }
            })
        })
    },[])
    const [yearToggle,setYearToggle] = useState(false);
    const studentList = [1,2,3]
    var presentCount = [9,19,12,19,12,12,12,12,13,12,11,9]
    var absentCount = [10,7,7,1,2,3,1,4,3,1,1,9]
    var publicHoliday = [10,7,7,1,2,3,1,4,3,1,1,9]
    var weeklyoff = [10,7,7,1,2,3,1,4,3,1,1,9]
 
    const [year,setYear] = useState('2022-2023')
    return(
    <SafeAreaView style={{flex:1}}>
            <View style={{flex:3,justifyContent:'center',marginTop:-40}}>
            {/* <Text style={{color:'white', fontSize:26, fontWeight:'bold',alignSelf:'center'}}>Home</Text> */}
            <View style={{flex:0.8, marginHorizontal:20, borderRadius:15,backgroundColor:'white',}}>
                <View style={{flex:1, backgroundColor:'white', borderBottomWidth:1,borderTopEndRadius:15,borderTopStartRadius:15, justifyContent:'space-between', flexDirection:'row',paddingHorizontal:20, alignItems:'center'}}>
                    <Text style={{color:'darkblue'}}>Year of {year}</Text>
                    <Icon name="dots-three-horizontal" size={30} color='darkblue' onPress={()=>{setYearToggle(!yearToggle)}}/>
                </View>
                <View style={{flex:1, backgroundColor:'white', borderBottomWidth:1, flexDirection:'row',justifyContent:'space-between', alignItems:'center', paddingHorizontal:10}}>
                    <Text style={{color:'darkblue'}}>Month</Text>
                    <View style={{position:'absolute',right:5,flexDirection:'row',}}>
                    <Text style={{color:'green', marginHorizontal:5,width:50,textAlign:'center'}}>Present</Text>
                    <Text style={{color:'#b942f5', marginHorizontal:5,width:50,textAlign:'center'}}>W/F</Text>
                    <Text style={{color:'#f58a42', marginHorizontal:5,width:50,textAlign:'center'}}>P/H</Text>
                    <Text style={{color:'red', marginHorizontal:5,width:50,textAlign:'center'}}>Absent</Text>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'white', borderBottomWidth:1,paddingHorizontal:10, alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
                     <Text style={{color:'darkblue'}}>June</Text>
                    <View style={{position:'absolute',right:5,flexDirection:'row',}}>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{absentCount[0]}</Text>
                    <Text style={{color:'#b942f5', marginHorizontal:5, width:50, textAlign:'center'}}>{absentCount[0]}</Text>
                    <Text style={{color:'#f58a42', marginHorizontal:5, width:50, textAlign:'center'}}>{absentCount[0]}</Text>

                    <Text style={{color:'red', marginHorizontal:5,  width:50, textAlign:'center'}}>{presentCount[0]}</Text>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'white', borderBottomWidth:1,paddingHorizontal:10, alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
                     <Text style={{color:'darkblue'}}>July</Text>
                    <View style={{position:'absolute',right:5,flexDirection:'row',}}>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[1]}</Text>
                    <Text style={{color:'#b942f5', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[1]}</Text>
                    <Text style={{color:'#f58a42', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[1]}</Text>

                    <Text style={{color:'red', marginHorizontal:5,  width:50, textAlign:'center'}}>{absentCount[1]}</Text>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'white', borderBottomWidth:1,paddingHorizontal:10, alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
                     <Text style={{color:'darkblue'}}>August</Text>
                    <View style={{position:'absolute',right:5,flexDirection:'row',}}>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[2]}</Text>
                    <Text style={{color:'#b942f5', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[2]}</Text>
                    <Text style={{color:'#f58a42', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[2]}</Text>

                    <Text style={{color:'red', marginHorizontal:5,  width:50, textAlign:'center'}}>{absentCount[2]}</Text>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'white', borderBottomWidth:1,paddingHorizontal:10, alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
                     <Text style={{color:'darkblue'}}>September</Text>
                    <View style={{position:'absolute',right:5,flexDirection:'row',}}>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[3]}</Text>
                    <Text style={{color:'#b942f5', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[3]}</Text>
                    <Text style={{color:'#f58a42', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[3]}</Text>

                    <Text style={{color:'red', marginHorizontal:5,  width:50, textAlign:'center'}}>{absentCount[3]}</Text>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'white', borderBottomWidth:1,paddingHorizontal:10, alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
                     <Text style={{color:'darkblue'}}>October</Text>
                    <View style={{position:'absolute',right:5,flexDirection:'row',}}>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[4]}</Text>
                    <Text style={{color:'#b942f5', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[4]}</Text>
                    <Text style={{color:'#f58a42', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[4]}</Text>

                    <Text style={{color:'red', marginHorizontal:5,  width:50, textAlign:'center'}}>{absentCount[4]}</Text>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'white', borderBottomWidth:1,paddingHorizontal:10, alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
                     <Text style={{color:'darkblue'}}>November</Text>
                    <View style={{position:'absolute',right:5,flexDirection:'row',}}>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[5]}</Text>
                    <Text style={{color:'#b942f5', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[5]}</Text>
                    <Text style={{color:'#f58a42', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[5]}</Text>

                    <Text style={{color:'red', marginHorizontal:5,  width:50, textAlign:'center'}}>{absentCount[5]}</Text>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'white', borderBottomWidth:1,paddingHorizontal:10, alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
                     <Text style={{color:'darkblue'}}>December</Text>
                    <View style={{position:'absolute',right:5,flexDirection:'row',}}>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[6]}</Text>
                    <Text style={{color:'#b942f5', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[6]}</Text>
                    <Text style={{color:'#f58a42', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[6]}</Text>

                    <Text style={{color:'red', marginHorizontal:5,  width:50, textAlign:'center'}}>{absentCount[6]}</Text>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'white', borderBottomWidth:1,paddingHorizontal:10, alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
                     <Text style={{color:'darkblue'}}>January</Text>
                    <View style={{position:'absolute',right:5,flexDirection:'row',}}>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[7]}</Text>
                    <Text style={{color:'#b942f5', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[7]}</Text>
                    <Text style={{color:'#f58a42', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[7]}</Text>

                    <Text style={{color:'red', marginHorizontal:5,  width:50, textAlign:'center'}}>{absentCount[7]}</Text>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'white', borderBottomWidth:1,paddingHorizontal:10, alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
                     <Text style={{color:'darkblue'}}>February</Text>
                    <View style={{position:'absolute',right:5,flexDirection:'row',}}>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[8]}</Text>
                    <Text style={{color:'#b942f5', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[8]}</Text>
                    <Text style={{color:'#f58a42', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[8]}</Text>

                    <Text style={{color:'red', marginHorizontal:5,  width:50, textAlign:'center'}}>{absentCount[8]}</Text>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'white', borderBottomWidth:1,paddingHorizontal:10, alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
                     <Text style={{color:'darkblue'}}>March</Text>
                    <View style={{position:'absolute',right:5,flexDirection:'row',}}>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[9]}</Text>
                    <Text style={{color:'#b942f5', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[9]}</Text>
                    <Text style={{color:'#f58a42', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[9]}</Text>

                    <Text style={{color:'red', marginHorizontal:5,  width:50, textAlign:'center'}}>{absentCount[9]}</Text>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'white', borderBottomWidth:1,paddingHorizontal:10, alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
                     <Text style={{color:'darkblue'}}>April</Text>
                    <View style={{position:'absolute',right:5,flexDirection:'row',}}>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[10]}</Text>
                    <Text style={{color:'#b942f5', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[10]}</Text>
                    <Text style={{color:'#f58a42', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[10]}</Text>

                    <Text style={{color:'red', marginHorizontal:5,  width:50, textAlign:'center'}}>{absentCount[10]}</Text>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'white', borderBottomWidth:1,paddingHorizontal:10, alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
                     <Text style={{color:'darkblue'}}>May</Text>
                    <View style={{position:'absolute',right:5,flexDirection:'row',}}>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[11]}</Text>
                    <Text style={{color:'#b942f5', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[11]}</Text>
                    <Text style={{color:'#f58a42', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[11]}</Text>

                    <Text style={{color:'red', marginHorizontal:5,  width:50, textAlign:'center'}}>{absentCount[11]}</Text>
                    </View>
                </View>
                {yearToggle?<View  style={{height:200,width:150,backgroundColor:'midnightblue', position:'absolute', top:30, right:10, borderRadius:15}}>
                    <ScrollView style={{backgroundColor:'white', height:130,width:100, margin:10}}>
                        <Pressable style={{justifyContent:'center', backgroundColor:'midnightblue', padding:10,borderRadius:15}}
                            onPress={()=>{setYearToggle(false)
                                         setYear('2022-2023')
                                    }}
                        >
                            <Text style={{color:'white'}}>2022-2023</Text>
                        </Pressable>
                        <Pressable style={{justifyContent:'center', backgroundColor:'midnightblue', padding:10,borderRadius:15}}
                            onPress={()=>{setYearToggle(false)
                                         setYear('2021-2022')
                                    }}
                        >
                            <Text style={{color:'white'}}>2021-2022</Text>
                        </Pressable>
                        {/* <Pressable style={{justifyContent:'center', backgroundColor:'midnightblue', padding:10,borderRadius:15}}>
                            <Text style={{color:'white'}}>2018-1019</Text>
                        </Pressable>
                        <Pressable style={{justifyContent:'center', backgroundColor:'midnightblue', padding:10,borderRadius:15}}>
                            <Text style={{color:'white'}}>2018-1019</Text>
                        </Pressable>
                        <Pressable style={{justifyContent:'center', backgroundColor:'midnightblue', padding:10,borderRadius:15}}>
                            <Text style={{color:'white'}}>2018-1019</Text>
                        </Pressable> */}
                    </ScrollView>
                </View>:<View/>}

            </View>
        </View>
        
    </SafeAreaView>
    );
}

export default AttendenceYear;