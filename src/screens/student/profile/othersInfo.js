import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View,Text,Dimensions,ScrollView} from "react-native";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

const OthersInfo = () =>{
    return(
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
            <ScrollView style={{ flex: 1, position: 'absolute', width: '100%', height: '100%' }}>
            <Text style={{color:'black',fontWeight:'bold'}}>Others Information</Text>
            <View style={{flexDirection:'row',flex:1, alignSelf:'center'}}>
                <Text>Name :</Text>
                <Text>Rakesh Kumar Mishra</Text>
            </View>
            <View style={{flexDirection:'row',flex:1, alignSelf:'center'}}>
                <Text>Name :</Text>
                <Text>Rakesh Kumar Mishra</Text>
            </View>
            <View style={{flexDirection:'row',flex:1, alignSelf:'center'}}>
                <Text>Name :</Text>
                <Text>Rakesh Kumar Mishra</Text>
            </View>
            <View style={{flexDirection:'row',flex:1, alignSelf:'center'}}>
                <Text>Name :</Text>
                <Text>Rakesh Kumar Mishra</Text>
            </View>

            </ScrollView>
         </>
    );

}

export default OthersInfo;