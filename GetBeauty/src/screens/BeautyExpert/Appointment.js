//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,FlatList,Image,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Heading from '../../Components/Heading';
// create a component
const Appointment = ({navigation}) => {
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
    return (
        <View style={styles.container}>
            <View style={{ width: 40 }}>
                <Ionicons name='md-chevron-back-circle-outline' size={40} color={'black'} onPress={() => navigation.goBack()} />
            </View>
            <Heading text={"Appointment History"}/>
            <View style={{marginTop:30}}>
                <Text style={{ fontSize: 20, color: "black", fontWeight: "600" }}>Recent Service</Text>

            </View>
            <FlatList

                data={DATA}
                keyExtractor={DATA => DATA.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ flex: 1, }}>

                        <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 15}}>
                            <View>
                                <Image source={item.images}
                                    style={{ borderRadius: 40, width: 50, height: 50 }}
                                />
                            </View>
                            <View style={{ marginLeft: 10, width: "50%",}}>
                                <Text style={{ color: 'black', fontSize: 18 }}>{item.Name}</Text>
                                <Text>{item.date}</Text>
                               
                            </View>
                           <View style={{marginLeft:30}}>
                                <Text style={{ color: 'black', fontSize: 18 }}>{item.pkr}</Text>
                                <Text>{item.status}</Text>
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
     margin:20
    },
});

//make this component available to the app
export default Appointment;
