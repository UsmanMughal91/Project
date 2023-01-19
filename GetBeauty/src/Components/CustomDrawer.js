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

import BaseUrl from '../baseUrl/BaseUrl';
import { getToken } from '../../services/AsyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDrawer = (props) => {

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

            await fetch(`${BaseUrl.SalonBaseurl}/loadprofile`, option)
                .then((res) => res.json())
                .then((d) => { setdata(d.data) })
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
            <DrawerContentScrollView  {...props} contentContainerStyle={{ backgroundColor: "#dfd4f1", flex: 1, height: 230 }}>
                <View style={{ height: 230, justifyContent: 'center',alignItems:"center" }}>
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
                    onPress={() => navigation.navigate("EditUserProfileC")}
                    labelStyle={{ fontSize: Font.list, marginLeft: -20 }}
                    icon={() => <FontAwesome name='edit' size={25} />}
                />
                <DrawerItem
                    inactiveBackgroundColor='#dfd4f1'
                    pressColor={Colors.purple}
                    label="Change Password"
                    onPress={() => navigation.navigate("ChangePass")}
                    labelStyle={{ fontSize: Font.list, marginLeft: -20 }}
                    icon={() => <MaterialCommunityIcons name='lock-outline' size={25} />}
                />

                <DrawerItem
                    inactiveBackgroundColor='#dfd4f1'
                    pressColor={Colors.purple}
                    label="Log out"
                     onPress={() => { AsyncStorage.removeItem("token"); navigation.navigate("ViewScreen") }}
                    labelStyle={{ fontSize: Font.list, marginLeft: -20 }}
                    icon={() => <MaterialCommunityIcons name='logout' size={25} />}
                />
            </View>
            <View style={{ backgroundColor: "#dfd4f1",height:50,alignItems:"center",justifyContent:'center' }}>
                <Text style={{fontSize:Font.Heading,fontWeight:"bold"}}>GetBeauty</Text>
            </View>
        </View>

    );
}

export default CustomDrawer