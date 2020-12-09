import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import  AsyncStorage  from '@react-native-async-storage/async-storage';

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

  const [ grados, setGrados ] = useState("");
  const [ hora, setHora ] = useState("");
  const [ fecha, setFecha ] = useState("");
  const [ descrip, setDescrip ] = useState("");

  async function guardar(){
    const data = {
      gradosC: grados,
      horas: hora,
      fechas: fecha,
      descripc: descrip
    }
    if(grados && hora && fecha && descrip){
      try {
        await AsyncStorage.setItem("temperatura", JSON.stringify(data));
        const loadData =  await AsyncStorage.getItem("temperatura");
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
      }
      catch(e) {
        console.log("Ocurrió un error. Vuelve a intentar");
      }
    }else{
      Alert.alert(
        "¡Campos incompletos!",
        "Asegurate de que hayas llenado todos los campos",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.text_Temp}>Grados:</Text>
        <TextInput 
        onChangeText={setGrados}
        style={styles.input_Temp} 
        placeholder= "0°"/>
        <Text style={styles.text_Temp}>Hora:</Text>
        <TextInput 
        onChangeText={setHora}
        style={styles.input_Temp}
        placeholder="00:00"/>
        <Text style={styles.text_Temp}>Fecha:</Text>
        <TextInput 
        onChangeText={setFecha}
        style={styles.input_Temp} 
        placeholder= "dd/mm/aaaa"/>
        <Text style={styles.text_Temp}>Descripción:</Text>
        <TextInput 
        onChangeText={setDescrip}
        style={styles.input_Temp}
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
  input_Temp: {
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
  text_Temp: {
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