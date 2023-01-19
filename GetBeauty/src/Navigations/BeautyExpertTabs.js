//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import DashBoard from '../screens/BeautyExpert/DashBoard';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Request from '../screens/BeautyExpert/Request';
import Appointment from '../screens/BeautyExpert/Appointment';
import SettingP from '../screens/BeautyExpert/SettingP';
import Profile from "../screens/BeautyExpert/Profile"
import BeautyExpertStack from './BeautyExpertStack';
import ExpertCustomDrawer from "../Components/ExpertCustomDrawer";
import Colors from '../Styles/Colors';
const BottomTab = createBottomTabNavigator();

// create a component
const BeautyExpertTabs = () => {
    return (
        <BottomTab.Navigator    screenOptions={{
                headerShown: false,
                tabBarLabelStyle: { fontSize: 12, color: 'white', paddingBottom: 3 },
                // tabBarInactiveBackgroundColor: "#9932cc",
                tabBarBackgroundRadius:20,
                tabBarActiveBackgroundColor: "#7a28a3",
                tabBarIconStyle: { marginTop: 4 },
                tabBarStyle: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    height: 50,
                    backgroundColor:Colors.purple      
                }
            }}
       
       >
            <BottomTab.Screen name="DashBoard" component={DashBoard}
              
                options={{
                    
                    tabBarLabel: "DashBoard",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="dashboard" size={25} style={{ marginTop: 1 }} color={"white"} />
                    ),
                }}
                 />
            <BottomTab.Screen name="Request" component={Request}
                options={{
                    tabBarLabel: "Request",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="chatbox-ellipses" size={25} style={{ marginTop: 1 }} color={"white"} />
                    ),
                }}
                />
            <BottomTab.Screen name="Appointment" component={Appointment}
                options={{
                    tabBarLabel: "History",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="event-note" size={25} style={{ marginTop: 1 }} color={"white"} />
                    ),
                }}
                 />

            <BottomTab.Screen name="Profile" component={Profile}
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={22} style={{ marginTop: 1 }} color={"white"} />
                    ),
                }}
               />




        </BottomTab.Navigator>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default BeautyExpertTabs;
