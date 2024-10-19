import { View } from "react-native";
import { ProfileScreen } from "./src/screens/ProfileScreen";
import { SearchScreen } from "./src/screens/SearchScreen";
import { Navbar } from "./src/widgets/Navbar";

export default function App() {
  return (
    <View className="flex flex-1">
      <ProfileScreen />
      <Navbar />
    </View>
  );
}
