import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/Welcome';
import SignInScreen from '../screens/SignIn';

const Stack = createNativeStackNavigator();

export default function AuthStack({ setUser }) {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#0e1529'
                    },
                }}>
                <Stack.Screen options={{ headerShown: false }} name="Welcome" component={WelcomeScreen} />
                <Stack.Screen options={{ title: 'Sign In' }} name="Sign In">{props => <SignInScreen {...props} setUser={setUser} />}</Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}