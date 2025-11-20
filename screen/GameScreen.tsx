import { StyleSheet, Text, View } from "react-native";

export default function GameScreen(){
    return (
        <View style={styles.appContainer}>
             <Text>Game Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    appContainer:{
        flex:1, 
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center'
    }
})