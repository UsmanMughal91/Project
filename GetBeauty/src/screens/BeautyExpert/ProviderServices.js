//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Heading from '../../Components/Heading';
import { getToken } from '../../../services/AsyncStorage';
import Loader from '../../Components/Loader';
import Header from '../../Components/Header';
import Colors from '../../Styles/Colors';

// create a component
const ProviderServices = ({ navigation }) => {
   const [data,setdata] = useState();
   const [serviceName,setserviceName] = useState();
   const [servicePrice,setservicePrice] = useState();
   const [pic,setpic] = useState();
   const [id,setid] = useState();
   const [search,setSearch] = useState("")
    const [loading, setloading] = useState(true)
    const Data = [
        {
            id: 1,
            service: 'Hair Cut',
            pic: require('../../assests/images/b.jpg'),
            del: <MaterialIcons name='delete' size={25} />
        },
        {

            id: 2,
            service: 'Urgent faical',
            pic: require('../../assests/images/a.jpg'),
           
            del: <MaterialIcons name='delete' size={25}  />
        },
        {

            id: 3,
            service: 'Party makeup',
            pic: require('../../assests/images/c.jpg'),
           
            del: <MaterialIcons name='delete' size={25}  />
        },
        {

            id: 4,
            service: 'Bridel',
            pic: require('../../assests/images/d.jpg'),
           
            del: <MaterialIcons name='delete' size={25}  />
        },
        {

            id: 5,
            service: 'Hair color',
            pic: require('../../assests/images/b.jpg'),
           
            del: <MaterialIcons name='delete' size={25}  />
        }
    ]
    const loadservices = async (token) =>{
        const option = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    token:token
                }
            )
        }
        try {
            await fetch('http://192.168.103.8:8000/api/Expert/loadservices',option)
            .then((res)=>res.json())
            .then((d) => {
                setdata(d.data);setloading(false)
            })
            .catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(()=>{
        (   async () => {
            const token = await getToken() // getting token from storage
            loadservices(token);
        })();
    },[])
    return (
        <ScrollView>
           
            <Header onPress={() => navigation.goBack()} />
            {loading && <Loader viewStyle={{ marginTop: 330 }} />}
        {data && 
            <View style={styles.container}>
            <View style={{ flex: 1 }}>
             
                <Heading text={"Services"}/>

                <View style={{ marginBottom: 20, flexDirection: "row", alignItems: "center", justifyContent: 'space-between', backgroundColor: 'white', borderRadius: 12, marginTop: 20 }}>
                    <View>
                        <TextInput placeholder='Search Service' style={{ fontSize: 18, paddingLeft: 18 }} onChangeText={(val) =>setSearch(val)}/>
                    </View>
                    <View>
                        <TouchableOpacity style={{ backgroundColor:Colors.purple, padding: 9, borderRadius: 12, marginRight: 5 }}>
                            <Text style={{ color:Colors.white, fontSize: 15 }}>Search</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <FlatList
                    data={data.filter((item)=>{if(item.serviceName.includes(search)){return item}})}
                    keyExtractor={data => data._id.toString()}
                    ListEmptyComponent={()=>{
                        return (
                            <View>
                                <Text style={{color:Colors.purple}}>No data found</Text>
                            </View>
                        );
                    }}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1 }}>
                            <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center', backgroundColor: 'white', borderRadius: 12, height: 80, flexWrap: 'wrap' }}>
                                <View>
                                    <Image source={{uri:item.pic}} style={{ width: 50, height: 50, borderRadius: 50, marginLeft: 5 }} />
                                </View>
                                <View style={{width:270,marginLeft:10}}>
                                    <TouchableOpacity onPress={()=>navigation.navigate('ServiceDetail',{item})}>
                                     <Text style={{ fontSize: 18,color:'black' }}>{item.serviceName}</Text>
                                    </TouchableOpacity>
                                   
                                </View>
                                {/* <TouchableOpacity style={{ width: 30 }} >
                                     <MaterialIcons name='delete' size={25}  style={{color:'gray'}}/>
                                </TouchableOpacity> */}
                            </View>
                            
                        </View>)} 
                    />
            </View>
        </View>
    }</ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    btn: {
        marginTop: 20,
    },

});

//make this component available to the app
export default ProviderServices;
