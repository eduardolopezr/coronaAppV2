import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import  AsyncStorage  from '@react-native-async-storage/async-storage';

import ButtonStyle from '../components/ButtonStyle';

export default function Salidas({navigation}) {

  useEffect(function(){
    navigation.setOptions({
      headerShow: true,
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: 'rgb(253, 112, 96)'
      }
    });
  });

  const [ destino, setDestino ] = useState("");
  const [ salida, setSalida ] = useState("");
  const [ regreso, setRegreso ] = useState("");
  const [ descrip, setDescrip ] = useState("");

  async function guardar(){
    const data = {
      destinoL: destino,
      salidaH: salida,
      regresoH: regreso,
      descripc: descrip
    }
    if(destino && salida && regreso && descrip){
      try {
        await AsyncStorage.setItem("salidas", JSON.stringify(data));
      
        const loadData =  await AsyncStorage.getItem("salidas");
        let data2 = JSON.parse(loadData);

        Alert.alert(
          "¡Datos ingresados!",
          "Los datos se han guardado correctamente",
          [
            { text: "OK", onPress: () => console.log(data2) }
          ],
          { cancelable: false }
        );
          navigation.navigate("CoronAppV2");
        console.log("Se guardaron los datos...");
      }
      catch(e) {
        console.log(e);
        console.log(":(");
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

  // function Guardar(){
  //   Alert.alert(
  //     'Guardar',
  //     '¿Deseas guardar los cambios?',
  //     [
  //       {
  //         text: 'cancelar',
  //         onPress: () => console.log("Sin cambios")
  //       },
  //       {
  //         text: 'Aceptar',
  //         onPress: () => console.log("Cambios guardados")
  //       }
  //     ]
  //   )
  // }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.text_S}>Lugar de destino:</Text>
        <TextInput 
        onChangeText={setDestino}
        style={styles.input_S} 
        placeholder= "..."/>
        <Text style={styles.text_S}>Hora de salida:</Text>
        <TextInput 
        onChangeText={setSalida}
        style={styles.input_S}
        placeholder="00:00"/>
        <Text style={styles.text_S}>Hora de regreso:</Text>
        <TextInput 
        onChangeText={setRegreso}
        style={styles.input_S} 
        placeholder= "00:00"/>
        <Text style={styles.text_S}>Descripción:</Text>
        <TextInput 
        onChangeText={setDescrip}
        style={styles.input_S}
        placeholder="Descripción..."/>
      </View>
      <View style={styles.sBoton}>
        <ButtonStyle text={"Guardar"} action={guardar} />
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
  input_S: {
    width:  '98%',
    height: 45,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgb(253, 112, 92)',
    fontSize: 15,
    fontStyle: 'italic',
    paddingLeft: 15,
    marginBottom: 5
  },
  text_S: {
    color: 'black',
    fontSize: 16,
    marginBottom: 5,
    paddingLeft: 5,
    fontWeight: 'bold'
  },
  sBoton: {
    width: '50%',
    height: 40,
    alignItems: 'center',
    marginTop: 160
  }
});