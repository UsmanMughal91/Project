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
const BottomTab = createBottomTabNavigator();

// create a component
const BeautyExpertTabs = () => {
    return (
        <BottomTab.Navigator screenOptions={{ headerShown: false }}>
            <BottomTab.Screen name="DashBoard" component={DashBoard}
                options={{
                    tabBarLabel: ({ focused }) => {
                        return <Text style={{ color: focused ? 'orange' : 'grey' }}>DashBoard</Text>
                    },
                    tabBarIcon: ({ focused }) => {
                        return <MaterialIcons name={'dashboard'} size={25} color={focused ? 'orange' : 'grey'} />
                    }
                }} />
            <BottomTab.Screen name="Request" component={Request}
                options={{
                    tabBarLabel: ({ focused }) => {
                        return <Text style={{ color: focused ? 'orange' : 'grey' }}>Request</Text>
                    },
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons name={'chatbox-ellipses-outline'} size={25} color={focused ? 'orange' : 'grey'} />
                    }
                }} />
            <BottomTab.Screen name="Appointment" component={Appointment}
                options={{
                    tabBarLabel: ({ focused }) => {
                        return <Text style={{ color: focused ? 'orange' : 'grey' }}>History</Text>
                    },
                    tabBarIcon: ({ focused }) => {
                        return <MaterialIcons name={'event-note'} size={25} color={focused ? 'orange' : 'grey'} />
                    }
                }} />

            <BottomTab.Screen name="SettingP" component={SettingP}
                options={{
                    tabBarLabel: ({ focused }) => {
                        return <Text style={{ color: focused ? 'orange' : 'grey' }}>Settings</Text>
                    },
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons name={'settings'} size={25} color={focused ? 'orange' : 'grey'} />
                    }
                }} />




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
