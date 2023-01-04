//import liraries
import React from 'react';
import {Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../screens/SalonBooking/Search';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import ParlorList from '../screens/SalonBooking/ParlorList';
import Setting from '../screens/SalonBooking/Setting'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Appointment from '../screens/SalonBooking/Appointment';
import UserProfile from "../screens/SalonBooking/UserProfile"

const BottomTab = createBottomTabNavigator();

// create a component
const SalonAppTabs = () => {
    return (
     
        <BottomTab.Navigator initialRouteName='ParlorList' screenOptions={{
            tabBarInactiveBackgroundColor: "#9932cc",
            tabBarActiveBackgroundColor: "#7a28a3",
            tabBarInactiveTintColor: "white",
            tabBarActiveTintColor: "white",
            tabBarIconStyle: { marginTop: 4 },
            tabBarLabelStyle: { fontSize: 12, color: 'white', paddingBottom: 3 },
            tabBarStyle: { height: 50, position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 4, borderTopRightRadius: 12,},
            style: { borderColor: '#011f3b'},
            headerShown: false,
            unmountOnBlur: true,
        }}>
                <BottomTab.Screen name='ParlorList' component={ParlorList}
                    options={{   
                    tabBarLabel: "Home",
                    tabBarIcon:({color,size})=>(
                        <MaterialIcons name="home" size={25} style={{marginTop:1}} color={"white"}/>
                    ),
                          }} />

                <BottomTab.Screen name='Search' component={Search}
                options={{
                    tabBarLabel: "Search",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="search" size={25} color={"white"} />
                    ),
                }}
                />
            <BottomTab.Screen name='Appointment' component={Appointment}
                options={{
                    tabBarLabel: "Appointment",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="event-note" size={25} color={"white"} />
                    ),
                }}
               />
                   

                <BottomTab.Screen name='UserProfile' component={UserProfile}
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="person" size={25} color={"white"} />
                    ),
                }}
               />
                   
    
            </BottomTab.Navigator>
      
    );
};

// define your styles

//make this component available to the app
export default SalonAppTabs;
