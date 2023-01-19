//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image,ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Heading from '../../Components/Heading';
import { getToken } from '../../../services/AsyncStorage';
import Header from '../../Components/Header'
import Loader from '../../Components/Loader';
import Colors from '../../Styles/Colors';
import Font from '../../Styles/Font';
import BaseUrl from '../../baseUrl/BaseUrl';
// create a component
const Request = ({ navigation }) => {
    const [data,setdata] = useState("")
    const [refresh,setrefresh] = useState(false)
    const [loading, setloading] = useState(true);
    const DATA = [
        {
            id: 1,
            Name: "Fatima khan",
            date: '27 August 2022',
            pkr: "2450 Rs",
            images: require('../../assests/images/a.jpg'),
        },
        {
            id: 2,
            Name: "Maria Tuba",
            date: '28 August 2022',
            pkr: "500 Rs",
            images: require('../../assests/images/b.jpg'),
        },
        {
            id: 3,
            Name: "Laiba ",
            date: '29 August 2022',
            pkr: "8000 Rs",
            images: require('../../assests/images/c.jpg'),
        },
        {
            id: 4,
            Name: "Iqra muneer",
            date: '1 october 2022 ',
            pkr: "5000 Rs",
            images: require('../../assests/images/d.jpg'),
        },
        {
            id: 5,
            Name: "Isha manzoor",
            date: '2 october 2022',
            pkr: "4500 Rs",
            images: require('../../assests/images/a.jpg'),
        },
        {
            id: 6,
            Name: "Saba ishfaq",
            date: '2 october 2022',
            pkr: "1230 Rs",
            images: require('../../assests/images/b.jpg'),
        },

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
           
            await fetch(`${BaseUrl.ExpertBaseurl}/loadRequests`, option)
            .then((res)=>res.json())
            .then((d) => {
                setdata(d.data);setloading(false)
            })
            .catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }
    const accept = async (item) => {
        const option = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    item:item,
                    newStatus:"Pending",
                }
            )
        }
        try {
         
            await fetch(`${BaseUrl.ExpertBaseurl}/booking`, option)
            .then((res)=>res.json())
            .then((d) => {
                setrefresh(true)
            })
            .catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }

    const cancle = async (item) => {
        
        const option = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    item:item,
                    newStatus:"Cancelled",
                }
            )
        }
        try { 
           
            await fetch(`${BaseUrl.ExpertBaseurl}/booking`, option)
            .then((res)=>res.json())
            .then((d) => {
                setdata(d);
                setloading(false)
                setrefresh(true)
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
    },[refresh])
    return (
        <View style={{flex:1}}>
            <Header text="no" onPress={()=>navigation.goBack()}/>
        <View style={styles.container}>
            
           <Heading text={"Customer Request"}/>
                {loading && <Loader/>}
                {data &&  <FlatList

                data={data.filter((item)=>{if(item.status === "Requested") return item })}
                keyExtractor={data => data._id}
                renderItem={({ item }) =>{ 
                 return (
                    <View style={{flex:1}}>

                        <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 15,justifyContent:'space-between'}}>
                            <View style={{width:60}}>
                                <Image source={{uri:item.user.pic}}
                                    style={{ borderRadius: 40, width: 50, height: 50 }}
                                />
                            </View>
                            <View style={{flex:1 }}>
                                <TouchableOpacity onPress={()=>navigation.navigate('ServiceSummary',{item})}> 
                                    <Text style={{ color:Colors.black, fontSize:Font.list }}>{item.user.name}</Text>
                                    <Text>{item.date}</Text>
                                    <Text>{item.service.servicePrice} Rs</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row',alignSelf:"center",width:120,flexWrap:"wrap",justifyContent:'space-around'}}>
                                <TouchableOpacity style={{ backgroundColor:Colors.grey,borderRadius:12,justifyContent:'center',padding:4}} onPress={()=>accept(item)}>
                                     <Text style={{ fontSize: 13, textAlign: 'center',color:Colors.purple }}>Accept</Text>
                                </TouchableOpacity>
                                 <TouchableOpacity style={{ backgroundColor: Colors.grey, borderRadius: 12, justifyContent: 'center', padding:4,}} onPress={() => cancle(item)}>
                                     <Text style={{ fontSize: 13, textAlign: 'center', color: Colors.purple }} >Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                )}} />}
        </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
});

//make this component available to the app
export default Request;