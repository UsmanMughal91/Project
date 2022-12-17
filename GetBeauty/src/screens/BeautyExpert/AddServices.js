//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native';
import BtnComp from '../../Components/BtnComp';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Heading from '../../Components/Heading';
import InputText from '../../Components/InputText';
import ImagePicker from 'react-native-image-crop-picker';
// create a component
const AddServices = ({ navigation }) => {
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
            <Heading text={"Add Services"} />

            <InputText Icon={<MaterialIcons name="design-services" size={25} />}
                placeholder={'Service Name'} />

            <InputText Icon={<MaterialCommunityIcons name="currency-rupee" size={25} />}
                placeholder={'Service Price'} />
           
            <TouchableOpacity onPress={() => openPic()} style={{ backgroundColor: 'white', marginTop: 20 }}>
                <ImageBackground source={require('../../assests/images/a.jpg')}>

                    <Image source={{ uri: image }}
                        resizeMode="cover" style={{ height: 200, width: "100%" }} />
                </ImageBackground>
                <Text style={{ fontSize: 18, color: "black", marginTop: 20 }}>Upload Image</Text>
            </TouchableOpacity>


            <BtnComp btnStyle={styles.btn}
                btnText={"Add Services"} />
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
    },
    LoginDesign: {
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 12,
        paddingLeft: 10,
        marginTop: 20
    },
});


//make this component available to the app
export default AddServices;
