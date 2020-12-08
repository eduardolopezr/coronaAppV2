import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import  AsyncStorage  from '@react-native-async-storage/async-storage';

import ButtonConfig from '../components/ButtonConfig';

export default function Perfil({ navigation }){

    useEffect(function(){
        navigation.setOptions({
          headerShow: true,
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: 'rgb(253, 112, 96)'
          }
        });
      });

    function ConfigScreen(){
      navigation.navigate("Configuracion");
    }
    
      const [ info, setInfo ] = useState("");
    
      async function perfil(){
        const data = {
          infoP: info
        }
    
        try {
          await AsyncStorage.setItem("data", JSON.stringify(data));
          console.log("Se guardaron los datos...");
        }
        catch(e) {
          console.log(e);
        }
          navigation.navigate("CoronAppV2");
      }

    return (
        <View style={styles.container}>
            <View style={styles.sPerfil}>
                <Image style={styles.sPerfilImg} source={require('../assets/images/usuario.png')}/>
            </View>
            <View style={styles.user}>
                <Text style={styles.userText}>@usuario</Text>
            </View> 
            <View style={styles.sBoton}>
              <ButtonConfig action={ConfigScreen} />   
            </View> 
            <View style={styles.form}>
                <Text style={styles.text_P}>Info.</Text>
                <TextInput 
                onChangeText={setInfo}
                style={styles.input_P}
                placeholder="Info de usuario..." action={perfil}/>
            </View> 
          <StatusBar style={"light"}/>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      flexDirection: 'column'
    },
    sPerfil:{
        width: '100%',
        height: '50%',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
        sPerfilImg: {
            width: 200,
            height: 200
        },
        sConfig: {
            width: 25,
            height: 25
        },
    user: {
        width: '100%',
        height: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    userText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    form: {
      width: '100%',
      height: '20%',
      paddingLeft: 10,
      flexDirection: 'column'
    },
        input_P: {
        width:  '98%',
        height: 70,
        borderWidth: 1,
        borderRadius: 10,
        textAlignVertical: "top",
        borderColor: 'rgb(253, 112, 92)',
        fontSize: 15,
        fontStyle: 'italic',
        paddingTop: 5,
        paddingLeft: 8,
        marginBottom: 5
        },
        text_P: {
        color: 'black',
        fontSize: 18,
        marginBottom: 5,
        paddingLeft: 5,
        fontWeight: 'bold'
        },
        sBoton: {
          width: '100%',
          height: 30,
          paddingLeft: 330,
          marginTop: 5
        }
  });