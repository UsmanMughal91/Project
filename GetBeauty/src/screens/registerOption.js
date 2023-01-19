//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ImageBackground } from 'react-native';
import BtnComp from '../Components/BtnComp';

// create a component
const RegisterOption = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assests/images/bg2.jpg')}
                style={{ height: "100%", }}>
                <View style={{ margin: 20, flex: 1, marginTop: 450, backgroundColor: 'black', borderRadius: 12, opacity: 0.8 }}>

                    <View style={{margin:10}}>
                        
                        <Text style={{ color: 'white', fontSize: 40, fontWeight: "bold" }}>GetBeauty</Text>
                        <Text style={{ color: 'white', fontSize: 30, fontWeight: "500", }}>Salon Booking & </Text>
                        <Text style={{ color: 'white', fontSize: 30, fontWeight: "500", }}>Beauty Expert </Text>
                        <Text style={{ color: 'white', fontSize: 30, fontWeight: "500",  }}>Mobile App</Text>

                      <View style={{flexDirection:"row",justifyContent:'center',justifyContent:"space-around"}}>

                        <View style={{ width: "46%" }}>
                                <BtnComp btnText={"Salon Booking"} onPress={() => navigation.navigate('SalonAuthStack')} btnStyle={styles.btn} />
                        </View>
                        <View style={{ width: "46%" }} >
                                <BtnComp btnText={"Beauty Expert"} onPress={() => navigation.navigate("ExpertAuthStack")} btnStyle={styles.btn} />
                        </View>
                      </View>
                           
                       
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    btn:{
        marginTop:20
    }
});

//make this component available to the app
export default RegisterOption;
