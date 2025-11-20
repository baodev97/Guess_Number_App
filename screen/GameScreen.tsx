import Title from "@/components/ui/Title";
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

export default function GameScreen(){

    return (
        <View style={styles.appContainer}>
             <Title>Opponent&apos;s Guess</Title>
             {/* GUESS */}
             <Text></Text>
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