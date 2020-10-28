import React from 'react';
import { SectionList, StyleSheet, Text, View,TouchableOpacity,Button } from 'react-native';
import {css} from '../../../../assets/css/Styles'

export default function PrincipalScreen(props){
    return(
        <View style={css.containerMenu}>
        <SectionList
          sections={[
            {title: 'Mega-Sena', data: [
                {   
                    nome:'Mega Sena simples',
                    pagina:'MegaSena'
                }
            ]},
            {title: 'Loto Fácil', data: [
                {   
                    nome:'Loto Fácil simples',
                    pagina:'LotoFacil'
                },
                {   
                    nome:'Loto Fácil Pares e Ímpares',
                    pagina:'LotoFacilImparesPares'
                }
            ]},
            {title: 'Quina', data: [
                {   
                    nome:'Quina simples',
                    pagina:'QuinaSimples'
                }
            ]},
            {title: 'Super Sete', data: [
                {   
                    nome:'Loto Fácil simples',
                    pagina:'LotoFacil'
                }
            ]},
            {title: 'Lotomania', data: [
                {   
                    nome:'Lotomania simples',
                    pagina:'LotomaniaSimples'
                }
            ]},
            {title: 'Dia de sorte', data: [
                {   
                    nome:'Dia de sorte simples',
                    pagina:'DiaSorteSimples'
                }
            ]},
          ]}
          renderItem={({item}) =><TouchableOpacity
                                    style={styles.sectionItem}
                                    onPress={()=>props.navigation.navigate(item.pagina)} >
                                    <Text style = {styles.item}>{item.nome} </Text>
                                </TouchableOpacity>
          }
         
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22,
     
    },
    sectionHeader: {
      paddingTop: 5,
      paddingLeft: 15,
      paddingRight: 15,
      paddingBottom: 5,
      fontSize: 20,
      fontWeight: 'bold',
      backgroundColor: '#0a0ac9',
      color:'#20aF22',
      borderWidth:1,
      borderRadius:15,
      marginTop:20,
    },
    item: {
      alignSelf:'center',
      padding: 10,
      fontSize: 18,
      height: 44,
      color:"#fff"
    },
    sectionItem:{
      backgroundColor:"#363636",
      borderColor:'#fff',
      borderWidth: 1,
      shadowColor: "#fff",
      shadowOffset: {
          width: 0,
          height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      borderRadius:25,
      margin:5,


    }
  })