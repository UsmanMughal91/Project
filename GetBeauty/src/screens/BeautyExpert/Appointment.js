//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet ,FlatList,Image,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Heading from '../../Components/Heading';
import { getToken } from '../../../services/AsyncStorage';
import Header from '../../Components/Header';
import Loader from '../../Components/Loader';
import H1 from '../../Components/H1';
import Colors from '../../Styles/Colors';
import Font from '../../Styles/Font';

// create a component
const Appointment = ({navigation}) => {
    const [data,setdata] = useState()
    const [loading,setloading] = useState(true)
    const DATA = [
        {
            id: 1,
            Name: "Fatima khan",
            date: '27 August 2022',
            pkr: "Rs2450",
            images: require('../../assests/images/a.jpg'),
            status:"completed"
        },
        {
            id: 2,
            Name: "Maria Tuba",
            date: '28 August 2022',
            pkr: "Rs500 ",
            images: require('../../assests/images/b.jpg'),
            status: "completed"
        },
        {
            id: 3,
            Name: "Laiba ",
            date: '29 August 2022',
            pkr: "Rs8000",
            images: require('../../assests/images/c.jpg'),
            status: "completed"
        },
        {
            id: 4,
            Name: "Iqra muneer",
            date: '1 october 2022 ',
            pkr: "Rs5000",
            images: require('../../assests/images/d.jpg'),
            status: "completed"
        },
        {
            id: 5,
            Name: "Isha manzoor",
            date: '2 october 2022',
            pkr: "Rs4500",
            images: require('../../assests/images/a.jpg'),
            status: "completed"
        },
        {
            id: 6,
            Name: "Saba ishfaq",
            date: '2 october 2022',
            pkr: "Rs1230",
            images: require('../../assests/images/b.jpg'),
            status: "completed"
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
            await fetch('http://192.168.197.7:8000/api/Expert/loadRequests',option)
            .then((res)=>res.json())
            .then((d) => {
                setdata(d.data),setloading(false)
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
            <Heading text={"Appointment History"}/>
           

                
                {loading && <Loader viewStyle={{ marginTop: 250 }} />}
         
                {data &&   <FlatList

                data={data.filter((item)=>{if(item.status !== "Requested") return item })}
                keyExtractor={data => data._id}
                renderItem={({ item }) => (
                    <View style={{ flex: 1, }}>

                        <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 15}}>
                            <View>
                                <Image source={{uri:item.user.pic}}
                                    style={{ borderRadius: 40, width: 50, height: 50 }}
                                />
                            </View>
                            <TouchableOpacity style={{ marginLeft: 10, width: 210 }} onPress={() => navigation.navigate('CompleteOrder', { item })}>
                                <Text style={{ color:Colors.black, fontSize:Font.list}}>{item.user.name}</Text>
                                <Text>{item.date}</Text> 
                                <Text>{item.user.name}</Text>  
                            </TouchableOpacity>
                           <View style={{marginLeft:30,alignSelf:"center",backgroundColor:Colors.grey,padding:2,borderRadius:12,}}>
                                <Text style={{color:Colors.purple}}>{item.status}</Text>
                                
                           </View>
                        </View>

                    </View>

                )} />}
        </View>

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
export default Appointment;
