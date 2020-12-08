import React from 'react';
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native';

export default function ButtonConfig(props){
    return(
        <View style={styles.container}>
            <TouchableOpacity
            onPress={props.action}
            style={styles.sPress}>
            <Image style={styles.sImage}
                source={require('../assets/images/ajustes.png')}/>
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
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: 'center',
    },
    sImage: {
      width: 30,
      height: 30,
    }
  });