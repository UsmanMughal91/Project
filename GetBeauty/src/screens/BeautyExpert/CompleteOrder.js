//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import H1 from '../../Components/H1';
import Header from '../../Components/Header';
import Heading from '../../Components/Heading';
import Colors from '../../Styles/Colors';
import Font from '../../Styles/Font';
import BtnComp from '../../Components/BtnComp';
// create a component
const CompleteOrder = ({ navigation, route }) => {
    const data = route.params.item
    const setrefresh = route.params.setrefresh
    console.log(data)
    const complete = async (item) => {
        const option = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    item: item,
                    newStatus: "Completed",
                }
            )
        }
        try {
        
            await fetch(`${BaseUrl.ExpertBaseurl}/booking`, option)
                .then((res) => res.json())
                .then((d) => {
                    setrefresh(true)
                    navigation.navigate("Appointment")
                })
                .catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <ScrollView>
            <Header onPress={() => navigation.goBack()} />
            {data && <View style={styles.container}>
                <Heading text={"Status"} />
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Image source={{ uri: data.user.pic }}
                        style={{
                            width: 100, height: 100, borderRadius: 50, marginTop: 10
                        }} />
                </View>
                <H1 text={data.user.name} />
                <H1 text={"Date & Time"} viewStyle={styles.h1} />
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                    <Text style={{ fontSize: Font.font }}>Date</Text>
                    <Text style={{ fontSize: Font.font }}>{data.date}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                    <Text style={{ fontSize: Font.font }}>Time</Text>
                    <Text style={{ fontSize: Font.font }}>{data.time}</Text>
                </View>
                <H1 text={"Amount"} viewStyle={styles.h11} />
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                    <Text style={{ fontSize: Font.font, color: Colors.black, }}>Service</Text>
                    <Text style={{ fontSize: Font.font, color: Colors.black }}>Price</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                    <Text style={{ fontSize: Font.font }}>{data.service.serviceName}</Text>
                    <Text style={{ fontSize: Font.font }}>{data.service.servicePrice} pkr</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                    <Text style={{ fontSize: Font.h1, color: Colors.black, fontWeight: "600" }}>Total</Text>
                    <Text style={{ fontSize: Font.h1, color: Colors.black, fontWeight: "600" }}>{data.service.servicePrice} pkr</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "space-around", marginTop: 60 }}>
                    <BtnComp btnText={"Complete"} btnStyle={{ width: 130 }} onPress={() => complete(data)} />
                </View>
            </View>}
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    h1: {
        marginTop: 30,
        alignItems: "flex-start"
    },
    h11: {
        alignItems: "flex-start",
    }
});

//make this component available to the app
export default CompleteOrder;
