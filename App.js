import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MegaSena from './src/Components/screens/MegaSena';
import LotoFacil from './src/Components/screens/LotoFacilSimples';
import {NavigationContainer} from '@react-navigation/native'
import DrawerStackScreen from './src/Components/Navigators/Stack/Drawer'
import {createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useWindowDimensions } from 'react-native';
import MenuStack from './src/Components/Navigators/Stack/Menu';
import MegaSenaStack from './src/Components/Navigators/Stack/MegaSena';
import LotoFacilStack from './src/Components/Navigators/Stack/LotoFacilSimples';
import LotoFacilImparesParesStack from './src/Components/Navigators/Stack/LotoFacilImparesPares';
import QuinaSimplesStack from './src/Components/Navigators/Stack/QuinaSimples';
import LotomaniaSimplesStack from './src/Components/Navigators/Stack/LotomaniaSimples';
import DiaSorteSimplesStack from './src/Components/Navigators/Stack/DiaSorteSimples';
import { color } from 'react-native-reanimated';


const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
export default function App() {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  return (
    
    <NavigationContainer>
      <Drawer.Navigator 
      initialRouteName="Menu" 
      openByDefault
      drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
      drawerStyle={{
        backgroundColor: '#363636' ,
        width: '100%',
      }}
      overlayColor="transparent"
      drawerContentOptions={{
        activeTintColor: '#D6CE0D',
        inactiveTintColor: '#fff',
        
        itemStyle: { 
          marginVertical: 5,
        },
      }}
      // screenOptions={{
      //   headerStyle: {
      //     backgroundColor: '#f4511e',
      //   },
      //   headerTintColor: '#fff',
      //   headerTitleStyle: {
      //     fontWeight: 'bold',
      //   },
      // }}
      // drawerContent="AAAAAAA"
      
    >
      <Drawer.Screen
          name="Menu"
          component={MenuStack}
          options={{
            title: '\n\nSugestões de jogos lotéricos\n\n', //Set Header Title
            
          }}
        />
      
      <Drawer.Screen 
        name="MegaSena" 
        options={{ 
          drawerLabel: 'Mega Sena simples',
          color:'#FFF'
         }}
        component={MegaSenaStack} />
      <Drawer.Screen
        name="LotoFacil"
        options={{ 
            drawerLabel: 'Loto Fácil simples',
          }}
         component={LotoFacilStack} />
      <Drawer.Screen
        name="LotoFacilImparesPares"
        options={{ 
            drawerLabel: 'Loto Fácil Pares e Ímpares',
          }}
         component={LotoFacilImparesParesStack} />
      <Drawer.Screen
        name="QuinaSimples"
        options={{ 
            drawerLabel: 'Quina Simples',
          }}
         component={QuinaSimplesStack} />
      <Drawer.Screen
        name="LotomaniaSimples"
        options={{ 
            drawerLabel: 'Lotomania Simples',
          }}
         component={LotomaniaSimplesStack} />
      <Drawer.Screen
        name="DiaSorteSimples"
        options={{ 
            drawerLabel: 'Dia de Sorte Simples',
          }}
         component={DiaSorteSimplesStack} />
         
    </Drawer.Navigator>

      {/* <HomeStack.Navigator 
        screenOptions={{
          headerStyle:{
            backgroundColor: '#fda917',
            
          },
          headerBackTitle:"Back",
          headerTitleAlign:'center',
        }}

        
      >
        <HomeStack.Screen name="Sugestões de Jogos" component={DrawerStackScreen}  />
      </HomeStack.Navigator> */}
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  tabViewStyle: {
    flexDirection:"row",
    justifyContent:"space-around"
  }
});
