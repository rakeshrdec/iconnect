import React, { useEffect, useState } from "react";
import { View, Text, Image,ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import { Overlay } from '@rneui/themed';

const Loader = (props) => {

    return (
        < Overlay isVisible={props.showLoader} overlayStyle={{ backgroundColor: "#2E4AA0", borderWidth: 0, opacity: 0.8, flex: 1, width: '100%', height: '100%', justifyContent: 'center' }
        }>
            <View style={{ justifyContent: 'center', width: '100%', height: '100%', fontWeight: "bold", color: "white" }}>
                <ActivityIndicator size="large" color="#00ff00" />
                <Text style={{ textAlign: 'center', fontWeight: "bold", color: "white" }}>{props.message}</Text>
            </View>
        </Overlay >
    );

}

export default Loader;