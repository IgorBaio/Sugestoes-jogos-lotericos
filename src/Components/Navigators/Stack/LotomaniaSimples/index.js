import React from 'react';
import LotomaniaScreen from '../../../screens/LotomaniaSimples';
import {createStackNavigator} from '@react-navigation/stack'

const HomeStack = createStackNavigator();
export default function Lotomania(){
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
            name="Lotomania Simples"
            component={LotomaniaScreen}
          />
        </HomeStack.Navigator>
      )
}