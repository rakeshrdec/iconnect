import React, { useState } from "react";
import { Text, View,  ScrollView } from "react-native";
import { useSelector } from "react-redux";
import Loader from "../../homepage/loader";
import BackgroundScreen from "../../homepage/backgroundScreen";

const AcademicInfo = () => {
    const data = useSelector((state) => state)
    const selectedStudentData = data.selectedStudentDetails;
    const [selectedStudent, setSelectedStudent] = useState(selectedStudentData.data);
    const [showLoader, setShowLoader] = useState(true)

    

    setTimeout(() => {
        setShowLoader(false)
    }, 1400)


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
              
            </ScrollView>
            <Loader message="Loading Acedemic Info ......." showLoader={showLoader} />
        </>);


}

export default AcademicInfo;