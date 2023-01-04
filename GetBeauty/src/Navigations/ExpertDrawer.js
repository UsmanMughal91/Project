import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import BeautyExpertTabs from "../Navigations/BeautyExpertTabs"
import ExpertCustomDrawer from "../Components/ExpertCustomDrawer";

const Drawer = createDrawerNavigator();

const ExpertDrawer = () => {
    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false,
            drawerStyle: {
                width: "65%",
                backgroundColor: "white"
            },
          
        }}
            drawerContent={(props) => <ExpertCustomDrawer {...props} />} 
            >
            <Drawer.Screen name=" " component={BeautyExpertTabs} />
        </Drawer.Navigator>
    );
}
 
export default ExpertDrawer