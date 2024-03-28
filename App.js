import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-100">
      <Text className="font-bold text-red-500">
        Opento start working on your app!
      </Text>
      <StatusBar />
    </View>
  );
}
