import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import CerrarSesion from '../components/CerrarSesion';

export default function Configuracion({ navigation }) {

  useEffect(function(){
    navigation.setOptions({
      headerShow: true,
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: 'rgb(253, 112, 96)'
      }
    });
  });

  function Login(){
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.text}>Configuración de la cuenta</Text>
            <Text style={styles.text_S}>Nombre</Text>
            <Text style={styles.text_S}>Nombre de usuario</Text>
            <Text style={styles.text_S}>Genero</Text>
            <Text style={styles.text_S}>Ubicación</Text>
            <Text style={styles.text_S}>E-mail</Text>
            <Text style={styles.text_S}>Contraseña</Text>
            <Text style={styles.text}>Notificaciones</Text>
            <Text style={styles.text}>Ayuda y soporte</Text>
      </View>
      <View style={styles.sBoton}>
        <CerrarSesion action={Login}/>
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
  form: {
    width: '98%',
    height: '45%',
    paddingLeft: 10,
    paddingTop: 10,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    flexDirection: 'column'
  },
  text: {
    color: 'rgb(253, 112, 92)',
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 5,
    paddingBottom: 10
  },
  text_S: {
    color: 'black',
    fontSize: 20,
    marginBottom: 5,
    paddingLeft: 10
  },
  sBoton: {
    width: '90%',
    height: 40,
    marginTop: 50
  }
});