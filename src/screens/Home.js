import { useAuth } from "../hooks/useAuth";
import { View, Text, Button, ActivityIndicator } from "react-native";

export default HomeScreen = ({ navigation }) => {
    const { authUser, loading } = useAuth();
    if (loading) {
        return (
            <View className="flex-1 items-center justify-center">
                <ActivityIndicator />
            </View>
        )
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            <Text>Your're login {authUser?.email}</Text>
            <Text>with role {authUser?.role}</Text>
            <Button
                title="Detail"
                onPress={() => navigation.navigate('Detail')}
            />
        </View>
    )
}