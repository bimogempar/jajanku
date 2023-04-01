import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text, Button } from "react-native";

import HomeScreen from "../screens/Home";
import SettingsScreen from "../screens/Setting";

const Tab = createBottomTabNavigator();

export default userStack = ({ setUser }) => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={props => <SettingsScreen {...props} setUser={setUser} />} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}