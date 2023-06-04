import React from 'react';

import { View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import RNExitApp from "react-native-exit-app";

const ActionBarImage = ({ navigation,route }) => {
    return (
        <View style={{ flexDirection: 'row' }}>

            <Icon name="home" type="material" size={40} color="white" onPress={() => {
            }}/>

            <Icon name="setting" type="material" size={40} color="white" onPress={() => {
                Alert.alert('Hold on', 'Do you really want to exit?', [
                    {
                        text: 'Cancel',
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => RNExitApp.exitApp() },
                ]);
            }} />
        </View>
    );
};

export default ActionBarImage;