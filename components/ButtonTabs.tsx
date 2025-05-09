import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonTabsType {
    onPress(): any;
    title: String;
    isActive: Boolean;
    customeStyle?: any;
}

export const ButtonTabs = (props: ButtonTabsType) => {

    return (
        <TouchableOpacity style={[
            props.customeStyle,
            props.isActive ? styles.buttonActive : styles.buttonInActive]} onPress={props.onPress}>
            <Text>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonInActive: {
        padding: 5,
        alignItems: 'center'
    },
    buttonActive: {
        padding: 5,
        borderBottomWidth: 2,
        borderBottomColor: 'blue',
        alignItems: 'center'
    }
})