//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Heading from '../../Components/Heading'
import BtnComp from '../../Components/BtnComp';
import Header from '../../Components/Header';
// create a component
const ServiceDetail= ({navigation,route}) => {
    const item = route.params.item
    const profile = route.params.profile
    console.log(profile)
 
    return (
<View style={{flex:1}}> 
    <Header onPress={()=>navigation.goBack()}/>
    <ScrollView> 
        <View style={styles.container}>
          
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
                    <BtnComp btnText={"Book Service"} btnStyle={styles.btn} onPress={() => navigation.navigate('Booking', { item, profile })}/>
        </View>
            </ScrollView>
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
