import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import BackgroundScreen from "../../homepage/backgroundScreen";
import DropDownPicker from 'react-native-dropdown-picker';
import StudentHeader from "../../homepage/studentHeader";


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
    const [isExpanded, setIsExpanded] = useState();
    // const [selectedValue,setSelectedValue]= useState("firstDropDownvalue");
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('default');
    const [items, setItems] = useState([
        { label: 'Half year result', value: 'Half year result' },
        // {label: 'Madrid', value: 'madrid', parent: 'spain'},
        // {label: 'New', value: 'new', parent: 'spain'},
        // {label: 'Barcelona', value: 'barcelona', parent: 'spain'},
        { label: 'Mid term result', value: 'Mid term result' },
        { label: 'Final resut', value: 'Final resut' },
        // {label: 'Rome', value: 'rome', parent: 'italy'},
        // {label: 'Rome1', value: 'new', parent: 'italy'},
        // {label: 'Romeb', value: 'rome2', parent: 'italy'},

    ]);

    const examSubjectMap = new Map();

    const getClassById = (classId) => {
        fetch(`http://13.127.128.192:8085/class/getClassById?classId=${classId}`).then((res) => {
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
        fetch(`http://13.127.128.192:8085/subject/getAllSubjects`).then((res) => {
            res.json().then((data) => {
                if (data != '') {
                    data.forEach(element => subjectMap.set(element.id, element.name))
                }
            })
        })
    }

    const getAllExams = () => {
        fetch(`http://13.127.128.192:8085/exams/getAllExams?sessionYear=${session.id}`).then((res) => {
            res.json().then((data) => {
                if (data != '') {
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
        fetch(`http://13.127.128.192:8085/utils/getMarksGrades`).then((res) => {
            res.json().then((data) => {
                if (data != '') {
                    getStudentExamsMarks(data);
                }
            })
        })
    }

    const getStudentExamsMarks = (gradeList) => {
        fetch(`http://13.127.128.192:8085/student/getStudentExamsMarks?sessionYear=${session.id}&studentId=${selectedStudent.id}`).then((res) => {
            res.json().then((data) => {
                if (data != '') {
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

    const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]   /* this array will contain the selecetd result {code , subject, theory ,practical , total , grade}*/

    return (
        <>
            <BackgroundScreen />
            <SafeAreaView style={{ flex: 1, position: 'absolute', width: '100%', height: '100%' }}>
                <View style={{ flex: 1, justifyContent: "space-between", margin: 5 }}>
                    {/* <View style={{ flex: 6, justifyContent: "space-between" }}>
                    <ScrollView>
                        {exams.map((exam, i) => (
                            <>
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
                                <Pressable 
                                    style={isExpanded==i?{backgroundColor:'lightyellow',height:'100%',flex:1,position:'absolute',top:0, width:'97%', alignSelf:'center',borderRadius:3,justifyContent:'center',margin:10}:{backgroundColor:'lightyellow',height:90,width:'97%', alignSelf:'center',borderRadius:3,justifyContent:'center',margin:10}}
                                    >
                                        
                                        <Pressable
                                            style={{justifyContent:'center'}}
                                            onPress={()=>{
                                                    if (isExpanded!=i) {
                                                        setIsExpanded(i)
                                                    } else {
                                                        setIsExpanded('no')
                                                    }
                                                }
                                            }
                                            >
                                            {isExpanded==i?<><Text style={{color:'black'}}>marks details</Text></>:<Text style={{color:'black',textAlign:'center'}}> Exam Name(Yearly exam)</Text>}
                                            {isExpanded==i?<Text style={{position:'absolute',color:'black',right:20,fontSize:30}}>-</Text>:<Text style={{position:'absolute',color:'black',right:20,fontSize:30}}>+</Text>}
                                        </Pressable>
                                </Pressable>
                             </>
                        ))}


                    </ScrollView>
                </View> */}
                    <View style={{
                        // backgroundColor: '#171717',
                        flex: 1,
                        // alignItems: 'center',
                        // justifyContent: 'center',
                        paddingHorizontal: 1,

                    }}>
                        <StudentHeader style={{ backgroundColor: 'red' }} />
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={[...items, { label: 'Select an Exam', value: 'default' }]}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}

                            // theme="DARK"
                            // multiple={true}
                            mode="BADGE"
                            badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                        />
                        <ScrollView >
                            <View style={{
                                backgroundColor: 'white',
                                borderRadius: 5, padding: 2, marginTop: 10
                            }}>



                                <Text style={{ color: 'black', backgroundColor: 'lightblue', fontWeight: 'bold', textAlign: 'center', fontSize: 18, borderWidth: 1 }}>{value}</Text>
                                <View style={{ color: 'black', flexDirection: 'row', backgroundColor: 'lightblue' }}>
                                    <Text style={{ color: 'black', flex: 1, borderWidth: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>Code</Text>
                                    <Text style={{ color: 'black', flex: 1, borderWidth: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>Subject</Text>
                                    <Text style={{ color: 'black', flex: 1, borderWidth: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>Th</Text>
                                    <Text style={{ color: 'black', flex: 1, borderWidth: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>Pr</Text>
                                    <Text style={{ color: 'black', flex: 1, borderWidth: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>Total</Text>
                                    <Text style={{ color: 'black', flex: 1, borderWidth: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>Grade</Text>
                                </View>

                                {result.map((e, i) => (
                                    <View style={{ color: 'black', flexDirection: 'row', backgroundColor: 'lightblue' }}>
                                        <Text style={{ color: 'black', flex: 1, borderWidth: 1, textAlign: 'center' }}>0{i}</Text>
                                        <Text style={{ color: 'black', flex: 1, borderWidth: 1, textAlign: 'center' }}>Englishjhbnb</Text>
                                        <Text style={{ color: 'black', flex: 1, borderWidth: 1, textAlign: 'center' }}>49</Text>
                                        <Text style={{ color: 'black', flex: 1, borderWidth: 1, textAlign: 'center' }}>33</Text>
                                        <Text style={{ color: 'black', flex: 1, borderWidth: 1, textAlign: 'center' }}>82</Text>
                                        <Text style={{ color: 'black', flex: 1, borderWidth: 1, textAlign: 'center' }}>A</Text>
                                    </View>))}
                                <View>
                                    <Text style={{ color: 'black', fontWeight: 'bold', backgroundColor: 'lightblue', borderWidth: 1 }}>Desclaimer:</Text>
                                </View>
                            </View>

                        </ScrollView>
                    </View>
                </View >
            </SafeAreaView >
        </>
    );
}

export default ExamMarks;