import PrimaryButton from "@/components/PrimaryButton";
import { StyleSheet, TextInput, View } from "react-native";

export default function StartGameScreen(){
    return (
        <View style={styles.inputOuterContainer}>
            <TextInput></TextInput>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
  inputOuterContainer: {
    marginTop: '25%',
    marginHorizontal:24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#72063c",
    elevation:48,
    shadowColor:"black",
    shadowOffset: {width: 0,height:2},
    shadowRadius: 6,
    shadowOpacity:0.25
  },
  textInputContainer: {
    borderBottomColor: "#E4DB31",
    borderBottomWidth: 4,
    color: "#E4DB31",
  },
  buttonContainer:{
    flexDirection:"row"
  },
  textContainer: {
    color: "black",
  },
});