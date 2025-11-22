import Colors from "@/constants/colors";
import GameScreen from "@/screen/GameScreen";
import StartGameScreen from "@/screen/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [userNumber, setUserNumber] = useState<number>();
  function handlerPickNumber(pickNumber: number) {
    setUserNumber(pickNumber);
  }
  let screen = <StartGameScreen handlerPickNumber={handlerPickNumber} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
  }
  console.log(userNumber);

  return (
    <LinearGradient
      colors={[Colors.primary600, Colors.accent500]}
      style={styles.appContainer}
    >
      <ImageBackground
        style={styles.appContainer}
        source={require("../../assets/images/riho-kroll-m4sGYaHYN5o-unsplash.jpg")}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.appContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
