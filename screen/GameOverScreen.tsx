import PrimaryButton from "@/components/ui/PrimaryButton";
// eslint-disable-next-line import/no-unresolved
import Title from "@/components/ui/Title";
import Colors from "@/constants/colors";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

type GameOverScreenProps = {
  userNumber: number;
  guessRounds: number;
  onStartNewgame: () => void;
};

export default function GameOverScreen({
  userNumber,
  guessRounds,
  onStartNewgame,
}: GameOverScreenProps) {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;
  if (width < 380) {
    imageSize = 150;
  }
  if (height < 395) {
    imageSize = 80;
  }
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={styles.imageContainer}>
          <Image
            style={[styles.imange, imageStyle]}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.sumaryText}>
          Your phone needed <Text style={styles.highlight}>{guessRounds}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton
          onPress={() => {
            onStartNewgame();
          }}
        >
          Start New Game
        </PrimaryButton>
      </View>
    </ScrollView>
  );
}

// const deviceWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding:20
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    //borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  imange: {
    width: "100%",
    height: "100%",
  },
  sumaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
