//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Heading from '../../Components/Heading';
// create a component
const ProviderServices = ({ navigation }) => {
   
       
    const Data = [
        {
            id: 1,
            service: 'Hair Cut',
            pic: require('../../assests/images/b.jpg'),
            del: <MaterialIcons name='delete' size={25} />
        },
        {

            id: 2,
            service: 'Urgent faical',
            pic: require('../../assests/images/a.jpg'),
           
            del: <MaterialIcons name='delete' size={25}  />
        },
        {

            id: 3,
            service: 'Party makeup',
            pic: require('../../assests/images/c.jpg'),
           
            del: <MaterialIcons name='delete' size={25}  />
        },
        {

            id: 4,
            service: 'Bridel',
            pic: require('../../assests/images/d.jpg'),
           
            del: <MaterialIcons name='delete' size={25}  />
        },
        {

            id: 5,
            service: 'Hair color',
            pic: require('../../assests/images/b.jpg'),
           
            del: <MaterialIcons name='delete' size={25}  />
        }
    ]
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={{ width: 40 }}>
                    <Ionicons name='md-chevron-back-circle-outline' size={40} color={'black'} onPress={() => navigation.goBack()} />
                </View>
                <Heading text={"Services"}/>

                <View style={{ marginBottom: 20, flexDirection: "row", alignItems: "center", justifyContent: 'space-between', backgroundColor: 'white', borderRadius: 12, marginTop: 20 }}>
                    <View>
                        <TextInput placeholder='Search Service' style={{ fontSize: 18, paddingLeft: 18 }} />
                    </View>
                    <View>
                        <TouchableOpacity style={{ backgroundColor: "orange", padding: 9, borderRadius: 12, marginRight: 5 }}>
                            <Text style={{ color: 'white', fontSize: 15 }}>Search</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <FlatList
                    data={Data}
                    keyExtractor={Data => Data.id.toString()}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1 }}>
                            <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 12, height: 80, flexWrap: 'wrap', alignContent: 'center' }}>
                                <View>
                                    <Image source={item.pic} style={{ width: 50, height: 50, borderRadius: 50, marginLeft: 5 }} />
                                </View>
                                <View style={{width:270,marginLeft:10}}>
                                    <TouchableOpacity onPress={()=>navigation.navigate('serviceDetail')}>

                                    <Text style={{ fontSize: 18 }}>{item.service}</Text>
                                    </TouchableOpacity>
                                   
                                </View>
                                <View style={{ width: 30 }}>
                                    {item.del}
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
export default ProviderServices;
