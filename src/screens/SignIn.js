import { useState } from "react";
import { View, Text, Button, TextInput, Pressable, ActivityIndicator } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../hooks/useAuth";

const auth = getAuth();

export default SignInScreen = () => {
    const [value, setValue] = useState('');
    const { setLoading } = useAuth(true);
    const handleSignIn = async () => {
        try {
            setLoading(true);
            await signInWithEmailAndPassword(auth, value.email, value.password);
        } catch (error) {
            setValue({
                ...value,
                error: "Username atau password salah!",
            });
        } finally {
            setLoading(false);
        }
    }

    // if (isLoading) return (
    //     <View className="flex-1 items-center justify-center">
    //         <ActivityIndicator />
    //     </View>
    // )

    return (
        <View className="flex-1 items-center justify-center">
            <View className="w-3/4 space-y-2">
                <Text className="text-lg">
                    Email
                </Text>
                <TextInput
                    className="w-full p-3 rounded-xl bg-gray-200"
                    onChangeText={(text) => setValue({ ...value, email: text })}
                    autoCapitalize='none'
                    editable
                />
                <Text className="text-lg">
                    Password
                </Text>
                <TextInput
                    className="w-full p-3 rounded-xl bg-gray-200"
                    onChangeText={(text) => setValue({ ...value, password: text })}
                    autoCapitalize='none'
                    secureTextEntry
                    editable
                />
                {value.error && (
                    <View className="w-3/4 flex flex-row">
                        <Text className="text-red-500">{value.error}</Text>
                    </View>
                )}
            </View>
            <View className="flex flex-row w-3/4 mt-4 justify-end">
                <Pressable
                    className="rounded-sm bg-blue-200 p-3"
                    onPress={handleSignIn}
                >
                    <Text>
                        Login
                    </Text>
                </Pressable>
            </View>
        </View >
    )
}