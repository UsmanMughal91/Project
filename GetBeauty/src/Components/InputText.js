//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput, TouchableOpacity } from 'react-native';
import Colors from '../Styles/Colors';
import Font from '../Styles/Font';
// create a component
const InputText = ({
    onChangeText,
    Icon,
    placeholder,
    secureTextEntry,
    keyboardType,
    Icons,
    onPress,
    value,
    multiline,
    inputstyle,
    icon,
    icons
}) => {

    return (
        <View style={styles.container}>
            <View style={{...styles.Design,...inputstyle}}>
                <View style={{...styles.icon,...icon}}>
                    {Icon}
                </View>
              
                    <TextInput placeholder={placeholder} style={{ flex: 1, paddingLeft: 10, fontSize:Font.h1, }}
                        onChangeText={onChangeText}
                        secureTextEntry={secureTextEntry}
                        keyboardType={keyboardType}
                        onPress={onPress}
                        value={value}
                        multiline={multiline}
                    />
             
              
                <View style={{ ...styles.icons, ...icons }}>
                    <TouchableOpacity onPress={onPress} >
                        {Icons}
                    </TouchableOpacity>
                   
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {

    },
    Design: {
        flexDirection: "row",
        alignItems:'center',
        backgroundColor: Colors.white,
        borderRadius: 12,
        paddingLeft: 10,
        paddingRight:10,
        marginTop: 20,
        flexWrap:'wrap',
        width:"100%",
        
    },
});

//make this component available to the app
export default InputText;
