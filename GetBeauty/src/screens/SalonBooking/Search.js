//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import Header from "../../Components/Header"
import Heading from '../../Components/Heading';
import Colors from '../../Styles/Colors';
import Font from '../../Styles/Font';
import H1 from '../../Components/H1'
import BaseUrl from '../../baseUrl/BaseUrl';
import BtnComp from '../../Components/BtnComp';
import FontAwesome from "react-native-vector-icons/FontAwesome"
// create a component
const Search = ({ navigation }) => {

    const [data, setdata] = useState()
    const [parlourName, setparlourName] = useState()
    const [result, setResult] = useState()

    const handleform = () => {
        if (parlourName) {
            setResult(data.filter((item) => { if (item.parlourName.includes(parlourName)) { return item } }))
        }

    }

    const getlist = async () => {
        try {

            await fetch(`${BaseUrl.ExpertBaseurl}/getlist`)
                .then(res => res.json())
                .then(d => { setdata(d.data) })
                .catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getlist()
    }, [])



    return (
        <View style={{flex:1}}>
            <Header text={"no"} onPress={() => navigation.goBack()} />

            <ScrollView>

                {data && <View style={styles.container}>
                    <Heading text={"Search"} />

                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', backgroundColor: Colors.white, borderRadius: 12, marginTop: 20 }}>
                        <View>
                            <TextInput placeholder='Search Parlour' style={{ fontSize: Font.h1, paddingLeft: 18, color: Colors.black }} onChangeText={(val) => { setparlourName(val) }} />
                        </View>
                        <View style={{paddingRight:5}}>
                            <BtnComp btnText={<FontAwesome name="search" color={"white"} size={20}/>} btnStyle={{padding:7}} onPress={handleform} />
                           
                        </View>

                    </View>

                    {result && <View>
                        <H1 text={"Result"} viewStyle={{ alignItems: 'center' }} />
                        <FlatList
                            data={result}
                            keyExtractor={result => result._id}
                            renderItem={({ item }) => (
                                <View style={{ flex: 1, }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('SeeProfile', { item })}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 15 }}>
                                            <View>
                                                <Image source={{ uri: item.pic }}
                                                    style={{ borderRadius: 40, width: 50, height: 50 }}
                                                />
                                            </View>
                                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View style={{ marginLeft: 10, width: "69%" }}>
                                                    <Text style={{ color: Colors.black, fontSize: Font.list }}>{item.parlourName}</Text>
                                                    <Text style={{ color: Colors.black }}>{item.name}</Text>
                                                </View>
                                            </View>
                                            <View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>


                            )} />



                    </View>}
                </View>}

            </ScrollView>
        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
});

//make this component available to the app
export default Search;
