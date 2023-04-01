import { useAuth } from "../hooks/useAuth";
import { View, Text, Button } from "react-native";

export default HomeScreen = ({ navigation }) => {
    const { user } = useAuth();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    )
}