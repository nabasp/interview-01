import React from "react";
import { Avatar, Button, Card } from "react-native-paper";
import { AlbumType, RootStackParamList } from "../../common";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export const AlbumCard: React.FC<AlbumType> = ({
  trackId,
  trackName,
  artistName,
  artworkUrl100,
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate("Details", { trackId, trackName });
  };

  return (
    <Card>
      <Card.Title
        title={trackName}
        subtitle={artistName}
        left={() => <Avatar.Image size={50} source={{ uri: artworkUrl100 }} />}
      />
      <Card.Actions>
        <Button onPress={handlePress}>View Details</Button>
      </Card.Actions>
    </Card>
  );
};
