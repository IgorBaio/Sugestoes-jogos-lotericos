import React from 'react';
import LotoFacilScreen from '../../../screens/LotoFacilImparesPares';
import {createStackNavigator} from '@react-navigation/stack'

const HomeStack = createStackNavigator();
export default function LotoFacilImparesPares(){
    return (
      <HomeStack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor: '#fda917',
          
        },
        headerBackTitle:"Back",
        headerTitleAlign:'center',
      }}>
        <HomeStack.Screen
          name="Loto Fácil Pares e Ímpares"
            component={LotoFacilScreen}
          />
        </HomeStack.Navigator>
      )
}