import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import MegaSena from '../MegaSena'
import LotoFacil from '../LotoFacilSimples'
import { useWindowDimensions } from 'react-native';



const Drawer = createDrawerNavigator();


export default function DrawerStackScreen() {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  return (
    <Drawer.Navigator 
      initialRouteName="Mega Sena" 
      openByDefault
      drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
      drawerStyle={{
        backgroundColor: '#c6cbef',
        width: 240,
      }}
      overlayColor="transparent"
    >
      <Drawer.Screen name="Mega Sena" component={MegaSena} />
      <Drawer.Screen name="Loto fácil" component={LotoFacil} />
    </Drawer.Navigator>
  );
}