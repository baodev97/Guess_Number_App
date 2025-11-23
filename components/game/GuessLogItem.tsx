import Colors from "@/constants/colors"
import { StyleSheet, Text, View } from "react-native"

type GuessLogItemProps = {
    roundNumber:number,
    guessNumber:number
}


export default function GuessLogItem({roundNumber,guessNumber}:GuessLogItemProps){
    return (
        <View style={styles.listItem}>
            <Text>#{roundNumber}</Text>
            <Text>Opponent&apos;s Guess: {guessNumber}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem:{
        borderColor:Colors.primary800,
        borderWidth:1,
        borderRadius:12,
        padding:12,
        marginVertical:8,
        backgroundColor:Colors.accent500,
        flexDirection:'row',
        justifyContent:'space-between',
        elevation:4,
        shadowColor:'black',
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.25,
        shadowRadius:3
    }
    
})
