//import liraries
import React, { Children, Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Modal, Button, Image, TouchableOpacity } from 'react-native';
import BtnComp from './BtnComp';

const ModalPoup = ({ visible, children }) => {
    const [showModal, setshowModal] = useState(visible);
    useEffect(() => {
        toggleModal()
    }, [visible])
    const toggleModal = () => {
        if (visible) {
            setshowModal(true)
        } else {
            setshowModal(false)
        }
    }
    return (
        <Modal
            // animationType="slide"
            transparent visible={showModal}>
            <View style={styles.modalbackground}>
                <View style={[styles.modalContainer]}>
                    {children}
                </View>
            </View>
        </Modal>
    )
}

// create a component
const CustomModal = ({ modalvisible, setmodalvisible ,onPress,text}) => {
    console.log(modalvisible)
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ModalPoup visible={modalvisible}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={require("../assests/images/ok2.jpg")} style={{ height: 100, width: 100, marginVertical: 10 }} />
                </View>
                <Text style={{ marginVertical: 50, fontSize: 20, textAlign: 'center' ,color:"black"}}>{text}</Text>
                <View>
                    <BtnComp btnText={"OK"} onPress={onPress} />
                </View>
            </ModalPoup>
            {/* <Button title='Open Modal' onPress={() => setvisible(true)} /> */}
        </View>
    )
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalbackground: {
        flex: 1,
        backgroundColor: " rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: 'center'
    },
    modalContainer: {
        width: '80%',
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
    },
    header: {
        width: "100%",
        height: 40,
        alignItems: 'flex-end'
    }
});

//make this component available to the app
export default CustomModal;

