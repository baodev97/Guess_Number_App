import Card from "@/components/ui/Card";
import InstructionText from "@/components/ui/InstructionText";
import PrimaryButton from "@/components/ui/PrimaryButton";
// eslint-disable-next-line import/no-unresolved
import Title from "@/components/ui/Title";
import Colors from "@/constants/colors";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
type StartGameScreenProps = {
  handlerPickNumber: (pickNumber: number) => void;
};

export default function StartGameScreen({
  handlerPickNumber,
}: StartGameScreenProps) {
  const [enterNumber, setEnterNumber] = useState("");

  const { width, height } = useWindowDimensions();

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
  console.log(height, "check height");
  const marginTopDistance = height < 395 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
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
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

//const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  screen:{
    flex:1
  },
  rootContainer: {
    flex: 1,
    //marginTop:deviceHeight < 380? 30:100,
    alignItems: "center",
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
