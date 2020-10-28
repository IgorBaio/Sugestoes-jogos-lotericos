import React, { useState, useEffect } from 'react';
import { View, Text, FlatList,SafeAreaView,TouchableOpacity,TextInput,ScrollView } from 'react-native';
import {css} from '../../../../assets/css/Styles'

// import NumberGenerator from '../MegaSena'
// import PrincipalScreen from '../Principal'
const months = {
    1:'JAN',
    2:'FEV',
    3:'MAR',
    4:'ABR',
    5:'MAI',
    6:'JUN',
    7:'JUL',
    8:'AGO',
    9:'SET',
    10:'OUT',
    11:'NOV',
    12:'DEZ'
}

export default function DiaSorteSimples(){
    const [myNumbers, setMyNumbers] = useState();
    const [myMonth, setMyMonth] = useState();
    const [quantityNumbers, setQuantityNumbers] = useState(7);

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
       if(quantityNumbers <= 7){
            range = 7;
       }else if(quantityNumbers >= 15){
           range = 15;
       }else{
           range = quantityNumbers;
       }
       while(lotteryNumbers.length < range){
          let newNumber = getRandomNumber(1,31);
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
       let monthNumber = getRandomNumber(1,12);

       setMyMonth(months[monthNumber])
       lotteryNumbers.sort(function(a,b){
          return a-b;
       });
    //    console.log(lotteryNumbers);
    //    return lotteryNumbers;
        // let numbers = format(lotteryNumbers)
        setMyNumbers(lotteryNumbers);
        console.log(myNumbers);
        console.log(monthNumber);
        console.log(myMonth);

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
                        placeholder="Quantidade de números: 7" 
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
             <Text style={css.month} >{myMonth}</Text>  
                
            </ScrollView>
        </View>
    )
}