import React, { useEffect, useState } from "react";
import { View,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PersonalInfo = () =>{
    const [name,setName] = useState('name');
    const [Class,setClass] = useState('class');
    const [rollno,setRollno] = useState('roll no');
    const [enroll, setEnroll] = useState('enroll')

    useEffect(()=>{
        // http://13.127.128.192:8081/student/getStudentFullDetails?sessionYear=2&studentId=1
        // http://13.127.128.192:8081/class/getClassById?classId=2
        // http://13.127.128.192:8081/utils/getGenders
        // http://13.127.128.192:8081/utils/getCategory
        const studentId = 1;
        const sessionYear = 2;
        fetch(`http://13.127.128.192:8081/student/getStudentFullDetails?sessionYear=${sessionYear}&studentId=${studentId}`)
        .then((res)=>{
            res.json().then((data)=>{
                // console.log("student basic details", data)
                setName(data.student.name);
                setRollno(data.student.id);
                setEnroll(data.student.enroll)
                // setClass
                if(data.studentActivityModel.classId=='2'){
                    setClass('UKG')
                }
            })
        })
    },[])
    return(<SafeAreaView style={{flex:1}}>
                <Text style={{color:'black',fontWeight:'bold',textAlign:'center'}}>Personal Information</Text>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <Text style={{color:'black'}}>Name :</Text>
                <Text style={{color:'black'}}>{name}</Text>
            </View>
    </SafeAreaView>);

}

export default PersonalInfo;