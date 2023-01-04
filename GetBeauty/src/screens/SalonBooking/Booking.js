//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';
import BtnComp from '../../Components/BtnComp';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import Heading from '../../Components/Heading';
import DropDownPicker from 'react-native-dropdown-picker';
import { getToken } from '../../../services/AsyncStorage';



// create a component
const Booking = ({ navigation,route }) => {
    const item =route.params.item
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Cash', value: 'Cash' },
        { label: 'PayPal', value: 'PayPal' }
    ]);






    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date()); 

    const onChange = (event, selectedDate) => {
        console.log("date:" ,selectedDate)
        setDate(selectedDate);
    };

    const onChange2 = (event, selectedTime) => {
        console.log("time:" ,selectedTime)

        setTime(selectedTime);

    };
    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true,
        })
    };

    const showMode2 = (currentMode) => {
        DateTimePickerAndroid.open({
            value: time,
            onChange:onChange2,
            mode: currentMode,
            is24Hour: true,
        })
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode2('time');
    };
    const submitForm = async () =>{
        const token = await getToken() 
        const option = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    token : token,
                    service:item,
                    expertID:route.params.item.id,
                    date: date.toString().slice(4,15),
                    time: time.toString().slice(16,21),
                    method : value,
                    status: "Requested",
                }
            )
        }
        try {
            await fetch('http://192.168.103.8:8000/api/user/booking',option)
            .then((res)=>res.json())
            .then((d) => {
                console.log(d.message)
                if(d.status === "success"){
                    navigation.navigate("Services",{item})
                }
            })
            .catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        
    })
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
                    <Text style={{paddingLeft:10,color:'gray'}}>{date.toString().slice(4,15)}</Text>
                    </View> 
                    <TouchableOpacity
                        onPress={showDatepicker}>
                        <Ionicons name="ios-calendar-outline" size={25}  style={{marginRight:15}}     
                    />
                    </TouchableOpacity>
                </View>
                <View style={[styles.LoginDesign,{height:55,justifyContent:'space-between'}]}>
                   <View style={{flexDirection:'row'}}><MaterialCommunityIcons name="clock-time-four-outline" size={25} />
                    <Text style={{paddingLeft:10,color:'gray'}}>{time.toString().slice(16,21)}</Text>
                    </View> 
                    <TouchableOpacity
                        onPress={showTimepicker}>
                        <Ionicons name="ios-calendar-outline" size={25}  style={{marginRight:15}}     
                    />
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 20, fontWeight: '500', color: "black", marginTop: 30 }}>Payment</Text>
                <DropDownPicker
                style={{borderColor:"white",marginTop:30}}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    showTickIcon
                    listItemLabelStyle={{fontSize:18,color:"grey"}}
                    dropDownContainerStyle={{borderColor:"white",marginTop:30,borderBottomLeftRadius:20,borderBottomRightRadius:20}}
                    selectedItemContainerStyle={{backgroundColor:"#eee"}}
                    placeholder={"Payment Method"}
                    textStyle={{fontSize:18,color:"grey"}}
                />
                {/* <View style={styles.LoginDesign}>
                   
                    <MaterialCommunityIcons name="cash" size={25} color={"green"} />
                   <Text style={{fontSize:20,marginLeft:10}}>Cash</Text>
                </View>
                <View style={styles.LoginDesign}>
                    <Entypo name="paypal" size={25} />
                    <Text style={{ fontSize: 20, marginLeft: 10 }}>PayPal</Text>
                </View> */}
                <View >
                    {/* <Button onPress={showDatepicker} title="Show date picker!" 
                     /> */}
                    {/* <BtnComp btnStyle={styles.bntStyle}
                        btnText="Select Date"  onPress={showDatepicker}  /> */}
                </View>
                <View >
                   
                    <BtnComp btnStyle={styles.bntStyle}
                        btnText="Submit" 
                        onPress={submitForm}
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
        marginTop: 50,
        

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