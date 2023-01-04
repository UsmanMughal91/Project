//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Colors from '../Styles/Colors';
import Font from '../Styles/Font';

// create a component
const BtnComp = ({
    btnText,
    btnStyle,
    onPress,
    btnTextS,
    isDisable = false, 
}) => {
    return (
        <View>
            <TouchableOpacity style={{...styles.btnStyle,...btnStyle}}
            disabled={isDisable} 
            onPress={onPress}
            activeOpacity={0.6}
            >
            
                <Text style={{...styles.btnTextS,...btnTextS}}>{btnText}</Text>
            </TouchableOpacity>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    btnStyle: { 
        backgroundColor: Colors.purple,
        borderRadius: 12,
        padding: 5,
        
    },
    btnTextS:{
        color:Colors.white,
        fontSize:Font.h1,
        fontWeight: 'bold',
        textAlign:'center'
    },
  
});

//make this component available to the app
export default BtnComp;
