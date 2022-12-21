//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
//  import TextInput from '../Components/Textinput';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Heading from '../../Components/Heading';
import InputText from '../../Components/InputText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import BtnComp from '../../Components/BtnComp';
import { toastConfig } from '../../Styles/styles';
import Toast from 'react-native-toast-message';
import { storeToken } from '../../../services/AsyncStorage';
// create a component

const Login = ({ navigation }) => {

    const [email, setemail] = useState(" ")
    const [password, setpassword] = useState(" ")
    const [data, setdata] = useState("")
    const [show,setshow] = useState(false)
    const [visible, setvisible] = useState(true)

    const clearTextInput = async() => {
        setemail('')
        setpassword('')
    }

    const handleform = async () => {

      if( email&& password){
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
              await fetch('http://192.168.214.7:8000/api/user/login', option)
                  .then(res => res.json())
                  .then(d => setdata(d))
                  .catch(err => console.log(err))
                  
              if (data.status === "success") {
                  await storeToken(data.token)  // store token in storage 
                  await clearTextInput()
                  navigation.navigate("SalonAppTabs")
              } 
              else(data.status === "failed")
              {
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
         

      }else{
          Toast.show({
              type: 'warning',
              position: 'top',
              topOffset: 0,
              text1: "All fields are required"
          })
      }
       
     
    }

    return (
        
        <ScrollView style={styles.container}>
          
            <View style={{ width: 40 }}>
                <Ionicons name='md-chevron-back-circle-outline' size={40} color={'black'} onPress={() => navigation.goBack()} />
            </View>
            <Toast config={toastConfig} />
            <View style={{ justifyContent: "center", alignContent: "center", alignSelf: "center" }}>
                <Image source={require('../../assests/images/logoo.png')} style={{ width: 250, height: 250 }} />
            </View>
            <Heading text={"Login"} />

            <View style={{ marginTop: 20 }}>
                <InputText Icon={<MaterialCommunityIcons name="email" size={25} />}
                    placeholder={'Email'}
                    onChangeText={setemail}
                />
                <InputText Icon={<MaterialCommunityIcons name="lock" size={25} />}
                    placeholder={'Password'}
                    secureTextEntry={visible}
                    onChangeText={setpassword}
                    Icons={<MaterialCommunityIcons name={show === false ? "eye-off-outline" :"eye-outline"} size={25} 
                    onPress={
                        ()=>{
                            setvisible(!visible)
                            setshow(!show)

                        }}/>}
                />
                <View style={{ alignItems: "flex-end", paddingTop: 10 }}>
                    <TouchableOpacity onPress={()=>navigation.navigate("forgotPass")}>

                        <Text style={{ fontSize: 17, color: 'orange' }}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <BtnComp onPress={handleform} btnStyle={styles.btn} btnText={"LOGIN"} />
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                <Text style={{ color: 'black', fontSize: 18 }}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{ color: 'orange', fontSize: 18 }}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,

    },
    btn: {
        marginTop: 30,
    }

})


//make this component available to the app
export default Login;
