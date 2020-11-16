import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';


const Stack = createStackNavigator();

import SignIn from './screens/SignIn';
import Main from './screens/Main';


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

