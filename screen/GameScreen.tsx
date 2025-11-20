import { StyleSheet, Text, View } from "react-native";

export default function GameScreen(){
    return (
        <View style={styles.appContainer}>
             <Text> Opponent&apos;s Guess</Text>
             {/* GUESS */}
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