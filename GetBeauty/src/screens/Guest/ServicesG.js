//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Heading from '../../Components/Heading';

// create a component
const ServicesG = ({ navigation }) => {
    const Data = [
        {
            id: 1,
            service: 'Hair Cut',
            pic: require('../../assests/images/b.jpg'),
            Pr: '500 pkr'
        },
        {

            id: 2,
            service: 'Urgent faical',
            pic: require('../../assests/images/b.jpg'),
            Pr: '700 pkr'
        },
        {

            id: 3,
            service: 'Party makeup',
            pic: require('../../assests/images/b.jpg'),
            Pr: '800 pkr'
        },
        {

            id: 4,
            service: 'Bridel',
            pic: require('../../assests/images/b.jpg'),
            Pr: '4500 pkr'
        },
        {

            id: 5,
            service: 'Hair color',
            pic: require('../../assests/images/b.jpg'),
            Pr: '1000 pkr'
        }
    ]
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={{ width: 40 }}>
                    <Ionicons name='md-chevron-back-circle-outline' size={40} color={'black'} onPress={() => navigation.goBack()} />
                </View>
                <Heading text={"Services"}/>
                <View style={{flexDirection:'row',marginTop:10,marginBottom:10}}>
                <Text style={{ fontSize: 16, marginBottom: 10, color: 'red' }}>Please Register to get full access</Text>
                <TouchableOpacity onPress={() =>navigation.navigate("registerOption")}>
                <Text style={{ fontSize: 16, marginBottom: 10, color: 'orange' }}> Click Here</Text>
                </TouchableOpacity>
                </View>
                <FlatList
                    data={Data}
                    keyExtractor={Data => Data.id.toString()}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1 }}>
                            <View style={{ flexDirection: 'row', marginBottom: 20,justifyContent:'space-between', alignItems: 'center', backgroundColor: 'white', borderRadius: 12, height: 80 }}>
                                <View>
                                    <Image source={item.pic} style={{ width: 50, height: 50, borderRadius: 50, marginLeft: 5 }} />
                                </View>
                                <View style={{width:230}}>
                                    <Text style={{  fontSize: 18 }}>{item.service}</Text>
                                </View>
                                <View>
                                    <Text style={{ fontWeight: "bold", fontSize: 15, marginRight: 10 }}>{item.Pr}</Text>
                                </View>
                            </View>
                           
                        </View>)} />
            </View>


        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    btn: {
        marginTop: 20,
    },

});

//make this component available to the app
export default ServicesG;
