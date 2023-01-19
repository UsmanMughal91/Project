//import liraries
import React, { Component, useState,useEffect } from 'react';
import { View, Text, StyleSheet,Image, ScrollView } from 'react-native';
import BtnComp from '../../Components/BtnComp';
import H1 from '../../Components/H1';
import Header from '../../Components/Header';
import Heading from '../../Components/Heading';
import Colors from '../../Styles/Colors';
import Font from '../../Styles/Font';
import { getToken } from '../../../services/AsyncStorage';
import BaseUrl from '../../baseUrl/BaseUrl';
import CustomModal from '../../Components/CustomModal';
// create a component
const ConfirmBooking = ({ navigation, route }) => {
    const item = route.params.item
    const passData  = route.params
    console.log(passData,"this is passdata")
    const id = route.params.item.id
    const profile = route.params.profile
    console.log("this is profile",profile)
    console.log(id)

    
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [value, setValue] = useState(null);
    const [modalvisible, setmodalvisible] = useState(false)

    const [data,setdata] = useState('')


    const submitForm = async () => {
        const token = await getToken()
        const option = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    token: token,
                    service: item,
                    expertID: route.params.item.id,
                    date: date.toString().slice(4, 15),
                    time: time.toString().slice(16, 21),
                    method: value,
                    status: "Requested",
                }
            )
        }
        try {

            await fetch(`${BaseUrl.SalonBaseurl}/booking`, option)
                .then((res) => res.json())
                .then((d) => {
                    console.log(d.message)
                    if (d.status === "success") {
                        setmodalvisible(true)
                       
                    }
                })
                .catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {

    })
    return (
        <View style={{flex:1}}>
            <Header onPress={() => navigation.goBack()} />
            <ScrollView>
         <View style={styles.container}>
                <Heading text={"Service Summary"} />
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Image source={{uri:profile.pic}}
                        style={{
                            width: 100, height: 100, borderRadius: 50, marginTop: 10
                        }} />
                </View>
                <H1 text={profile.name} viewStyle={{alignItems:'center'}}/>
                    <Text style={{textAlign:'center',fontSize:Font.font}}>{profile.parlourName}</Text>
                <H1 text={"Date & Time"} viewStyle={styles.h1} />
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                    <Text style={{ fontSize: Font.font }}>Date</Text>
                        <Text style={{ fontSize: Font.font }}>{passData.date.toString().slice(4, 15)}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                    <Text style={{ fontSize: Font.font }}>Time</Text>
                        <Text style={{ fontSize: Font.font }}>{passData.time.toString().slice(16, 21)}</Text>
                </View>
                <H1 text={"Payment"} />
                <View style={{marginTop:10}}>
                    <Text style={{ fontSize: Font.font }}>{passData.value}</Text>
                    
                </View>   
                <H1 text={"Amount"}  />
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                    <Text style={{ fontSize: Font.font, color: Colors.black, }}>Service</Text>
                    <Text style={{ fontSize: Font.font, color: Colors.black }}>Price</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                    <Text style={{ fontSize: Font.font }}>{item.serviceName}</Text>
                    <Text style={{ fontSize: Font.font }}>{item.servicePrice}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20,borderTopWidth:1,borderColor:'#ccc' }}>
                        <H1 text={"Total"} />
                        <H1 text={item.servicePrice} PKR={" PKR"}/>  
                </View>
                    <BtnComp btnText={"Send Request"} onPress={submitForm} btnStyle={{marginTop:20}}/>
            </View>  
                <CustomModal modalvisible={modalvisible} setmodalvisible={setmodalvisible} onPress={() => {
                    setmodalvisible(false);
                    navigation.navigate("Services", { item })
                }} text={"Your Request has submitted Successfully"} /> 
            </ScrollView> 
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
      margin:20
    },
});

//make this component available to the app
export default ConfirmBooking;
