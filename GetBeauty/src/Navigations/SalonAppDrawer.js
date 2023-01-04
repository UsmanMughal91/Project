import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import SalonAppTabs from "./SalonAppTabs";
import Colors from "../Styles/Colors";
import CustomDrawer from "../Components/CustomDrawer"
const Drawer = createDrawerNavigator();

const SalonAppDrawer=()=> {
    return (
        <Drawer.Navigator screenOptions={{
          
            headerShown:false,
            drawerStyle: {
                width:"65%",
                backgroundColor:"white" , 
            },
        }}
            drawerContent={(props) => <CustomDrawer {...props} />}>
            <Drawer.Screen name=" " component={SalonAppTabs} />
        </Drawer.Navigator>
    );
}

export default SalonAppDrawer