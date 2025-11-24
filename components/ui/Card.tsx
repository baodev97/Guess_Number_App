import Colors from '@/constants/colors';
import { ReactNode } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
type Cardprops = {
    children: ReactNode
}

export default function Card({children}:Cardprops){
    return (
        <View style={styles.cardContainer}>{children}</View>
    )
}
const deviceWidth = Dimensions.get('screen').width;


const styles = StyleSheet.create({
    cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? "2%":"5%",
    marginHorizontal: 24,
    padding: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 48,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});