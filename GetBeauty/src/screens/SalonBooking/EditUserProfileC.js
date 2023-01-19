//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground, Alert, ActivityIndicator } from 'react-native';
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
import { getToken } from '../../../services/AsyncStorage';
import Header from '../../Components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Colors from '../../Styles/Colors';
import Loader from '../../Components/Loader';
import Font from '../../Styles/Font';
import BaseUrl from '../../baseUrl/BaseUrl';
import CustomModal from '../../Components/CustomModal';

// create a component
const EditUserProfileC = ({ navigation }) => {
    const [name, setname] = useState("")
    const [phone, setphone] = useState("")
    const [address, setaddress] = useState("")
    const [parlourName, setparlourName] = useState("")
    const [pic, setpic] = useState(null)
    const [about, setabout] = useState("")
    const [localToken, setlocalToken] = useState("")
    const [loading, setloading] = useState(true);
    const [modalvisible, setmodalvisible] = useState(false)

    const pickImage = () => {
        launchImageLibrary({ quality: 0.5 }, (fileobj) => {
            const uploadTask =  storage().ref().child(`/userprofile/${Math.floor((Math.random() * 1000000000) + 1)}`).putFile(fileobj.assets[0].uri)
            uploadTask.on('state_changed',
                (snapshot) => {
                   
                    const progress =  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    if (progress === 100) {
                      Toast.show({
                          type: 'Done',
                          position: 'top',
                          topOffset: 0,
                          text1: "Image upload Successfully"
                      })
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

    const [data, setdata] = useState()
    const clearTextInput = () => {
        setname('')
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
                        token: `${localToken}`,
                        name: `${name}`,
                        phone: `${phone}`,
                        address: `${address}`,
                        pic: `${pic}`,
                        about: `${about}`,
                    }
                )
            }

            await fetch(`${BaseUrl.SalonBaseurl}/updateProfile`, option)

                .then(res => res.json())
                .then((d) => {
                    if (d.status === "success") {
                        setmodalvisible(true)
                        clearTextInput()

                    } else {
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

    }
    const loadprofile = async (token) => {
        const option = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    token: token
                }
            )
        }
        try {

            await fetch(`${BaseUrl.SalonBaseurl}/loadprofile`, option)
                .then((res) => res.json())
                .then((d) => {
                    setname(d.data.name)
                    setparlourName(d.data.parlourName)
                    setaddress(d.data.address)
                    setpic(d.data.pic)
                    setabout(d.data.about)
                    setphone(d.data.phone)
                    setdata(d.data); setloading(false)
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
            loadprofile(token);
        })();
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <Header onPress={() => navigation.goBack()} />
            <Toast config={toastConfig} />
            <ScrollView>
                {loading && <Loader viewStyle={{ marginTop: 330 }} />}
                {data && <View style={{ margin: 20 }}>

                    <Heading text={"Edit Profile"} />

                    <View style={{ marginTop: 10 }}>
                        <InputText Icon={<Ionicons name="person" size={25} />}
                            placeholder={"Name"}
                            value={name}
                            onChangeText={(val) => setname(val)}
                            Icons={<FontAwesome5 name="pencil-alt" size={20} />}
                        />


                        <InputText Icon={<MaterialCommunityIcons name="phone" size={25} />}
                            placeholder={"Phone"}
                            onChangeText={(val) => setphone(val)}
                            keyboardType="phone-pad"
                            value={phone}
                            Icons={<FontAwesome5 name="pencil-alt" size={20} />}
                        />


                        <InputText Icon={<MaterialCommunityIcons name="home" size={25} />}
                            placeholder={"Address"}
                            onChangeText={(val) => setaddress(val)}
                            value={address}
                            Icons={<FontAwesome5 name="pencil-alt" size={20} />}
                        />
                        <InputText Icon={<MaterialCommunityIcons name="note" size={25} />}
                            placeholder={"about"}
                            onChangeText={(val) => setabout(val)}
                            value={about}
                            Icons={<FontAwesome5 name="pencil-alt" size={20} />}
                            multiline={true}
                            inputstyle={{ alignItems: 'flex-start' }}
                            icon={{ paddingTop: 12 }}
                            icons={{ paddingTop: 12 }}
                        />
                    </View>
                    <View style={{ alignItems: "center", marginTop: 30 }}>
                        <TouchableOpacity onPress={pickImage}>
                            <Image source={{ uri: pic }}
                                resizeMode="cover" style={{ height: 140, width: 140, borderRadius: 100, backgroundColor: Colors.white }} />
                        </TouchableOpacity>
                        <Text style={{ paddingTop: 10, fontSize: Font.h1 }}>Add Pic</Text>
                    </View>
                    <BtnComp btnStyle={styles.btn}
                        btnText={'Update Profile'}
                        onPress={handleform}
                    />
                </View>
                }
                <CustomModal modalvisible={modalvisible} setmodalvisible={setmodalvisible} onPress={() => {
                    setmodalvisible(false);
                    navigation.goBack()
                }} text={"Profile update Successfully"} />
            </ScrollView>
        </View>
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
export default EditUserProfileC;
