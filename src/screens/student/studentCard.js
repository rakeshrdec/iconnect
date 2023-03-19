import { Avatar } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable, Image, Dimensions, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {  Overlay } from '@rneui/themed';
import actions from "../../redux/actions";
import { useSelector } from "react-redux";
import { LogBox } from 'react-native';



const StudentCard = ({ navigation }) => {
    const [showLoader,setShowLoader] = useState(true)
    const data = useSelector((state) => state)
    const userData = data.studentList;
    const sessionData = data.session;
    const [session, setSession] = useState(sessionData.data);

    // Ignore log notification by message
    LogBox.ignoreLogs(['Warning: ...']);

    //Ignore all log notifications
    LogBox.ignoreAllLogs();

    useEffect( () => {
        setStudentList(userData.data)
        setShowLoader(false)
    }, [])


    const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')
    const [studentList, setStudentList] = useState([]);

    // const [student1, setStudent1] = useState({});



    getGender = (studentModel) => {
        fetch(`http://13.127.128.192:8081/utils/getGenders`)
            .then((res) => {
                res.json().then((data) => {
                    for (const element of data) {
                        if (element.id === studentModel.gender) {
                            studentModel.genderName = element.name
                            break;
                        }
                    }
                    getCategory(studentModel);
                })
            })
    }

    getCategory = (studentModel) => {
        fetch(`http://13.127.128.192:8081/utils/getCategory`)
            .then((res) => {
                res.json().then((data) => {
                    for (const element of data) {
                        if (element.id === studentModel.category) {
                            studentModel.categoryName = element.name
                            break;
                        }
                    }
                    getStudentClassDetails(studentModel);
                })
            })
    }

    getStudentClassDetails = (studentModel) => {
        fetch(`http://13.127.128.192:8081/class/getClassById?classId=${studentModel.classId}`)
            .then((res) => {
                res.json().then((data) => {
                    studentModel.className = data.classDetails.name
                    for (const section of data.sections) {
                        if (section.id === studentModel.sectionId) {
                            studentModel.sectionName = section.name
                            break;
                        }
                    }
                    actions.selectedStudentDetails(studentModel)
                    navigation.navigate('HomePage');
                })
            })
    }

    getStudentDetails = (studentId, sessionId) => {

        fetch(`http://13.127.128.192:8081/student/getStudentFullDetails?sessionYear=${sessionId}&studentId=${studentId}`)
            .then((res) => {
                res.json().then((data) => {
                    var studentModel = {
                        id: data.student.id,
                        address: data.student.address,
                        category: data.student.category,
                        categoryName: data.student.category,

                        dob: data.student.dob,
                        email: data.student.email,
                        emergencyMobile: data.student.emergencyMobile,
                        enroll: data.student.enroll,
                        fatherName: data.student.fatherName,
                        gender: data.student.gender,
                        genderName: data.student.gender,

                        joiningSession: data.student.joiningSession,
                        motherName: data.student.motherName,
                        name: data.student.name,
                        regDate: data.student.regDate,
                        srNo: data.student.srNo,
                        uploadImg: data.student.uploadImg,

                        classId: data.studentActivityModel.classId,
                        className: data.studentActivityModel.classId,
                        rollNo: data.studentActivityModel.rollNo,
                        sectionId: data.studentActivityModel.sectionId,
                        sectionName: data.studentActivityModel.sectionId,

                        mobile: data.studentLoginModel.mobile,
                    };

                    getGender(studentModel)
                })
            })
    }


    const gotoNextPage = (e) => {
        getStudentDetails(e.id, session.id)
    }

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{
                    width: SCREEN_WIDTH,
                    height: 0,
                    borderTopColor: "#2E4AA0",
                    borderTopWidth: SCREEN_HEIGHT,
                    borderRightWidth: SCREEN_WIDTH + 30,
                    borderRightColor: '#F0BA19'
                }}>
                </View>
                <View style={{ height: 55, backgroundColor: '#2E4AA0', justifyContent: 'center', position: 'absolute', width: '100%' }}>
                    <Text style={{ color: 'white', fontSize: 20, alignSelf: 'center' }}>Student List</Text>
                </View>
                <ScrollView style={{ position: 'absolute', width: '100%', marginTop: 70 }}>
                    {studentList.map((e, i) => (
                        <Pressable
                            onPress={() => {
                                gotoNextPage(e);
                            }}
                            style={{ elevation: 10, backgroundColor: 'white', minHeight: 120, margin: 10, borderRadius: 15, padding: 5, alignItems: 'center' }}>
                            <View style={{ flex: 1, margin: 10, flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    {e.uploadImg === null ? <Image source={require('../../../assets/logo/male_student_avatar.png')} style={{ width: 70, height: 70, resizeMode: 'stretch', borderRadius: 150 }} /> : <Image source={{ uri: 'http://13.127.128.192:8081/' + e.uploadImg }} style={{ width: 70, height: 70, resizeMode: 'stretch', borderRadius: 150 }} />}
                                </View>
                                <View style={{ flex: 2, }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>{e.name}</Text>
                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>Roll No : {e.id}</Text>
                                    <Text style={{ color: 'black', fontWeight: 'bold', }}>Mobile : {e.mobile} </Text>
                                </View>
                            </View>
                        </Pressable>
                    ))}
                </ScrollView>
                <Overlay
                    isVisible={showLoader}
                    overlayStyle={{
                        backgroundColor:'transparent',
                        width:'100%',
                        height:'100%',
                        justifyContent:'center'
                    }}
                    >
                    <ActivityIndicator size='large' />
                </Overlay>
            </SafeAreaView>
        </>
    );
}

export default StudentCard;