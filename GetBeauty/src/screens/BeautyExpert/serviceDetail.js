//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Heading from '../../Components/Heading'
import BtnComp from '../../Components/BtnComp';
import Header from '../../Components/Header';

// create a component
const ServiceDetail= ({navigation,route}) => {
     useEffect(()=>{
        console.log(route.params.item)
     },[])
    return (
<View> 
            <Header onPress={() => navigation.goBack()} />
           
        <View style={styles.container}>  
                <Heading text={"About Service"} />
            <Image source={{uri:route.params.item.pic}}
           style={{height:200,width:"100%",borderRadius:12,marginTop:20}} />
            <Text style={{ fontSize: 20, fontWeight: '500' ,color:"black",marginTop:10}}>Discription</Text>
            <Text style={{fontSize:16,textAlign:'justify'}}>
                {route.params.item.serviceDetails}
            </Text>
            <Text style={{ fontSize: 20, fontWeight: '500', color: "black", marginTop: 10 }}>Price/Charges</Text>
            <Text style={{ fontSize: 16, textAlign: 'justify',marginTop:10 }}>
               {route.params.item.servicePrice} Pkr
            </Text>
        </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
      
       margin:20
    },
    btn:{
        marginTop:20
    }
});

//make this component available to the app
export default ServiceDetail;
