import { Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
    const splashTimer = () => {
        setTimeout(() => {
            router.replace("./(tabs)")
        }, 3000)
    }

    useEffect(() =>{
        splashTimer()
    })

    return (
        <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.container}
        >
            <Text style={styles.textLogo}>Elearning</Text>
            <Text style={styles.textSubLogo}>
                Belajar pemrograman semakin mudah
            </Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textLogo: {
        fontSize: 90,
        fontWeight: 700,
        color: 'white'
    },
    textSubLogo: {
        color: 'white'
    }
})