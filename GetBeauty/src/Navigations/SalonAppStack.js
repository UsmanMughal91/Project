//import liraries
import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/SalonBooking/Login';
import SignUp from '../screens/SalonBooking/SignUp';
import Services from '../screens/SalonBooking/Services';
import Location from '../screens/Location';
import SplashScreen from '../screens/SplashScreen';
import EditUserProfileC from '../screens/SalonBooking/EditUserProfileC';
import Booking from '../screens/SalonBooking/Booking';
import Payment from '../screens/SalonBooking/Payment';
import UserProfile from '../screens/SalonBooking/UserProfile';
import SeeProfile from '../screens/SalonBooking/SeeProfile';
import Appointment from '../screens/SalonBooking/Appointment';
import ChangePass from '../screens/SalonBooking/ChangePass';
import SalonAppTabs from './SalonAppTabs';
import ForgotPass from '../screens/SalonBooking/ForgotPass';
import ServiceDetail from '../screens/SalonBooking/ServiceDetail';
import SalonAppDrawer from "../Navigations/SalonAppDrawer";
import CustomDrawer from '../Components/CustomDrawer';
import ResetPass from '../screens/SalonBooking/ResetPass';


const Stack = createNativeStackNavigator();

// create a component
const SalonAppStack = () => {

    const [showsplashScreen, setshowsplashScreen] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setshowsplashScreen(false);
        }, 1000);
    }, [])
    return (

        <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false }}>
            {showsplashScreen ? (<Stack.Screen name="SplashScreen" component={SplashScreen} />)
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
            <Stack.Screen name="SeeProfile" component={SeeProfile} />
            <Stack.Screen name="Appointment" component={Appointment} />
            <Stack.Screen name="ChangePass" component={ChangePass} />
            <Stack.Screen name="ForgotPass" component={ForgotPass} />
            <Stack.Screen name="ServiceDetail" component={ServiceDetail} />
            <Stack.Screen name="ResetPass" component={ResetPass} />
           
           

        </Stack.Navigator>

    );
};

// define your styles

//make this component available to the app
export default SalonAppStack;
