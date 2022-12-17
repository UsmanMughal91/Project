//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { getToken } from '../../../services/AsyncStorage';
import BtnComp from '../../Components/BtnComp';

// create a component
const Search = ({ navigation }) => {

    const [localToken, setlocalToken] = useState()

    useEffect(() => {
        (
            async () => {
                const token = await getToken() // getting token from storage

                setlocalToken(token) // store token in local state
            })();
    })

    const handleform = async (token) => {
        try {
            const option = {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },

            }
            await get('http://192.168.10.8:8000/api/user/loggedUser', option)
                .then(res => res.json())
                .then(d => setdata(d))
                .catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }

    }

  

    return (

        <View style={styles.container}>

            <View style={{ width: 40 }}>
                <Ionicons name='md-chevron-back-circle-outline' size={40} color={'black'} onPress={() => navigation.goBack()} />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', backgroundColor: 'white', borderRadius: 12, marginTop: 20 }}>
                <View>
                    <TextInput placeholder='Search Parlour' style={{ fontSize: 18, paddingLeft: 18 }} />
                </View>
                <View>
                    <TouchableOpacity style={{ backgroundColor: "orange", padding: 9, borderRadius: 12, marginRight: 5 }}>
                        <Text style={{ color: 'white', fontSize: 15 }}>Search</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View>
               
                <Text >{localToken}</Text>
               <BtnComp onPress={handleform}/>
               
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
});

//make this component available to the app
export default Search;
