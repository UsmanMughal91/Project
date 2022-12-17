//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView, Button, ImageBackground, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Heading from '../../Components/Heading';


// create a component

const ParlorListG = ({ navigation }) => {
    const DATA = [
        {
            id: 1,
            PName: "New Beauty Parlour",
            name: 'Ayesha',
            images: require('../../assests/images/a.jpg'),
        },
        {
            id: 2,
            PName: "Shine Beauty Salon",
            name: 'Zoya',
            images: require('../../assests/images/b.jpg'),
        },
        {
            id: 3,
            PName: "Star Salon",
            name: 'Sana',
            images: require('../../assests/images/c.jpg'),
        },
        {
            id: 4,
            PName: "Child Beauty Parlour",
            name: 'Mehak ',
            images: require('../../assests/images/d.jpg'),
        },
        {
            id: 5,
            PName: "New Beauty Parlour",
            name: 'Ayesha',
            images: require('../../assests/images/a.jpg'),
        },
        {
            id: 6,
            PName: "Shine Beauty Salon",
            name: 'Zoya',
            images: require('../../assests/images/b.jpg'),
        },
        {
            id: 7,
            PName: "Star Salon",
            name: 'Sana',
            images: require('../../assests/images/c.jpg'),
        },
        {
            id: 8,
            PName: "Child Beauty Parlour",
            name: 'Mehak ',
            images: require('../../assests/images/d.jpg'),
        }
    ]




    return (


        <View style={styles.container}>

            <ImageBackground source={require('../../assests/images/beauty.jpg')}
                style={{ width: "100%", height: 250 }}>
                <View style={{ marginLeft: 10, marginTop: 100, width: 280, borderRadius: 12 }}>
                    <View style={{ backgroundColor: 'black', width: 230, opacity: 0.8, borderRadius: 12, marginBottom: 10 }}>
                        <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>Beauty Parlour</Text>
                        <Text style={{ fontSize: 16, color: 'white', marginBottom: 10 }}>Beauty Parlour Booking App</Text>
                    </View>
                    <View>

                    </View>


                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', backgroundColor: 'white', borderRadius: 12, }}>
                        <View>
                            <TextInput placeholder='Hair cut' style={{ fontSize: 18, paddingLeft: 18 }} />
                        </View>
                        <View>
                            <TouchableOpacity style={{ marginRight: 20 }}>
                                <FontAwesome name='search' size={25} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


            </ImageBackground>
            <ScrollView style={{ margin: 20 }}>
                <Text style={{fontSize:30,color:"black",fontWeight:"600"}}>Choose Parlour</Text>

                <FlatList

                    data={DATA}
                    keyExtractor={DATA => DATA.id.toString()}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, }}>
                            <TouchableOpacity onPress={() => navigation.navigate('ServicesG')}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 15 }}>
                                    <View>
                                        <Image source={item.images}
                                            style={{ borderRadius: 40, width: 50, height: 50 }}
                                        />
                                    </View>

                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ marginLeft: 10, width: "69%" }}>
                                            <Text style={{ color: 'black', fontSize: 20 }}>{item.PName}</Text>
                                            <Text>{item.name}</Text>
                                        </View>

                                    </View>

                                    <View>

                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                    )} />
            </ScrollView>

        </View>

    );
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    Item: {

        fontSize: 20,
        backgroundColor: 'lightblue',
        borderRadius: 20,
        marginBottom: 20,
    },
    


});

//make this component available to the app
export default ParlorListG;
