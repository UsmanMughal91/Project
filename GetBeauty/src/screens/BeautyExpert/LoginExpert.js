//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, TextInput, ScrollView } from 'react-native';
//  import TextInput from '../Components/Textinput';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../Styles/Colors'
import Heading from '../../Components/Heading';
import InputText from '../../Components/InputText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import BtnComp from '../../Components/BtnComp';
import { toastConfig } from '../../Styles/styles';
import { storeToken, getToken, storLoginData } from '../../../services/AsyncStorage';
import Toast from 'react-native-toast-message';
import Font from '../../Styles/Font';
import BaseUrl from '../../baseUrl/BaseUrl';

// create a component
const LoginExpert = ({ navigation }) => {

  
    useEffect(() => {
        getToken();

    })

    const [email, setemail] = useState("Sameer@gmail.com")
    const [password, setpassword] = useState("123")
    const [data, setdata] = useState("")
    const [show, setshow] = useState(false)
    const [visible, setvisible] = useState(true)

    const clearTextInput = async () => {
        setemail('')
        setpassword('')
    }
    const handleform = async () => {
        if (email && password) {
            try {
                const option = {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            email: `${email}`,
                            password: `${password}`,
                        }
                    )
                }
                await fetch(`${BaseUrl.ExpertBaseurl}/login`, option)
                    .then(res => res.json())
                    .then((d) => {
                        setdata(d)
                        if (d.status === "success") {

                            storeToken(d.token)  // store token in storage 
                            clearTextInput()
                            navigation.navigate("BeautyExpertStack")
                        }
                        else 
                        {
                            Toast.show({
                                type: 'warning',
                                position: 'top',
                                topOffset: 0,
                                text1: d.message
                            })
                        }
                    })
                    .catch(err => console.log(err))
            } catch (error) {
                console.log(error)
            }
        } else {
            Toast.show({
                type: 'warning',
                position: 'top',
                topOffset: 0,
                text1: "All fields are required"
            })
        }
    }
    return (
        <View >
            <Toast config={toastConfig} />
            <View style={styles.container}>
                <View style={{ alignSelf: "center" }}>
                    <Image source={require('../../assests/images/logo2.png')} resizeMode={"center"} style={{ height: 200 }} />
                </View>
                <Heading text={"Login"} />
                <View style={{ marginTop: 20 }}>
                    <InputText Icon={<MaterialCommunityIcons name="email" size={25} />}
                        placeholder={'Email'}
                        onChangeText={(val) => { setemail(val) }}
                    />
                    <InputText Icon={<MaterialCommunityIcons name="lock" size={25} />}
                        placeholder={'Password'}
                        secureTextEntry={visible}
                        onChangeText={setpassword}
                        Icons={<MaterialCommunityIcons name={show === false ? "eye-off-outline" : "eye-outline"} size={25}
                            onPress={
                                () => {
                                    setvisible(!visible)
                                    setshow(!show)

                                }} />}
                    />
                    <View style={{ alignItems: "flex-end", paddingTop: 10 }}>
                        <TouchableOpacity onPress={() => navigation.navigate("ForgotPass")}>

                            <Text style={{ fontSize: Font.font, color: Colors.purple }}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <BtnComp onPress={handleform} btnStyle={{marginTop:30}} btnText={"LOGIN"} />
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                    <Text style={{ color: Colors.black, fontSize: Font.font }}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{ color: Colors.purple, fontSize: Font.font }}> Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        margin: 20,
        marginTop:100
    },
})
//make this component available to the app
export default LoginExpert;
