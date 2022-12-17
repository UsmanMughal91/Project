//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView,} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import BtnComp from '../../Components/BtnComp';
import Heading from '../../Components/Heading';
import InputText from '../../Components/InputText';
import { toastConfig } from '../../Styles/styles';
import Toast from 'react-native-toast-message';
// create a component
const SignUp = ({ navigation }) => {
    const [name, setname] = useState(" ")
    const [email, setemail] = useState(" ")
    const [password, setpassword] = useState(" ")
    const [password_confirmation, setpassword_confirmation] = useState(" ")
    const [data, setdata] = useState("")

    const clearTextInput = () => {
        setname('')
        setemail('')
        setpassword('')
        setpassword_confirmation('')
    }

    const handleform = async () => {

        try {
            const option = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        name: `${name}`,
                        email: `${email}`,
                        password: `${password}`,
                        password_confirmation: `${password_confirmation}`,
                        
                    }
                )
            }
            await fetch('http://192.168.3.7:8000/api/Expert/register', option)
                .then(res => res.json())
                .then(d => setdata(d))
                .catch(err => console.log(err))
            if (data.status === "success") {
              
                clearTextInput()
                navigation.navigate("Login")
            } else {
                Toast.show({
                    type: 'warning',
                    position: 'top',
                    topOffset: 0,
                    text1: data.message
                })
            }
                
        } catch (error) {
            console.log(error)
        }
    

       
    }

    return (
        <ScrollView style={{ flex: 1, margin: 20 }}>

            <View style={{ width: 40 }}>
                <Ionicons name='md-chevron-back-circle-outline' size={40} color={'black'} onPress={() => navigation.goBack()} />
            </View>
            <Toast config={toastConfig} />
            <View style={{ justifyContent: "center", alignContent: "center", alignSelf: "center" }}>
                <Image source={require('../../assests/images/logoo.png')} style={{ width: 250, height: 250 }} />
            </View>
            <Heading text={"Signup"} />

            <View style={{ marginTop: 10 }}>
                <InputText Icon={<Ionicons name="person" size={25} />}
                    placeholder={"Name"}
                    onChangeText={setname}
                />
                <InputText Icon={<MaterialCommunityIcons name="email" size={25} />}
                    placeholder={"Email"}
                    onChangeText={setemail}
                    keyboardType="email-address" />
                <InputText Icon={<MaterialCommunityIcons name="lock" size={25} />}
                    placeholder={"Password"}
                    onChangeText={setpassword}
                    secureTextEntry={true}
                />
                <InputText Icon={<MaterialCommunityIcons name="lock" size={25} />}
                    placeholder={"Confirm Password"}
                    onChangeText={setpassword_confirmation}
                    secureTextEntry={true}
                />
            </View>

            <BtnComp btnStyle={styles.btn}
                btnText={'Create New Account'}
                onPress={handleform}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                <Text style={{ color: 'black', fontSize: 18 }}>Already have an account?</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                    <Text style={{ color: 'orange', fontSize: 18 }}>Log In</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>

    );
};

// define your styles
const styles = StyleSheet.create({


    btnStyle: {
        marginTop: 20,
        borderRadius: 10
    },

    btn: {
        marginTop: 30
    }
});

//make this component available to the app
export default SignUp;
