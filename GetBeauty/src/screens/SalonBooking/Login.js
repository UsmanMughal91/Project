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
import Colors from '../../Styles/Colors';
import Font from '../../Styles/Font';
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
              await fetch('http://192.168.197.7:8000/api/user/login', option)
                  .then(res => res.json())
                  .then(d =>{
                    setdata(d)
                    if (d.status === "success") {
                         storeToken(d.token)  // store token in storage 
                         clearTextInput()
                        navigation.navigate("SalonAppDrawer")
                    } 
                    else(data.status === "failed")
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
          
           
            <Toast config={toastConfig} />
         <View style={{alignSelf:'center'}}>
                <Image source={require('../../assests/images/logo1.png')}  resizeMode={"center"} style={{height:300}}/>

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
                    <TouchableOpacity onPress={()=>navigation.navigate("ForgotPass")}>

                        <Text style={{ fontSize:Font.font, color: Colors.purple }}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <BtnComp onPress={handleform} btnStyle={styles.btn} btnText={"LOGIN"} />
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                <Text style={{ color:Colors.black, fontSize:Font.font }}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{ color:Colors.purple, fontSize:Font.font}}> Sign up</Text>
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
