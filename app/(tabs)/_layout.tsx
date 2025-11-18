import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from '.';

export default function TabLayout() {
  return (
    <View style={styles.appContainer}>
    <HomeScreen/>
    </View>
  );
}
const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    padding:8,
    backgroundColor:"#E44631"
  }
})
