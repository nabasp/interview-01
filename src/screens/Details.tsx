import { RouteProp } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { RootStackParamList } from "../common";
import { objectToArray } from "../utils/helper";
import { DetailInfo, DetailInfoProps } from "../components/Album";
import { Text } from "react-native-paper";

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;

const DetailsScreen: React.FC<{ route: DetailsScreenRouteProp }> = ({
  route,
}) => {
  const { trackId, ...restParams } = route.params;
  const deatailInfo: DetailInfoProps[] = objectToArray(restParams).map(
    ([label, value]) => ({ label, value })
  );
  return (
    <View style={style.container}>
      <Text variant="headlineSmall">Track #{trackId}</Text>
      <ScrollView>
        <View style={style.infoContainer}>
          <DetailInfo info={deatailInfo} />
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    padding: 10,
  },
});

export default DetailsScreen;
