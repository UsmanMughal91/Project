
//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Heading from '../../Components/Heading';
import { getToken } from '../../../services/AsyncStorage';
import Colors from '../../Styles/Colors';
import Header from '../../Components/Header'
import BaseUrl from "../../baseUrl/BaseUrl"
import Loader from '../../Components/Loader';
// create a component
const Services = ({ navigation,route }) => {
    const id = route.params.id
    const profile = route.params.profile
   
    
   const [data,setdata] = useState();
   const [search,setSearch] = useState("");
    const [loading, setloading] = useState("true");

   
    const loadservices = async (id) =>{
        const option = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    id:id
                }
            )
        }
        try {
           
            await fetch(`${BaseUrl.SalonBaseurl}/loadservices`,option)
            .then((res)=>res.json())
            .then((d) => {
                setdata(d.data);
                setloading(false)
            })
            .catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        loadservices(id)
    },[])
    return (
        <View style={{flex:1}}>
       <Header onPress={()=> navigation.goBack()}/>
            <ScrollView> 
            <Heading text={"Services"} />
           
            <View style={styles.container}>
                <View style={{ marginBottom: 20, flexDirection: "row", alignItems: "center", justifyContent: 'space-between', backgroundColor: 'white', borderRadius: 12, }}>
                    <View>
                        <TextInput placeholder='Search Service' style={{ fontSize: 18, paddingLeft: 18 }} onChangeText={(val)=>{setSearch(val)}}/>
                    </View>
                    <View>
                        <TouchableOpacity style={{ backgroundColor:Colors.purple, padding: 9, borderRadius: 12, marginRight: 5 }}>
                            <Text style={{ color: 'white', fontSize: 15 }}>Search</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {loading && <Loader />}
                    {data &&    <FlatList
                    data={data.filter((item)=>{if(item.serviceName.includes(search)){return item}})}
                    keyExtractor={data => data._id}
                    ListEmptyComponent={()=>{
                        return (
                            <View>
                                <Text style={{color:Colors.purple,textAlign:'center'}}>No Service found</Text>
                            </View>
                        );
                    }}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1 }}>
                            <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 12, height: 80, flexWrap: 'wrap', alignContent: 'center' }}>
                                <View>
                                    <Image source={{uri:item.pic}} style={{ width: 50, height: 50, borderRadius: 50, marginLeft: 5 }} />
                                </View>
                                <View style={{width:270,marginLeft:10}}>
                                    <TouchableOpacity onPress={()=>navigation.navigate('ServiceDetail',{item,profile})}>
                                     <Text style={{ fontSize: 18,color:'black' }}>{item.serviceName}</Text>
                                    </TouchableOpacity>
                                   
                                </View>
                               
                            </View>

                        </View>)} />}
           


        </View>
            </ScrollView>
   </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
       
        margin: 20
    },
    btn: {
        marginTop: 20,
    },

});

//make this component available to the app
export default Services;
