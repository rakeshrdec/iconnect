import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View,Text } from "react-native";

const OthersInfo = () =>{
    return(<SafeAreaView style={{flex:1}}>
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

    </SafeAreaView>);

}

export default OthersInfo;