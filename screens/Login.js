import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, TextInput } from 'react-native';

import ButtonStyle from '../components/ButtonStyle';
import SignInLink from '../components/SignInLink';

export default function Login({navigation}) {

  useEffect(function(){
    navigation.setOptions({
      title: "CoronAppV2",
      headerShow: true,
      headerTintColor: "rgb(253, 112, 96)",
      headerStyle: {
        backgroundColor: 'white'
      }
    });
  });

  function goToSignIn(){
    navigation.navigate("SignIn");
    console.log("Entre");
  }
  function goToCoron(){
    navigation.navigate("CoronAppV2")
  }

  return (
    <View style={styles.container}>
        <Image style={styles.sLogo} source={require('../assets/images/logoC.png')} />
        
        <Text style={styles.login_header}>¡Que gusto verte de nuevo!</Text>
        
        <TextInput 
        style={styles.input_login} 
        placeholder= "Usuario"/>
        <TextInput 
        style={styles.input_login}
        placeholder="Password"
        secureTextEntry={true}/>
      
      <ButtonStyle text={"Iniciar Sesión"} action={goToCoron} />
      <SignInLink text={"No tengo una cuenta"} action={goToSignIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sLogo: {
    width: 150,
    height: 180,
    marginBottom: 30
  },
  input_login: {
    width:  '90%',
    height: 55,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgb(253, 112, 92)',
    fontSize: 20,
    fontStyle: 'italic',
    paddingLeft: 10,
    marginBottom: 20
  },
  login_header: {
    color: 'black',
    fontSize: 20,
    marginBottom: 33,
    fontWeight: 'bold'
  },
  sText: {
      color: 'rgb(0, 176, 240)',
      fontSize: 15,
      marginBottom: 30
  }
});