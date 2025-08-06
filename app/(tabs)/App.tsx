import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-primary">
        Welcome!
        <Link href="./Onboarding"> Get Started</Link>
        <Link href="./movie/avengers"> Avenger Movie</Link>
      </Text>
    </View>
  );
}
