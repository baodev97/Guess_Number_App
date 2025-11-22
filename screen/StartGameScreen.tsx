import PrimaryButton from "@/components/ui/PrimaryButton";
import Title from "@/components/ui/Title";
import Colors from "@/constants/colors";
import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
type StartGameScreenProps = {
  handlerPickNumber: (pickNumber: number) => void;
};

export default function StartGameScreen({
  handlerPickNumber,
}: StartGameScreenProps) {
  const [enterNumber, setEnterNumber] = useState("");
  function handlerEnterNumber(enterNumber: string) {
    setEnterNumber(enterNumber);
    console.log("check flow");
  }
  console.log("check enterNumber", enterNumber);
  function handlerReset() {
    setEnterNumber("");
    console.log("handler reset");
  }
  function handlerCofirm(enterNumber: string) {
    const numberInput = parseInt(enterNumber);
    if (isNaN(numberInput) || numberInput < 0 || numberInput > 99) {
      Alert.alert("Number isn't valid", "Confirm", [
        { text: "OK", onPress: handlerReset },
      ]);
    } else {
      handlerPickNumber(numberInput);
    }

    console.log("confirm");
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <View style={styles.inputContainer}>
        <Text style={styles.instructionText}>Enter a Number</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize="none"
          value={enterNumber}
          onChangeText={handlerEnterNumber}
        ></TextInput>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handlerReset}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => handlerCofirm(enterNumber)}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    marginTop:'25%',
    alignItems:'center'
  },
  instructionText:{
    fontSize:24,
    color:Colors.accent500
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    marginHorizontal: 24,
    padding: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 48,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 70,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
