import React from 'react';
import { View ,Text} from "react-native"



const toastConfig = {
    warning:({text1,props})=> (
        <View style={{ flex: 1, backgroundColor: "#FF6347", width: '100%', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, padding:17 }}>
    <View style={{alignItems:'center',justifyContent:"center"}}>
    <Text style={{ fontSize: 18, textAlign: 'center',color:"white",fontWeight:'bold' }}>{text1}</Text>
    </View>          
</View>
    ),
    Done: ({ text1, props }) => (
        <View style={{ flex: 1, backgroundColor: "green", width: '100%', borderBottomLeftRadius:20, borderBottomRightRadius:20,padding:17 }}>
            <View style={{ alignItems: 'center', justifyContent: "center",alignSelf:"center" }}>
                <Text style={{ fontSize: 18, textAlign: 'center', color: "white", fontWeight: 'bold' }}>{text1}</Text>
            </View>
        </View>
    ),
}

export {toastConfig}