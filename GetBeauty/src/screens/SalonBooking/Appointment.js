//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Back from '../../Components/Back';
import Heading from '../../Components/Heading';
// create a component
const Appointment = ({ navigation }) => {
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
    return (
        <View style={styles.container}>
            
            <View style={{ width: 40 }}>
                <Ionicons name='md-chevron-back-circle-outline' size={40} color={'black'} onPress={() => navigation.goBack()} />
            </View>
            <Heading text={"Appointment History"}/>
            <View style={{ flexDirection: 'row', backgroundColor: "white", borderRadius: 12, height: 40, justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                <Text style={{ fontSize: 16, color: 'black', marginLeft: 10 }}>Beauty Experts</Text>
                <Text style={{ fontSize: 16, color: 'black', marginLeft: 40 }}>Description</Text>
                <Text style={{ fontSize: 16, color: 'black', marginRight: 10 }}>Status</Text>
            </View>
            <FlatList
                data={Data}

                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', flex: 1, marginTop: 20, marginBottom: 10 }}>
                        <View>
                            <Image source={item.img} style={{ width: 50, height: 50, borderRadius: 50 }} />

                        </View>
                        <View style={{ width: 130 }}>
                            <Text style={{ fontSize: 18, color: 'black', marginLeft: 10 }}>{item.name}</Text>
                            <Text style={{ marginLeft: 10 }}>{item.exp}</Text>
                        </View>
                        <View style={{  marginLeft: 10, width: 100 }}>
                            <Text>{item.date}</Text>
                            <Text>{item.pkr}</Text>
                        </View>
                        <View style={{ marginLeft: 10,backgroundColor:"white",borderRadius:12,width:70,alignItems:'center',justifyContent:'center',height:30}}>

                            <Text style={{textAlign:'center',fontSize:12}}>{item.status}</Text>

                        </View>
                    </View>)
                } />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
});

//make this component available to the app
export default Appointment;
