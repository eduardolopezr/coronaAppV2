import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

export default function SignInLink(props){
    return(
        <TouchableOpacity 
        onPress={props.action}
        style={{
            
                marginTop:5,
                fontSize:20,
                borderRadius:5,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
            <Text style={{fontSize: 18, color:'#38ada9' }}>{props.text}</Text>
        </TouchableOpacity>
    );
}