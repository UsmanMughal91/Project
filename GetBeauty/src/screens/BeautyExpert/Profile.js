//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Heading from '../../Components/Heading';
import { getToken } from '../../../services/AsyncStorage';
import Header from '../../Components/Header';
import Loader from '../../Components/Loader';
import H1 from '../../Components/H1';
import Font from '../../Styles/Font';
import BaseUrl from '../../baseUrl/BaseUrl';
// create a component
const Profile = ({ navigation }) => {
    const [data, setdata] = useState();
    const [loading, setloading] = useState(true);
    const loadprofile = async (token) => {
        const option = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    token: token
                }
            )
        }
        try {

            await fetch(`${BaseUrl.ExpertBaseurl}/loadprofile`, option)
                .then((res) => res.json())
                .then((d) => { setdata(d.data);
                    console.log("this is data",data)
                    setloading(false) })
                
                .catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        (async () => {
            const token = await getToken() // getting token from storage
            loadprofile(token);
        })();
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <Header text="no" onPress={() => navigation.goBack()} />
            <View style={styles.container}>
                <ScrollView>
                    {loading && <Loader viewStyle={{ marginTop: 320 }} />}
                    {data && <View>
                        <Heading text={"My Profile"} />
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <Image source={{ uri: data.pic }}
                                style={{
                                    width: 100, height: 100, borderRadius: 50, marginTop: 10
                                }} />
                            <Heading text={data.name} />
                            <Text style={{ fontSize: Font.font, marginBottom: 10 }}>{data.parlourName}</Text>

                        </View>
                        <H1 text={"About"} />
                        <Text style={styles.text}>{data.about ? data.about : "Please add more details in Edit Profile."}</Text>
                        <H1 text={"Opening Hours"} />
                        {data.daysX ?
                            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                <Text style={styles.text}>{data.daysX}</Text>
                                <Text style={styles.text}>{data.timeX}</Text>
                            </View> : <Text>No time schedule found</Text>}
                        {data.daysY?
                            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                <Text style={styles.text}>{data.daysY}</Text>
                                <Text style={styles.text}>{data.timeY}</Text>
                            </View> : null}
                        {data.daysZ ?
                            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                <Text style={styles.text}>{data.daysZ}</Text>
                                <Text style={styles.text}>{data.timeZ}</Text>
                            </View> : null}

                        <H1 text={"Address"} />
                        <Text style={{ fontSize: 16, marginTop: 10 }}>{data.address}</Text>

                        <H1 text={"Contact"} />
                        <Text style={styles.text}>{data.phone}</Text>
                        <Text style={styles.text}>{data.email}</Text>
                    </View>}
                </ScrollView>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    text: {
        fontSize: Font.font,
        marginTop: 10,
        textAlign: 'justify',
       
    }
});

//make this component available to the app
export default Profile;





// {
//     data.daysX &&
//     <>

//         <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
//             <Text style={styles.text}>{data.daysX}</Text>
//             <Text style={styles.text}>{data.timeX}</Text>
//         </View>
//         {data.daysY && <>
//             <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
//                 <Text style={styles.text}>{data.daysY}</Text>
//                 <Text style={styles.text}>{data.timeY}</Text>
//             </View>
//         </>}
//         {data.daysZ && <>
//             <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
//                 <Text style={styles.text}>{data.daysZ}</Text>
//                 <Text style={styles.text}>{data.timeZ}</Text>
//             </View>
//         </>}
//     </>
// }
