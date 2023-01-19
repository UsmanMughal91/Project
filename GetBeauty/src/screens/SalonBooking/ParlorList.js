//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView, ImageBackground, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Heading from '../../Components/Heading';
import Colors from '../../Styles/Colors';
import Font from '../../Styles/Font';
import Entypo from 'react-native-vector-icons/Entypo'
import BaseUrl from '../../baseUrl/BaseUrl';
import Loader from '../../Components/Loader';

// create a component

const ParlorList = ({ navigation }) => {
    const [data, setdata] = useState()
    const [loading, setloading] = useState(true)
    const getlist = async () => {
        try {
           
            await fetch(`${BaseUrl.ExpertBaseurl}/getlist`)
                .then(res => res.json())
                .then(d => { setdata(d.data),setloading(false) })
                .catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getlist()
        console.log(data)
    }, [])
   
    return (


        <View style={styles.container}>
            <ImageBackground source={require('../../assests/images/beauty.jpg')}
                style={{ width: "100%", height: 250 }}>
                    <View style={{backgroundColor:Colors.white,alignSelf:'flex-start',marginTop:20,marginLeft:20 ,borderRadius:12,padding:5}}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <FontAwesome name='navicon' size={20} color={"black"} />
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
            <ScrollView style={{ margin: 20 }} nestedScrollEnabled>
                <Heading text={"Choose Parlour"}/>
                <View> 
                {loading && <Loader viewStyle={{marginTop:180}}/>}
                {data &&   <FlatList
                    data={data}
                    keyExtractor={data => data._id}
                    renderItem={({ item }) => (
                        <View >
                            <View >
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 15 }}>
                                    <TouchableOpacity >
                                        <Image source={{uri:item.pic}}
                                            style={{ borderRadius: 40, width: 50, height: 50 }}
                                        />
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('SeeProfile', { item })} style={{ marginLeft: 10, width: "80%"}}>
                                            <Text style={{ color: 'black', fontSize: 20 }}>{item.parlourName}</Text>
                                            <Text>{item.name}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                    </View>
                                </View>
                            </View>
                        </View>


                    )} />}
                </View>
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