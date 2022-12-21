//import liraries
import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BeautyExpertTabs from './BeautyExpertTabs';
import AddServices from '../screens/BeautyExpert/AddServices';
import ProviderServices from '../screens/BeautyExpert/ProviderServices';
import EditProfile from '../screens/BeautyExpert/EditProfile';
import SettingP from '../screens/BeautyExpert/SettingP';
import Profile from '../screens/BeautyExpert/Profile';
import Appointment from '../screens/BeautyExpert/Appointment';
import Request from '../screens/BeautyExpert/Request';
import SplashScreen from '../screens/SplashScreen';
import SignUp from '../screens/BeautyExpert/SignUp';
import ChangePass from '../screens/BeautyExpert/ChangePass';
import ServiceDetail from '../screens/BeautyExpert/ServiceDetail'
import LoginExpert from '../screens/BeautyExpert/LoginExpert';
const Stack = createNativeStackNavigator();
// create a component
const BeautyExpertStack = () => {

    const [showsplashScreen, setshowsplashScreen] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setshowsplashScreen(false);
        }, 3000);
    }, [])
    return (

        <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false }}>
            {showsplashScreen ? (<Stack.Screen name="SplashScreen" component={SplashScreen} />)
                : null}
            <Stack.Screen name="LoginExpert" component={LoginExpert} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="BeautyExpertTabs" component={BeautyExpertTabs} />
            <Stack.Screen name="ProviderServices" component={ProviderServices} />
            <Stack.Screen name="AddServices" component={AddServices} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="SettingP" component={SettingP} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Appointment" component={Appointment} />
            <Stack.Screen name="Request" component={Request} />
            <Stack.Screen name="ChangePass" component={ChangePass} />
            <Stack.Screen name="ServiceDetail" component={ServiceDetail} />
        </Stack.Navigator>
    )
};

//make this component available to the app
export default BeautyExpertStack;
