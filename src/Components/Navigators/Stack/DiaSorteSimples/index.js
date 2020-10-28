import React from 'react';
import DiaSorteSimplesScreen from '../../../screens/DiaSorteSimples';
import {createStackNavigator} from '@react-navigation/stack'

const HomeStack = createStackNavigator();
export default function DiaSorte(){
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
            name="Sugestões de jogos lotéricos"
            component={DiaSorteSimplesScreen}
          />
        </HomeStack.Navigator>
      )
}

