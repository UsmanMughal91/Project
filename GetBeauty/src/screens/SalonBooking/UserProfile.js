//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import BtnComp from '../../Components/BtnComp';
import Services from '../SalonBooking/Services';
import Icons from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Heading from '../../Components/Heading';
import { getToken } from '../../../services/AsyncStorage';
import Header from '../../Components/Header';
import Loader from '../../Components/Loader'
import Font from '../../Styles/Font';
import Colors from '../../Styles/Colors';
import H1 from '../../Components/H1'
// create a component
const UserProfile = ({ navigation }) => {
    const [data, setdata] = useState();
    const [loading, setloading] = useState(true);
    const loadprofile = async (token) => {
        const option = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    token: token
                }
            )
        }
        try {
            await fetch('http://192.168.103.8:8000/api/user/loadprofile', option)
                .then((res) => res.json())
                .then((d) => { setdata(d.data); setloading(false) })
                .catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        (async () => {
            const token = await getToken() // getting token from storage
            loadprofile(token);
        })();
    }, [])
    return (
        <ScrollView>
            <Header onPress={() => navigation.goBack()} />

            <View style={styles.container}>
                {loading && <Loader viewStyle={{marginTop:320}}/>}
                {data && <View>
                    <Heading text={"My Profile"} />
                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <Image source={{ uri: data.pic }}
                            style={{
                                width: 100, height: 100, borderRadius: 50, marginTop: 10
                            }} />
                        
                        <Heading text={data.name}/>
                        <Text style={{ fontSize:Font.list, marginBottom: 10 }}>{data.parlourName}</Text>

                    </View>
                   
                    <H1 text={"About"} viewStyle={{alignItems:"flex-start"}}/>
                    <Text style={{ fontSize: Font.font, marginTop: 10 }}>{data.about ? data.about : "Please add more details in Edit Profile."}</Text>
                    <H1 text={"Address"} viewStyle={{ alignItems: "flex-start" }} />
                    <Text style={{ fontSize: Font.font, marginTop: 10 }}>{data.address}</Text>
                    <H1 text={"Contact"} viewStyle={{ alignItems: "flex-start" }} />
                    <Text style={{ fontSize: Font.font, marginTop: 10 }}>{data.phone}</Text>
                    <Text style={{ fontSize: Font.font, marginTop: 10 }}>{data.email}</Text>

                </View>}
            </View>
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    viewStyle:{
        alignItems:'flex-start'
    }
});

//make this component available to the app
export default UserProfile;
