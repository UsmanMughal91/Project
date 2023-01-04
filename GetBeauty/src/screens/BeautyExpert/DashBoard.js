//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground, TextInput, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { getToken } from '../../../services/AsyncStorage';
import Loader from '../../Components/Loader'
import BtnComp from '../../Components/BtnComp';
import Colors from '../../Styles/Colors';
import { BarChart } from "react-native-chart-kit";
import LinearGradient from 'react-native-linear-gradient';

const DashBoard = ({ navigation }) => {
    const [data, setdata] = useState()
    const [TotalServices, setTotalServices] = useState(0)
    const [PendingOrders, setPendingOrders] = useState(0)
    const [CompletedOrders, setCompletedOrders] = useState(0)
    const [loading, setloading] = useState(true)

    // create a component
    const loadservices = async (token) => {
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
            await fetch('http://192.168.197.7:8000/api/Expert/loadservices', option)
                .then((res) => res.json())
                .then((d) => {
                    setTotalServices(d.data.length)
                })
                .catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        (async () => {
            const token = await getToken() // getting token from storage
            loadservices(token);
            loadRequests(token);

        })();
    }, [])


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
            await fetch('http://192.168.197.7:8000/api/Expert/loadRequests', option)
                .then((res) => res.json())
                .then((d) => {
                    d.data.map((item) => {
                        if (item.status === "Accepted") { setPendingOrders((prev) => prev + 1) }
                        else if (item.status === "Completed") { setCompletedOrders((prev) => { prev + 1 }) }
                    })
                    if (CompletedOrders === null) { setCompletedOrders("0") }
                    if (PendingOrders === null) { setPendingOrders("0") }
                    setdata(d.data), setloading(false)
                })
                .catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <View>
            <View style={styles.container}>
                <View>
                    <ImageBackground source={require('../../assests/images/beauti.jpg')}
                        style={{ width: "100%", height: 250 }} >
                        <View style={{ backgroundColor: Colors.white, alignSelf: 'flex-start', marginTop: 20, marginLeft: 20, borderRadius: 12, padding: 5 }}>
                            <TouchableOpacity onPress={() => navigation.navigate("ExpertDrawer")}>
                                <FontAwesome name='navicon' size={20} color={"black"} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 10, marginTop: 100, width: 280, borderRadius: 12 }}>
                            <View style={{ borderRadius: 12, marginBottom: 10 }}>
                                <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>Beauty Parlour</Text>
                                <Text style={{ fontSize: 16, color: 'white', marginBottom: 10 }}>Beauty Parlour Booking App</Text>
                            </View>
                            <View>
                            </View>
                        </View>
                    </ImageBackground>
                    {loading && <Loader  />}
                        {data && <View style={{ margin: 20 }}>

                            <View style={{ flexDirection: 'row', height: 280 }}>
                                <View style={{ backgroundColor: 'white', flex: 1, borderRadius: 12 }}>
                                    <Text style={{ fontSize: 16, margin: 10, fontWeight: 'bold', color: 'gray' }}>WEEKLY EARNING</Text>
                                    <BarChart

                                        data={{
                                            labels: ['Mon', "Tue", 'Wed', "Fri", "Sat", "Sun"],
                                            datasets: [{
                                                data: [700, 500, 1000, 800, 950, 800]
                                            }]

                                        }}
                                        width={Dimensions.get("window").width - 50}
                                        height={220}
                                        yAxisLabel="Rs"
                                        chartConfig={{
                                            backgroundGradientFrom: "white",
                                            backgroundGradientFromOpacity: 1,
                                            backgroundGradientTo: "white",
                                            backgroundGradientToOpacity: 1,
                                            decimalPlaces: 1,
                                            color: opacity => "black",
                                            barPercentage: 0.5,
                                            fillShadowGradient: Colors.purple,
                                            fillShadowGradientOpacity: 1,
                                        }}
                                        withInnerLines={false}
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', height: 150, marginTop: 20 }}>
                                <View style={{ backgroundColor: 'white', flex: 1, borderRadius: 12, marginRight: 10 }}>
                                    <Text style={{ textAlign: 'center', margin: 10, color: 'gray' }}>Total  Services</Text>
                                    <Text style={{ fontSize: 25, marginTop: 10, fontWeight: 'bold', textAlign: 'center', color: '#52c8ff' }}>{TotalServices}</Text>
                                </View>
                                <View style={{ backgroundColor: 'white', flex: 1, borderRadius: 12 }}>
                                    <Text style={{ textAlign: 'center', margin: 10, color: 'gray' }}>Pending Orders</Text>
                                    <Text style={{ fontSize: 25, marginTop: 10, fontWeight: 'bold', textAlign: 'center', color: 'orange' }}>{PendingOrders}</Text>
                                </View>
                                <View style={{ backgroundColor: 'white', flex: 1, borderRadius: 12, marginLeft: 10 }}>
                                    <Text style={{ textAlign: 'center', margin: 10, color: 'gray' }}>Completed Orders</Text>
                                    <Text style={{ fontSize: 25, marginTop: 10, fontWeight: 'bold', textAlign: 'center', color: '#52c8ff' }}>{CompletedOrders}</Text>
                                </View>
                               


                            </View>
                       
                        </View >}
                
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});

//make this component available to the app
export default DashBoard;
