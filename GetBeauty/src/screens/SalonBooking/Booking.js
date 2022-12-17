//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';
import BtnComp from '../../Components/BtnComp';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import Heading from '../../Components/Heading';
// create a component
const Booking = ({ navigation }) => {
    const [date, setDate] = useState(new Date(1598051730000));

    const onChange = (event, selectedDate) => {

        setDate(selectedDate);
    };
    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true,
            
        })
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ width: 40 }}>
                    <Ionicons name='md-chevron-back-circle-outline' size={40} color={'black'} onPress={() => navigation.goBack()} />
                </View>
                <Heading text={"Salon Appointment"}/>
                <Text style={{ fontSize: 20, fontWeight: '500', color: "black", marginTop: 40 }}>Select Date</Text>
                <View style={[styles.LoginDesign,{height:55,justifyContent:'space-between'}]}>
                   <View style={{flexDirection:'row'}}><MaterialCommunityIcons name="clock-time-four-outline" size={25} />
                    <Text style={{paddingLeft:10}}>{date.toLocaleString()}</Text>
                    </View> 
                    <TouchableOpacity
                        onPress={showDatepicker}>
                        <Ionicons name="ios-calendar-outline" size={25}  style={{marginRight:15}}     
                    />
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 20, fontWeight: '500', color: "black", marginTop: 30 }}>Payment</Text>
                <View style={styles.LoginDesign}>
                    <MaterialCommunityIcons name="cash" size={25} color={"green"} />
                   <Text style={{fontSize:20,marginLeft:10}}>Cash</Text>
                </View>
                <View style={styles.LoginDesign}>
                    <Entypo name="paypal" size={25} />
                    <Text style={{ fontSize: 20, marginLeft: 10 }}>PayPal</Text>
                </View>
                <View >
                    {/* <Button onPress={showDatepicker} title="Show date picker!" 
                     /> */}
                    {/* <BtnComp btnStyle={styles.bntStyle}
                        btnText="Select Date"  onPress={showDatepicker}  /> */}
                </View>
                <View >
                   
                    <BtnComp btnStyle={styles.bntStyle}
                        btnText="Submit" 
                        />
                </View>
               
                <View>

                   
                    {/* <View>
                        <Button onPress={showTimepicker} title="Show time picker!" />
                    </View> */}

                </View>
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: '#aaa'

    },
    bntStyle: {
        marginTop: 20,
        

    },
    LoginDesign: {
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 12,
        paddingLeft: 10,
        marginTop: 20,
        padding:10
    },

});

//make this component available to the app
export default Booking;
