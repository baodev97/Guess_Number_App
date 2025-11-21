import NumberContainer from "@/components/game/NumberContainer";
import Title from "@/components/ui/Title";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";


type GenerateRandomNumber = {
    min:number,
    max:number,
    exclude:number
}

function generateRandomBetween({min, max, exclude}:GenerateRandomNumber) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween({min, max, exclude});
  } else {
    return rndNum;
  }
}

export default function GameScreen({userNumber}:{userNumber:number}){
    const initialGuess = generateRandomBetween({min:1,max:100,exclude:userNumber})
    const [guessNumber,setGuessNumber] = useState(initialGuess)
    return (
        <View style={styles.appContainer}>
             <Title>Opponent&apos;s Guess</Title>
             {/* GUESS */}
             <NumberContainer>{guessNumber}</NumberContainer>
             <View>
                <Text>Higher or Lower?</Text>
                {/* + */}
                {/* - */}
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