import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

const LoginScreen = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        // Handle login logic
    }

    return ( <
        View style = { styles.container } >
        <
        TextInput style = { styles.input }
        placeholder = "Username"
        value = { username }
        onChangeText = { setUsername }
        /> <
        TextInput style = { styles.input }
        placeholder = "Password"
        secureTextEntry = { true }
        value = { password }
        onChangeText = { setPassword }
        /> <
        TouchableOpacity style = { styles.button }
        onPress = { handleLogin } >
        <
        Text style = { styles.buttonText } > Login < /Text> <
        /TouchableOpacity> <
        /View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#2E8B57',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default LoginScreen;