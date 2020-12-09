import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


//IMPORTAMOS COMPONENTES
import SignInLink from '../components/SignInLink';
import ButtonStyle from '../components/ButtonStyle';

export default function SignIn({navigation}) {
    useEffect(function(){
        navigation.setOptions( {
          headerShown: false 
         }); 
      });
      function goToLogin(){
        navigation.navigate("Login");
    }
    const [firstName, setName] =  useState("");
    const [lastName, setlastName] =  useState("");
    const [userName, setUserName] =  useState("");
    const [password, setPassword] =  useState("");
   
    
    async function signIn(){
        const data = {
            name: firstName,
            lastName: lastName,
            userName: userName,
            password: password
          }
          if(data.name && data.lastName && data.userName && data.password){
            try {
              await AsyncStorage.setItem("data", JSON.stringify(data));
              Alert.alert(
                "¡Registro exitoso!",
                "¡Usuario registrado correctamente!",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
              );
              console.log("Se guardaron los datos");
  
              const loadData =  await AsyncStorage.getItem("data");
              console.log(JSON.parse(loadData));
              navigation.navigate("Login");
              
            } catch (e) {
              console.log(e);
              console.log("Algo salió mal");
            }
          }else{
             Alert.alert(
                "¡Datos incompletos!",
                "Revisa que hayas llenado por completo los campos",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
              );
            console.log("Datos incompletos");
            
          }
    }
    return (
      <View style={styles.container}>
  
        <Image style={styles.logo} source={require('../assets/images/logoC.png')}/>
  
        <Text style={styles.message}>¡Que gusto verte de nuevo!</Text>
        
        <TextInput onChangeText={setName} style={styles.inputLogin} placeholder="Nombre"></TextInput>
        <TextInput onChangeText={setlastName}style={styles.inputLogin} placeholder="Apellido"></TextInput>
        <TextInput onChangeText={setUserName} style={styles.inputLogin} placeholder="Usuario"></TextInput>
        <TextInput onChangeText={setPassword} style={styles.inputLogin} placeholder="Password" secureTextEntry={true}></TextInput>
  
        
        <ButtonStyle text="Registrarse" action={signIn}/>
  
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