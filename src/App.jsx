import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {styleVariables} from './config/themeStyles';
import Router from './config/Router';

const AppRoutes = () => {
  return <Router />;
};

const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor={styleVariables.primaryColor}
        barStyle="light-content"
      />
      <AppRoutes />
    </>
  );
};

export default App;
