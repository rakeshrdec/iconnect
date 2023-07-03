import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { monthMap, settings } from '../../../models/data';
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
    const monthFeeHeadMap = new Map();
    const studentFeeHeadMap = new Map();



    feeHeadMap = new Map();
    useEffect(() => {
        getAllFeeHeads();
    }, [])

    const [totalAmount, setTotalAmount] = useState(0);
    const [recordData, setRecordData] = useState([]);

    async function getAllFeeHeads() {
        const feeHeadsResponse = await fetch(`http://13.127.128.192:8082/fees/getAllFeeHeads`);
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
        const studentFeeResponse = await fetch(`http://13.127.128.192:8082/fees/getStudentFees?sessionYear=${session.id}&studentId=${selectedStudent.id}`);
        const studentfeeData = await studentFeeResponse.json();
        studentfeeData.forEach(studentfee => {
            studentFeeHeadMap.set(studentfee.feeHeadId, studentfee);
        });
        fetchfeeRecord();
    }

    async function fetchfeeRecord() {
        let totalAmount = 0;
        const paidfees = new Map();
        const recordData = [];
        const studentFeeResponse = await fetch(`http://13.127.128.192:8082/fees/getAllFeesDetails?sessionYear=${session.id}&studentId=${selectedStudent.id}`);
        const studentfeeData = await studentFeeResponse.json();

        studentfeeData.forEach(fee => {
            fee.feeDetails.forEach(feeDetail => {
                let paidfee = paidfees.get(feeDetail.month);
                if (paidfee == null) {
                    paidfee = new Map();
                }
                let feeDetails = paidfee.get(feeDetail.feeHeadId);
                if (feeDetails == null) {
                  feeDetails = [];
                }
                feeDetails.push(feeDetail);
                paidfee.set(feeDetail.feeHeadId, feeDetails);
                paidfees.set(feeDetail.month, paidfee);
            });
        });
        monthMap.forEach((value, key) => {
            const allFeeHeadIds = monthFeeHeadMap.get(key);
            if (allFeeHeadIds != null) {

                let feeHeadRow = [];
                let totalMonthAmt = 0;
                allFeeHeadIds.forEach(feeHeadId => {
                    if (studentFeeHeadMap.get(feeHeadId)) {
                        let amt = studentFeeHeadMap.get(feeHeadId).amount;
                        if (paidfees.get(key) && paidfees.get(key).get(feeHeadId)) {
                            paidfees.get(key).get(feeHeadId).forEach(feeDetails => {
                                // paidAmt += feeDetails.amount;
                                // paidDiscountAmt += feeDetails.discountAmount;
                                // paidLateFeeAmt += feeDetails.lateFeeAmount;
                                amt -= (feeDetails.amount +feeDetails.discountAmount);
                              });
                            
                        }
                        if (amt > 0) {
                            totalMonthAmt += amt;
                            feeHeadRow.push({
                                feeHead: feeHeadMap.get(feeHeadId).name,
                                amount: studentFeeHeadMap.get(feeHeadId).amount.toString()
                            });
                        }
                    }

                });

                if (feeHeadRow.length > 0) {
                    totalAmount += totalMonthAmt;
                    recordData.push({
                        month: value.full,
                        totalMonthAmt: totalMonthAmt,
                        feeHeadRow: feeHeadRow

                    });
                }
            }

        });

        setTotalAmount(totalAmount);
        setRecordData(recordData);
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
                                    <View style={{ marginHorizontal: 10 }}>
                                        <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 20 }}>{record.month} </Text>
                                        {record.feeHeadRow.map((feeHead, i) => (
                                            <View style={{ marginHorizontal: 20 }}>
                                                <Text style={{ fontWeight: 'bold' }}>{feeHead.feeHead} :- {feeHead.amount} </Text>

                                            </View>
                                        ))}
                                        <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 20 }}>Total Amt:- {record.totalMonthAmt} </Text>
                                    </View>
                                </Pressable>
                            ))}


                        </ScrollView>
                        <Pressable style={{ elevation: 15, flexDirection: 'row', width: '90%', alignSelf: 'center', margin: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                            <View style={{ marginHorizontal: 40 }}>
                                <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}>Total Unpaid Amount:- {settings.CURRENCY + ' ' + totalAmount}/-</Text>
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