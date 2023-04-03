import React, { useEffect, useState } from "react";
import './src/config/firebase';
import RootNavigation from './src/navigation';
import SplashScreen from "./src/screens/Splash";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  })

  if (loading) {
    return (
      <SplashScreen />
    )
  }

  return (
    <RootNavigation />
  );
}