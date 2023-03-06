import Icon from 'react-native-vector-icons/Entypo';
import { Avatar } from "@rneui/base";
import React, { useState } from "react";
import { SafeAreaView, View, Text, Pressable,Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const AttendenceYear = ({navigation}) =>{
    const [yearToggle,setYearToggle] = useState(false);
    const studentList = [1,2,3]
    const presentCount = [9,19,12,19,12,12,12,12,13,12,11,9]
    const absentCount = [10,7,7,1,2,3,1,4,3,1,1,9]
    const [year,setYear] = useState('2022-2023')
    return(
    <SafeAreaView style={{flex:1}}>
        {/* <View style={{flex:1,backgroundColor:'red',justifyContent:'center'}}>
            <Text style={{color:'white', fontSize:26, fontWeight:'bold',alignSelf:'center'}}>Home</Text>
        </View> */}
            
            {/* <View style={{height:45, backgroundColor:'white', borderRadius:15,marginTop:-25, width:'90%', alignSelf:'center',justifyContent:'center'}}>
                <Text style={{textAlign:'center', color:'darkblue', fontWeight:'bold', alignItems:'center',justifyContent:'center',alignSelf:'center'}}>Attendence</Text>                
            </View>  */}
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
                    <Text style={{color:'green', marginHorizontal:5}}>Present</Text>
                    <Text style={{color:'green', marginHorizontal:5}}>W/F</Text>
                    <Text style={{color:'green', marginHorizontal:5}}>P/H</Text>
                    <Text style={{color:'red', marginHorizontal:5}}>Absent</Text>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'white', borderBottomWidth:1,paddingHorizontal:10, alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
                     <Text style={{color:'darkblue'}}>June</Text>
                    <View style={{position:'absolute',right:5,flexDirection:'row',}}>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{absentCount[0]}</Text>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{absentCount[0]}</Text>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{absentCount[0]}</Text>

                    <Text style={{color:'red', marginHorizontal:5,  width:50, textAlign:'center'}}>{presentCount[0]}</Text>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'white', borderBottomWidth:1,paddingHorizontal:10, alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
                     <Text style={{color:'darkblue'}}>July</Text>
                    <View style={{position:'absolute',right:5,flexDirection:'row',}}>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[1]}</Text>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[1]}</Text>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[1]}</Text>

                    <Text style={{color:'red', marginHorizontal:5,  width:50, textAlign:'center'}}>{absentCount[1]}</Text>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'white', borderBottomWidth:1,paddingHorizontal:10, alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
                     <Text style={{color:'darkblue'}}>August</Text>
                    <View style={{position:'absolute',right:5,flexDirection:'row',}}>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[2]}</Text>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[2]}</Text>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[2]}</Text>

                    <Text style={{color:'red', marginHorizontal:5,  width:50, textAlign:'center'}}>{absentCount[2]}</Text>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'white', borderBottomWidth:1,paddingHorizontal:10, alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
                     <Text style={{color:'darkblue'}}>September</Text>
                    <View style={{position:'absolute',right:5,flexDirection:'row',}}>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[3]}</Text>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[3]}</Text>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[3]}</Text>

                    <Text style={{color:'red', marginHorizontal:5,  width:50, textAlign:'center'}}>{absentCount[3]}</Text>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'white', borderBottomWidth:1,paddingHorizontal:10, alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
                     <Text style={{color:'darkblue'}}>October</Text>
                    <View style={{position:'absolute',right:5,flexDirection:'row',}}>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[4]}</Text>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[4]}</Text>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[4]}</Text>

                    <Text style={{color:'red', marginHorizontal:5,  width:50, textAlign:'center'}}>{absentCount[4]}</Text>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'white', borderBottomWidth:1,paddingHorizontal:10, alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
                     <Text style={{color:'darkblue'}}>November</Text>
                    <View style={{position:'absolute',right:5,flexDirection:'row',}}>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[5]}</Text>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[5]}</Text>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[5]}</Text>

                    <Text style={{color:'red', marginHorizontal:5,  width:50, textAlign:'center'}}>{absentCount[5]}</Text>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'white', borderBottomWidth:1,paddingHorizontal:10, alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
                     <Text style={{color:'darkblue'}}>December</Text>
                    <View style={{position:'absolute',right:5,flexDirection:'row',}}>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[6]}</Text>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[6]}</Text>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[6]}</Text>

                    <Text style={{color:'red', marginHorizontal:5,  width:50, textAlign:'center'}}>{absentCount[6]}</Text>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'white', borderBottomWidth:1,paddingHorizontal:10, alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
                     <Text style={{color:'darkblue'}}>January</Text>
                    <View style={{position:'absolute',right:5,flexDirection:'row',}}>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[7]}</Text>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[7]}</Text>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[7]}</Text>

                    <Text style={{color:'red', marginHorizontal:5,  width:50, textAlign:'center'}}>{absentCount[7]}</Text>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'white', borderBottomWidth:1,paddingHorizontal:10, alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
                     <Text style={{color:'darkblue'}}>February</Text>
                    <View style={{position:'absolute',right:5,flexDirection:'row',}}>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[8]}</Text>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[8]}</Text>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[8]}</Text>

                    <Text style={{color:'red', marginHorizontal:5,  width:50, textAlign:'center'}}>{absentCount[8]}</Text>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'white', borderBottomWidth:1,paddingHorizontal:10, alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
                     <Text style={{color:'darkblue'}}>March</Text>
                    <View style={{position:'absolute',right:5,flexDirection:'row',}}>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[9]}</Text>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[9]}</Text>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[9]}</Text>

                    <Text style={{color:'red', marginHorizontal:5,  width:50, textAlign:'center'}}>{absentCount[9]}</Text>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'white', borderBottomWidth:1,paddingHorizontal:10, alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
                     <Text style={{color:'darkblue'}}>April</Text>
                    <View style={{position:'absolute',right:5,flexDirection:'row',}}>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[10]}</Text>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[10]}</Text>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[10]}</Text>

                    <Text style={{color:'red', marginHorizontal:5,  width:50, textAlign:'center'}}>{absentCount[10]}</Text>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'white', borderBottomWidth:1,paddingHorizontal:10, alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
                     <Text style={{color:'darkblue'}}>May</Text>
                    <View style={{position:'absolute',right:5,flexDirection:'row',}}>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[11]}</Text>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[11]}</Text>
                    <Text style={{color:'green', marginHorizontal:5, width:50, textAlign:'center'}}>{presentCount[11]}</Text>

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