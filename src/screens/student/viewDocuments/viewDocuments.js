import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { useSelector } from "react-redux";
import StudentHeader from "../../homepage/studentHeader";
import Loader from "../../homepage/loader";
import BackgroundScreen from "../../homepage/backgroundScreen";
import RNFetchBlob from 'rn-fetch-blob';

const ViewDocuments = ({ navigation }) => {

    const [studentDocuments, setStudentDocuments] = useState([]);
    const data = useSelector((state) => state)

    const selectedStudentData = data.selectedStudentDetails;
    const [selectedStudent, setSelectedStudent] = useState(selectedStudentData.data);
    const [showLoader, setShowLoader] = useState(true)

    useEffect(() => {
        getStudentDouments();
    }, [])

    const getStudentDouments = () => {
        fetch(`http://13.127.128.192:8081/student/getStudentDocuments?studentId=${selectedStudent.id}`).then((res) => {
            res.json().then((data) => {
                console.log(data,);
                if (data != '') {
                    setStudentDocuments(data);
                    setShowLoader(false);
                }
                setShowLoader(false);
            })
        }).catch((e) => {
            setShowLoader(false);
            console.error("error in api calling ", e)
        })
    }

    return (
        <>
            <BackgroundScreen />
            <SafeAreaView style={{ flex: 1, position: 'absolute', width: '100%', height: '100%' }}>
                <View style={{ flex: 1, justifyContent: "space-between" }}>
                    {/* USER PROFILE */}
                    <View style={{ flex: 1 }}><StudentHeader /></View>
                    <View style={{ flex: 6, justifyContent: "space-between" }}>
                        <ScrollView>
                            {studentDocuments.map((studentDocument, i) => (

                                <Pressable
                                    style={{ elevation: 15, width: '90%', alignSelf: 'center', borderRadius: 5, margin: 10, paddingTop: 5, paddingBottom: 5, flex: 1, backgroundColor: 'white', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>

                                    <View style={{}}>
                                        <Text style={{ color: '#2E4AA0', fontSize: 16, fontWeight: 'bold', right: 0 }}>{i + 1}. {studentDocument.documentName}</Text>
                                    </View>
                                    <Pressable
                                        onPress={() => {
                                            const { config, fs } = RNFetchBlob;
                                            let PictureDir = fs.dirs.PictureDir;
                                            let options = {
                                                fileCache: true,
                                                addAndroidDownloads: {
                                                    //Related to the Android only
                                                    useDownloadManager: true,
                                                    notification: true,
                                                    path:
                                                        PictureDir +
                                                        '/image_' +
                                                        Math.floor(Date.now() +
                                                            Date.now() / 2) + 'ext.jpg',
                                                    description: 'Image',
                                                },
                                            };
                                            let image_URL = `http://13.127.128.192:8081${studentDocument.uploadDocument}`
                                            config(options)
                                                .fetch('GET', image_URL)
                                                .then(res => {
                                                    //Showing alert after successful downloading
                                                    alert('Image Downloaded Successfully.');
                                                });
                                        }}
                                    >
                                        <Image source={require('../../../../assets/logo/download.png')} style={{ height: 50, width: 50 }} />
                                    </Pressable>

                                </Pressable>

                            ))}
                        </ScrollView>
                    </View>
                </View>

                <Loader message="Loading Documents ......." showLoader={showLoader} />

            </SafeAreaView>
        </>
    );
}

export default ViewDocuments;