import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, Pressable, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')
import { monthMap, quartrlyMap, settings } from '../../../models/data';
import Loader from "../../homepage/loader";

import { ScrollView } from "react-native-gesture-handler";

const PaidFees = () => {

    const data = useSelector((state) => state)
    const selectedStudentData = data.selectedStudentDetails;
    const [selectedStudent, setSelectedStudent] = useState(selectedStudentData.data);
    const sessionData = data.session;
    const [session, setSession] = useState(sessionData.data);
    const [showLoader, setShowLoader] = useState(true)

    useEffect(() => {
        getAllExams();
        getAllFeesType();
    }, [])

    const examMap = new Map();

    const allFeesTypeMap = new Map();
    const classfeeTypeMap = new Map();
    const feeTypeMap = new Map();
    const [totalPaidAmount, setTotalPaidAmount] = useState(0);
    const [totalLateAmount, setTotalLateAmount] = useState(0);
    const [totalDiscountAmount, setTotalDiscountAmount] = useState(0);

    const [paidFeesData, setPaidFeesData] = useState([]);

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

                    fetchFeesRecord(session.id);
                }
            })
        })
    }

    const fetchFeesRecord = () => {
        fetch(`http://13.127.128.192:8081/fees/getAllFeesDetails?sessionYear=${session.id}&studentId=${selectedStudent.id}`).then((res) => {
            res.json().then((data) => {
                if (data != '') {
                    var tempTotalPaidAmount = 0;
                    var tempTotalDiscountAmount = 0;
                    var tempTotalLateAmount = 0;

                    var tempPaidFeesData = [];
                    data.forEach(fee => {
                        fee.feesDetails.forEach(feesDetail => {
                            var feeType = feeTypeMap.get(feesDetail.feesType).name
                            tempPaidFeesData.push({
                                amount: feesDetail.amount,
                                lateFeeAmount: feesDetail.lateFeeAmount,
                                discountAmount: feesDetail.discountAmount,
                                examId: feesDetail.examId ? examMap.get(feesDetail.examId) : '',
                                feesType: feeType,
                                month: feesDetail.month ? monthMap.get(feesDetail.month).full : '',
                                quarter: feesDetail.quarter ? quartrlyMap.get(feesDetail.quarter) : '',
                                submissionDate: fee.submissionDate,
                                paymentMode: fee.paymentMode
                            });
                            tempTotalPaidAmount += feesDetail.amount;
                            tempTotalDiscountAmount += feesDetail.lateFeeAmount;
                            tempTotalLateAmount += feesDetail.discountAmount;
                        });
                    });

                    setPaidFeesData(tempPaidFeesData);
                    setTotalPaidAmount(tempTotalPaidAmount);
                    setTotalLateAmount(tempTotalDiscountAmount);
                    setTotalDiscountAmount(tempTotalLateAmount);
                }
            })
        })
        setShowLoader(false);
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


                            {paidFeesData.map((fee, i) => (
                                <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                    <View style={{ marginHorizontal: 40 }}>
                                        <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 20 }}>{fee.feesType}</Text>
                                        {fee.month ? < Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 20 }}>Month:- {fee.month}</Text> : ''}
                                        {fee.quarter ? < Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 20 }}>Quarter:- {fee.quarter}</Text> : ''}
                                        {fee.examId ? < Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 20 }}>Exams:- {fee.examId}</Text> : ''}
                                        <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 20 }}>Submission Date:- {fee.submissionDate}</Text>
                                        <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 20 }}>Payment Mode:- {fee.paymentMode}</Text>
                                        
                                        <Text style={{ color: 'green', fontWeight: 'bold', marginLeft: 20 }}>Amount:- {settings.CURRENCY + ' ' + fee.amount}/-</Text>
                                        <Text style={{ color: 'green', fontWeight: 'bold', marginLeft: 20 }}>Discount Amount:- {settings.CURRENCY + ' ' + fee.discountAmount}/-</Text>
                                        <Text style={{ color: 'red', fontWeight: 'bold', marginLeft: 20 }}>Late Fee Amount:- {settings.CURRENCY + ' ' + fee.lateFeeAmount}/-</Text>
                                        <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 20, fontSize: 15 }}>Total Amount:- {settings.CURRENCY + ' '} {fee.amount - fee.discountAmount + fee.lateFeeAmount}/-</Text>

                                        
                                    </View>
                                </Pressable>
                            ))}

                            <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                <View style={{ marginHorizontal: 40 }}>
                                    <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 16 }}>Total Discount Amount:- {settings.CURRENCY + ' ' + totalDiscountAmount}/-</Text>
                                    <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}>Total Late Fee Amount:- {settings.CURRENCY + ' ' + totalLateAmount}/-</Text>
                                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>Total Paid Amount:- {settings.CURRENCY + ' ' + totalPaidAmount}/-</Text>
                                </View>
                            </Pressable>

                        </ScrollView>
                    </View>
                </View>
                <Loader message="Loading Paid Fees ......." showLoader={showLoader} />
            </SafeAreaView>
        </>
    );

}

export default PaidFees;