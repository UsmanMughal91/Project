//import liraries
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RegisterOption from '../screens/RegisterOption';
import ViewScreen from '../screens/ViewScreen';
import SalonAppStack from './SalonAppStack';
import BeautyExpertStack from './BeautyExpertStack';
import GuestStack from './GuestStack';
import SalonAppDrawer from './SalonAppDrawer';
import ExpertDrawer from './ExpertDrawer';
const Stack = createNativeStackNavigator();
// create a component
const MainStack = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="ViewScreen" component={ViewScreen} />
                <Stack.Screen name="RegisterOption" component={RegisterOption} />
                <Stack.Screen name="SalonAppStack" component={SalonAppStack} />
                <Stack.Screen name="BeautyExpertStack" component={BeautyExpertStack} />
                <Stack.Screen name="GuestStack" component={GuestStack} />
                <Stack.Screen name="SalonAppDrawer" component={SalonAppDrawer} />
                <Stack.Screen name="ExpertDrawer" component={ExpertDrawer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default MainStack;
