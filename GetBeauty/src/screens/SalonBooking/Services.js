//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image, ScrollView,TextInput,FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Heading from '../../Components/Heading'
import BtnComp from '../../Components/BtnComp';
// create a component

const Services = ({navigation}) => {

    const Data = [
        {
            id: 1,
            service: 'Hair Cut',
            pic: require('../../assests/images/a.jpg'),
        },
        {

            id: 2,
            service: 'Urgent faical',
            pic: require('../../assests/images/b.jpg'),
        },
        {

            id: 3,
            service: 'Party makeup',
            pic: require('../../assests/images/c.jpg'),
        },
        {

            id: 4,
            service: 'Bridel',
            pic: require('../../assests/images/d.jpg'),
        },
        {

            id: 5,
            service: 'Hair color',
            pic: require('../../assests/images/a.jpg'),
        },
        {
            id: 6,
            service: 'Eye Style',
            pic: require('../../assests/images/b.jpg'),
        }
    ]
    return (
        <View style={styles.container}>
            <View style={{flex:1}}> 
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
                <ScrollView>

                
                <FlatList
                    data={Data}
                    keyExtractor={Data => Data.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity activeOpacity={0.6} onPress={()=>navigation.navigate('serviceDetail')}>
                        <View style={{ flex: 1 }}>
                            <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 12, height: 80}}>
                                <View>
                                    <Image source={item.pic} style={{ width: 60, height: 60, borderRadius: 50, marginLeft: 5 }} />
                                </View>
                                <View style={{marginLeft:10}}>
                                    <Text style={{ fontSize: 18 }}>{item.service}</Text>
                                </View>
                                <View style={{alignItems:'center'}}>
                                  
                                    <Text style={{ fontWeight: "bold", fontSize: 15, marginRight: 10 }}>{item.Pr}</Text>
                                   
                                </View>
                              
                            </View>

                        </View>
                        </TouchableOpacity>)} />
                    
                </ScrollView>
            </View> 
        
            </View> 
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
      margin:20
    },
    btn:{
        marginTop:20,
    },
   
});

//make this component available to the app
export default Services;
