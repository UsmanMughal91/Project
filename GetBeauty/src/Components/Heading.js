//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Heading = ({text}) => {
    return (
        <View style={{alignItems:"center"}}>
            <Text style={styles.container}>{text}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        fontSize: 30,
        fontWeight: '600',
        color: 'black',
        marginTop: 10,
        
    },
});

//make this component available to the app
export default Heading;
