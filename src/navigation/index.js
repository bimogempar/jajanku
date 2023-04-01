import React, { useState } from 'react';
import { useAuth } from "../hooks/useAuth";
import UserStack from './userStack';
import AuthStack from './authStack';

export default RootNavigation = () => {
    // const { user } = useAuth();
    const [user, setUser] = useState('');
    return user ? <UserStack setUser={setUser} /> : <AuthStack setUser={setUser} />;
}