import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OutfitScreen = () => {
    return ( <
        View style = { styles.container } >
        <
        Text style = { styles.title } > Outfit Screen < /Text> <
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
    },
});

export default OutfitScreen;