import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function ButtonStyle(props){
    return(
        <TouchableOpacity
            onPress={props.action}
            style={{
                backgroundColor: 'rgb(253, 130, 113)',
                borderColor: 'rgb(253, 112, 92)',
                width: 150,
                height: 40,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>{props.text}</Text>
        </TouchableOpacity>
    );
}