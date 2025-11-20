import GameScreen from "@/screen/GameScreen";
import StartGameScreen from "@/screen/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";

export default function HomeScreen() {
  const [userNumber, setUserNumber]= useState<number>();
  function handlerPickNumber(pickNumber:number){
    setUserNumber(pickNumber) 
  }
  let screen = <StartGameScreen handlerPickNumber={handlerPickNumber}/>
  if(userNumber){
    screen = <GameScreen/>
  }

  return (
    <LinearGradient colors={["#E44631", "#ddb52f"]} style={styles.appContainer}>
      <ImageBackground
        style={styles.appContainer}
        source={require("../../assets/images/riho-kroll-m4sGYaHYN5o-unsplash.jpg")}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
       {screen}
      </ImageBackground>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  backgroundImage:{
    opacity:0.25
  }
});


