//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

// create a component
const splashScreen = () => {
    return (
        <View style={{flex:1}}> 
        <View style={{ flex: 1, justifyContent: 'center',alignItems:'center',backgroundColor:'white'}}> 
            
        <Image source={require('../assests/images/logoo.png')}style={{width:300,height:300}}/>
           <View style={{marginHorizontal:30}}>

                  
            </View>    
          
        </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
});

//make this component available to the app
export default splashScreen;
