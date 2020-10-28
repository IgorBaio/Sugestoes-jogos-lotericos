import React from 'react';
import QuinaScreen from '../../../screens/QuinaSimples';
import {createStackNavigator} from '@react-navigation/stack'

const HomeStack = createStackNavigator();
export default function Quina(){
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
            name="Quina"
            component={QuinaScreen}
          />
        </HomeStack.Navigator>
      )
}