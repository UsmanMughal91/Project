//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../Styles/Colors';
import Font from '../Styles/Font';

// create a component
const H1 = ({
    text,
    textStyle,
    viewStyle }) => {
    return (
        <View style={{ ...styles.viewStyle, ...viewStyle }}>
            <Text style={{ ...styles.textStyle, ...textStyle }}>{text}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    textStyle: {
        fontSize: Font.h1,
        fontWeight: '600',
        color: Colors.black,
        marginTop: 10,
    },
    viewStyle: {
        alignItems: "flex-start"
    }
});

//make this component available to the app
export default H1;
