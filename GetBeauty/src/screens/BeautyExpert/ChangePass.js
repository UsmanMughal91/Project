//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Heading from '../../Components/Heading';
import InputText from '../../Components/InputText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import BtnComp from '../../Components/BtnComp';
// create a component
const ChangePass = () => {
    const [password, setpassword] = useState()
    return (
        <View style={styles.container}>
            <View style={{ width: 40 }}>
                <Ionicons name='md-chevron-back-circle-outline' size={40} color={'black'} onPress={() => navigation.goBack()} />
            </View>
            <Heading text={"Change Password"} />
            <View style={{ marginTop: 50 ,marginBottom:50}}>

              
                <InputText Icon={<MaterialCommunityIcons name="lock" size={25} />}
                    placeholder={'New Password'}
                    secureTextEntry={true}
                    onChangeText={setpassword}
                    Icons={<MaterialIcons name="visibility-off" size={25} />} />

                <InputText Icon={<MaterialCommunityIcons name="lock" size={25} />}
                    placeholder={'Confirm Password'}
                    secureTextEntry={true}
                    onChangeText={setpassword}
                    Icons={<MaterialIcons name="visibility-off" size={25} />} />
            </View>
            <BtnComp btnText={"Change Password"} />

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },

});

//make this component available to the app
export default ChangePass;
