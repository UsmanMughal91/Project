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

const BottomTab = createBottomTabNavigator();

// create a component
const SalonAppTabs = () => {
    return (
     
        <BottomTab.Navigator initialRouteName='ParlorList' screenOptions={{headerShown:false}} >
                <BottomTab.Screen name='ParlorList' component={ParlorList}
                    options={{   
                    tabBarLabel: ({focused})=>{
                        return<Text style={{color:focused? 'orange': 'grey',} }>Home</Text>
                    },
                         tabBarIcon:({focused})=>{
                            return <MaterialIcons name="home" size={25} color={focused ? 'orange' : 'grey'}/>
                         }
                          }} />

                <BottomTab.Screen name='Search' component={Search}
                options={{
                    tabBarLabel: ({ focused }) => {
                        return <Text style={{ color: focused ? 'orange' : 'grey', }}>Search</Text>
                    },
                    tabBarIcon: ({ focused }) => {
                        return <MaterialIcons name="search" size={25} color={focused ? 'orange' : 'grey'} />
                    }
                }}/>
            <BottomTab.Screen name='Appointment' component={Appointment}
                options={{
                    tabBarLabel: ({ focused }) => {
                        return <Text style={{ color: focused ? 'orange' : 'grey', }}>Appointment</Text>
                    },
                    tabBarIcon: ({ focused }) => {
                        return <MaterialIcons name="event-note" size={25} color={focused ? 'orange' : 'grey'} />
                    }
                }} />
                   

                <BottomTab.Screen name='Setting' component={Setting}
                options={{
                    tabBarLabel: ({ focused }) => {
                        return <Text style={{ color: focused ? 'orange' : 'grey', }}>Settings</Text>
                    },
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons name="settings" size={25} color={focused ? 'orange' : 'grey'} />
                    }
                }}/>
                   
    
            </BottomTab.Navigator>
      
    );
};

// define your styles

//make this component available to the app
export default SalonAppTabs;
