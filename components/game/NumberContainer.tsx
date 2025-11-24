import Colors from "@/constants/colors";
import { ReactNode } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
type NumberContainerProps = {
  children: ReactNode;
};
function NumberContainer({ children }: NumberContainerProps) {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}
export default NumberContainer;

const widthDevices = Dimensions.get("screen").width;
console.log(widthDevices, "check width Devices");

const styles = StyleSheet.create({
  numberContainer: {
    margin: widthDevices < 380 ? 12 : 24,
    padding: widthDevices < 380 ? 12 : 24,
    // margin: 24,
    // padding:24,
    borderRadius: 8,
    borderColor: Colors.accent500,
    borderWidth: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 24,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});
