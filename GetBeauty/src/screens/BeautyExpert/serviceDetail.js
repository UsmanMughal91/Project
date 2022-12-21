//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Heading from '../../Components/Heading'
import BtnComp from '../../Components/BtnComp';
// create a component
const ServiceDetail= ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{ width: 40 }}>
                <Ionicons name='md-chevron-back-circle-outline' size={40} color={'black'} onPress={() => navigation.goBack()} />
            </View>
            <Heading text={"About Service"} />
            <Image source={require("../../assests/images/a.jpg")}
           style={{height:200,width:"100%",borderRadius:12,marginTop:20}} />
            <Text style={{ fontSize: 20, fontWeight: '500' ,color:"black",marginTop:10}}>Discription</Text>
            <Text style={{fontSize:16,textAlign:'justify'}}>
                Welcoming customers and identifying their preferences by asking pointed questions
                Recommending hairstyles and haircuts according to customers’ face shapes and tastes
                Washing, rinsing and drying clients’ hair using appropriate shampoos and conditioners
            </Text>
            <Text style={{ fontSize: 20, fontWeight: '500', color: "black", marginTop: 10 }}>Price/Charges</Text>
            <Text style={{ fontSize: 16, textAlign: 'justify',marginTop:10 }}>
               3000 Pkr
            </Text>
           
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       margin:20
    },
    btn:{
        marginTop:20
    }
});

//make this component available to the app
export default ServiceDetail;
