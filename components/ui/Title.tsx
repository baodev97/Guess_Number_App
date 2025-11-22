import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

type TitleProps = {
  children: ReactNode;
};

function Title({ children }: TitleProps) {
  return <Text style={styles.title}>{children}</Text>;
}
export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
    borderWidth: 4,
    borderColor: Colors.accent500,
    textAlign: "center",
    padding: 12,
  },
});
