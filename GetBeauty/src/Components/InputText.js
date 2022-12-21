//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// create a component
const InputText = ({
    onChangeText,
    Icon,
    placeholder,
    secureTextEntry,
    keyboardType,
    Icons,
    onPress
}) => {


 
    return (
        <View style={styles.container}>
            <View style={styles.Design}>
                <View>
                    {Icon}
                </View>
              
                    <TextInput placeholder={placeholder} style={{ flex: 1, paddingLeft: 10, fontSize: 20, }}
                        onChangeText={onChangeText}
                        secureTextEntry={secureTextEntry}
                        keyboardType={keyboardType}
                        onPress={onPress}
                    />
             
              
                <View>
                    <TouchableOpacity onPress={onPress}>
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
        alignItems: 'center',
        backgroundColor: 'white',
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
