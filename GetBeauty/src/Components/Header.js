//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../Styles/Colors';

// create a component
const Header = ({ navigation, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center", marginLeft: 10, width: 40 }} onPress={onPress} >
                <Ionicons name='chevron-back' size={20} color={'white'} onPress={() => navigation.goBack()} />
                <Text style={{ color: 'white', fontSize: 16 }}>Back</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor:Colors.purple,
        justifyContent: 'center',    
    },
});

//make this component available to the app
export default Header;
