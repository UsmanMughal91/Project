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
    const pickImage = () => {
        launchImageLibrary({ quality: 0.5 }, (fileobj) => {
            const uploadTask = storage().ref().child(`/userprofile/${Date.now()}`).putFile(fileobj.assets[0].uri)
            uploadTask.on('state_changed',
                (snapshot) => {

                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    if (progress === 100) {
                        Toast.show({
                            type: 'done',
                            position: 'top',
                            topOffset: 0,
                            text1: "Image uploaded successfully"
                        })
                    }

                },
                (error) => {
                    alert("error uploading image")
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setpic(downloadURL)
                    });
                }
            );

        })
    }
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
            await fetch('http://192.168.103.8:8000/api/user/updateProfile', option)
                .then(res => res.json())
                .then((d) => {
                    if (d.status === "success") {
                        clearTextInput()
                        navigation.navigate("UserProfile")
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
            await fetch('http://192.168.103.8:8000/api/user/loadprofile', option)
                .then((res) => res.json())
                .then((d) => {
                    setname(d.data.name)
                    setparlourName(d.data.parlourName)
                    setaddress(d.data.address)
                    setpic(d.data.pic)
                    setabout(d.data.about)
                    setphone(d.data.phone)
                    setdata(d.data);setloading(false)
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
        <ScrollView>
            <Header onPress={() => navigation.goBack()} />
            <Toast config={toastConfig} />
           {loading && <Loader viewStyle={{marginTop:330}}/>}
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
                            resizeMode="cover" style={{ height: 140, width: 140, borderRadius: 50, backgroundColor:Colors.white }} />
                    </TouchableOpacity>
                    <Text style={{ paddingTop: 10, fontSize:Font.h1 }}>Add Pic</Text>
                </View>
                <BtnComp btnStyle={styles.btn}
                    btnText={'Update Profile'}
                    onPress={handleform}
                />
            </View>
            } 
        </ScrollView>
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
