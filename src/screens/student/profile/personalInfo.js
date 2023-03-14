import React, { useEffect, useState } from "react";
import { View,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PersonalInfo = () =>{
    const [genderName,setGenderName] = useState('Gender');
    const [categoryName,setCategoryName] = useState('Category');

    const [student, setStudent] = useState({
        student: {},
        studentActivityModel: {},
        studentLoginModel: {}
    });
    useEffect(()=>{
        // http://13.127.128.192:8081/student/getStudentFullDetails?sessionYear=2&studentId=1
        // http://13.127.128.192:8081/class/getClassById?classId=2
        // http://13.127.128.192:8081/utils/getGenders
        // http://13.127.128.192:8081/utils/getCategory
        const studentId = 1;
        const sessionYear = 2;
        getStudentDetails1(studentId,sessionYear );
    },[])

    getStudentDetails1 = (studentId,sessionYear ) =>{
        fetch(`http://13.127.128.192:8081/student/getStudentFullDetails?sessionYear=${sessionYear}&studentId=${studentId}`)
        .then((res)=>{
            res.json().then((data)=>{
                console.log("student basic details", data)
                setStudent(data);
                getGender();
                getCategory();
            })
        })
    }

    getGender = () =>{
        fetch(`http://13.127.128.192:8081/utils/getGenders`)
        .then((res)=>{
            res.json().then((data)=>{
                for (const element of data) {
                    if (element.id === student.student.gender) {
                        setGenderName(element.name);
                      break;
                    }
                  }
            })
        })
    }

    getCategory = () =>{
        fetch(`http://13.127.128.192:8081/utils/getCategory`)
                .then((res)=>{
            res.json().then((data)=>{
                for (const element of data) {
                    if (element.id === student.student.gender) {
                        setCategoryName(element.name);
                      break;
                    }
                  }
            })
        })
    }



    return(<SafeAreaView style={{flex:1}}>
                <Text style={{color:'black',fontWeight:'bold',textAlign:'center'}}>Personal Information</Text>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',flex:1, borderWidth:1,margin:3,borderRadius:32, alignItems:'center'}}>
                <Text style={{color:'black'}}>Name :</Text>
                <Text style={{color:'black'}}>{student.student.name}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',flex:1, borderWidth:1,margin:3,borderRadius:32, alignItems:'center'}}>
                <Text style={{color:'black'}}>Father Name :</Text>
                <Text style={{color:'black'}}>{student.student.fatherName}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',flex:1, borderWidth:1,margin:3,borderRadius:32, alignItems:'center'}}>
                <Text style={{color:'black'}}>Mother Name :</Text>
                <Text style={{color:'black'}}>{student.student.motherName}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',flex:1, borderWidth:1,margin:3,borderRadius:32, alignItems:'center'}}>
                <Text style={{color:'black'}}>Gender :</Text>
                <Text style={{color:'black'}}>{genderName}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',flex:1, borderWidth:1,margin:3,borderRadius:32, alignItems:'center'}}>
                <Text style={{color:'black'}}>Category :</Text>
                <Text style={{color:'black'}}>{categoryName}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',flex:1, borderWidth:1,margin:3,borderRadius:32, alignItems:'center'}}>
                <Text style={{color:'black'}}>Roll No. :</Text>
                <Text style={{color:'black'}}>{student.studentActivityModel.rollNo}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',flex:1, borderWidth:1,margin:3,borderRadius:32, alignItems:'center'}}>
                <Text style={{color:'black'}}>SR. No. :</Text>
                <Text style={{color:'black'}}>{student.student.srNo}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',flex:1, borderWidth:1,margin:3,borderRadius:32, alignItems:'center'}}>
                <Text style={{color:'black'}}>Registration No. :</Text>
                <Text style={{color:'black'}}>{student.student.enroll}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',flex:1, borderWidth:1,margin:3,borderRadius:32, alignItems:'center'}}>
                <Text style={{color:'black'}}>Mobile :</Text>
                <Text style={{color:'black'}}>{student.studentLoginModel.mobile}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',flex:1, borderWidth:1,margin:3,borderRadius:32, alignItems:'center'}}>
                <Text style={{color:'black'}}>Emergency Mobile :</Text>
                <Text style={{color:'black'}}>{student.student.emergencyMobile}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',flex:1, borderWidth:1,margin:3,borderRadius:32, alignItems:'center'}}>
                <Text style={{color:'black'}}>Email :</Text>
                <Text style={{color:'black'}}>{student.student.email}</Text>
            </View>
    </SafeAreaView>);

}

export default PersonalInfo;