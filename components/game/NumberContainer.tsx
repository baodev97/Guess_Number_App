import Colors from "@/constants/colors";
import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
type NumberContainerProps = {
    children:ReactNode
}
function NumberContainer({children}:NumberContainerProps){
    return (
        <View style={styles.numberContainer}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}
export default NumberContainer;

const styles = StyleSheet.create({
    numberContainer:{
        margin:24,
        padding:24,
        borderRadius:8,
        borderColor: Colors.accent500,
        borderWidth:4,
        justifyContent:'center',
        alignItems:'center'
    },
    numberText:{
        color: Colors.accent500,
        fontSize:24,
        fontWeight:'bold'
    }
})