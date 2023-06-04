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
    const monthFeeHeadMap = new Map();
    const studentFeeHeadMap = new Map();



    feeHeadMap = new Map();
    useEffect(() => {
        getAllExams();
    }, [])

    const examMap = new Map();
    const allFeesTypeMap = new Map();
    const [totalAmount, setTotalAmount] = useState(0);
    const [recordData, setRecordData] = useState([]);

    async function getAllExams() {
        // const examResponse = await fetch(`http://13.127.128.192:8081/exams/getAllExams?sessionYear=${session.id}`);
        // const examData = await examResponse.json();
        // examData.forEach(exam => {
        //     examMap.set(exam.examsDetails.id, exam.examsDetails.name);
        // });
        getAllFeeHeads();
    }

    async function getAllFeeHeads() {
        const feeHeadsResponse = await fetch(`http://13.127.128.192:8081/fees/getAllFeeHeads`);
        const feeHeadData = await feeHeadsResponse.json();
        feeHeadData.forEach(feeHead => {
            feeHeadMap.set(feeHead.id, feeHead);
            const payMonths = feeHead.payMonths.split(',');
            payMonths.forEach(payMonth => {
                let months = monthFeeHeadMap.get(parseInt(payMonth));
                if (months == null) {
                    months = [];
                }
                months.push(feeHead.id);
                monthFeeHeadMap.set(parseInt(payMonth), months);
            });

        });
        getStudentFeeStructure();
    }

    async function getStudentFeeStructure() {
        const studentFeeResponse = await fetch(`http://13.127.128.192:8081/fees/getStudentFees?sessionYear=${session.id}&studentId=${selectedStudent.id}`);
        const studentfeeData = await studentFeeResponse.json();
        studentfeeData.forEach(studentfee => {
            studentFeeHeadMap.set(studentfee.feeHeadId, studentfee);
        });
        fetchfeeRecord();
    }

    async function fetchfeeRecord() {
        let totalAmount = 0;
        // let totalPaidAmount = 0;

        // let totalDiscountAmount = 0;
        const paidfee = new Map();

        const recordData = [];
        const studentFeeResponse = await fetch(`http://13.127.128.192:8081/fees/getAllFeesDetails?sessionYear=${session.id}&studentId=${selectedStudent.id}`);
        const studentfeeData = await studentFeeResponse.json();

        studentfeeData.forEach(fee => {
            fee.feeDetails.forEach(feeDetail => {
                // totalPaidAmount += feeDetail.amount;
                // totalDiscountAmount += feeDetail.discountAmount;
                let paidDiscountfee = paidfee.get(feeDetail.month);
                if (paidDiscountfee == null) {
                    paidDiscountfee = new Map();
                }
                paidDiscountfee.set(feeDetail.feeHeadId, feeDetail)
                paidfee.set(feeDetail.month, paidDiscountfee)
            });
        });
        // console.log(paidfee);
        monthMap.forEach((value, key) => {


            const allFeeHeadIds = monthFeeHeadMap.get(key);
            if (allFeeHeadIds != null) {

                // console.log(key);
                let feeHeadRow = [];
                let totalAmt = 0;
                allFeeHeadIds.forEach(feeHeadId => {
                    if (studentFeeHeadMap.get(feeHeadId)) {
                        let amt = studentFeeHeadMap.get(feeHeadId).amount;
                        if (paidfee.get(key) && paidfee.get(key).get(feeHeadId)) {
                            amt -= (paidfee.get(key).get(feeHeadId).amount + paidfee.get(key).get(feeHeadId).discountAmount);
                        }
                        if (amt > 0) {
                            totalAmt += amt;
                            feeHeadRow.push({
                                feeHead: feeHeadMap.get(feeHeadId).name,
                                amount: studentFeeHeadMap.get(feeHeadId).amount.toString()
                            });
                        }
                    }

                });

                if (feeHeadRow.length > 0) {
                    recordData.push({
                        month: value.full,
                        totalAmt: totalAmt,
                        feeHeadRow: feeHeadRow

                    });
                }
            }

        });

        setTotalAmount(totalAmount);
        setRecordData(recordData);
        setShowLoader(false);

    }


    // async function getAllPaidFees() {
    //     const paidFeeResponse = await fetch(`http://13.127.128.192:8081/fees/getAllFeesDetails?sessionYear=${session.id}&studentId=${selectedStudent.id}`);
    //     const paidFeeData = await paidFeeResponse.json();
    //     paidFeeData.forEach(paidFee => {
    //         paidFee.feesDetails.forEach(feesDetail => {

    //             let submitFee = studentSubmitFeeMap.get(feesDetail.feesType);
    //             if (submitFee == null) {
    //                 submitFee = [];
    //             }
    //             submitFee.push(feesDetail);
    //             studentSubmitFeeMap.set(feesDetail.feesType, submitFee);

    //         });
    //     });
    //     getStudentFeeStructure();
    // }

    // async function getStudentFeeStructure() {
    //     const classFeeTypeResponse = await fetch(`http://13.127.128.192:8081/fees/getStudentFees?studentId=${selectedStudent.id}&sessionYear=${session.id}`);
    //     const classFeeTypeData = await classFeeTypeResponse.json();
    //     var amount = 0;

    //     let tempRecordData = [];
    //     classFeeTypeData.forEach(feeType => {
    //         studentFeeStructureMap.set(feeType.feesTypeId, feeType);
    //         let submitFee = studentSubmitFeeMap.get(feeType.feesTypeId);
    //         if (submitFee == null) {
    //             submitFee = [];
    //         }
    //         if (allFeesTypeMap.get(feeType.feesTypeId).isMonthly) {
    //             monthMap.forEach((value, key) => {
    //                 let paidAmount = 0;
    //                 for (const tempFee of submitFee) {
    //                     if (tempFee.month == key) {
    //                         paidAmount += tempFee.amount;
    //                     }
    //                 }
    //                 amount +=  (feeType.amount - paidAmount);

    //                 if ((feeType.amount - paidAmount) > 0) {
    //                     let row = [];
    //                     row.push(allFeesTypeMap.get(feeType.feesTypeId).name);
    //                     row.push(value.short);
    //                     row.push(settings.CURRENCY + ' ' + (feeType.amount - paidAmount) + '/-');
    //                     tempRecordData.push(row);
    //                 }
    //             });

    //         } else if (allFeesTypeMap.get(feeType.feesTypeId).isQuarterly) {
    //             quartrlyMap.forEach((value, key) => {

    //                 let paidAmount = 0;
    //                 for (const tempFee of submitFee) {
    //                     if (tempFee.quarter == key) {
    //                         paidAmount += tempFee.amount;
    //                     }
    //                 }
    //                 amount +=  (feeType.amount - paidAmount);
    //                 if ((feeType.amount - paidAmount) > 0) {
    //                     let row = [];
    //                     row.push(allFeesTypeMap.get(feeType.feesTypeId).name);
    //                     row.push(value.short);
    //                     row.push(settings.CURRENCY + ' ' + (feeType.amount - paidAmount) + '/-');
    //                     tempRecordData.push(row);
    //                 }

    //             });
    //         } else if (allFeesTypeMap.get(feeType.feesTypeId).isExamFee) {
    //             examMap.forEach((value, key) => {
    //                 let paidAmount = 0;
    //                 for (const tempFee of submitFee) {
    //                     if (tempFee.examId == key) {
    //                         paidAmount += tempFee.amount;
    //                     }
    //                 }
    //                 amount +=  (feeType.amount - paidAmount);
    //                 if ((feeType.amount - paidAmount) > 0) {
    //                     let row = [];
    //                     row.push(allFeesTypeMap.get(feeType.feesTypeId).name);
    //                     row.push(settings.CURRENCY + ' ' + (feeType.amount - paidAmount) + '/-');
    //                     tempRecordData.push(row);
    //                 }
    //             });
    //         } else {
    //             let paidAmount = 0;
    //             for (const tempFee of submitFee) {
    //                 paidAmount += tempFee.amount;
    //             }
    //             amount +=  (feeType.amount - paidAmount);
    //             if ((feeType.amount - paidAmount) > 0) {
    //                 let row = [];
    //                 row.push(allFeesTypeMap.get(feeType.feesTypeId).name);
    //                 row.push(settings.CURRENCY + ' ' + (feeType.amount - paidAmount) + '/-');
    //                 tempRecordData.push(row);
    //             }
    //         }

    //     });
    //     setTotalAmount(amount);
    //     setRecordData(tempRecordData);
    //     setShowLoader(false);
    // }


    return (
        <>
            <BackgroundScreen />
            <SafeAreaView style={{ flex: 1, position: 'absolute', width: '100%', height: '100%' }}>
                <View style={{ flex: 1, justifyContent: "space-between" }}>
                    <View style={{ flex: 6, justifyContent: "space-between" }}>
                        <ScrollView>
                            {/* {recordData.map((record, i) => (
                                <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                    <View style={{ marginHorizontal: 40 }}>
                                        <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 20 }}>{record[0]}</Text>
                                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15, marginLeft: 20 }}>{record[1]}</Text>
                                        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 15, marginLeft: 20 }}>{record[2]}</Text>
                                    </View>
                                </Pressable>
                            ))} */}


                            {recordData.map((record, i) => (
                                <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                                    <View style={{ marginHorizontal: 10 }}>
                                        <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 20 }}>{record.month} </Text>
                                        {record.feeHeadRow.map((feeHead, i) => (
                                            <View style={{ marginHorizontal: 20 }}>
                                                <Text style={{ fontWeight: 'bold' }}>{feeHead.feeHead} :- {feeHead.amount} </Text>

                                            </View>
                                        ))}
                                        <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 20 }}>Total Amt:- {record.totalAmt} </Text>
                                        {/* <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 20 }}>{record[0]}</Text>
                                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15, marginLeft: 20 }}>{record[1]}</Text>
                                        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 15, marginLeft: 20 }}>{record[2]}</Text> */}
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