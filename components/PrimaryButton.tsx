import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type PrimaryButtonProps = {
  children: ReactNode;
};
function pressHandler() {
  console.log("pressed!");
}
export default function PrimaryButton({ children }: PrimaryButtonProps) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
      >
        <Text style={styles.textButton}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#bc0e65ff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  textButton: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
