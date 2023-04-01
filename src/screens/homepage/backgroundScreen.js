import React from "react";
import { View, Dimensions } from "react-native";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')
const BackgroundScreen = () => {

    return (
        <View style={{
            width: SCREEN_WIDTH,
            height: 0,
            borderTopColor: "#2E4AA0",
            borderTopWidth: SCREEN_HEIGHT-50,
            borderRightWidth: SCREEN_WIDTH,
            borderRightColor: '#F0BA19'
        }}>
        </View>
    );

}

export default BackgroundScreen;