import React, { useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import Loader from "../../homepage/loader";
import BackgroundScreen from "../../homepage/backgroundScreen";

import { ScrollView } from "react-native-gesture-handler";

const PersonalInfo = () => {

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
            <SafeAreaView style={{ flex: 1, position: 'absolute', width: '100%', height: '100%' }}>
                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20 }}>Personal Information</Text>

                <ScrollView>

                    <View style={{ flexDirection: 'row', backgroundColor: "white", justifyContent: 'flex-start', height: 40, flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: "bold", textAlign: 'left', marginLeft: 10 }}>Name :  </Text>
                        <Text style={{
                            color: 'black', fontSize: 15, fontWeight: "bold", textAlign: 'right',
                            marginRight: 10
                        }}>{selectedStudent.name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: "white", justifyContent: 'flex-start', height: 40, flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: "bold", marginLeft: 10 }}>DOB :    </Text>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: "bold", marginLeft: 0, marginRight: 5 }}>{selectedStudent.dob}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: "white", justifyContent: 'flex-start', height: 40, flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: "bold", marginLeft: 10 }}>Father Name :  </Text>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: "bold", marginRight: 5 }}>{selectedStudent.fatherName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: "white", justifyContent: 'flex-start', height: 40, flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: "bold", marginLeft: 10 }}>Mother Name :  </Text>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: "bold", marginRight: 5 }}>{selectedStudent.motherName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: "white", justifyContent: 'flex-start', height: 40, flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: "bold", marginLeft: 10 }}>Gender :     </Text>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: "bold", marginRight: 5 }}>{selectedStudent.genderName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: "white", justifyContent: 'flex-start', height: 40, flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: "bold", marginLeft: 10 }}>Category :  </Text>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: "bold", marginRight: 5 }}>{selectedStudent.categoryName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: "white", justifyContent: 'flex-start', height: 40, flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: "bold", marginLeft: 10 }}>Mobile :      </Text>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: "bold", marginRight: 5 }}>{selectedStudent.mobile}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: "white", justifyContent: 'flex-start', height: 40, flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: "bold", marginLeft: 10, }}>Emergency Mobile :  </Text>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: "bold", marginRight: 5 }}>{selectedStudent.emergencyMobile}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: "white", justifyContent: 'flex-start', height: 40, flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: "bold", marginLeft: 10 }}>Email :  </Text>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: "bold", marginRight: 5 }}>{selectedStudent.email}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: "white", justifyContent: 'flex-start', height: 120, flex: 1, borderWidth: 1, margin: 3, borderRadius: 32, alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: "bold", marginLeft: 10 }}>Address :</Text>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: "bold", marginLeft: 15, marginRight: 5 ,width:"80%"}}>{selectedStudent.address}</Text>
                    </View>
                </ScrollView>
                <Loader message="Loading Personal Info ......." showLoader={showLoader} />
            </SafeAreaView>
        </>
    );

}

export default PersonalInfo;