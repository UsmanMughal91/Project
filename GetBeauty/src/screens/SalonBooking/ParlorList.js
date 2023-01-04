//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView, ImageBackground, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Heading from '../../Components/Heading';
import Colors from '../../Styles/Colors';
import Font from '../../Styles/Font';
import Entypo from 'react-native-vector-icons/Entypo'
// create a component

const ParlorList = ({ navigation }) => {
    const [data, setdata] = useState()
    const getlist = async () => {
        try {
            await fetch('http://192.168.103.8:8000/api/Expert/getlist')
                .then(res => res.json())
                .then(d => { setdata(d.data) })
                .catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getlist()
        console.log(data)
    }, [])
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
                    <View style={{backgroundColor:Colors.white,alignSelf:'flex-start',marginTop:20,marginLeft:20 ,borderRadius:12,padding:5}}>
                    <TouchableOpacity onPress={() => navigation.navigate("CustomDrawer")}>
                    <FontAwesome name='navicon' size={25} color={"black"} />
                        </TouchableOpacity>
                    </View>
               
                <View style={{ marginLeft: 10, marginTop: 100, width: 280, borderRadius: 12 }}>
                   
                    <View style={{ backgroundColor:Colors.black, width: 230, opacity: 0.8, borderRadius: 12, marginBottom: 10 }}>
                        <Text style={{ fontSize: 30, color:Colors.white, fontWeight: 'bold' }}>Beauty Parlour</Text>
                        <Text style={{ fontSize: 16, color: Colors.white, marginBottom: 10 }}>Beauty Parlour Booking App</Text>
                    </View>
                    <View>
                    </View>
                   
                </View>
            </ImageBackground>
            <ScrollView style={{ margin: 20 }}>
                <Heading text={"Choose Parlour"}/>
                {data &&   <FlatList
                    data={data}
                    keyExtractor={data => data._id}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, }}>
                            <TouchableOpacity onPress={() => navigation.navigate('SeeProfile', { item })}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 15 }}>
                                    <View>
                                        <Image source={{uri:item.pic}}
                                            style={{ borderRadius: 40, width: 50, height: 50 }}
                                        />
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ marginLeft: 10, width: "69%" }}>
                                            <Text style={{ color: 'black', fontSize: 20 }}>{item.parlourName}</Text>
                                            <Text>{item.name}</Text>
                                        </View>
                                    </View>
                                    <View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>


                    )} />}
            </ScrollView>

        </View>

    );
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default ParlorList;