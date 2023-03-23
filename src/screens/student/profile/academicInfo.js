import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Dimensions, ScrollView, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import { Overlay } from '@rneui/themed';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')


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
            <View style={{
                width: SCREEN_WIDTH,
                height: 0,
                borderTopColor: "#2E4AA0",
                borderTopWidth: SCREEN_HEIGHT,
                borderRightWidth: SCREEN_WIDTH,
                borderRightColor: '#F0BA19'
            }}>
            </View>
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
            {<Overlay isVisible={showLoader} overlayStyle={{ backgroundColor: "#2E4AA0", borderWidth: 0, opacity: 0.8, flex: 1, width: '100%', height: '100%', justifyContent: 'center' }}>
                    <View style={{ justifyContent: 'center', width: '100%', height: '100%', fontWeight: "bold", color: "white" }}>
                        <ActivityIndicator size="large" color="#00ff00" />
                        <Text style={{ textAlign:'center', fontWeight: "bold", color: "white" }}>Loading Student List .......</Text>
                    </View>
                </Overlay>}
        </>);


}

export default AcademicInfo;