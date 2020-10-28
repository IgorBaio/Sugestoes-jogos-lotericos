import React from 'react';
import MenuScreen from '../../../screens/Menu';
import {createStackNavigator} from '@react-navigation/stack'

const HomeStack = createStackNavigator();
export default function Menu(){
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
            component={MenuScreen}
          />
        </HomeStack.Navigator>
      )
}

