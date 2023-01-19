//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import BtnComp from '../../Components/BtnComp';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Heading from '../../Components/Heading';
import InputText from '../../Components/InputText';
import ImagePicker from 'react-native-image-crop-picker';
import { getToken } from '../../../services/AsyncStorage';
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { toastConfig } from '../../Styles/styles';
import Toast from 'react-native-toast-message';
import Header from '../../Components/Header';
import Loader from '../../Components/Loader';
import CustomModal from '../../Components/CustomModal'
import BaseUrl from '../../baseUrl/BaseUrl';

// create a component
const AddServices = ({ navigation }) => {
    const [pic, setpic] = React.useState()
    const [data, setdata] = useState("")
    const [serviceName, setServiceName] = useState("")
    const [servicePrice, setServicePrice] = useState("")
    const [serviceDetails, setServiceDetails] = useState("")
    const [image, setimage] = useState()
    const [localToken, setlocalToken] = useState("")
    const[loading,setloading] = useState('')
    const [modalvisible, setmodalvisible] = useState(false)
    const pickImage = () => {
        launchImageLibrary({ quality: 0.5 }, (fileobj) => {
            const uploadTask = storage().ref().child(`/service/${Math.floor((Math.random() * 1000000000) + 1)}`).putFile(fileobj.assets[0].uri)
            uploadTask.on('state_changed',
                (snapshot) => {

                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    if (progress === 100) {
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
        })
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
                        token: localToken,
                        serviceName: serviceName,
                        servicePrice: servicePrice,
                        serviceDetails: serviceDetails,
                        pic: pic,
                    }
                )
            }
          
            await fetch(`${BaseUrl.ExpertBaseurl}/addservice`, option)
                .then(res => res.json())
                .then((d) => { 
                    if (d.status === "success") {
                        setmodalvisible(true)
                       
                        // navigation.navigate("ProviderServices")
                    } else {
                        Toast.show({
                            type: 'warning',
                            position: 'top',
                            topOffset: 0,
                            text1: d.message
                        })
                    };setloading(false)
                })
                .catch(err => console.log(err))
            

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        (async () => {
            const token = await getToken() // getting token from storage
            setlocalToken(token);
            console.log(token)
        })();
    }, [])
    return (
        <View> 
            <Header onPress={()=>navigation.goBack()}/>
            <ScrollView>
        <View style={styles.container}>
        
          
            <Heading text={"Add Services"} />

            <InputText Icon={<MaterialIcons name="design-services" size={25} />}
                placeholder={'Service Name'}
                value={serviceName}
                onChangeText={(val) => setServiceName(val)} />
                
            <InputText Icon={<MaterialCommunityIcons name="currency-rupee" size={25} />}
                placeholder={'Service Price'}
                value={servicePrice}
                onChangeText={(val) => setServicePrice(val)} />

                <InputText Icon={<MaterialCommunityIcons name="note" size={25} />}
                placeholder={'Description'}
                value={serviceDetails}
                onChangeText={(val) => setServiceDetails(val)}
                multiline={true} />

            <TouchableOpacity onPress={pickImage} style={{ backgroundColor: 'white', marginTop: 20,borderRadius:12 ,height:200}}>
                <Image source={pic ? { uri: pic } :
                    require('../../assests/images/upload1.png')}
                    resizeMode="center" style={{ height: 200, width: "100%" }} />

            </TouchableOpacity>


            <BtnComp btnStyle={styles.btn}
                btnText={"Add Services"}
                onPress={handleform} />
        </View>
            <CustomModal modalvisible={modalvisible} setmodalvisible={setmodalvisible} onPress={() => {
                setmodalvisible(false);
                    navigation.navigate("ProviderServices")
            }} text={"Your Service Added Successfully"} />
        </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
     
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
