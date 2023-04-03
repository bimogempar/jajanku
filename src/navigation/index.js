import React, { useState } from 'react';
import { useAuth } from "../hooks/useAuth";
import UserStack from './userStack';
import AuthStack from './authStack';
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native';

export default RootNavigation = () => {
    const { authUser, loading } = useAuth();
    if (loading) {
        return (
            <View className="flex-1 items-center justify-center">
                <ActivityIndicator />
            </View>
        )
    } else {
        if (authUser.role === 'merchant') {
            return (
                <SafeAreaView className="flex-1 items-center justify-center">
                    <Text>Admin screen</Text>
                </SafeAreaView>
            )
        } else if (authUser.role === 'user') {
            return <UserStack />
        } else {
            return <AuthStack />
        }
        // authUser !== '' ? <UserStack /> : <AuthStack />;
    }
}