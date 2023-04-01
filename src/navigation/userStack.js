import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeStack from "./homeStack";
import SettingsScreen from "../screens/Setting";

const Tab = createBottomTabNavigator();

export default userStack = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}