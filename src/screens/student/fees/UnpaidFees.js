import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { monthMap, quartrlyMap, settings } from '../../../models/data';
import Loader from "../../homepage/loader";
import BackgroundScreen from "../../homepage/backgroundScreen";

import { ScrollView } from "react-native-gesture-handler";

const UnpaidFees = () => {

    const data = useSelector((state) => state)
    const selectedStudentData = data.selectedStudentDetails;
    const [selectedStudent, setSelectedStudent] = useState(selectedStudentData.data);
    const sessionData = data.session;
    const [session, setSession] = useState(sessionData.data);
    const [showLoader, setShowLoader] = useState(true)
    const studentFeeStructureMap = new Map();
    const studentSubmitFeeMap = new Map();

    useEffect(() => {
        getAllExams();
    }, [])

    const examMap = new Map();
    const allFeesTypeMap = new Map();
    const [totalAmount, setTotalAmount] = useState(0);
    const [recordData, setRecordData] = useState([]);

    async function getAllExams() {
        const examResponse = await fetch(`http://13.127.128.192:8081/exams/getAllExams?sessionYear=${session.id}`);
        const examData = await examResponse.json();
        examData.forEach(exam => {
            examMap.set(exam.examsDetails.id, exam.examsDetails.name);
        });
        getAllFeesType();
    }

    async function getAllFeesType() {
        const feeTypeResponse = await fetch(`http://13.127.128.192:8081/utils/getFeeTypes`);
        const feeTypeData = await feeTypeResponse.json();
        feeTypeData.forEach(feeType => {
            allFeesTypeMap.set(feeType.id, feeType);
        });

        getAllPaidFees();
    }

    async function getAllPaidFees() {
        const paidFeeResponse = await fetch(`http://13.127.128.192:8081/fees/getAllFeesDetails?sessionYear=${session.id}&studentId=${selectedStudent.id}`);
        const paidFeeData = await paidFeeResponse.json();
        paidFeeData.forEach(paidFee => {
            paidFee.feesDetails.forEach(feesDetail => {

                let submitFee = studentSubmitFeeMap.get(feesDetail.feesType);
                if (submitFee == null) {
                    submitFee = [];
                }
                submitFee.push(feesDetail);
                studentSubmitFeeMap.set(feesDetail.feesType, submitFee);

            });
        });
        getStudentFeeStructure();
    }

    async function getStudentFeeStructure() {
        const classFeeTypeResponse = await fetch(`http://13.127.128.192:8081/fees/getStudentFees?studentId=${selectedStudent.id}&sessionYear=${session.id}`);
        const classFeeTypeData = await classFeeTypeResponse.json();
        var amount = 0;

        let tempRecordData = [];
        classFeeTypeData.forEach(feeType => {
            studentFeeStructureMap.set(feeType.feesTypeId, feeType);
            let submitFee = studentSubmitFeeMap.get(feeType.feesTypeId);
            if (submitFee == null) {
                submitFee = [];
            }
            if (allFeesTypeMap.get(feeType.feesTypeId).isMonthly) {
                monthMap.forEach((value, key) => {
                    let paidAmount = 0;
                    for (const tempFee of submitFee) {
                        if (tempFee.month == key) {
                            paidAmount += tempFee.amount;
                        }
                    }
                    amount +=  (feeType.amount - paidAmount);

                    if ((feeType.amount - paidAmount) > 0) {
                        let row = [];
                        row.push(allFeesTypeMap.get(feeType.feesTypeId).name);
                        row.push(value.short);
                        row.push(settings.CURRENCY + ' ' + (feeType.amount - paidAmount) + '/-');
                        tempRecordData.push(row);
                    }
                });

            } else if (allFeesTypeMap.get(feeType.feesTypeId).isQuarterly) {
                quartrlyMap.forEach((value, key) => {

                    let paidAmount = 0;
                    for (const tempFee of submitFee) {
                        if (tempFee.quarter == key) {
                            paidAmount += tempFee.amount;
                        }
                    }
                    amount +=  (feeType.amount - paidAmount);
                    if ((feeType.amount - paidAmount) > 0) {
                        let row = [];
                        row.push(allFeesTypeMap.get(feeType.feesTypeId).name);
                        row.push(value.short);
                        row.push(settings.CURRENCY + ' ' + (feeType.amount - paidAmount) + '/-');
                        tempRecordData.push(row);
                    }

                });
            } else if (allFeesTypeMap.get(feeType.feesTypeId).isExamFee) {
                examMap.forEach((value, key) => {
                    let paidAmount = 0;
                    for (const tempFee of submitFee) {
                        if (tempFee.examId == key) {
                            paidAmount += tempFee.amount;
                        }
                    }
                    amount +=  (feeType.amount - paidAmount);
                    if ((feeType.amount - paidAmount) > 0) {
                        let row = [];
                        row.push(allFeesTypeMap.get(feeType.feesTypeId).name);
                        row.push(settings.CURRENCY + ' ' + (feeType.amount - paidAmount) + '/-');
                        tempRecordData.push(row);
                    }
                });
            } else {
                let paidAmount = 0;
                for (const tempFee of submitFee) {
                    paidAmount += tempFee.amount;
                }
                amount +=  (feeType.amount - paidAmount);
                if ((feeType.amount - paidAmount) > 0) {
                    let row = [];
                    row.push(allFeesTypeMap.get(feeType.feesTypeId).name);
                    row.push(settings.CURRENCY + ' ' + (feeType.amount - paidAmount) + '/-');
                    tempRecordData.push(row);
                }
            }

        });
        setTotalAmount(amount);
        setRecordData(tempRecordData);
        setShowLoader(false);
    }


    return (
        <>
            <BackgroundScreen />
            <SafeAreaView style={{ flex: 1, position: 'absolute', width: '100%', height: '100%' }}>
                <View style={{ flex: 1, justifyContent: "space-between" }}>
                    <View style={{ flex: 6, justifyContent: "space-between" }}>
                        <ScrollView>
                            {recordData.map((record, i) => (
                                <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                    <View style={{ marginHorizontal: 40 }}>
                                        <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 20 }}>{record[0]}</Text>
                                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15, marginLeft: 20 }}>{record[1]}</Text>
                                        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 15, marginLeft: 20 }}>{record[2]}</Text>
                                    </View>
                                </Pressable>
                            ))}


                        </ScrollView>
                        <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                            <View style={{ marginHorizontal: 40 }}>
                                <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}>Total Amount:- {settings.CURRENCY + ' ' + totalAmount}/-</Text>
                            </View>
                        </Pressable>

                    </View>
                </View>
                <Loader message="Loading Unpaid Fees ......." showLoader={showLoader} />
            </SafeAreaView>
        </>
    );

}

export default UnpaidFees;