import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1F1E25',
        borderRadius: 8,
        marginBottom: 10,
    },

    name: {
        flex: 1,
        color: '#FFF',
        fontSize: 16,
        marginLeft: 16,
    },

    buttonText: {
        color: '#FFF',
        fontSize: 24,
    },

    button: {
        width: 56,
        height: 56,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: '#E23C44',
        alignItems: 'center',
        justifyContent: 'center',

    },
})