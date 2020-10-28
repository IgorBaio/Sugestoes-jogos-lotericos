import React, { useState } from 'react';
import { View, Text, FlatList,SafeAreaView,TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {css} from '../../../../assets/css/Styles'

export default function LotomaniaScreen(){

    const [myNumbers, setMyNumbers] = useState();

    let lotteryNumbers = [];
    
    function getRandomNumber(from, to){
       return Math.max(from, Math.ceil(Math.random()*to));
    }
    
    function getLotteryNumbers(){
       lotteryNumbers = [];
       while(lotteryNumbers.length < 50){
          let newNumber = getRandomNumber(1,100);
          let foundNumber = false;
    
          for(let i = 0; i < lotteryNumbers.length; i++){
             let currentNumber = lotteryNumbers[i];
    
             if(currentNumber === newNumber){
                foundNumber = true;
                break;
             }
          }
    
          if(!foundNumber){
             lotteryNumbers.push(newNumber);
          }
       }
       lotteryNumbers.sort(function(a,b){
          return a-b;
       });
    //    console.log(lotteryNumbers);
    //    return lotteryNumbers;
        setMyNumbers(lotteryNumbers);
        console.log(myNumbers);

    }

    function refreshScreen(numbers) {
       getLotteryNumbers();
    }

   //  let numbers = getLotteryNumbers();
    return(
        <View style={css.container}>
           <ScrollView>
            
            <TouchableOpacity
               style = {css.generateButtonLotoFacil}
               onPress={getLotteryNumbers} >
               <Text style = {css.generateButtonText}> Gerar </Text>
            </TouchableOpacity>
            <FlatList
                    data={myNumbers}
                    renderItem = {({item}) => <Text style={css.conteudo}>{item}</Text>
                    }
                    keyExtractor={(item)=>item}
                
                />
              
            </ScrollView>
        </View>
    )
};
