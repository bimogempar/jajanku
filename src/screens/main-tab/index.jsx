import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {styleVariables} from '../../config/themeStyles';
import TabIcon from './components/TabIcon';
import Profile from '../profile';
import Orders from '../orders';
import Chats from '../chats';
import Home from '../home';

const MainNavigatorTab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <MainNavigatorTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style: [styles.tabBar, styles.tabHeight],
        labelStyle: styles.tabLabel,
        activeTintColor: styleVariables.primaryColor,
        inactiveTintColor: styleVariables.mutedColor,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => (
          <TabIcon focused={focused} routeName={route.name} />
        ),
      })}>
      <MainNavigatorTab.Screen
        name="Home"
        component={Home}
        options={{tabBarLabel: 'beranda'}}
      />
      <MainNavigatorTab.Screen
        name="Orders"
        component={Orders}
        options={{tabBarLabel: 'orderan'}}
      />
      <MainNavigatorTab.Screen
        name="Chat"
        component={Chats}
        options={{tabBarLabel: 'chat'}}
      />
      <MainNavigatorTab.Screen
        name="Profile"
        component={Profile}
        options={{tabBarLabel: 'profil'}}
      />
    </MainNavigatorTab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabHeight: {height: 56},
  tabLabel: {
    fontWeight: 'bold',
    top: -5,
  },
  tabBar: {
    borderTopWidth: 0,
    paddingBottom: 0,
    borderTopLeftRadius: styleVariables.borderRadiusLg,
    borderTopRightRadius: styleVariables.borderRadiusLg,
  },
});

export default MainTab;
