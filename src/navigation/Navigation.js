import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import VirtualReplicaScreen from './VirtualReplicaScreen';
import ClothingScreen from './ClothingScreen';
import OutfitScreen from './OutfitScreen';

const Stack = createStackNavigator();

const Navigation = () => {
    return ( <
        Stack.Navigator initialRouteName = "Login" >
        <
        Stack.Screen name = "Login"
        component = { LoginScreen }
        /> <
        Stack.Screen name = "Register"
        component = { RegisterScreen }
        /> <
        Stack.Screen name = "VirtualReplica"
        component = { VirtualReplicaScreen }
        /> <
        Stack.Screen name = "Clothing"
        component = { ClothingScreen }
        /> <
        Stack.Screen name = "Outfit"
        component = { OutfitScreen }
        /> <
        /Stack.Navigator>
    );
};

export default Navigation;