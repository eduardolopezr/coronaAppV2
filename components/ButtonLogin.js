import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

export default function ButtonLogin(props){
    return(
        <TouchableOpacity 
        onPress={props.action}
        style={{
                borderRadius:5,
                backgroundColor: props.color,
                width: 200,
                height: 55,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
            <Text style={{fontSize: 18, color:'white' }}>{props.text}</Text>
        </TouchableOpacity>
    );
}
