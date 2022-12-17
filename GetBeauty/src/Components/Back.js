//import liraries
import React, { Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
// create a component
const Back = ({navigation}) => {
    return (
        <View>
            <View style={{ width: 40 }}>
                <Ionicons name='md-chevron-back-circle-outline' size={40} color={'black'} onPress={() => navigation.goBack()} />
            </View>
        </View>
    );
};


//make this component available to the app
export default Back;
