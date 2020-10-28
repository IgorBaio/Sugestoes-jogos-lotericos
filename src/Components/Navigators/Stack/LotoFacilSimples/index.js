import React from 'react';
import LotoFacilScreen from '../../../screens/LotoFacilSimples';
import {createStackNavigator} from '@react-navigation/stack'

const HomeStack = createStackNavigator();
export default function LotoFacilSimples(){
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
          name="LotoFacil"
            component={LotoFacilScreen}
          />
        </HomeStack.Navigator>
      )
}