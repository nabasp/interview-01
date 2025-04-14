import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailsScreen: React.FC = () => {
  return (
    <View style={style.container}>
      <Text>Details Screen</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DetailsScreen;
