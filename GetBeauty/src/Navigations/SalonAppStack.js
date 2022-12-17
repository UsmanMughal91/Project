//import liraries
import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/SalonBooking/Login';
import SignUp from '../screens/SalonBooking/SignUp';
import Services from '../screens/SalonBooking/Services';
import Location from '../screens/Location';
import splashScreen from '../screens/splashScreen';
import EditUserProfileC from '../screens/SalonBooking/EditUserProfileC';
import Booking from '../screens/SalonBooking/Booking';
import Payment from '../screens/SalonBooking/Payment';
import UserProfile from '../screens/SalonBooking/UserProfile';
import seeProfile from '../screens/SalonBooking/seeProfile';
import Appointment from '../screens/SalonBooking/Appointment';
import ChangePass from '../screens/SalonBooking/ChangePass';
import SalonAppTabs from './SalonAppTabs';
import forgotPass from '../screens/SalonBooking/forgotPass';
import serviceDetail from '../screens/SalonBooking/serviceDetail';

const Stack = createNativeStackNavigator();

// create a component
const SalonAppStack = () => {

    const [showsplashScreen, setshowsplashScreen] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setshowsplashScreen(false);
        }, 3000);
    }, [])
    return (

        <Stack.Navigator initialRouteName='spashScreen' screenOptions={{ headerShown: false }}>
            {showsplashScreen ? (<Stack.Screen name="splashScreen" component={splashScreen} />)
                : null}
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SalonAppTabs" component={SalonAppTabs} />
            <Stack.Screen name="Booking" component={Booking} />
            <Stack.Screen name="Services" component={Services} />
            <Stack.Screen name="Location" component={Location} />
            <Stack.Screen name="EditUserProfileC" component={EditUserProfileC} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="UserProfile" component={UserProfile} />
            <Stack.Screen name="seeProfile" component={seeProfile} />
            <Stack.Screen name="Appointment" component={Appointment} />
            <Stack.Screen name="ChangePass" component={ChangePass} />
            <Stack.Screen name="forgotPass" component={forgotPass} />
            <Stack.Screen name="serviceDetail" component={serviceDetail} />
        </Stack.Navigator>

    );
};

// define your styles

//make this component available to the app
export default SalonAppStack;
