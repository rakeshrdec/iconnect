import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text,View } from "react-native";

const ParentsInfo = () =>{
    return(<SafeAreaView style={{flex:1,}}>
                <Text style={{color:'black',fontWeight:'bold'}}>Prents Information</Text>

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

export default ParentsInfo;