import NumberContainer from "@/components/game/NumberContainer";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Title from "@/components/ui/Title";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";


type GenerateRandomNumber = {
    min:number,
    max:number,
    exclude:number
}

function generateRandomBetween({min, max, exclude}:GenerateRandomNumber) {
  const rndNum = Math.floor(Math.random() * (max - min) +min);
  if (rndNum === exclude) {
    return generateRandomBetween({min, max, exclude});
  } else {
    return rndNum;
  }
}
let minNumberInitial = 1;
let maxNumberInitial = 100;
console.log("check render lại");

export default function GameScreen({userNumber}:{userNumber:number}){
    const initialGuess = generateRandomBetween({min:minNumberInitial,max:maxNumberInitial,exclude:userNumber})
    const [guessNumber,setGuessNumber] = useState(initialGuess)
    console.log("check render", initialGuess)

    function handlerNextGuess (direction:string){ 
        if(direction === 'lower'){
            maxNumberInitial = guessNumber;
            console.log(minNumberInitial,maxNumberInitial)
            const newRdNumber = generateRandomBetween({min:minNumberInitial,max:maxNumberInitial,exclude:userNumber})
            console.log('check next guess number',newRdNumber)
            setGuessNumber(newRdNumber)
        }else{
            minNumberInitial = guessNumber +1;
            console.log(minNumberInitial,maxNumberInitial)
            const newRdNumber = generateRandomBetween({min:minNumberInitial,max:maxNumberInitial,exclude:userNumber})
            console.log('check next guess number',newRdNumber)
            setGuessNumber(newRdNumber)
        }
    }
    return (
        <View style={styles.appContainer}>
             <Title>Opponent&apos;s Guess</Title>
             {/* GUESS */}
             <NumberContainer>{guessNumber}</NumberContainer>
             <View>
                <Text>Higher or Lower?</Text>
                <PrimaryButton onPress={()=>handlerNextGuess('lower')}>-</PrimaryButton>
                <PrimaryButton onPress={()=>handlerNextGuess('gather')}>+</PrimaryButton>
             </View>
             {/* <View>Log Guess</View> */}
        </View>
    )
}
const styles = StyleSheet.create({
    appContainer:{
        flex:1, 
        padding:12
    }
})