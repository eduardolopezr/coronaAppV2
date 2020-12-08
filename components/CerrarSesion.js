import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function CerrarSesion(props){
    return(
        <TouchableOpacity
            onPress={props.action}
            style={{
                backgroundColor: '#fff',
                width: 200,
                height: 40
            }}>
            <Text style={{fontSize: 24, color: 'rgb(253, 130, 113)', fontWeight: 'bold'}}>Cerrar sesión</Text>
        </TouchableOpacity>
    );
}