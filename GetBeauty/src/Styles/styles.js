import React from 'react';
import { View ,Text} from "react-native"



const toastConfig = {
    warning:({text1,props})=> (
<View style={{height: 40 ,width:"100%",backgroundColor:'red',borderBottomLeftRadius:12,borderBottomRightRadius:12}}>
    <View style={{marginTop:6}}>
                <Text style={{ fontSize: 16, color: 'white', textAlign: 'center' }}>{text1}</Text>
    </View>

            
    <Text>{props.uuid}</Text>

</View>
    ),
    done: ({ text1, props }) => (
        <View style={{ height: 40, width: "100%", backgroundColor: 'green', borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}>
            <View style={{ marginTop: 6 }}>
                <Text style={{ fontSize: 16, color: 'white', textAlign: 'center' }}>{text1}</Text>
            </View>
           
            <Text>{props.uuid}</Text>
        </View>
    ),
}

export {toastConfig}