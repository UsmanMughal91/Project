//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,TextInput } from 'react-native';
import BtnComp from '../../Components/BtnComp';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Heading from '../../Components/Heading';

// create a component
const Payment = ({ navigation }) => {
    return (
        <View style={styles.container}>
         
                <View style={{ width: 40 }}>
                    <Ionicons name='md-chevron-back-circle-outline' size={40} color={'black'} onPress={() => navigation.goBack()} />
                </View>

      
            <Heading text={"Payment"}/>

            <View style={{
                alignItems: "center", marginTop: 40, flexDirection: "row", justifyContent: "center"
                , backgroundColor: "white", height: 100, width: 200, alignSelf: "center", borderRadius: 12
            }}>
                <FontAwesome size={30} name="paypal" color={'blue'} />
                <Text style={{ fontSize: 20, color: 'black',marginLeft:10 }}>PayPal</Text>
            </View>
            <View style={styles.LoginDesign}>
                <MaterialCommunityIcons name="email" size={25} />
                <TextInput placeholder={'Email'} style={{ flex: 1, paddingLeft: 10, fontSize: 20 }}
                  

                />
            </View>
            <View style={styles.LoginDesign}>
                <MaterialCommunityIcons name="lock" size={25} />
                <TextInput placeholder={'Password'} secureTextEntry={true} style={{ flex: 1, paddingLeft: 10, fontSize: 20 }}
                   
                />
            </View>
            <BtnComp btnText={"Pay Money"} btnStyle={{marginTop:20}}/>


        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    LoginDesign: {
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 12,
        paddingLeft: 10,
        marginTop: 20
    },

});

//make this component available to the app
export default Payment;
