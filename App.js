import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from './screens/Login';
import SignIn from './screens/SignIn';
import CoronAppV2 from './screens/CoronAppV2';
import Temperatura from './screens/Temperatura';
import Salidas from './screens/Salidas';
import Sintomas from './screens/Sintomas';
import Perfil from './screens/Perfil';
import Configuracion from './screens/Configuracion';

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="CoronAppV2" component={CoronAppV2}/>
        <Stack.Screen name="Temperatura" component={Temperatura}/>
        <Stack.Screen name="Salidas" component={Salidas}/>
        <Stack.Screen name="Sintomas" component={Sintomas}/>
        <Stack.Screen name="Perfil" component={Perfil}/>
        <Stack.Screen name="Configuracion" component={Configuracion}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
