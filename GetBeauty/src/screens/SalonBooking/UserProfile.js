//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import BtnComp from '../../Components/BtnComp';
import AddServices from '../BeautyExpert/AddServices';
import Services from '../SalonBooking/Services';
import Icons from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Heading from '../../Components/Heading';
// create a component
const UserProfile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ width: 40 }}>
                <Ionicons name='md-chevron-back-circle-outline' size={40} color={'black'} onPress={() => navigation.goBack()} />
            </View>
           
            <View style={{ alignItems: 'center' }}>
                <Image source={require('../../assests/images/a.jpg')}
                    style={{
                        width: 100, height: 100,borderRadius: 50,marginTop:10  }} />
                <Text style={{ fontSize: 25, color: 'black', marginTop: 10 }}>Ayesha Naseem</Text>
                <Text style={{ fontSize: 20, }}>Model Town</Text>
            </View>

            <View >
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 20, color: 'black',fontWeight:'bold' }}>Name:</Text>
                    <Text style={{ fontSize: 18 }}>Ayesha</Text>
                </View>
                <View style={{marginTop:20}}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Email:</Text>
                    <Text style={{fontSize:18}}>abc@gmail.com</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Address:</Text>
                    <Text style={{ fontSize: 18 }}>Model town, phase 3, house number 156, Gujranwala</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Contact:</Text>
                    <Text style={{ fontSize: 18 }}>03128798675</Text>
                </View>
              

            
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    btnStyle: {
        marginTop: 30,
        backgroundColor: '#fff'
    },
    btnT: {
        textAlign: "left",
        marginLeft: 10,
        color: 'black',
        fontWeight: '400'
    },
    btn: {
        marginTop: 30
    },
});

//make this component available to the app
export default UserProfile;
