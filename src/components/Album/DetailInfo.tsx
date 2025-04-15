import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Divider, Text } from "react-native-paper";

export interface DetailInfoProps {
  label: string;
  value: any;
}

interface DetailInfoComponentProps {
  info: DetailInfoProps[];
}

export const DetailInfo: React.FC<DetailInfoComponentProps> = ({ info }) =>
  info.map(({ label, value }) => (
    <View key={label} style={style.container}>
      <View style={style.infoContainer}>
        <Text variant="titleSmall">{label}:</Text>
        <Text>{value}</Text>
      </View>
      <Divider />
    </View>
  ));

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    flexDirection: "row",
    gap: 10,
    paddingVertical: 10,
  },
});
