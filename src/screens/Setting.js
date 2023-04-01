import { View, Text, Button } from "react-native";

export default SettingScreen = ({ setUser }) => {
    console.log('userstack', setUser);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
            <Button title="Logout" onPress={() => setUser('')} />
        </View>
    )
}