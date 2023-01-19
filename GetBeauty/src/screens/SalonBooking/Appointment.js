//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import Heading from '../../Components/Heading';
import { getToken } from '../../../services/AsyncStorage';
import Header from '../../Components/Header';
import Colors from '../../Styles/Colors';
import Font from '../../Styles/Font';
import BaseUrl from '../../baseUrl/BaseUrl';
import Loader from '../../Components/Loader'
// create a component
const Appointment = ({ navigation}) => {

    const [data, setdata] = useState('')
    const [loading, setloading] = useState(true)

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
    const loadRequests = async (token) => {
        const option = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    token: token
                }
            )
        }
        try {

            await fetch(`${BaseUrl.SalonBaseurl}/loadRequests`, option)
                .then((res) => res.json())
                .then((d) => {
                    setdata(d.data)
                  
                    setloading(false)
                })
                .catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        (async () => {
            const token = await getToken()
            loadRequests(token);
        })();
    }, [])


    return (
        <View style={{flex:1}}>
            <Header text={"no"} onPress={() => navigation.goBack()} />
            <ScrollView> 
            <View style={styles.container}>
                <Heading text={"Appointment History"} />
                <View style={{ backgroundColor: Colors.purple, marginTop: 20, flexDirection: 'row', alignItems: "center", justifyContent: 'center', justifyContent: "space-between", borderRadius: 12 }}>
                    <Text style={{ fontSize: Font.font, color: Colors.white, marginLeft: 10 }}>Beauty Experts</Text>
                    <Text style={{ fontSize: Font.font, color: Colors.white, marginLeft: 40 }}>Description</Text>
                    <Text style={{ fontSize: Font.font, color: Colors.white, marginRight: 10 }}>Status</Text>
                </View>
                {loading && <Loader />}
                {data && <FlatList
                    data={data}
                    keyExtractor={data => data._id}
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: 'row', flex: 1, marginTop: 20, marginBottom: 10}}>
                            <View>
                                <Image source={{ uri: item.expert.pic }} style={{ width: 50, height: 50, borderRadius: 50 }} />

                            </View>
                            <View style={{ width: 130, }}>
                                <Text style={{ fontSize: Font.list, color: Colors.black, marginLeft: 10 }}>{item.expert.parlourName}</Text>
                                <Text style={{ marginLeft: 10 }}>{item.expert.name}</Text>
                            </View>
                            <View style={{ marginLeft: 10, width: 100, }}>
                                <Text >{item.date}</Text>
                                <Text >{item.service.servicePrice} Pkr</Text>
                            </View>


                            <View style={{alignSelf:'center'}} >
                                <View style={{ marginLeft: 10, backgroundColor: Colors.grey, borderRadius: 12, width: 70, alignItems: 'center', justifyContent: 'center', height: 25, alignSelf: "center" }}>
                                    <Text style={{ textAlign: 'center', fontSize: 12, color: Colors.purple }}>{item.status}</Text>
                                </View>
                                {item.status === "Accepted" ? <TouchableOpacity style={{ marginLeft: 10, backgroundColor: Colors.grey, borderRadius: 12, width: 70, alignItems: 'center', justifyContent: 'center', height: 25, alignSelf: "center", marginTop: 10 }}
                                    onPress={() => navigation.navigate('Payment',{item})}>
                                    <Text style={{ textAlign: 'center', fontSize: 12, color: Colors.purple }}>Payment</Text>
                                </TouchableOpacity> : null}  
                            </View>
                        </View>)
                    } />}
            </View>
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
export default Appointment;
