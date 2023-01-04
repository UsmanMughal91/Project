//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Heading from '../../Components/Heading';
import { getToken } from '../../../services/AsyncStorage';
import Header from '../../Components/Header';
import Colors from '../../Styles/Colors';
import Font from '../../Styles/Font';

// create a component
const Appointment = ({ navigation }) => {
    const [data,setdata] = useState()
    const Data = [
        {
            name: 'Sofiya beauty',
            exp: 'Hair specialist',
            img: require('../../assests/images/a.jpg'),
            status: 'Pending',
            date: '27 june 2022',
            pkr: '5000 Rs'
        },
        {

            name: 'Farah beauty',
            exp: 'skin specialist',
            img: require('../../assests/images/b.jpg'),
            status: 'Completed',
            date: '28 june 2022',
            pkr: '6000 Rs'
        },
        {

            name: 'Nimra salon',
            exp: 'beauty specialist',
            img: require('../../assests/images/c.jpg'),
            status: 'Confirmed',
            date: '30 june 2022',
            pkr: '8000 Rs'
        },
        {

            name: 'Aliza Beauty',
            exp: 'Cut specialist',
            img: require('../../assests/images/d.jpg'),
            status: 'Canceled',
            date: '1 july 2022',
            pkr: '9000 Rs'
        }
    ]
    const loadRequests = async (token) =>{
        const option = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    token:token
                }
            )
        }
        try {
            await fetch('http://192.168.103.8:8000/api/user/loadRequests',option)
            .then((res)=>res.json())
            .then((d) => {
                setdata(d.data)
                console.log(d)
            })
            .catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        (   async () => {
            const token = await getToken() 
            loadRequests(token);
        })();
    },[])
    return (
        <View>
                    <Header onPress={() => navigation.goBack()} />
                    
        
        <View style={styles.container}>
                <Heading text={"Appointment History"} />
            <View style={{ flexDirection: 'row', backgroundColor:Colors.purple, borderRadius: 12, height: 40, justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                <Text style={{ fontSize:Font.font, color: Colors.white, marginLeft: 10 }}>Beauty Experts</Text>
                    <Text style={{ fontSize: Font.font, color: Colors.white, marginLeft: 40 }}>Description</Text>
                    <Text style={{ fontSize: Font.font, color: Colors.white, marginRight: 10 }}>Status</Text>
            </View>
                {data &&  <FlatList
                data={data}
                keyExtractor={data=>data._id}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', flex: 1, marginTop: 20, marginBottom: 10 }}>
                        <View>
                            <Image source={{uri:item.expert.pic}} style={{ width: 50, height: 50, borderRadius: 50 }} />

                        </View>
                        <View style={{ width: 130 }}>
                            <Text style={{ fontSize:Font.list, color:Colors.black, marginLeft: 10 }}>{item.expert.name}</Text>
                            <Text style={{ marginLeft: 10 }}>{item.expert.parlourName}</Text>
                        </View>
                        <View style={{  marginLeft: 10, width: 100, }}>
                            <Text >{item.date}</Text>
                            <Text >{item.service.servicePrice} Pkr</Text>
                        </View>
                        <View style={{ marginLeft: 10,backgroundColor:Colors.grey,borderRadius:12,width:70,alignItems:'center',justifyContent:'center',height:30,alignSelf:"center"}}>

                            <Text style={{textAlign:'center',fontSize:12,color:Colors.purple}}>{item.status}</Text>

                        </View>
                    </View>)
                } /> }
        </View>
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
export default Appointment;
