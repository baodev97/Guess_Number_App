import PrimaryButton from "@/components/PrimaryButton";
import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
export default function StartGameScreen() {
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
      Alert.alert("Number isn't valid", "Confirm",[{text:'OK', onPress:()=>handlerReset()}]);
    }
    console.log("confirm");
  }
  return (
    <View style={styles.inputContainer}>
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
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "25%",
    marginHorizontal: 24,
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#5e0431ff",
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
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
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
