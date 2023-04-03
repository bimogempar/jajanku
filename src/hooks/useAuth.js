import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

export function useAuth() {
  const [user, setUser] = useState('');
  const [authUser, setAuthUser] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        // observe sign in from firebase
        setUser(user);
      } else {
        // sign out
        setUser('');
        setAuthUser('');
      }
    });

    return unsubscribeFromAuthStateChanged;
  }, []);

  useEffect(() => {
    if (user !== '') {
      setLoading(true)
      getRole(user).then(_user => {
        setAuthUser(_user)
        setLoading(false)
      })
    }
  }, [user])

  const getRole = async (user) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const _user = { ...user, role: 'user' }
        resolve(_user)
      }, 4000);
    });
  }

  return {
    user,
    authUser,
    loading,
    setLoading,
  };
}
