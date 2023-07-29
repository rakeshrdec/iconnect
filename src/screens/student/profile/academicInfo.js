import React, {useEffect, useState } from "react";
import { Text, View,  ScrollView } from "react-native";
import { useSelector } from "react-redux";
import Loader from "../../homepage/loader";
import BackgroundScreen from "../../homepage/backgroundScreen";
import { apiUrl } from '../../../models/data';
import { feeCategoryType } from '../../../models/data';

const AcademicInfo = () => {
    const data = useSelector((state) => state)
    const selectedStudentData = data.selectedStudentDetails;
    const [selectedStudent, setSelectedStudent] = useState(selectedStudentData.data);
    const [studentActivity, setStudentActivity] = useState({});
    const sessionData = data.session;
    const [session, setSession] = useState(sessionData.data);
    const [showLoader, setShowLoader] = useState(true);
    const [feeTypeMap, setFeeTypeMap] = useState(new Map());

    useEffect(() => {
        getFeeTypes();
        getStudentDetails();
    }, [])

    async function getStudentDetails() {
        const studentResponse = await fetch(apiUrl + `/student/getStudentFullDetails?sessionYear=${session.id}&studentId=${selectedStudent.id}`);
        const studentData = await studentResponse.json();
        setStudentActivity(studentData.studentActivityModel);
    }

    async function getFeeTypes() {
        const feeTypeResponse = await fetch(apiUrl + `/fees/getAllFeesType`);
        const feeTypeData = await feeTypeResponse.json();

        const tempfeeTypeMap= new Map();
        feeTypeData.forEach(element => tempfeeTypeMap.set(element.id, element.name));
        setFeeTypeMap(tempfeeTypeMap);
        setShowLoader(false)
    }

    return (
        <>
            <BackgroundScreen />
            <ScrollView style={{ flex: 1, position: 'absolute', width: '100%', height: '100%' }}>
                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20 }}>Academic Information</Text>
                <View style={{ flexDirection: 'row',backgroundColor: "white", justifyContent: 'flex-start',height: 40, flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontSize: 15, fontWeight: "bold", textAlign: 'left', marginLeft: 10}}>Class Name:  </Text>
                    <Text style={{ color: 'black', fontSize: 15, fontWeight: "bold", marginLeft: 0, marginRight: 5}}>{selectedStudent.className}</Text>
                </View>
                <View style={{ flexDirection: 'row',backgroundColor: "white", justifyContent: 'flex-start', height: 40,flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                    <Text style={{color: 'black', fontSize: 15, fontWeight: "bold", textAlign: 'left', marginLeft: 10}}>Section Name:  </Text>
                    <Text style={{color: 'black', fontSize: 15, fontWeight: "bold", marginLeft: 0, marginRight: 5}}>{selectedStudent.sectionName}</Text>
                </View>
                <View style={{ flexDirection: 'row',backgroundColor: "white", justifyContent: 'flex-start', height: 40,flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                    <Text style={{color: 'black', fontSize: 15, fontWeight: "bold", textAlign: 'left', marginLeft: 10}}>Class Teacher Name:  </Text>
                    <Text style={{color: 'black', fontSize: 15, fontWeight: "bold", marginLeft: 0, marginRight: 5}}>{selectedStudent.sectionTeacherName}</Text>
                </View>
                <View style={{ flexDirection: 'row', backgroundColor: "white",justifyContent: 'flex-start',height: 40, flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                    <Text style={{color: 'black', fontSize: 15, fontWeight: "bold", textAlign: 'left', marginLeft: 10}}>Roll No.:  </Text>
                    <Text style={{color: 'black', fontSize: 15, fontWeight: "bold", marginLeft: 0, marginRight: 5}}>{selectedStudent.rollNo}</Text>
                </View>
                <View style={{ flexDirection: 'row',backgroundColor: "white", justifyContent: 'flex-start', height: 40,flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                    <Text style={{color: 'black', fontSize: 15, fontWeight: "bold", textAlign: 'left', marginLeft: 10}}>SR. No.:  </Text>
                    <Text style={{color: 'black', fontSize: 15, fontWeight: "bold", marginLeft: 0, marginRight: 5}}>{selectedStudent.srNo}</Text>
                </View>
                <View style={{ flexDirection: 'row',backgroundColor: "white", justifyContent: 'flex-start',height: 40, flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                    <Text style={{color: 'black', fontSize: 15, fontWeight: "bold", textAlign: 'left', marginLeft: 10}}>Reg. No.:  </Text>
                    <Text style={{color: 'black', fontSize: 15, fontWeight: "bold", marginLeft: 0, marginRight: 5}}>{selectedStudent.enroll}</Text>
                </View>
                <View style={{ flexDirection: 'row',backgroundColor: "white", justifyContent: 'flex-start',height: 40, flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                    <Text style={{color: 'black', fontSize: 15, fontWeight: "bold", textAlign: 'left', marginLeft: 10}}>Fee Type:  </Text>
                    <Text style={{color: 'black', fontSize: 15, fontWeight: "bold", marginLeft: 0, marginRight: 5}}>{feeTypeMap.get(studentActivity.feeTypeId)}</Text>
                </View>
                <View style={{ flexDirection: 'row',backgroundColor: "white", justifyContent: 'flex-start',height: 40, flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                    <Text style={{color: 'black', fontSize: 15, fontWeight: "bold", textAlign: 'left', marginLeft: 10}}>Fee Category:  </Text>
                    <Text style={{color: 'black', fontSize: 15, fontWeight: "bold", marginLeft: 0, marginRight: 5}}>{feeCategoryType.get(studentActivity.feeCategoryId)}</Text>
                </View>
            </ScrollView>
            <Loader message="Loading Acedemic Info ......." showLoader={showLoader} />
        </>);


}

export default AcademicInfo;