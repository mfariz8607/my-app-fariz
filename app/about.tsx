import { Text, View, StyleSheet } from "react-native";

const About = ()=>{
    return (
        <View style={[ styles.container, styles.itemCenter ]}>
            <Text>Tes about</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
    },
    itemCenter:{
        alignItems: "center",
    }
})

export default About