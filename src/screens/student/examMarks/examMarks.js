import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

const ExamMarks = ({ navigation }) => {

    const data = useSelector((state) => state)
    const sessionData = data.session;
    const [session, setSession] = useState(sessionData.data);
    const selectedStudentData = data.selectedStudentDetails;
    const [selectedStudent, setSelectedStudent] = useState(selectedStudentData.data);

    useEffect(() => {
        getClassById(selectedStudent.classId);
        getAllSubjects();
        getAllExams();
        getMarksGrades();
    }, [])

    const subjectMap = new Map();
    const classSubjectMap = new Map();

    const examsMarksMap = new Map();
    const gradeMap = new Map();

    const [exams, setExams] = useState([]);
    const examSubjectMap = new Map();

    const getClassById = (classId) => {
        fetch(`http://13.127.128.192:8081/class/getClassById?classId=${classId}`).then((res) => {
            res.json().then((data) => {
                if (data != '') {
                    for (const subjects of data.subjects) {
                        classSubjectMap.set(subjects.subjectId, subjects);
                    }
                }
            })
        })
    }


    const getAllSubjects = () => {
        fetch(`http://13.127.128.192:8081/subject/getAllSubjects`).then((res) => {
            res.json().then((data) => {
                if (data != '') {
                    console.log("getAllSubjects===>", data);
                    data.forEach(element => subjectMap.set(element.id, element.name))
                }
            })
        })
    }

    const getAllExams = () => {
        fetch(`http://13.127.128.192:8081/exams/getAllExams?sessionYear=${session.id}`).then((res) => {
            res.json().then((data) => {
                if (data != '') {
                    console.log("getAllExams===>", data);
                    setExams(data);
                    data.forEach(exam => {
                        const subjectList = [];
                        for (const examSchedule of exam.examSchedule) {

                            if (selectedStudent.classId == examSchedule.classId) {
                                subjectList.push(classSubjectMap.get(examSchedule.subjectId));
                            }
                        }
                        examSubjectMap.set(exam.examsDetails.id, subjectList);
                    })
                }
            })
        })
    }

    const getMarksGrades = () => {
        fetch(`http://13.127.128.192:8081/utils/getMarksGrades`).then((res) => {
            res.json().then((data) => {
                if (data != '') {
                    console.log("getMarksGrades===>", data);
                    getStudentExamsMarks(data);
                }
            })
        })
    }

    const getStudentExamsMarks = (gradeList) => {
        fetch(`http://13.127.128.192:8081/student/getStudentExamsMarks?sessionYear=${session.id}&studentId=${selectedStudent.id}`).then((res) => {
            res.json().then((data) => {
                if (data != '') {
                    console.log("getStudentExamsMarks===>", data);
                    data.forEach(marks => {
                        let examMap = examsMarksMap.get(marks.examId);
                        let totalMarks = gradeMap.get(marks.examId);
                        if (!examMap) {
                            examMap = new Map();
                            totalMarks = { obtainedMarks: 0, maxMarks: 0, percentage: 0, grade: '' };
                        }
                        totalMarks.obtainedMarks += marks.theoryMarksObtained + marks.practicalMarksObtained;
                        totalMarks.maxMarks += marks.theoryMaxMarks + marks.practicalMaxMarks;
                        totalMarks.percentage = parseInt((totalMarks.obtainedMarks * 100 / totalMarks.maxMarks).toFixed(2));

                        for (const grade of gradeList) {
                            if (grade.minPercentage <= totalMarks.percentage && grade.maxPercentage >= totalMarks.percentage) {
                                totalMarks.grade = grade.gradeName;
                                break;
                            }
                        }
                        examMap.set(marks.subjectId, marks);
                        gradeMap.set(marks.examId, totalMarks);
                        examsMarksMap.set(marks.examId, examMap);
                    });
                }
            })
        })
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: "space-between" }}>
                <View style={{ flex: 6, justifyContent: "space-between" }}>
                    <ScrollView>

                        {exams.map((exam, i) => (
                            <View style={{ flex: 1, backgroundColor: 'white', borderBottomWidth: 1, paddingHorizontal: 10, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={{ color: 'darkblue' }}>{exam.examsDetails.name}</Text>

                                <View style={{ flex: 1, backgroundColor: 'white', borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }}>
                                    <Text style={{ color: 'green', marginHorizontal: 5, textAlign: 'center' }}>Subject</Text>
                                    <View style={{ position: 'absolute', right: 5, flexDirection: 'row', }}>
                                        <Text style={{ color: '#b942f5', marginHorizontal: 5, textAlign: 'center' }}>Maximum</Text>
                                        <Text style={{ color: '#f58a42', marginHorizontal: 5, textAlign: 'center' }}>Obtained</Text>
                                        <Text style={{ color: 'red', marginHorizontal: 5, textAlign: 'center' }}>Total</Text>
                                        <Text style={{ color: 'red', marginHorizontal: 5, textAlign: 'center' }}>Grade</Text>
                                    </View>
                                </View>
                            </View>
                        ))}


                    </ScrollView>
                </View>
            </View >
        </SafeAreaView >
    );
}

export default ExamMarks;