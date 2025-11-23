import Title from "@/components/ui/Title";
import Colors from "@/constants/colors";
import { Image, StyleSheet, Text, View } from "react-native";

export default function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.imange} source={require("../assets/images/success.png")} />
      </View>
      <Text>Your phone needed X rounds to guess the number Y.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth:3,
    borderColor: Colors.primary800,
    overflow:'hidden',
    margin:36
  },
  imange: {
    width:'100%',
    height:'100%'
  },
});
