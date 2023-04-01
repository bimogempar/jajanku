import { View, Text, Button } from "react-native";

export default WelcomScreen = ({ navigation }) => {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text>This welcome screen</Text>
            <Button
                title="Login bro!"
                onPress={() => navigation.navigate('Sign In')}
            />
        </View>
    )
}