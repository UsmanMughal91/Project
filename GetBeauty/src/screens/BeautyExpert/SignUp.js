//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground, Alert } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import BtnComp from '../../Components/BtnComp';
import Heading from '../../Components/Heading';
import InputText from '../../Components/InputText';
import { toastConfig } from '../../Styles/styles';
import Toast from 'react-native-toast-message';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../../Styles/Colors';
import Font from '../../Styles/Font';
import Header from '../../Components/Header';
import CustomModal from '../../Components/CustomModal';
import BaseUrl from '../../baseUrl/BaseUrl';

// create a component
const SignUp = ({ navigation }) => {
   
    const [name, setname] = useState("")
    const [email, setemail] = useState(" ")
    const [phone, setphone] = useState(" ")
    const [address, setaddress] = useState(" ")
    const [parlourName, setparlourName] = useState(" ")
    const [password, setpassword] = useState(" ")
    const [password_confirmation, setpassword_confirmation] = useState(" ")
    const [pic, setpic] = useState(null)
    const [modalvisible, setmodalvisible] = useState(false)
    const [data, setdata] = useState("")

   
const pickImage = () =>{
    launchImageLibrary({quality:0.5},(fileobj)=>{
        const uploadTask =storage().ref().child(`/profile/${Math.floor((Math.random() * 1000000000) + 1)}`).putFile(fileobj.assets[0].uri)
        uploadTask.on('state_changed',
            (snapshot) => {
              
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                if(progress===100){
                    console.log('image uploaded')
                }                
            }, 
            (error) => {
              alert("error uploading image")
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    setpic(downloadURL)
                });
            }
        );
    })}

  

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
                        phone: `${phone}`,
                        address: `${address}`,
                        parlourName: `${parlourName}`,
                        pic: `${pic}`,

                    }
                )
            }
        
            await fetch(`${BaseUrl.ExpertBaseurl}/register`, option)
                .then(res => res.json())
                .then(data =>{ setdata(data);
                    if (data.status === "success") {
                        clearTextInput()
                        setmodalvisible(true)
                    } else {
                        Toast.show({
                            type: 'warning',
                            position: 'top',
                            topOffset: 0,
                            text1: data.message
                        })
                    }
                
                }
                
                )
                .catch(err => console.log(err))
           

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={{ flex: 1 }}> 
        <Header onPress={()=>navigation.goBack()}/>
        <ScrollView style={{ margin: 20 }}>
           
            <Heading text={"Signup"} />

            <View style={{ marginTop: 10 }}>
                <InputText Icon={<Ionicons name="person" size={25} />}
                    placeholder={"Name"}
                        onChangeText={(val) => {setname(val)}}
                />

                <InputText Icon={<FontAwesome5 name="store" size={20} />}
                    placeholder={"Parlour Name"}
                        onChangeText={(val) => {setparlourName(val)}}
                    keyboardType="email-address" />

                <InputText Icon={<MaterialCommunityIcons name="phone" size={25} />}
                    placeholder={"Phone"}
                    onChangeText={(val)=>{setphone(val)}}
                    keyboardType="phone-pad" />


                <InputText Icon={<MaterialCommunityIcons name="home" size={25} />}
                    placeholder={"Address"}
                        onChangeText={(val) => {setaddress(val)}}
                />

                <InputText Icon={<MaterialCommunityIcons name="email" size={25} />}
                    placeholder={"Email"}
                        onChangeText={(val) => {setemail(val)}}
                    keyboardType="email-address" />

                <InputText Icon={<MaterialCommunityIcons name="lock" size={25}  />}
                    placeholder={"Password"}
                        onChangeText={(val) => {setpassword(val)}}
                    secureTextEntry={true}
                />
                <InputText Icon={<MaterialCommunityIcons name="lock" size={25} />}
                    placeholder={"Confirm Password"}
                        onChangeText={(val) => {setpassword_confirmation(val)}}
                    secureTextEntry={true}
                />
            </View>

            <View style={{ alignItems: "center", marginTop: 30 }}>
                <TouchableOpacity onPress={pickImage}>

                    <Image source={pic ? {uri:pic} :
                    require('../../assests/images/upload1.png')}
                        resizeMode="center" style={{ height: 140, width: 140, borderRadius: 50, backgroundColor:Colors.white }} />
                </TouchableOpacity>
                <Text style={{ paddingTop: 10, fontSize:Font.h1 }}>Add Pic</Text>
            </View>
            <BtnComp btnStyle={{marginTop:30}}
                btnText={'Create New Account'}
                onPress={handleform}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                <Text style={{ color:Colors.black, fontSize:Font.font }}>Already have an account?</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('LoginExpert') }}>
                    <Text style={{ color:Colors.purple, fontSize:Font.font }}> Log In</Text>
                </TouchableOpacity>
            </View>
                <CustomModal modalvisible={modalvisible} setmodalvisible={setmodalvisible} onPress={() => {
                    setmodalvisible(false);
                    navigation.navigate("LoginExpert")
                }} text={"You have Registerd successfully"} />

        </ScrollView>
        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
 
});

//make this component available to the app
export default SignUp;


 // const openPic = () => {
    //     ImagePicker.openPicker({
    //         width: 300,
    //         height: 400,
    //         cropping: true
    //     }).then(Response => {
    //         setpic(Response.path)
    //         console.log(Response);
           
    //         picUpload(pic.path)
    //     });
    // }