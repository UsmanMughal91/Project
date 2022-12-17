//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Heading from '../../Components/Heading';

// create a component
const SettingP = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ width: 40 }}>
                <Ionicons name='md-chevron-back-circle-outline' size={40} color={'black'} onPress={() => navigation.goBack()} />
            </View>
           <Heading text={"Settings"}/>
            <TouchableOpacity style={{ marginBottom: 20,marginTop:20 }} onPress={() => navigation.navigate('Profile')}>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "white", borderRadius: 12, height: 50 }}>
                    <View style={{ marginLeft: 10 }}>
                        <FontAwesome name='user' size={25} />
                    </View>
                    <View >
                        <Text style={{ fontSize: 20, marginLeft: 20 }}>Profile</Text>
                    </View>
                </View>
            </TouchableOpacity>

           
            <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => navigation.navigate('EditProfile')}>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "white", borderRadius: 12, height: 50 }}>
                    <View style={{ marginLeft: 10 }}>
                        <FontAwesome5 name='user-edit' size={25} />
                    </View>
                    <View >
                        <Text style={{ fontSize: 20, marginLeft: 20 }}>Edit Profile</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => navigation.navigate('ProviderServices')}>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "white", borderRadius: 12, height: 50 }}>
                    <View style={{ marginLeft: 10 }}>
                        <Entypo name='scissors' size={25} />
                    </View>
                    <View >
                        <Text style={{ fontSize: 20, marginLeft: 20 }}>My services</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => navigation.navigate('AddServices')}>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "white", borderRadius: 12, height: 50 }}>
                    <View style={{ marginLeft: 10 }}>
                        <FontAwesome5 name='edit' size={25} />
                    </View>
                    <View >
                        <Text style={{ fontSize: 20, marginLeft: 20 }}>Add Service</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => navigation.navigate('ChangePass')}>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "white", borderRadius: 12, height: 50 }}>
                    <View style={{ marginLeft: 10 }}>
                        <FontAwesome5 name='lock' size={25} />
                    </View>
                    <View >
                        <Text style={{ fontSize: 20, marginLeft: 20 }}>Change Password</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "white", borderRadius: 12, height: 50 }}>
                    <View style={{ marginLeft: 10 }}>
                        <MaterialCommunityIcons name='logout' size={25} />
                    </View>
                    <View >
                        <Text style={{ fontSize: 20, marginLeft: 20 }}>Log out</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
});

//make this component available to the app
export default SettingP;
