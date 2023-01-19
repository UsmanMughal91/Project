//import liraries
import React, { Component,useEffect,useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,TextInput } from 'react-native';
import BtnComp from '../../Components/BtnComp';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Heading from '../../Components/Heading';
import Header from '../../Components/Header';
import H1 from '../../Components/H1'
import Font from '../../Styles/Font';
import Colors from '../../Styles/Colors';
import PaymentScreen from '../../screens/SalonBooking/PaymentScreen';
import { ScrollView } from 'react-native-gesture-handler';
import BaseUrl from '../../baseUrl/BaseUrl';
import { getToken } from '../../../services/AsyncStorage';

// create a component
const Payment = ({ navigation,route }) => {
 const Data = route.params.item
 console.log(Data)

    const [data, setdata] = useState()
   
    const [loading, setloading] = useState(true)


   
    return (
        <View style={{flex:1}}>
            <Header onPress={()=>navigation.goBack()}/>
            
        <ScrollView style={styles.container}>
                <Heading text={"Payment"} />
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Image source={{uri:Data.expert.pic}}
                        style={{
                            width: 100, height: 100, borderRadius: 50, marginTop: 10
                        }} />
                </View>
                <H1 text={Data.expert.parlourName} viewStyle={{ alignItems: 'center' }} />
                <Text style={{ fontSize: Font.font ,textAlign:"center"}}>{Data.expert.name}</Text>
                <H1 text={"Date & Time"} viewStyle={styles.h1} />
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                    <Text style={{ fontSize: Font.font }}>Date</Text>
                    <Text style={{ fontSize: Font.font }}>{Data.date}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                    <Text style={{ fontSize: Font.font }}>Time</Text>
                    <Text style={{ fontSize: Font.font }}>{Data.time}</Text>
                </View>
                <H1 text={"Payment"} />
                <View style={{ marginTop: 10,flexDirection:"row",alignItems:"center",justifyContent:"space-between" }}>
                    <Text style={{ fontSize: Font.font }}>Payment type</Text>
                    <Text style={{ fontSize: Font.font}}>{Data.method}</Text>
                </View>

                <H1 text={"Amount"} />
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                    <Text style={{ fontSize: Font.font, color: Colors.black, }}>Service</Text>
                    <Text style={{ fontSize: Font.font, color: Colors.black }}>Price</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                    <Text style={{ fontSize: Font.font }}>{Data.service.serviceName}</Text>
                    <Text style={{ fontSize: Font.font }}>{Data.service.servicePrice}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20, borderTopWidth: 1, borderColor: '#ccc' }}>
                    <H1 text={"Total"} />
                    <H1 text={Data.service.servicePrice} PKR={" PKR"} />
                </View>

                <PaymentScreen />

                
        </ScrollView>
       
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: { 
        margin: 20
    },

});

//make this component available to the app
export default Payment;
