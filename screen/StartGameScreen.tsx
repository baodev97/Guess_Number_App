import PrimaryButton from "@/components/PrimaryButton";
import { StyleSheet, TextInput, View } from "react-native";

export default function StartGameScreen(){
    return (
        <View>
            <TextInput></TextInput>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginVertical: 20,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#8C142E",
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