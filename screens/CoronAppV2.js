import React, { useEffect }from 'react';
import { StyleSheet, Image, View, Text, Alert} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import MenuStyle from '../components/MenuStyle';
import MenuStyleC from '../components/MenuStyleC';
import MenuStyleP from '../components/MenuStyleP';
import MenuStyleR from '../components/MenuStyleR';
import MenuStyleS from '../components/MenuStyleS';

export default function CoronAppV2({ navigation }) {

  function TemperaturaScreen(){
    navigation.navigate("Temperatura");
  }
  
  function SalidasScreen(){
    navigation.navigate("Salidas");
  }

  function alertCB(){
    Alert.alert(
      'Recordatorio',
      '¿Estás usando cubrebocas hoy?',
      [
        {
          text: 'No',
          onPress: () => console.log("¡Deberías usar uno!")
        },
        {
          text: 'Si',
          onPress: () => console.log("¡Genial, eres responsable!")
        }
      ]
    )
  }

  function SintomasScreen(){
    navigation.navigate("Sintomas");
  }
  
  function PerfilScreen(){
    navigation.navigate("Perfil");
  }

  useEffect(function(){
    navigation.setOptions({
      headerShow: true,
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: 'rgb(253, 112, 96)'
      }
    });
  });

  return (
    <View style={styles.container}>
      <Text style={styles.sLogros}>Mis logros</Text>
      <View style={styles.conteinerLogros}>
        <View style={styles.filaLogros}>
          <Image style={styles.sImage} source={require('../assets/images/burbuja.png')}/>
          <Image style={styles.sImage} source={require('../assets/images/distancia.png')}/>
          <Image style={styles.sImage} source={require('../assets/images/lavar.png')}/>
        </View>
        <View style={styles.filaLogros}>
          <Image style={styles.sImage} source={require('../assets/images/medirT.png')}/>
          <Image style={styles.sImage} source={require('../assets/images/no1.png')}/>
          <Image style={styles.sImage} source={require('../assets/images/no2.png')}/>
        </View>
      </View>
      <View style={styles.sMenu}>
        <MenuStyle action={TemperaturaScreen}/>
        <MenuStyleS action={SalidasScreen}/>
        <MenuStyleC action={alertCB}/>
        <MenuStyleR action={SintomasScreen}/>
        <MenuStyleP action={PerfilScreen}/>
      </View>
      <StatusBar  style={"light"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  sLogros: {
      color: 'black',
      borderEndColor: 'rgb(254, 202, 196)',
      fontSize: 20,
      padding: 10,
      paddingTop: 10,
  },
  conteinerLogros: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
    flexDirection: "column"
  },
  filaLogros: {
    width: '100%',
    height: '20%',
    flexDirection: "row",
    alignItems: 'center'
  },
    sImage: {
      width: 100,
      height: 100,
    },
  sMenu: {
    width: '100%',
    height: 50,
    marginTop: 45,
    backgroundColor: 'rgb(253, 130, 113)',
    alignItems: 'center',
    flexDirection: 'row'
  }
});