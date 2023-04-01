import { View, Text, Button } from "react-native";

export default SignInScreen = ({ setUser }) => {
    console.log(setUser)
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text>This sign in screen</Text>
            <Button
                title="Login"
                onPress={() => setUser({ email: "bimogempar@gmail.com" })}
            />
        </View>
    )
}