import Colors from "@/constants/colors";
import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

type InstructionTextProps = {
    children:ReactNode,
    style?: object
}

export default function InstructionText ({children,style}:InstructionTextProps){
    return (
        <Text style={[styles.instructionText, style]}>{children}</Text>
    )
}
const styles = StyleSheet.create({
    instructionText:{
    fontSize:24,
    color:Colors.accent500,
    fontFamily:'open-sans'
  }
})