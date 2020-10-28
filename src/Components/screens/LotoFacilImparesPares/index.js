import React, { useState, useEffect } from 'react';
import { View, Text, FlatList,SafeAreaView,TouchableOpacity,TextInput,ScrollView } from 'react-native';
import {css} from '../../../../assets/css/Styles'

// import NumberGenerator from '../MegaSena'
// import PrincipalScreen from '../Principal'


export default function LotoFacilImparesPares(){
    const [myNumbers, setMyNumbers] = useState();
    const [quantityNumbers, setQuantityNumbers] = useState(15);
    const [pairs, setPairs] = useState(7);
    const [unpaired, setUnpaired] = useState(8);

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

    function pairsAndUnpairs(){
        getLotteryNumbers()
        let condition = false; 
        while(!condition){
            let unpairedList = [];
            let pairsList = [];
            for(let i=0;i<lotteryNumbers.length;i++){
                if(lotteryNumbers[i] % 2 === 0)
                    pairsList.push(lotteryNumbers[i]);
                else
                    unpairedList.push(lotteryNumbers[i]);    
            }

            if(pairsList.length === 7 || unpairedList.length === 8)
                condition = true;
            else 
                getLotteryNumbers()
        }
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
            <TextInput style={css.input} 
                        keyboardType='numeric' 
                        name="consumo" id="consumo" 
                        placeholder="Quantidade de pares: 7" 
                        placeholderTextColor="#000"
                        ref= {(el) => {  }}
                        onChangeText={(quantityPairs) => setPairs(quantityPairs)}
                        value={pairs} />
            <TextInput style={css.input} 
                        keyboardType='numeric' 
                        name="consumo" id="consumo" 
                        placeholder="Quantidade de ímpares: 8" 
                        placeholderTextColor="#000"
                        ref= {(el) => {  }}
                        onChangeText={(quantityUnpaired) => setUnpaired(quantityUnpaired)}
                        value={unpaired} />
            <TouchableOpacity
               style = {css.generateButtonLotoFacil}
               onPress={pairsAndUnpairs} >
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