import React from 'react';
import Login from '../screens/Login/index';
import Home from '../screens/Home/index';
import PetForm from '../screens/PetForm';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="PetForm" component={PetForm} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;