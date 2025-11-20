import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import HomeScreen from ".";

export default function TabLayout() {
  

  return (
    <LinearGradient colors={["#E44631", "#ddb52f"]} style={styles.appContainer}>
      <ImageBackground
        style={styles.appContainer}
        source={require("../../assets/images/riho-kroll-m4sGYaHYN5o-unsplash.jpg")}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <HomeScreen />
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
