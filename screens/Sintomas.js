import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';

import ButtonStyle from '../components/ButtonStyle';

export default function Temperatura({navigation}) {

  useEffect(function(){
    navigation.setOptions({
      headerShow: true,
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: 'rgb(253, 112, 96)'
      }
    });
  });

  function Guardar(){
    Alert.alert(
      'Guardar',
      '¿Estás seguro de realizar los cambios?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log("Se cancelaron los cambios")
        },
        {
          text: 'Aceptar',
          onPress: () => console.log("Cambios guardados")
        }
      ]
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.text}>Selecciona tus sintomas:</Text>
        <View style={styles.filaSintoma}>
          <Image style={{width: 20, height: 20}} source={require('../assets/images/seleccionar.png')} />
          <Text style={styles.text_S}>Fiebre</Text>
        </View>
        <View style={styles.filaSintoma}>
        <Image style={{width: 20, height: 20}} source={require('../assets/images/seleccionar.png')} />
          <Text style={styles.text_S}>Tos seca</Text>
        </View>
        <View style={styles.filaSintoma}>
        <Image style={{width: 20, height: 20}} source={require('../assets/images/seleccionar.png')} />
          <Text style={styles.text_S}>Cansancio</Text>
        </View>
        <View style={styles.filaSintoma}>
        <Image style={{width: 20, height: 20}} source={require('../assets/images/seleccionar.png')} />
          <Text style={styles.text_S}>Dificultad para respirar</Text>
        </View>
        <View style={styles.filaSintoma}>
        <Image style={{width: 20, height: 20}} source={require('../assets/images/seleccionar.png')} />
          <Text style={styles.text_S}>Dolor o presión en el pecho</Text>
        </View>
        <View style={styles.filaSintoma}>
        <Image style={{width: 20, height: 20}} source={require('../assets/images/seleccionar.png')} />
          <Text style={styles.text_S}>Incapacidad para hablar o moverse</Text>
        </View>
      </View>
      <View style={styles.sBoton}>
        <ButtonStyle text={"Guardar"} action={Guardar} />
      </View>      
      <StatusBar style={"light"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
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
  filaSintoma: {
    width: '100%',
    height: '10%',
    paddingLeft: 5,
    paddingTop: 5,
    flexDirection: "row",
    alignItems: 'center'
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
    width: '50%',
    height: 40,
    alignItems: 'center',
    marginTop: 20
  }
});