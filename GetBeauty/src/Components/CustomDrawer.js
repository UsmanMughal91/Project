import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import Colors from '../Styles/Colors';
import Font from '../Styles/Font';
import { View ,Text,Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { color } from 'react-native-reanimated';

const CustomDrawer = (props) => {
    const { navigation } = props
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView  {...props} contentContainerStyle={{ backgroundColor:"#FFEDFC"}}>
            <View style={{height:230,justifyContent:'center'}}>
                <View style={{alignItems:"center"}}>
                    <Image source={require("../assests/images/usman.jpg")} style={{ borderRadius: 100, height: 100, width: 100 }} />
                    <Text style={{ fontSize: Font.font, color: "grey", fontWeight: 'bold' }}>Welcome!</Text>
                    <Text style={{ fontSize: Font.h1, color: Colors.purple,fontWeight:'bold'}}>Usman Idress</Text>    
                </View>
        </View>       
        </DrawerContentScrollView>
            <View style={{ flex: 2 }}>
                <DrawerItem
                    label="Edit Profile"
                    onPress={() => navigation.navigate("EditUserProfileC")}
                    labelStyle={{ fontSize: Font.list, marginLeft: -20 }}
                    icon={() => <FontAwesome name='edit' size={25} />}
                />
                <DrawerItem
                    label="Change Password"
                    onPress={() => navigation.navigate("ChangePass")}
                    labelStyle={{ fontSize: Font.list, marginLeft: -20 }}
                    icon={() => <MaterialCommunityIcons name='lock-outline' size={25} />}
                />

                <DrawerItem
                    label="Log out"
                    onPress={() => navigation.navigate("logout")}
                    labelStyle={{ fontSize: Font.list, marginLeft: -20 }}
                    icon={() => <MaterialCommunityIcons name='logout' size={25} />}
                />
            </View>  
        </View>


    );
}

export default CustomDrawer