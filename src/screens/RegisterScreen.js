import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RegisterScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (text) => setName(text);
    const handleEmailChange = (text) => setEmail(text);
    const handlePasswordChange = (text) => setPassword(text);

    const handleRegisterPress = () => {
        // Add code to register user with name, email, and password
    };

    return ( <
        View style = { styles.container } >
        <
        Text style = { styles.title } > Create an Account < /Text> <
        TextInput style = { styles.input }
        placeholder = "Name"
        value = { name }
        onChangeText = { handleNameChange }
        /> <
        TextInput style = { styles.input }
        placeholder = "Email"
        value = { email }
        onChangeText = { handleEmailChange }
        /> <
        TextInput style = { styles.input }
        placeholder = "Password"
        value = { password }
        onChangeText = { handlePasswordChange }
        secureTextEntry /
        >
        <
        Button title = "Register"
        onPress = { handleRegisterPress }
        /> <
        /View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
});

export default RegisterScreen;