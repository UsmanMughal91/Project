//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../Styles/Colors';
import Font from '../Styles/Font';
import Toast from 'react-native-toast-message';
import { toastConfig } from '../Styles/styles';



// create a component 
const Header = ({ navigation, onPress, text }) => {
   
    return (
        <View style={styles.container}>
            {text==="no" ?    
       
                <View style={{alignSelf:'center'}}> 
                <Text style={{ color:Colors.white, fontSize:Font.Heading,fontWeight:'bold'}}>GetBeauty</Text>
                </View>
            :
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center", marginLeft: 10, width: 40 }} onPress={onPress} >
                <Ionicons name='chevron-back' size={20} color={'white'} onPress={onPress} />
                <Text style={{ color: 'white', fontSize: 16 }}>Back</Text>
            </TouchableOpacity>
            }
            <Toast config={toastConfig} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor:Colors.purple,
        justifyContent: 'center', 
        borderBottomLeftRadius:20 ,
        borderBottomRightRadius:20  
    },
});

//make this component available to the app
export default Header;
