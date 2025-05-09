import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface RadioButtonType {
    onSelect: (value:any) => void;
    label: String;
    value: any;
    selected?: Boolean;
}

export const RadioButton = (props:RadioButtonType) => (
    <TouchableOpacity style={ styles.radioContainer } onPress={() => props.onSelect(props.value)}>
        <View style={[styles.radioCircle, props.selected && styles.selected]}>
            {props.selected && <View style={ styles.innerCircle } />}
        </View>
        <Text style={ styles.label }>
            { props.label }
        </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: { padding: 20 },
    radioContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
    radioCircle: {
      height: 20, width: 20, borderRadius: 10, borderWidth: 2, borderColor: '#444',
      alignItems: 'center', justifyContent: 'center',
    },
    selected: { borderColor: '#007BFF' },
    innerCircle: {
      height: 10, width: 10, borderRadius: 5, backgroundColor: '#007BFF',
    },
    label: { marginLeft: 10 },
    result: { marginTop: 20, fontWeight: 'bold' },
});