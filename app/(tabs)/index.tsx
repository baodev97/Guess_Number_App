import Colors from "@/constants/colors";
import GameOverScreen from "@/screen/GameOverScreen";
import GameScreen from "@/screen/GameScreen";
import StartGameScreen from "@/screen/StartGameScreen";
import { useFonts } from 'expo-font';
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



SplashScreen.preventAutoHideAsync().catch(() => {
});

export default function HomeScreen() {
  const [userNumber, setUserNumber] = useState<number>();
  const [isGameOver, setIsGameOver]= useState(true);

  const [fontsLoaded] = useFonts({
    'open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('../../assets/fonts/OpenSans-Bold.ttf')
  })
 

  function handlerPickNumber(pickNumber: number) {
    setUserNumber(pickNumber);
    setIsGameOver(false);
  }
  function handlerGameOver(){
    setIsGameOver(true);
  }
  let screen = <StartGameScreen handlerPickNumber={handlerPickNumber} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} handlerGameOver={handlerGameOver} />;
  }
  if(isGameOver && userNumber){
    screen = <GameOverScreen/>
  }
 
  useEffect(()=>{
    async function hide(){
      if(fontsLoaded){
        console.log("check fontsLoaded", fontsLoaded)
        await SplashScreen.hideAsync();
        
      }
    }
    hide();
    console.log("run code")
  },[fontsLoaded])
   if(!fontsLoaded){
    console.log("run code 2")
    return null
  }

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
