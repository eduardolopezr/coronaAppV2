import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';

//IMPORTAMOS COMPONENTES
import ButtonLogin from '../components/ButtonLogin';
import SignInLink from '../components/SignInLink';

export default function SignIn({navigation}) {
    useEffect(function(){
        navigation.setOptions( {
          headerShown: false 
         }); 
      });
      function goToLogin(){
        navigation.navigate("Main");
    }
    return (
      <View style={styles.container}>
  
        <Image style={styles.logo} source={require('../assets/images/logoC.png')}/>
  
        <Text style={styles.message}>¡Que gusto verte de nuevo!</Text>
        
        <TextInput style={styles.inputLogin} placeholder="Nombre"></TextInput>
        <TextInput style={styles.inputLogin} placeholder="Apellido"></TextInput>
        <TextInput style={styles.inputLogin} placeholder="Usuario"></TextInput>
        <TextInput style={styles.inputLogin} placeholder="Password" secureTextEntry={true}></TextInput>
  
        
        <ButtonLogin text="Registrarse" color="#e55039"/>
  
        <SignInLink text="¡Ya tengo una cuenta!" action={goToLogin}/>
  
        
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
      width: 115,
      height: 115,
      marginBottom:30
    },
    inputLogin:{
      width:'90%',
      height: 40,
      borderColor: 'rgba(0,0,0,0.5)',
      borderWidth:1,
      borderRadius:5,
      fontSize: 22,
      paddingLeft: 10,
      marginBottom: 20
  
    },
    textButtonS:{
      marginTop:5,
      color:'#17c0eb',
      fontSize:20
    } 
  });
  