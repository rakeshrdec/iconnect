import React from "react";
import { View,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PersonalInfo = () =>{
    return(<SafeAreaView style={{flex:1}}>
                <Text style={{color:'black',fontWeight:'bold'}}>PersonalInfo Information</Text>

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

export default PersonalInfo;