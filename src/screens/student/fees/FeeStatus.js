import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text,  Pressable } from "react-native";
import { useSelector } from "react-redux";
import PaidFees from "./PaidFees";
import UnpaidFees from "./UnpaidFees";
import StudentHeader from "../../homepage/studentHeader";

const FeeStatus = ({ navigation }) => {
    const data = useSelector((state) => state)
    const selectedStudentData = data.selectedStudentDetails;
    const [selectedStudent, setSelectedStudent] = useState(selectedStudentData.data);
    const [showLoader, setShowLoader] = useState(true)

    useEffect(() => {
    }, [])

    const [infoOf, setInfoOf] = useState('paid')

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* USER PROFILE */}
            <View style={{ flex: 1 }}><StudentHeader /></View>
            <View style={{ flex: 6, backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>
                    <Pressable
                        onPress={() => {
                            setInfoOf('paid')
                        }}
                        style={infoOf == 'paid' ? { borderBottomWidth: 2, flex: 1, justifyContent: 'center', alignItems: 'center', padding: 3 } : { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 3 }}>
                        <Text style={{ color: 'green', fontSize: 15, fontWeight: "bold" }}>Paid Fees</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setInfoOf('unpaid')
                        }}
                        style={infoOf == 'unpaid' ? { borderBottomWidth: 2, flex: 1, justifyContent: 'center', alignItems: 'center', padding: 3 } : { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 3 }}>
                        <Text style={{ color: 'red', fontSize: 15, fontWeight: "bold" }}>Unpaid Fees</Text>
                    </Pressable>

                </View>
                {/*DETAILS   */}
                {infoOf == 'paid' ? <View style={{ flex: 1 }}><PaidFees /></View> : <View />}
                {infoOf == 'unpaid' ? <View style={{ flex: 1 }}><UnpaidFees /></View> : <View />}
            </View>
        </SafeAreaView>
    );
}

export default FeeStatus;