// //import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet,Image ,ScrollView,TouchableOpacity} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import BtnComp from '../../Components/BtnComp';
// import Heading from '../../Components/Heading';
// // create a component
// const SeeProfile =({navigation})=>  {
//         return (
//             <ScrollView style={styles.container}>
//                 <View style={{ width: 40 }}>
//                     <Ionicons name='md-chevron-back-circle-outline' size={40} color={'black'} onPress={() => navigation.goBack()} />
//                 </View>
//                 <View style={{ alignItems: 'center',marginTop:30}}>
//                     <Image source={require('../../assests/images/a.jpg')}
//                         style={{
//                             width: 100, height: 100, borderRadius: 50, marginTop: 10
//                         }} />
//                     <Heading text={"Ayesha Naseem"}/>
//                     <Text style={{ fontSize: 20, marginBottom:10}}>Model Town</Text>
//                 </View>
//                 <Text style={{fontSize:20,fontWeight:'500',color:'black',marginTop:30}}>About</Text>
//                 <Text style={{fontSize:16,marginTop:10}}>Hi this is me Ayesha. Welcome to my parlour, to achieve the advanced services about beauty, visit our parlour and see our services using this application.</Text>
//                 <Text style={{ fontSize: 20, fontWeight: '500', color: 'black', marginTop: 30 }}>Opening Hours</Text>
//                 <View style={{flexDirection:"row",justifyContent:'space-between'}}>
//                     <Text style={{ fontSize: 16, marginTop: 10 }}>Mon - Thu</Text>
//                     <Text style={{ fontSize: 16, marginTop: 10 }}>8:00 AM - 12:00 PM</Text>
//                 </View>
//                 <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
//                     <Text style={{ fontSize: 16, marginTop: 10 }}>Fri - Sat</Text>
//                     <Text style={{ fontSize: 16, marginTop: 10 }}>10:00 AM - 11:00 PM</Text>
//                 </View>
//                 <Text style={{ fontSize: 20, fontWeight: '500', color: 'black', marginTop: 30 }}>Address</Text>
//                 <Text style={{ fontSize: 16, marginTop: 10 }}>Street No 24, near to Shine palace, Model town, Gujranwala</Text>
//                 <Text style={{ fontSize: 20, fontWeight: '500', color: 'black', marginTop: 30 }}>Contact</Text>
//                 <Text style={{ fontSize: 16, marginTop: 10 }}>03028320482</Text>
//                 <Text style={{ fontSize: 16, marginTop: 10 }}>Ayesha00987@gmail.com</Text>
               
//             </ScrollView>
//         );
    
// }

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         margin:20
//     },
// });

// //make this component available to the app
// export default SeeProfile;

//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image,ImageBackground,ScrollView} from 'react-native';
import BtnComp from '../../Components/BtnComp';
import Services from './Services';
import Icons from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Heading from '../../Components/Heading';
import { getToken } from '../../../services/AsyncStorage';

// create a component
const SeeProfile = ({navigation,route}) => {
    const profile = route.params.item
    const id = profile._id
    return (
        <ScrollView>
        {profile && 
        <View style={styles.container}>
            
           
            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Image source={{uri:profile.pic}}
                    style={{
                        width: 100, height: 100, borderRadius: 50, marginTop: 10
                    }} />
                <Heading text={profile.name}/>
                <Text style={{ fontSize: 20, marginBottom: 10 }}>{profile.parlourName}</Text>
                <BtnComp btnText={"Services"} onPress={()=>navigation.navigate("Services",{id})} />
               
            </View>
            <Text style={{ fontSize: 20, fontWeight: '500', color: 'black', marginTop: 30 }}>About</Text>
            <Text style={{ fontSize: 16, marginTop: 10 }}>{profile.about ? profile.about : "No more details"}</Text>
            <Text style={{ fontSize: 20, fontWeight: '500', color: 'black', marginTop: 30 }}>Opening Hours</Text>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 16, marginTop: 10 }}>Mon - Thu</Text>
                <Text style={{ fontSize: 16, marginTop: 10 }}>8:00 AM - 12:00 PM</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 16, marginTop: 10 }}>Fri - Sat</Text>
                <Text style={{ fontSize: 16, marginTop: 10 }}>10:00 AM - 11:00 PM</Text>
            </View>
            <Text style={{ fontSize: 20, fontWeight: '500', color: 'black', marginTop: 30 }}>Address</Text>
            <Text style={{ fontSize: 16, marginTop: 10 }}>{profile.address}</Text>
            <Text style={{ fontSize: 20, fontWeight: '500', color: 'black', marginTop: 30 }}>Contact</Text>
            <Text style={{ fontSize: 16, marginTop: 10 }}>{profile.phone}</Text>
            <Text style={{ fontSize: 16, marginTop: 10 }}>{profile.email}</Text>

        </View>}
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:20
    },
    btnStyle:{
        marginTop:30,
        backgroundColor:'#fff'    
    },
    btnT:{
        textAlign:"left",
        marginLeft:10,   
        color:'black' ,
        fontWeight:'400' 
    },
    btn:{
        marginTop:30
    },
    edit:{     
    }
});

//make this component available to the app
export default SeeProfile;
