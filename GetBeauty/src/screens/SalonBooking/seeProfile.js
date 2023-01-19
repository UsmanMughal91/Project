
//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import BtnComp from '../../Components/BtnComp';
import Header from '../../Components/Header';
import Heading from '../../Components/Heading';
// create a component
const SeeProfile = ({ navigation, route }) => {
    const profile = route.params.item
    console.log(profile, "this is profile")
    const id = profile._id
    console.log(id, "this is id")
    return (
        <View style={{ flex: 1 }}>
            <Header onPress={() => navigation.goBack()} />
            <ScrollView>
                {profile &&
                    <View style={styles.container}>
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <Image source={{ uri: profile.pic }}
                                style={{
                                    width: 100, height: 100, borderRadius: 50, marginTop: 10
                                }} />
                            <Heading text={profile.name} />
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>{profile.parlourName}</Text>
                            <BtnComp btnText={"Services"} onPress={() => navigation.navigate("Services", { id, profile })} />

                        </View>
                        <Text style={{ fontSize: 20, fontWeight: '500', color: 'black', marginTop: 30 }}>About</Text>
                        <Text style={{ fontSize: 16, marginTop: 10 }}>{profile.about ? profile.about : "No more details"}</Text>
                        <Text style={{ fontSize: 20, fontWeight: '500', color: 'black', marginTop: 30 }}>Opening Hours</Text>
                        {profile.daysX ? <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, marginTop: 10 }}>{profile.daysX}</Text>
                            <Text style={{ fontSize: 16, marginTop: 10 }}>{profile.timeX}</Text>
                        </View> : <Text>No time schedule found</Text>}
                        {profile.daysY ? <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, marginTop: 10 }}>{profile.daysY}</Text>
                            <Text style={{ fontSize: 16, marginTop: 10 }}>{profile.timeY}</Text>
                        </View> : null}
                        {profile.daysZ ? <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, marginTop: 10 }}>{profile.daysZ}</Text>
                            <Text style={{ fontSize: 16, marginTop: 10 }}>{profile.timeZ}</Text>
                        </View> : null}
                       
                        <Text style={{ fontSize: 20, fontWeight: '500', color: 'black', marginTop: 30 }}>Address</Text>
                        <Text style={{ fontSize: 16, marginTop: 10 }}>{profile.address}</Text>
                        <Text style={{ fontSize: 20, fontWeight: '500', color: 'black', marginTop: 30 }}>Contact</Text>
                        <Text style={{ fontSize: 16, marginTop: 10 }}>{profile.phone}</Text>
                        <Text style={{ fontSize: 16, marginTop: 10 }}>{profile.email}</Text>

                    </View>}

            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {

        margin: 20
    },
    btnStyle: {
        marginTop: 30,
        backgroundColor: '#fff'
    },
    btnT: {
        textAlign: "left",
        marginLeft: 10,
        color: 'black',
        fontWeight: '400'
    },
    btn: {
        marginTop: 30
    },
    edit: {
    }
});

//make this component available to the app
export default SeeProfile;
