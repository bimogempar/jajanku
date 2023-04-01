import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "../screens/Home";
import DetailScreen from "../screens/Detail";

const Stack = createNativeStackNavigator();
const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
    )
}

export default HomeStack;