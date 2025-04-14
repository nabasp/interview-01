import { RouteProp } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RootStackParamList } from "../common";

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;

const DetailsScreen: React.FC<{ route: DetailsScreenRouteProp }> = ({
  route,
}) => {
  const { trackId, trackName } = route.params;

  return (
    <View style={style.container}>
      <Text>Need to Load Track #{trackId}</Text>
      <Text>Track name: {trackName}</Text>
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
