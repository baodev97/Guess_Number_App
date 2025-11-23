import PrimaryButton from "@/components/ui/PrimaryButton";
import Title from "@/components/ui/Title";
import Colors from "@/constants/colors";
import { Image, StyleSheet, Text, View } from "react-native";

type GameOverScreenProps = {
    userNumber:number,
    guessRounds:number,
    onStartNewgame:()=> void
}

export default function GameOverScreen({userNumber,guessRounds,onStartNewgame}:GameOverScreenProps) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imange}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.sumaryText}>
        Your phone needed <Text style={styles.highlight}>{guessRounds}</Text> rounds to
        guess the number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={()=>{onStartNewgame()}}>Start New Game</PrimaryButton>
    </View>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  imange: {
    width: "100%",
    height: "100%",
  },
  sumaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
