//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import BtnComp from '../Components/BtnComp';

// create a component
const ViewScreen = ({ navigation }) => {
    return (
        <View style={{flex:1}}>
            <ImageBackground source={require('../assests/images/front.jpg')}
                style={{ height: "100%", }}>
                <View style={{ margin: 20, flex: 1, marginTop: 450, backgroundColor: 'black', borderRadius: 12, opacity: 0.8 }}>
                    <View style={{margin:10,}}> 
                    <Text style={{ color: 'white', fontSize: 40, fontWeight: "400" }}>Welcome to</Text>
                    <Text style={{ color: 'white', fontSize: 40, fontWeight: "bold" }}>GetBeauty App</Text>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: "300", marginTop: 10 }}>The smart and handy App to manage all the deals of Salons with their customers AnyTime,AnyWhere!</Text>
                    <View style={{ flexDirection: "row",justifyContent:"space-around" ,marginTop:30}}>
                        <View style={{width:"40%"}}>
                            <BtnComp btnText={"Guest"} onPress={()=>navigation.navigate("GuestStack")} />
                        </View>
                        <View style={{ width: "40%" }} >
                            <BtnComp btnText={"Register"} onPress={() => navigation.navigate("registerOption")} />
                       </View>
                    </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};
//make this component available to the app
export default ViewScreen;
