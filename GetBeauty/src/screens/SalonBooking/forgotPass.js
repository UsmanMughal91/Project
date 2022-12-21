//import liraries
import React, { Component ,useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import BtnComp from '../../Components/BtnComp';
import Heading from '../../Components/Heading';
import InputText from '../../Components/InputText';
import { toastConfig } from '../../Styles/styles';
import Toast from 'react-native-toast-message';
// create a component
const ForgotPass = () => {

    const [email, setemail] = useState(" ")
    const [data, setdata] = useState("")

    const clearTextInput = async () => {
        setemail('')  
    }

    const handleform = async () => {
        if(email){
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

                        }
                    )
                }
                await fetch('http://192.168.50.7:8000/api/user/send-user-password-reset-email', option)
                    .then(res => res.json())
                    .then(d => setdata(d))
                    .catch(err => console.log(err))
            } catch (error) {
                console.log(error)
            }
            if (data.status === "success") {
                // await storeToken(data.token)  // store token in storage 
                // await clearTextInput()
                // navigation.navigate("SalonAppTabs")
                Toast.show({
                    type: 'done',
                    position: 'top',
                    topOffset: 0,
                    text1: "Password reset code send"
                })
            } else {

                Toast.show({
                    type: 'warning',
                    position: 'top',
                    topOffset: 0,
                    text1: data.message
                })
            }
        }else{
            Toast.show({
                type: 'warning',
                position: 'top',
                topOffset: 0,
                text1:"Email is required"
            })
        }
           

        }
    
    
    return (
      <View style={styles.container}>

            <View style={{ width: 40 }}>
                <Ionicons name='md-chevron-back-circle-outline' size={40} color={'black'} onPress={() => navigation.goBack()} />
            </View>
            <Toast config={toastConfig} />
            <Heading text={"Forgot Password"}/>
            <View style={{marginTop:30}}>
            <InputText placeholder={"Enter Email"}
            onChangeText={setemail}/>
            <View style={{marginTop:30}}>

            <BtnComp btnText={"Send Code"} onPress={handleform}/>
            </View>

            </View>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       margin:20,
    
    },
});

//make this component available to the app
export default ForgotPass;
