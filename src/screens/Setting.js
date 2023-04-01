import { getAuth, signOut } from "firebase/auth";
import { View, Text, Button } from "react-native";

const auth = getAuth();

export default SettingScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
            <Button title="Logout" onPress={() => signOut(auth)} />
        </View>
    )
}