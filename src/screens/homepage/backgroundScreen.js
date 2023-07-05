import React from "react";
import { View, Dimensions } from "react-native";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')
const BackgroundScreen = () => {


// iclass:-   borderTopColor: "#2E4AA0",borderRightColor: '#F0BA19',
// KPS_Dariyaoganj:-   borderTopColor: "#5ce1e6",  borderRightColor: '#fdad93',
// LKM_FZD:-   borderTopColor: "#f9f7c7",  borderRightColor: '#2f1e54',
// IQRA_FZD:-  borderTopColor: "#009541",  borderRightColor: '#422774',
// SSD_FZD:-  borderTopColor: "#f9d887",  borderRightColor: '#962d2a',
// MSA_FZD:-   borderTopColor: "#f28623",  borderRightColor: '#903137',


    return (
        <View style={{
            width: SCREEN_WIDTH,
            height: 0,
            borderTopColor: "#FB965A",
            borderRightColor: '#5CE2E6',
            borderTopWidth: SCREEN_HEIGHT-50,
            borderRightWidth: SCREEN_WIDTH
        }}>
        </View>
    );

}

export default BackgroundScreen;