import React from 'react';
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native';

export default function MenuStyleR(props){
    return(
        <View style={styles.container}>
            <TouchableOpacity
            onPress={props.action}
            style={styles.sPress}>
            <Image style={styles.sImage}
                source={require('../assets/images/reportes.png')}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "column"
    },
    sPress: {
        borderColor: 'rgb(253, 130, 113)',
        width: 80,
        height: 45,
        justifyContent: "center",
        alignItems: 'center',
    },
    sImage: {
      width: 30,
      height: 30,
    }
  });