//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Heading from '../../Components/Heading';
// create a component
const Request = ({ navigation }) => {
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

    return (
        <View style={styles.container}>
            <View style={{ width: 40 }}>
                <Ionicons name='md-chevron-back-circle-outline' size={40} color={'black'} onPress={() => navigation.goBack()} />
            </View>
           <Heading text={"Customer Request"}/>
            <FlatList

                data={DATA}
                keyExtractor={DATA => DATA.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ flex: 1, }}>

                        <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 15, }}>
                            <View>
                                <Image source={item.images}
                                    style={{ borderRadius: 40, width: 50, height: 50 }}
                                />
                            </View>
                            <View style={{ marginLeft: 10, width: "50%", }}>
                                <Text style={{ color: 'black', fontSize: 18 }}>{item.Name}</Text>
                                <Text>{item.date}</Text>
                                <Text>{item.pkr}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems:'center'}}>
                                <TouchableOpacity style={{ backgroundColor: 'white', width:60,height:30,borderRadius:15,}}>
                                    <Text style={{ fontSize: 15, textAlign: 'center',}}>Accept</Text>
                                  
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: 'white', width: 60, height: 30, borderRadius: 15, margin: 5 }}>
                                    <Text style={{  fontSize: 15,textAlign:'center', }}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                )} />
        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,

    },
});

//make this component available to the app
export default Request;
