import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image style={styles.logo} source={require('./assets/images/logoC.png')}/>

      <Text style={styles.message}>¡Que gusto verte de nuevo!</Text>

      <TextInput style={styles.inputLogin} placeholder="Usuario"></TextInput>
      <TextInput style={styles.inputLogin} placeholder="Password" secureTextEntry={true}></TextInput>

      <TouchableOpacity style={styles.buttonLogin}>
        <Text style={styles.textButtonL}>Inicia sesión</Text>
      </TouchableOpacity>


      <TouchableOpacity>
        <Text style={styles.textButtonS}>No tengo una cuenta</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  message:{
    fontSize:25,
    marginBottom:15,
    color:'#3d3d3d',
    fontWeight:'100'
    // fontFamily:
  },
  logo: {
    width: 135,
    height: 155,
    marginBottom:30
  },
  inputLogin:{
    width:'90%',
    height: 55,
    borderColor: 'rgba(0,0,0,0.5)',
    borderWidth:1,
    borderRadius:5,
    fontSize: 22,
    paddingLeft: 10,
    marginBottom: 20

  },
  textButtonL:{
    fontSize:22,
    color: 'white'
  },
  textButtonS:{
    marginTop:5,
    color:'#17c0eb',
    fontSize:20
  },
  buttonLogin:{
    borderRadius:40,
    backgroundColor: '#ff4d4d',
    width: 200,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
