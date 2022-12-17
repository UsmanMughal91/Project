//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ImagePicker from 'react-native-image-crop-picker';
import BtnComp from '../../Components/BtnComp';
import Heading from '../../Components/Heading';
import InputText from '../../Components/InputText';

// create a component
const EditProfileC = ({ navigation }) => {
    const [image, setimage] = useState()
    const openPic = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(Response => {
            setimage(Response.path)
            console.log("kkkk", Response);
        });
    }

    return (
        <View style={styles.container}>
            <View style={{ width: 40 }}>
                <Ionicons name='md-chevron-back-circle-outline' size={40} color={'black'} onPress={() => navigation.goBack()} />
            </View>
            <Heading text={"Edit Profile"} />

            <View style={{ alignItems: "center", paddingTop: 30 }}>
                <TouchableOpacity onPress={() => openPic()}  >
                    <ImageBackground source={require('../../assests/images/logo.png')} style={{ height: 150, width: 150, borderRadius: 40 }}>
                        <Image source={{ uri: image }}
                            resizeMode="cover" style={{ height: 150, width: 150,}} />
                    </ImageBackground>

                </TouchableOpacity>
                <Text style={{ paddingTop: 10, fontWeight: 'bold', fontSize: 20 }}>Add Pic</Text>
            </View>
            <View style={{ marginTop: 20 }}>
                <InputText Icon={<Ionicons name="person" size={25} />}
                    placeholder={"Name"} />

                <InputText Icon={<MaterialCommunityIcons name="email" size={25} />}
                    placeholder={"Email"} />

                <InputText Icon={<MaterialCommunityIcons name="phone" size={25} />}
                    placeholder={"Phone"}
                    keyboardType="phone-pad" />

                <InputText Icon={<MaterialCommunityIcons name="home" size={25} />}
                    placeholder={"Adress"}
                />
            </View>
            <BtnComp btnStyle={styles.btn}
                btnText={'Save'} onPress={() => navigation.navigate('AdminTabs')} />

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
export default EditProfileC;
