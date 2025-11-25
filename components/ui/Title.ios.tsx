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
    fontFamily:'open-sans-bold',
    // fontWeight: "bold",
    color: Colors.white,
    // borderWidth: Platform.OS === 'android'?2:0,
    // borderWidth:Platform.select({ios:0,android:2}),
    borderWidth:0,
    borderColor: Colors.white,
    textAlign: "center",
    padding: 12,
    maxWidth:'80%',
    width:300
  },
});
