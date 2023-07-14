import React from "react";
import { View, Dimensions, ImageBackground, StyleSheet } from "react-native";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')
const BackgroundScreen = () => {

    return (
        <View style={{
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT
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