import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const VirtualReplicaCustomizationScreen = () => {
        const [gender, setGender] = React.useState('');
        const [bodyType, setBodyType] = React.useState('');
        const [skinColor, setSkinColor] = React.useState('');

        const handleCustomize = () => {
            // Handle customization logic
        }

        return ( <
                View style = { styles.container } >
                <
                View style = { styles.imageContainer } >
                <
                Image style = { styles.image }
                source = { require('../assets/virtual-replica.png') }
                /> <
                /View> <
                Text style = { styles.title } > Customize Your Virtual Replica < /Text> <
                View style = { styles.optionContainer } >
                <
                TouchableOpacity style = { gender === 'male' ? styles.selectedOption : styles.option }
                onPress = {
                    () => setGender('male') } >
                <
                Text style = { styles.optionText } > Male < /Text> <
                /TouchableOpacity> <
                TouchableOpacity style = { gender === 'female' ? styles.selectedOption : styles.option }
                onPress = {
                    () => setGender('female') } >
                <
                Text style = { styles.optionText } > Female < /Text> <
                /TouchableOpacity> <
                /View> <
                View style = { styles.optionContainer } >
                <
                TouchableOpacity style = { bodyType === 'slim' ? styles.selectedOption : styles.option }
                onPress = {
                    () => setBodyType('slim') } >
                <
                Text style = { styles.optionText } > Slim < /Text> <
                /TouchableOpacity> <
                TouchableOpacity style = { bodyType === 'average' ? styles.selectedOption : styles.option }
                onPress = {
                    () => setBodyType('average') } >
                <
                Text style = { styles.optionText } > Average < /Text> <
                /TouchableOpacity> <
                TouchableOpacity style = { bodyType === 'large' ? styles.selectedOption : styles.option }
                onPress = {
                    () => setBodyType('large') } >
                <
                Text style = { styles.optionText } > Large < /Text>