import {StyleSheet, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {styleVariables} from './themeStyles';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {mainNavigationRef} from '../utils/navigationHelper';
import MainTab from '../screens/main-tab';

const MainNavigatorStack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer ref={mainNavigationRef}>
      <MainNavigatorStack.Navigator
        screenOptions={{
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitleStyle,
        }}>
        <>
          <MainNavigatorStack.Screen
            name="MainTab"
            component={MainTab}
            options={{headerShown: false}}
          />
        </>
      </MainNavigatorStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: styleVariables.primaryColor,
  },
  headerStyleNoShadow: {
    backgroundColor: styleVariables.primaryColor,
    elevation: 0,
  },
  headerStyleTransparent: {
    backgroundColor: 'transparent',
    elevation: 0,
  },
  headerTitleStyle: {
    color: styleVariables.whiteColor,
    fontWeight: 'bold',
    left: -15,
  },
});

export default Router;
