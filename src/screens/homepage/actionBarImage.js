import React from 'react';

import { View, Image, Alert } from 'react-native';
import { Stack, IconButton } from "@react-native-material/core";

// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

import RNExitApp from "react-native-exit-app";


const ActionBarImage = ({ navigation }) => {
    return (
        <View style={{ flexDirection: 'row' }}>

            <Icon name="home" type="material" size={40} color="white" onPress={() => {
                navigation.navigate('HomePage');
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