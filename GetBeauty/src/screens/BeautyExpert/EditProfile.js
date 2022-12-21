//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ImagePicker from 'react-native-image-crop-picker';
import BtnComp from '../../Components/BtnComp';
import Heading from '../../Components/Heading';
import InputText from '../../Components/InputText';
import { toastConfig } from '../../Styles/styles';
import Toast from 'react-native-toast-message';
// create a component
const EditProfile = ({ navigation }) => {
    const [pic, setpic] = useState()
    const [data, setdata] = useState()
    const [aboutMe, setaboutMe] = useState()
    const [days, setdays] = useState()
    const [hours, sethours] = useState()


    const openPic = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(Response => {
            setpic(Response.path)
            console.log(Response);
            console.log(setpic)
        });
    }



    const handleform = async () => {
        if (aboutMe && days && hours && pic) {
            try {
                const option = {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        {
                           aboutMe : `${aboutMe}`,
                            days: `${days}`,
                            hours: `${hours}`,
                            pic: `${pic}`,
                        }
                    )
                }
                await fetch('http://192.168.214.7:8000/api/aboutExpert/aboutMe', option)
                    .then(res => res.json())
                    .then(d => setdata(d))
                    .catch(err => console.log(err))

                if (data.status === "success") {
                    // await clearTextInput()
                    Toast.show({
                        type: 'done',
                        position: 'top',
                        topOffset: 0,
                        text1: data.message
                    })
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            Toast.show({
                type: 'warning',
                position: 'top',
                topOffset: 0,
                text1: data.message
            })
        }

    }
    

    

    return (
        <View style={styles.container}>
            <View style={{ width: 40 }}>
                <Ionicons name='md-chevron-back-circle-outline' size={40} color={'black'} onPress={() => navigation.goBack()} />
            </View>
            <Toast config={toastConfig} />
            <Heading text={"Edit Profile"} />

            <View style={{ alignItems: "center", paddingTop: 30 }}>
                <TouchableOpacity onPress={() => openPic()}>

                    <Image source={{ uri: pic }}
                        resizeMode="cover" style={{ height: 140, width: 140, borderRadius: 50, backgroundColor: 'white' }} />
                </TouchableOpacity>
                <Text style={{ paddingTop: 10, fontWeight: 'bold', fontSize: 20 }}>Add Pic</Text>
            </View>
            <View style={{ marginTop: 20 }}>
                <InputText
                    placeholder={"About Me"}
                    onChangeText={setaboutMe} />

                <InputText
                    placeholder={"Opening Days"}
                    onChangeText={setdays} />

                <InputText placeholder={"Opening Hours"}
                    onChangeText={sethours}
                />


            </View>
            <BtnComp btnStyle={styles.btn}
                btnText={'Save'} onPress={handleform} />

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    btn: {
        marginTop: 20
    }
});

//make this component available to the app
export default EditProfile;
