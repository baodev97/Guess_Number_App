import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet } from 'react-native';
import HomeScreen from '.';


export default function TabLayout() {
  return (
    <LinearGradient colors={['#E44631','#ddb52f']} style={styles.appContainer}>
    <HomeScreen/>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    padding:8,
    // backgroundColor:"#E44631"
  }
})
