import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')
import { monthMap, quartrlyMap, settings } from '../../../models/data';

import { ScrollView } from "react-native-gesture-handler";

const UnpaidFees = () => {

    const data = useSelector((state) => state)
    const selectedStudentData = data.selectedStudentDetails;
    const [selectedStudent, setSelectedStudent] = useState(selectedStudentData.data);
    const sessionData = data.session;
    const [session, setSession] = useState(sessionData.data);

    useEffect(() => {
        getAllExams();
        getAllFeesType();
    }, [])

    const examMap = new Map();

    const allFeesTypeMap = new Map();
    const classfeeTypeMap = new Map();
    const feeTypeMap = new Map();
    const studentMonthFeeStatus = new Map();
    const paidFees = new Map();

    const [totalAmount, setTotalAmount] = useState(0);

    const [recordData, setRecordData] = useState([]);

    const getAllExams = () => {
        fetch(`http://13.127.128.192:8081/exams/getAllExams?sessionYear=${session.id}`).then((res) => {
            res.json().then((data) => {
                if (data != '') {

                    data.forEach(exam => {
                        examMap.set(exam.examsDetails.id, exam.examsDetails.name);
                    });

                }
            })
        })
    }


    const getAllFeesType = () => {
        fetch(`http://13.127.128.192:8081/utils/getFeeTypes`).then((res) => {
            res.json().then((data) => {
                if (data != '') {
                    data.forEach(feeType => allFeesTypeMap.set(feeType.id, feeType));
                    getAllClassFees();
                }
            })
        })
    }


    const getAllClassFees = () => {
        fetch(`http://13.127.128.192:8081/class/getClassFeesDetails?classId=${selectedStudent.classId}`).then((res) => {
            res.json().then((data) => {
                if (data != '') {
                    var amount = 0;
                    data.forEach(feeType => {
                        classfeeTypeMap.set(feeType.feesTypeId, feeType);
                        if (allFeesTypeMap.get(feeType.feesTypeId).isMonthly) {

                            amount += (feeType.amount * 12);
                        } else if (allFeesTypeMap.get(feeType.feesTypeId).isQuarterly) {
                            amount += (feeType.amount * 4);
                        } else if (allFeesTypeMap.get(feeType.feesTypeId).isExamFee) {
                            amount += (feeType.amount * (examMap.size > 0 ? examMap.size : 1));
                        } else {
                            amount += feeType.amount;
                        }
                        feeTypeMap.set(feeType.feesTypeId, allFeesTypeMap.get(feeType.feesTypeId));
                    });

                    setTotalAmount(amount);

                    fetchFeesRecord(session.id);
                }
            })
        })
    }

    const fetchFeesRecord = () => {
        function getMonthsList(feeType) {
            let recordData = [];
            monthMap.forEach((value, key) => {
                if (!studentMonthFeeStatus.get(feeType.id + '_' + key)) {
                    let row = [];
                    row.push(feeType.name);
                    row.push(value.short);
                    row.push(settings.CURRENCY + ' ' + classfeeTypeMap.get(feeType.id).amount.toString() + '/-');
                    row.push(studentMonthFeeStatus.get(feeType.id + '_' + key) ? settings.CURRENCY + ' ' + studentMonthFeeStatus.get(feeType.id + '_' + key).amount.toString() + '/-' : '--');
                    row.push(studentMonthFeeStatus.get(feeType.id + '_' + key) ? studentMonthFeeStatus.get(feeType.id + '_' + key).discountAmount.toString() + '/-' : '--');
                    row.push(studentMonthFeeStatus.get(feeType.id + '_' + key) ? studentMonthFeeStatus.get(feeType.id + '_' + key).lateFeeAmount.toString() + '/-' : '--');
                    row.push(studentMonthFeeStatus.get(feeType.id + '_' + key) ? "Paid" : 'UnPaid');
                    recordData.push(row);
                }
            });
            return recordData;
        }

        function getQuartersList(feeType) {
            let recordData = [];
            quaterlyMap.forEach((value, key) => {

                if (!studentMonthFeeStatus.get(feeType.id + '_' + key)) {
                    let row = [];
                    row.push(feeType.name);
                    row.push(value.short);
                    row.push(settings.CURRENCY + ' ' + classfeeTypeMap.get(feeType.id).amount.toString() + '/-');
                    row.push(studentMonthFeeStatus.get(feeType.id + '_' + key) ? settings.CURRENCY + ' ' + studentMonthFeeStatus.get(feeType.id + '_' + key).amount.toString() + '/-' : '--');
                    row.push(studentMonthFeeStatus.get(feeType.id + '_' + key) ? studentMonthFeeStatus.get(feeType.id + '_' + key).discountAmount.toString() + '/-' : '--');
                    row.push(studentMonthFeeStatus.get(feeType.id + '_' + key) ? studentMonthFeeStatus.get(feeType.id + '_' + key).lateFeeAmount.toString() + '/-' : '--');
                    row.push(studentMonthFeeStatus.get(feeType.id + '_' + key) ? "Paid" : 'UnPaid');
                    recordData.push(row);
                }

            });

            return recordData;
        }

        function getExamsList(feeType) {
            let recordData = [];
            examMap.forEach((value, key) => {
                if (!studentMonthFeeStatus.get(feeType.id + '_' + key)) {
                    let row = [];
                    row.push(feeType.name);
                    row.push(value);
                    row.push(settings.CURRENCY + ' ' + classfeeTypeMap.get(feeType.id).amount.toString() + '/-');
                    row.push(studentMonthFeeStatus.get(feeType.id + '_' + key) ? settings.CURRENCY + ' ' + studentMonthFeeStatus.get(feeType.id + '_' + key).amount.toString() + '/-' : '--');
                    row.push(studentMonthFeeStatus.get(feeType.id + '_' + key) ? studentMonthFeeStatus.get(feeType.id + '_' + key).discountAmount.toString() + '/-' : '--');
                    row.push(studentMonthFeeStatus.get(feeType.id + '_' + key) ? studentMonthFeeStatus.get(feeType.id + '_' + key).lateFeeAmount.toString() + '/-' : '--');
                    row.push(studentMonthFeeStatus.get(feeType.id + '_' + key) ? "Paid" : 'UnPaid');
                    recordData.push(row);
                }
            });

            return recordData;
        }

        fetch(`http://13.127.128.192:8081/fees/getAllFeesDetails?sessionYear=${session.id}&studentId=${selectedStudent.id}`).then((res) => {
            res.json().then((data) => {
                if (data != '') {

                    data.forEach(fee => {
                        fee.feesDetails.forEach(feesDetail => {
                            if (feeTypeMap.get(feesDetail.feesType).isMonthly) {
                                studentMonthFeeStatus.set(feesDetail.feesType + '_' + feesDetail.month, feesDetail);
                            } else if (feeTypeMap.get(feesDetail.feesType).isQuarterly) {
                                studentMonthFeeStatus.set(feesDetail.feesType + '_' + feesDetail.quarter, feesDetail);
                            } else if (feeTypeMap.get(feesDetail.feesType).isExamFee) {
                                studentMonthFeeStatus.set(feesDetail.feesType + '_' + feesDetail.examId, feesDetail);
                            } else {
                                paidFees.set(feesDetail.feesType, feesDetail);
                            }
                        });
                    });

                    let tempRecordData = [];
                    feeTypeMap.forEach((value, key) => {
                        if (!paidFees.get(value.id)) {
                            if (value.isMonthly) {
                                tempRecordData = tempRecordData.concat(getMonthsList(value));
                            } else if (value.isQuarterly) {
                                tempRecordData = tempRecordData.concat(getQuartersList(value));
                            } else if (value.isExamFee) {
                                tempRecordData = tempRecordData.concat(getExamsList(value));
                            } else {
                                let row = [];
                                row.push(value.name);
                                row.push(settings.CURRENCY + ' ' + classfeeTypeMap.get(value.id).amount.toString() + '/-');
                                row.push(paidFees.get(value.id) ? settings.CURRENCY + ' ' + paidFees.get(value.id).amount.toString() + '/-' : '--');
                                row.push(paidFees.get(value.id) ? paidFees.get(value.id).discountAmount.toString() + '/-' : '--');
                                row.push(paidFees.get(value.id) ? paidFees.get(value.id).lateFeeAmount.toString() + '/-' : '--');
                                row.push(paidFees.get(value.id) ? "Paid" : 'UnPaid');
                                tempRecordData.push(row);
                            }
                        }

                    });
                    console.log("tempRecordData================>>", tempRecordData)
                    setRecordData(tempRecordData);


                }
            })
        })
    }

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

                            <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                <View style={{ marginHorizontal: 40 }}>
                                    <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 20 }}>Total Amount:- {settings.CURRENCY + ' ' + totalAmount}/-</Text>
                                </View>
                            </Pressable>

                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );

}

export default UnpaidFees;