import NumberContainer from "@/components/game/NumberContainer";
import Card from "@/components/ui/Card";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Title from "@/components/ui/Title";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

type GenerateRandomNumber = {
  min: number;
  max: number;
  exclude: number;
};
type GameScreenProps = {
  userNumber: number;
  handlerGameOver: () => void;
};

function generateRandomBetween({ min, max, exclude }: GenerateRandomNumber) {
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  if (rndNum === exclude) {
    return generateRandomBetween({ min, max, exclude });
  } else {
    return rndNum;
  }
}
let minNumberInitial = 1;
let maxNumberInitial = 100;

export default function GameScreen({
  userNumber,
  handlerGameOver,
}: GameScreenProps) {
  const [guessNumber, setGuessNumber] = useState(() => {
    return generateRandomBetween({
      min: minNumberInitial,
      max: maxNumberInitial,
      exclude: userNumber,
    });
  });

  function handlerNextGuess(direction: string) {
    if (
      ((direction === "lower") && (userNumber > guessNumber)) ||
      ((direction === "gather") && (userNumber < guessNumber))
    ) {
      Alert.alert("Don't lie!", "I know you lie", [{ text: "sorry" }]);
      return;
    }
    if (direction === "lower") {
      maxNumberInitial = guessNumber;
    } else {
      minNumberInitial = guessNumber + 1;
    }
    const newRdNumber = generateRandomBetween({
      min: minNumberInitial,
      max: maxNumberInitial,
      exclude:guessNumber,
    });
    setGuessNumber(newRdNumber);
  }
  useEffect(() => {
    if (userNumber === guessNumber) {
      handlerGameOver();
    }
  }, [guessNumber, userNumber, handlerGameOver]);
  return (
    <View style={styles.appContainer}>
      <Title>Opponent&apos;s Guess</Title>
      <NumberContainer>{guessNumber}</NumberContainer>
      <Card>
        <Text>Higher or Lower?</Text>
        <PrimaryButton onPress={() => handlerNextGuess("lower")}>
          -
        </PrimaryButton>
        <PrimaryButton onPress={() => handlerNextGuess("gather")}>
          +
        </PrimaryButton>
      </Card>
      {/* <View>Log Guess</View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 12,
  },
});
