import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24,
    },

    eventName: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48,
    },

    eventDate: {
        color: '#6B6B6B',
        fontSize: 16,
    },

    input: {
        flex: 1,
        height: 56,
        borderRadius: 8,
        backgroundColor: '#1F1E25',
        color: '#FFF',
        padding: 16,
        fontSize: 16,
    },

    texts: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },

    buttonText: {
        color: '#FFF',
        fontSize: 24,
    },

    button: {
        width: 56,
        height: 56,
        borderRadius: 8,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center',

    },

    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 34,
        gap: 8,
        marginBottom: 44,
    },

    listEmptyText: {
        color: '#FFF',
        fontSize: 16,
        textAlign: 'center',
    }

})