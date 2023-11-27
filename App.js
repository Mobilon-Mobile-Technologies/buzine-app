import "react-native-gesture-handler";
import AppNavigation from "./Navigation/appNavigation.js";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { LogBox } from "react-native"

LogBox.ignoreAllLogs()

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppNavigation />
    </GestureHandlerRootView>
  );
}
