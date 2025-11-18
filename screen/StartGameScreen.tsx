import PrimaryButton from "@/components/PrimaryButton";
import { StyleSheet, TextInput, View } from "react-native";

export default function StartGameScreen(){
    return (
        <View style={styles.inputOuterContainer}>
            <TextInput style={styles.numberInput} maxLength={2}></TextInput>
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
  numberInput: {
    height:50,
    width:50,
    fontSize:32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    fontWeight:'bold',
    textAlign:'center'
  },
});