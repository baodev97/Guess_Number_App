import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

type PrimaryButtonProps = {
    children: ReactNode
}
export default function PrimaryButton({children}:PrimaryButtonProps) {
  return (
    <View >
      <Text>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
});
