import PrimaryButton from "@/components/PrimaryButton";
import { StyleSheet, TextInput, View } from "react-native";

export default function StartGameScreen() {
  return (
    <View style={styles.inputOuterContainer}>
      <View style={styles.inputInnerContainer}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize="none"
        ></TextInput>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonInnerContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View >
        <View style={styles.buttonInnerContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputOuterContainer: {
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
  inputInnerContainer: {
    alignItems: "center",
    marginBottom: 8,
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
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonInnerContainer:{
    width:120
  }
});
