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

        getPaymentTypes();
        getAllFeeHeads();
    }, [])

    const paymentTypeMap = new Map();
    const feeHeadMap = new Map();
    // const monthFeeHeadMap = new Map();
    const studentFeeHeadMap = new Map();

    const [totalPaidAmount, setTotalPaidAmount] = useState(0);
    const [totalLateAmount, setTotalLateAmount] = useState(0);
    const [totalDiscountAmount, setTotalDiscountAmount] = useState(0);

    const [paidFeesData, setPaidFeesData] = useState([]);


    async function getPaymentTypes() {
        const paymentTypeResponse = await fetch(`http://13.127.128.192:8081/utils/getPaymentTypes`);
        const paymentTypeData = await paymentTypeResponse.json();
        paymentTypeData.forEach(paymentType => {
            paymentTypeMap.set(paymentType.id, paymentType.name);
        });
    }
    async function getAllFeeHeads() {
        const feeHeadsResponse = await fetch(`http://13.127.128.192:8081/fees/getAllFeeHeads`);
        const feeHeadData = await feeHeadsResponse.json();
        feeHeadData.forEach(feeHead => {
            feeHeadMap.set(feeHead.id, feeHead);
            // const payMonths = feeHead.payMonths.split(',');
            // payMonths.forEach(payMonth => {
            //     let months = monthFeeHeadMap.get(parseInt(payMonth));
            //     if (months == null) {
            //         months = [];
            //     }
            //     months.push(feeHead.id);
            //     monthFeeHeadMap.set(parseInt(payMonth), months);
            // });

        });
        getStudentFeeStructure();
    }

    async function getStudentFeeStructure() {
        const studentFeeResponse = await fetch(`http://13.127.128.192:8081/fees/getStudentFeesMonthWise?sessionYear=${session.id}&studentId=${selectedStudent.id}`);
        const studentfeeData = await studentFeeResponse.json();
        studentfeeData.forEach(studentfee => {
            studentFeeHeadMap.set(studentfee.feeHeadId, studentfee);
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

            var tempFeesDetail = [];
            fee.feeDetails.forEach(feesDetail => {
                
                tempFeesDetail.push({
                    amount: feesDetail.amount,
                    lateFeeAmount: feesDetail.lateFeeAmount,
                    discountAmount: feesDetail.discountAmount,
                    feeHead: feeHeadMap.get(feesDetail.feeHeadId).name,
                    month: monthMap.get(feesDetail.month).full 
                });


                tempTotalPaidAmount += feesDetail.amount;
                tempTotalDiscountAmount += feesDetail.lateFeeAmount;
                tempTotalLateAmount += feesDetail.discountAmount;
            });

            tempPaidFeesData.push({
                amount: fee.amount,
                paymentMode: paymentTypeMap.get(fee.paymentMode),
                submissionDate: fee.submissionDate,
                feeDetails: tempFeesDetail
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
                                        <Text style={{ fontWeight: 'bold', marginLeft: 0 }}>Payment Mode:- {fee.paymentMode}</Text>
                                        <Text style={{ fontWeight: 'bold', marginLeft: 0 }}>Submission Date:- {fee.submissionDate}</Text>


                                        {fee.feeDetails.map((feeDetails, i) => (
                                            <View style={{ marginHorizontal: 20 }}>
                                                <Text style={{ color: 'black', fontWeight: 'bold'}}>{feeDetails.feeHead} [ {feeDetails.month} ]</Text>
                                                <Text style={{ color: 'black', fontWeight: 'bold' }}>Paid Amt:- {settings.CURRENCY + ' ' + feeDetails.amount}/-</Text>
                                                {feeDetails.discountAmount > 0 ? <Text style={{ color: 'black', fontWeight: 'bold'}}>Discount Amt:- {settings.CURRENCY + ' ' + feeDetails.discountAmount}/-</Text> : ''}
                                                {feeDetails.lateFeeAmount > 0 ? <Text style={{ color: 'red', fontWeight: 'bold'}}>Late Fee Amt:- {settings.CURRENCY + ' ' + feeDetails.lateFeeAmount}/-</Text> : ''}
                                            </View>
                                        ))}
                                        <Text style={{ color: 'green', fontWeight: 'bold' }}>Total Paid Amt:- {settings.CURRENCY + ' ' + fee.amount}/-</Text>
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