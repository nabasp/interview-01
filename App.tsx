import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <View>
        <Text>Test RN Paper</Text>
        <Button mode="contained" onPress={() => console.log("Pressed")}>
          Press me
        </Button>
      </View>
    </SafeAreaProvider>
  );
}

export default App;
