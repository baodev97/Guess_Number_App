import { ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';

type TitleProps = {
    children: ReactNode;
}

function Title({children}:TitleProps){
    return (
        <Text style={styles.title}>{children}</Text>
    )
}
export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:"#ddb52f",
        borderWidth:4,
        borderColor:"#ddb52f",
        textAlign:'center',
        padding:12
    }
})