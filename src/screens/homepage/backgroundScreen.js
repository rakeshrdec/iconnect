import React from "react";
import { View, Dimensions, ImageBackground, StyleSheet } from "react-native";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')
const BackgroundScreen = () => {


    // iclass:-   borderTopColor: "#030E4F",borderRightColor: '#F49F1C',
    // KPS_Dariyaoganj:-   borderTopColor: "#5ce1e6",  borderRightColor: '#fdad93',
    // LKM_FZD:-   borderTopColor: "#f9f7c7",  borderRightColor: '#2f1e54',
    // IQRA_FZD:-  borderTopColor: "#009541",  borderRightColor: '#422774',
    // SSD_FZD:-  borderTopColor: "#f9d887",  borderRightColor: '#962d2a',
    // MSA_FZD:-   borderTopColor: "#f28623",  borderRightColor: '#903137',


    return (
        <View style={{
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
            borderTopColor: "#030E4F", borderRightColor: '#F49F1C',
            borderTopWidth: SCREEN_HEIGHT - 50,
            borderRightWidth: SCREEN_WIDTH
        }}>
            <View>
                <ImageBackground
                    source={require('../../../assets/backgrounds/background.jpg')}
                    resizeMode="stretch"
                    style={styles.img}>
                </ImageBackground>
            </View>
        </View>
    );

}

export default BackgroundScreen;

const styles = StyleSheet.create({
    img: {
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        alignItems: 'center',

    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 2,
        padding: 10,
    },
});