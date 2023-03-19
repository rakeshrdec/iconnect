import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Dimensions, Pressable, Image, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { monthMap, settings } from '../../../models/data';
import { useSelector } from "react-redux";
import { Overlay } from "@rneui/themed";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')


const FeeStatus = ({ navigation }) => {
    const data = useSelector((state) => state)
    const sessionData = data.session;
    const [session, setSession] = useState(sessionData.data);
    const selectedStudentData = data.selectedStudentDetails;
    const [selectedStudent, setSelectedStudent] = useState(selectedStudentData.data);
    const [showLoader,setShowLoader] = useState(true)


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
    const [totalPaidAmount, setTotalPaidAmount] = useState(0);
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
                let row = [];
                row.push('');
                row.push(value.short);
                row.push(settings.CURRENCY + ' ' + classfeeTypeMap.get(feeType).amount.toString() + '/-');
                row.push(studentMonthFeeStatus.get(feeType + '_' + key) ? settings.CURRENCY + ' ' + studentMonthFeeStatus.get(feeType + '_' + key).amount.toString() + '/-' : '--');
                row.push(studentMonthFeeStatus.get(feeType + '_' + key) ? studentMonthFeeStatus.get(feeType + '_' + key).discountAmount.toString() + '/-' : '--');
                row.push(studentMonthFeeStatus.get(feeType + '_' + key) ? studentMonthFeeStatus.get(feeType + '_' + key).lateFeeAmount.toString() + '/-' : '--');
                row.push(studentMonthFeeStatus.get(feeType + '_' + key) ? "Paid" : 'UnPaid');
                recordData.push(row);
            });
            return recordData;
        }

        function getQuartersList(feeType) {
            let recordData = [];
            quaterlyMap.forEach((value, key) => {
                let row = [];
                row.push('');
                row.push(value.short);
                row.push(settings.CURRENCY + ' ' + classfeeTypeMap.get(feeType).amount.toString() + '/-');
                row.push(studentMonthFeeStatus.get(feeType + '_' + key) ? settings.CURRENCY + ' ' + studentMonthFeeStatus.get(feeType + '_' + key).amount.toString() + '/-' : '--');
                row.push(studentMonthFeeStatus.get(feeType + '_' + key) ? studentMonthFeeStatus.get(feeType + '_' + key).discountAmount.toString() + '/-' : '--');
                row.push(studentMonthFeeStatus.get(feeType + '_' + key) ? studentMonthFeeStatus.get(feeType + '_' + key).lateFeeAmount.toString() + '/-' : '--');
                row.push(studentMonthFeeStatus.get(feeType + '_' + key) ? "Paid" : 'UnPaid');
                recordData.push(row);
            });

            return recordData;
        }

        function getExamsList(feeType) {
            let recordData = [];
            examMap.forEach((value, key) => {
                let row = [];
                row.push('');
                row.push(value);
                row.push(settings.CURRENCY + ' ' + classfeeTypeMap.get(feeType).amount.toString() + '/-');
                row.push(studentMonthFeeStatus.get(feeType + '_' + key) ? settings.CURRENCY + ' ' + studentMonthFeeStatus.get(feeType + '_' + key).amount.toString() + '/-' : '--');
                row.push(studentMonthFeeStatus.get(feeType + '_' + key) ? studentMonthFeeStatus.get(feeType + '_' + key).discountAmount.toString() + '/-' : '--');
                row.push(studentMonthFeeStatus.get(feeType + '_' + key) ? studentMonthFeeStatus.get(feeType + '_' + key).lateFeeAmount.toString() + '/-' : '--');
                row.push(studentMonthFeeStatus.get(feeType + '_' + key) ? "Paid" : 'UnPaid');
                recordData.push(row);
            });

            return recordData;
        }

        fetch(`http://13.127.128.192:8081/fees/getAllFeesDetails?sessionYear=${session.id}&studentId=${selectedStudent.id}`).then((res) => {
            res.json().then((data) => {
                if (data != '') {
                    var tempTotalPaidAmount = 0;
                    data.forEach(fee => {
                        fee.feesDetails.forEach(feesDetail => {

                            tempTotalPaidAmount += feesDetail.amount;

                            // setTotalLateAmount(totalLateAmount + feesDetail.lateFeeAmount);
                            // setTotalDiscountAmount(totalDiscountAmount + feesDetail.discountAmount);

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

                    setTotalPaidAmount(tempTotalPaidAmount);
                    let tempRecordData = [];
                    feeTypeMap.forEach((value, key) => {
                        let row = [];
                        row.push(value.name);
                        if (value.isMonthly) {

                            tempRecordData.push(row);
                            tempRecordData = tempRecordData.concat(getMonthsList(value.id));
                        } else if (value.isQuarterly) {
                            tempRecordData.push(row);
                            tempRecordData = tempRecordData.concat(getQuartersList(value.id));
                        } else if (value.isExamFee) {
                            tempRecordData.push(row);
                            tempRecordData = tempRecordData.concat(getExamsList(value.id));
                        } else {
                            row.push('');
                            row.push(settings.CURRENCY + ' ' + classfeeTypeMap.get(value.id).amount.toString() + '/-');
                            row.push(paidFees.get(value.id) ? settings.CURRENCY + ' ' + paidFees.get(value.id).amount.toString() + '/-' : '--');
                            row.push(paidFees.get(value.id) ? paidFees.get(value.id).discountAmount.toString() + '/-' : '--');
                            row.push(paidFees.get(value.id) ? paidFees.get(value.id).lateFeeAmount.toString() + '/-' : '--');
                            row.push(paidFees.get(value.id) ? "Paid" : 'UnPaid');
                            tempRecordData.push(row);
                        }
                    });
                    console.log("amount=================================>>>");
                    setShowLoader(false)
                    setRecordData(tempRecordData);
                    // console.log("temp data",tempRecordData)
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
                            <View style={{ flex: 1, backgroundColor: 'white', borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }}>
                                <Text style={{ color: 'green', marginHorizontal: 5, textAlign: 'center' }}>Fee Type</Text>
                                <View style={{ position: 'absolute', right: 5, flexDirection: 'row', }}>
                                    <Text style={{ color: '#b942f5', marginHorizontal: 5, textAlign: 'center' }}>M/Q/E</Text>
                                    <Text style={{ color: '#f58a42', marginHorizontal: 5, textAlign: 'center' }}>Amount</Text>
                                    <Text style={{ color: 'red', marginHorizontal: 5, textAlign: 'center' }}>Paid Amount</Text>
                                    <Text style={{ color: 'red', marginHorizontal: 5, textAlign: 'center' }}>Status</Text>
                                </View>
                            </View>

                            {recordData.map((record, i) => (

                                <View style={{ flex: 1, backgroundColor: 'white', borderBottomWidth: 1, paddingHorizontal: 10, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={{ color: 'darkblue' }}>{record[0]}</Text>
                                    <View style={{ position: 'absolute', right: 5, flexDirection: 'row', }}>
                                        <Text style={{ color: 'green', marginHorizontal: 5, width: 50, textAlign: 'center' }}>{record.length > 0 ? record[1] : ''}</Text>
                                        <Text style={{ color: 'green', marginHorizontal: 5, width: 50, textAlign: 'center' }}>{record.length > 0 ? record[2] : ''}</Text>
                                        <Text style={{ color: 'green', marginHorizontal: 5, width: 50, textAlign: 'center' }}>{record.length > 0 ? record[3] : ''}</Text>
                                        <Text style={{ color: 'green', marginHorizontal: 5, width: 50, textAlign: 'center' }}>{record.length > 0 ? record[6] : ''}</Text>
                                    </View>

                                </View>
                            ))}
                            <View style={{ flex: 1, backgroundColor: 'white', borderBottomWidth: 1, paddingHorizontal: 10, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={{ color: 'darkblue' }}>Total</Text>

                                <View style={{ position: 'absolute', right: 5, flexDirection: 'row', }}>

                                    <Text style={{ color: 'green', marginHorizontal: 5, width: 50, textAlign: 'center' }}>{settings.CURRENCY}{totalAmount}/-</Text>
                                    <Text style={{ color: 'green', marginHorizontal: 5, width: 50, textAlign: 'center' }}>{settings.CURRENCY}{totalPaidAmount}/-</Text>
                                </View>

                            </View>

                        </ScrollView>
                        <Overlay
                            isVisible={showLoader}
                            overlayStyle={{backgroundColor:'transparent',height:'100%',width:'100%',justifyContent:'center'}}
                        >
                            <ActivityIndicator size='large' />
                        </Overlay>
                    </View>
                </View >
            </SafeAreaView >
        </>
    );
}

export default FeeStatus;