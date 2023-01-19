import React, { useEffect, useState } from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import Colors from '../Styles/Colors';
import Font from '../Styles/Font';
import { View, Text, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { getToken } from '../../services/AsyncStorage';
import BaseUrl from '../baseUrl/BaseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ExpertCustomDrawer = (props) => {

    const [data, setdata] = useState();

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
           
            await fetch(`${BaseUrl.ExpertBaseurl}/loadprofile`,option)
                .then((res) => res.json())
                .then((d) => { setdata(d.data); console.log(d.data) })
                .catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        (async () => {
            const token = await getToken() // getting token from storage
            loadprofile(token);
        })();
    }, [])
    const { navigation } = props
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView  {...props} contentContainerStyle={{ backgroundColor: "#dfd4f1" ,flex:1}}>
                <View style={{ backgroundColor: "", height: 230, justifyContent: 'center' }}>
                    <View style={{ alignItems: "center" }}>
                        {data && <>
                            <Image source={{ uri: data.pic }} style={{ borderRadius: 100, height: 100, width: 100 }} />
                            <Text style={{ fontSize: Font.font, color: "grey", fontWeight: 'bold' }}>Welcome!</Text>
                            <Text style={{ fontSize: Font.h1, color: Colors.purple, fontWeight: 'bold' }}>{data.name}</Text>
                        </>}
                    </View>
                </View>
            </DrawerContentScrollView>

            <View style={{ flex: 2 ,marginTop:10}}>

                <DrawerItem
                    inactiveBackgroundColor='#dfd4f1'
                    pressColor={Colors.purple}
                    label="Edit Profile"
                    onPress={() => navigation.navigate("EditProfile")}
                    labelStyle={{ fontSize: Font.list, marginLeft: -20 }}
                    icon={() => <FontAwesome name='edit' size={25} />}
                />
                <DrawerItem
                    pressColor={Colors.purple}
                    inactiveBackgroundColor='#dfd4f1'
                    label="My Services"
                    onPress={() => navigation.navigate("ProviderServices")}
                    labelStyle={{ fontSize: Font.list, marginLeft: -20 }}
                    icon={() => <FontAwesome name='scissors' size={25} />}
                />
                <DrawerItem
                    pressColor={Colors.purple}
                    inactiveBackgroundColor='#dfd4f1'
                    label="Add Services"
                    onPress={() => navigation.navigate("AddServices")}
                    labelStyle={{ fontSize: Font.list, marginLeft: -20 }}
                    icon={() => <FontAwesome name='edit' size={25} />}
                />

                <DrawerItem
                    pressColor={Colors.purple}
                    inactiveBackgroundColor='#dfd4f1'
                    label="Change Password"
                    onPress={() => navigation.navigate("ChangePass")}
                    labelStyle={{ fontSize: Font.list, marginLeft: -20 }}
                    icon={() => <MaterialCommunityIcons name='lock-outline' size={25} />}
                />
                <DrawerItem
                    pressColor={Colors.purple}
                    inactiveBackgroundColor='#dfd4f1'
                    activeBackgroundColor='#dfd4f1'
                    label="Log Out"
                    onPress={() => {AsyncStorage.removeItem("token"); navigation.navigate("ViewScreen")} }
                    labelStyle={{ fontSize: Font.list, marginLeft: -20 }}
                    icon={() => <MaterialCommunityIcons name='logout' size={25} />}
                />


            </View>
            <View style={{ backgroundColor: "#dfd4f1", alignItems: "center",flex:0.5}}>
                <Text style={{ fontSize: Font.Heading, fontWeight: "bold" }}>GetBeauty</Text>
            </View>
        </View>
 
    );
}

export default ExpertCustomDrawer