import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type PrimaryButtonProps = {
    children: ReactNode
}
function pressHandler(){
    console.log('pressed!')
}
export default function PrimaryButton({children}:PrimaryButtonProps) {
  return (
    <Pressable onPress={pressHandler}>
    <View style={styles.buttonContainer}>
      <Text style={styles.textButton}>{children}</Text>
    </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:'#850545ff',
        borderRadius:28,
        paddingVertical:8,
        paddingHorizontal:16,
        margin:4
    },
    textButton:{
        color:'white',
        textAlign:'center'
    }
});
