//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Heading from '../../Components/Heading'
import BtnComp from '../../Components/BtnComp';
// create a component
const ServiceDetail= ({navigation,route}) => {
    const item = route.params.item
    return (
        <View style={styles.container}>
            <View style={{ width: 40 }}>
                <Ionicons name='md-chevron-back-circle-outline' size={40} color={'black'} onPress={() => navigation.goBack()} />
            </View>
            <Heading text={"About Service"} />
            <Image source={{uri:item.pic}}
           style={{height:200,width:"100%",borderRadius:12,marginTop:20}} />
            <Text style={{ fontSize: 20, fontWeight: '500' ,color:"black",marginTop:10}}>Discription</Text>
            <Text style={{fontSize:16,textAlign:'justify'}}>
                {item.serviceDetails}
            </Text>
            <Text style={{ fontSize: 20, fontWeight: '500', color: "black", marginTop: 10 }}>Price/Charges</Text>
            <Text style={{ fontSize: 16, textAlign: 'justify',marginTop:10 }}>
               {item.servicePrice} Pkr
            </Text>
            <BtnComp btnText={"Book Service"} btnStyle={styles.btn} onPress={()=>navigation.navigate('Booking',{item})}/>
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
