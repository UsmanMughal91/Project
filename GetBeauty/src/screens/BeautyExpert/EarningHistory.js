//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import H1 from '../../Components/H1';
import Header from '../../Components/Header'
import Heading from '../../Components/Heading';
import Colors from '../../Styles/Colors';
import Font from '../../Styles/Font';

// create a component
const EarningHistory = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Header onPress={() => navigation.goBack()} />
            <View style={{ margin: 20 }}>
                <Heading text={"Earning History"}/>
                <H1 text={"This Month"} viewStyle={{marginTop:30}}/>
                <View style={{alignItems:"center",marginTop:20,backgroundColor:Colors.white,borderRadius:12,padding:10}}>
                    <Text style={{ fontSize: Font.Heading, color: Colors.purple }}>20345 PKR</Text>
                </View>
                <H1 text={"Last Month"} viewStyle={{ marginTop: 30 }} />
                <View style={{ alignItems: "center", marginTop: 20, backgroundColor: Colors.white, borderRadius: 12, padding: 10 }}>
                    <Text style={{ fontSize: Font.Heading, color: Colors.purple }}>20345 PKR</Text>
                </View>
                <H1 text={"Last Six Months"} viewStyle={{ marginTop: 30 }} />
                <View style={{ alignItems:'center', marginTop: 20, backgroundColor: Colors.white, borderRadius: 12, padding: 10 }}>
                    <Text style={{ fontSize: Font.Heading, color: Colors.purple }}>20345 PKR</Text>
                </View>
            </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default EarningHistory;
