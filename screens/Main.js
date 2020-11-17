import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

//IMPORTAMOS COMPONENTES
import ButtonLogin from '../components/ButtonLogin';
import SignInLink from '../components/SignInLink';


export default function Main({navigation}) {
    useEffect(function(){
        navigation.setOptions( {
          headerShown: false 
         }); 
      });
    
    function goToSignIn(){
        navigation.navigate("SignIn");
    }
    function login(){
        navigation.navigate("Menu");
        console.log("Entré");
    }
    return (
      <View style={styles.container}>
  
        <Image style={styles.logo} source={require('../assets/images/logoC.png')}/>
  
        <Text style={styles.message}>¡Que gusto verte de nuevo!</Text>
  
        <TextInput style={styles.inputLogin} placeholder="Usuario"></TextInput>
        <TextInput style={styles.inputLogin} placeholder="Password" secureTextEntry={true}></TextInput>
  
        
        <ButtonLogin text="Iniciar sesión" color="#e55039" action={login}/>
  
        <SignInLink text="No tengo una cuenta" action={goToSignIn}/>
  
        
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
    textButtonS:{
      marginTop:5,
      color:'#17c0eb',
      fontSize:20
    } 
  });
  