import React from 'react';
import MegaSenaScreen from '../../../screens/MegaSena';
import {createStackNavigator} from '@react-navigation/stack'

const HomeStack = createStackNavigator();
export default function MegaSena(){
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
            name="Números da Mega Sena"
            component={MegaSenaScreen}
          />
        </HomeStack.Navigator>
      )
}