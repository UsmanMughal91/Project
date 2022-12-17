//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
// create a component
const DashBoard = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <ImageBackground source={require('../../assests/images/beauti.jpg')}
                    style={{ width: "100%", height: 250 }} >
                       
                    <View style={{ marginLeft: 10, marginTop: 150   , width: 280, borderRadius: 12 }}>
                        <View style={{ borderRadius: 12, marginBottom: 10 }}>
                            <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>Beauty Parlour</Text>
                            <Text style={{ fontSize: 16, color: 'white', marginBottom: 10 }}>Beauty Parlour Booking App</Text>
                        </View>
                        <View>
                        </View>
                    </View>
                </ImageBackground>

                <View style={{ margin: 20 }}>
                    
                    <View style={{ flexDirection: 'row', height: 230 }}>
                        <View style={{ backgroundColor: 'white', flex: 1, borderRadius: 12 }}>
                            <Text style={{ fontSize: 16, margin: 10,fontWeight:'bold' }}>WEEKLY EARNING</Text>
                            
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', height: 150, marginTop: 20}}>
                        <View style={{ backgroundColor: 'white', flex: 1, borderRadius: 12,marginRight:10 }}>
                            <Text style={{textAlign:'center',margin:10}}>Total Services</Text>
                            <Text style={{ fontSize: 25, marginTop: 10, fontWeight: 'bold', textAlign: 'center', color:'#52c8ff'}}>560</Text>
                        </View>
                        <View style={{ backgroundColor: 'white', flex: 1, borderRadius: 12 }}>
                            <Text style={{ textAlign: 'center', margin: 10 }}>Pending Ser..</Text>
                            <Text style={{ fontSize: 25, marginTop: 10, fontWeight: 'bold', textAlign: 'center', color: 'orange' }}>120</Text>
                        </View>
                        <View style={{ backgroundColor: 'white', flex: 1, borderRadius: 12,marginLeft:10 }}>
                            <Text style={{ textAlign: 'center', margin: 10 }}>Completed </Text>
                            <Text style={{ fontSize: 25, marginTop: 10, fontWeight: 'bold', textAlign: 'center', color: '#52c8ff' }}>440 </Text>
                        </View>


                    </View>
                </View >
            </ScrollView>

        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});

//make this component available to the app
export default DashBoard;
