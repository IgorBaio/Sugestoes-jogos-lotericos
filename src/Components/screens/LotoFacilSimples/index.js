import React, { useState, useEffect } from 'react';
import { View, Text, FlatList,SafeAreaView,TouchableOpacity,TextInput,ScrollView } from 'react-native';
import {css} from '../../../../assets/css/Styles'

// import NumberGenerator from '../MegaSena'
// import PrincipalScreen from '../Principal'


export default function LotoFacilSimples(){
    const [myNumbers, setMyNumbers] = useState();
    const [quantityNumbers, setQuantityNumbers] = useState(15);

    let lotteryNumbers = [];
    
    function format(lotteryNumbers){
        let nums = "";
        for(let i=0;i<lotteryNumbers.length;i++){
            if(i === lotteryNumbers.length-1)
                nums += lotteryNumbers[i];
            else
                nums += `${lotteryNumbers[i]}, `;
        }
        return nums;
    }

    function getRandomNumber(from, to){
       return Math.max(from, Math.ceil(Math.random()*to));
    }
    
    function getLotteryNumbers(){
       lotteryNumbers = [];
       let range = 0;
       if(quantityNumbers <= 15){
            range = 15;
       }else if(quantityNumbers >= 20){
           range = 20;
       }else{
           range = quantityNumbers;
       }
       while(lotteryNumbers.length < range){
          let newNumber = getRandomNumber(1,25);
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
        // let numbers = format(lotteryNumbers)
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
            <TextInput style={css.input} 
                        keyboardType='numeric' 
                        name="consumo" id="consumo" 
                        placeholder="Quantidade de números: 15" 
                        placeholderTextColor="#000"
                        ref= {(el) => {  }}
                        onChangeText={(range) => setQuantityNumbers(range)}
                        value={quantityNumbers} />
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
}