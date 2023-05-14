import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { monthMap, quartrlyMap, settings } from '../../../models/data';
import Loader from "../../homepage/loader";
import BackgroundScreen from "../../homepage/backgroundScreen";

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
        getPaymentTypes();
        getAllFeesType();
        // getStudentFeeStructure();
        
    }, [])

    const examMap = new Map();
    const paymentTypeMap = new Map();
    const allFeesTypeMap = new Map();
    // const studentFeeStructureMap = new Map();
    // const feeTypeMap = new Map();
    const [totalPaidAmount, setTotalPaidAmount] = useState(0);
    const [totalLateAmount, setTotalLateAmount] = useState(0);
    const [totalDiscountAmount, setTotalDiscountAmount] = useState(0);

    const [paidFeesData, setPaidFeesData] = useState([]);

    async function getAllExams() {
        const examResponse = await fetch(`http://13.127.128.192:8081/exams/getAllExams?sessionYear=${session.id}`);
        const examData = await examResponse.json();
        examData.forEach(exam => {
            examMap.set(exam.examsDetails.id, exam.examsDetails.name);
        });
    }


    async function getPaymentTypes() {
        const paymentTypeResponse = await fetch(`http://13.127.128.192:8081/utils/getPaymentTypes`);
        const paymentTypeData = await paymentTypeResponse.json();
        paymentTypeData.forEach(paymentType => {
            paymentTypeMap.set(paymentType.id, paymentType.name);
        });
    }
    async function getAllFeesType() {
        const feeTypeResponse = await fetch(`http://13.127.128.192:8081/utils/getFeeTypes`);
        const feeTypeData = await feeTypeResponse.json();
        feeTypeData.forEach(feeType => {
            allFeesTypeMap.set(feeType.id, feeType);
        });
        fetchFeesRecord();
    }

    
    async function fetchFeesRecord() {
        const feeResponse = await fetch(`http://13.127.128.192:8081/fees/getAllFeesDetails?sessionYear=${session.id}&studentId=${selectedStudent.id}`);
        const feeData = await feeResponse.json();
        var tempTotalPaidAmount = 0;
        var tempTotalDiscountAmount = 0;
        var tempTotalLateAmount = 0;

        var tempPaidFeesData = [];
        feeData.forEach(fee => {
            fee.feesDetails.forEach(feesDetail => {
                // var feeType = allFeesTypeMap.get(feesDetail.feesType).name
                tempPaidFeesData.push({
                    amount: feesDetail.amount,
                    lateFeeAmount: feesDetail.lateFeeAmount,
                    discountAmount: feesDetail.discountAmount,
                    examId: feesDetail.examId ? examMap.get(feesDetail.examId) : '',
                    feesType: allFeesTypeMap.get(feesDetail.feesType).name,
                    month: feesDetail.month ? monthMap.get(feesDetail.month).full : '',
                    quarter: feesDetail.quarter ? quartrlyMap.get(feesDetail.quarter).full : '',
                    submissionDate: fee.submissionDate,
                    paymentMode: paymentTypeMap.get(fee.paymentMode)
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
        setShowLoader(false);
    }

    return (
        <>
            <BackgroundScreen />
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

                                        <Text style={{ color: 'green', fontWeight: 'bold', marginLeft: 20 }}>Deposit Amount:- {settings.CURRENCY + ' ' + fee.amount}/-</Text>
                                        {fee.discountAmount > 0 ? <Text style={{ color: 'green', fontWeight: 'bold', marginLeft: 20 }}>Discount Amount:- {settings.CURRENCY + ' ' + fee.discountAmount}/-</Text> : ''}
                                        {fee.lateFeeAmount > 0 ? <Text style={{ color: 'red', fontWeight: 'bold', marginLeft: 20 }}>Late Fee Amount:- {settings.CURRENCY + ' ' + fee.lateFeeAmount}/-</Text> : ''}
                                        {/* {fee.pendingAmount > 0 ? <Text style={{ color: 'red', fontWeight: 'bold', marginLeft: 20 }}>Pending Amount:- {settings.CURRENCY + ' ' + fee.pendingAmount}/-</Text> : ''} */}

                                        <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 20, fontSize: 15 }}>Total Amount:- {settings.CURRENCY + ' '} {fee.amount - fee.discountAmount + fee.lateFeeAmount}/-</Text>


                                    </View>
                                </Pressable>
                            ))}



                        </ScrollView>
                        <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                            <View style={{ marginHorizontal: 40 }}>
                                {totalDiscountAmount > 0 ? <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 16 }}>Total Discount Amount:- {settings.CURRENCY + ' ' + totalDiscountAmount}/-</Text> : ''}
                                {totalLateAmount > 0 ? <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}>Total Late Fee Amount:- {settings.CURRENCY + ' ' + totalLateAmount}/-</Text> : ''}
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>Total Paid Amount:- {settings.CURRENCY + ' ' + totalPaidAmount}/-</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
                <Loader message="Loading Paid Fees ......." showLoader={showLoader} />
            </SafeAreaView>
        </>
    );

}

export default PaidFees;