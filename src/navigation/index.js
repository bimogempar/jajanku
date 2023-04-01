import React, { useState } from 'react';
import { useAuth } from "../hooks/useAuth";
import UserStack from './userStack';
import AuthStack from './authStack';

export default RootNavigation = () => {
    const { user } = useAuth();
    return user ? <UserStack /> : <AuthStack />;
}