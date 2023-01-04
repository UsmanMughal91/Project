//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Heading from '../../Components/Heading';
import { getToken } from '../../../services/AsyncStorage';
import Header from '../../Components/Header';
import Loader from '../../Components/Loader';
import H1 from '../../Components/H1';
import Font from '../../Styles/Font';

// create a component
const Profile = ({ navigation }) => {
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
            await fetch('http://192.168.103.8:8000/api/Expert/loadprofile', option)
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
                {loading && <Loader viewStyle={{ marginTop: 320 }} />}
                {data && <View>
                    <Heading text={"My Profile"} />
                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <Image source={{ uri: data.pic }}
                            style={{
                                width: 100, height: 100, borderRadius: 50, marginTop: 10
                            }} />
                        <Heading text={data.name} />
                        <Text style={{ fontSize:Font.font, marginBottom: 10 }}>{data.parlourName}</Text>

                    </View>
                    <H1 text={"About"} />
                    <Text style={styles.text}>{data.about ? data.about : "Please add more details in Edit Profile."}</Text>

                    <H1 text={"Opening Hours"} />
                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <Text style={styles.text}>Mon - Thu</Text>
                        <Text style={styles.text}>8:00 AM - 12:00 PM</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <Text style={styles.text}>Fri - Sat</Text>
                        <Text style={styles.text}>10:00 AM - 11:00 PM</Text>
                    </View>

                    <H1 text={"Address"} />
                    <Text style={{ fontSize: 16, marginTop: 10 }}>{data.address}</Text>

                    <H1 text={"Contact"} />
                    <Text style={styles.text}>{data.phone}</Text>
                    <Text style={styles.text}>{data.email}</Text>
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
    text: {
        fontSize: Font.font,
        marginTop: 10,
        textAlign:'justify'
    }
});

//make this component available to the app
export default Profile;
