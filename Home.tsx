import { useNavigation, NavigationProp } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useQuery } from "@tanstack/react-query";

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

interface Album {
  wrapperType?: string;
  kind?: string;
  collectionId?: number;
  trackId?: number;
  artistName?: string;
  collectionName?: string;
  trackName?: string;
  collectionCensoredName?: string;
  trackCensoredName?: string;
  collectionArtistId?: number;
  collectionArtistViewUrl?: string;
  collectionViewUrl?: string;
  trackViewUrl?: string;
  previewUrl?: string;
  artworkUrl30?: string;
  artworkUrl60?: string;
  artworkUrl100?: string;
  collectionPrice?: number;
  trackPrice?: number;
  trackRentalPrice?: number;
  collectionHdPrice?: number;
  trackHdPrice?: number;
  trackHdRentalPrice?: number;
  releaseDate?: string;
  collectionExplicitness?: string;
  trackExplicitness?: string;
  discCount?: number;
  discNumber?: number;
  trackCount?: number;
  trackNumber?: number;
  trackTimeMillis?: number;
  country?: string;
  currency?: string;
  primaryGenreName?: string;
  contentAdvisoryRating?: string;
  shortDescription?: string;
  longDescription?: string;
  hasITunesExtras?: boolean;
}

async function getAlbums(): Promise<Album[]> {
  return await fetch("https://itunes.apple.com/search?term=jack+johnson")
    .then((response) => response.json())
    .then((json) => json.results);
}

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { data, error, isLoading } = useQuery<Album[], Error>({
    queryKey: ["albums"],
    queryFn: getAlbums,
  });

  return (
    <View style={style.container}>
      <Text>Home Screen</Text>
      <Button mode="contained" onPress={() => navigation.navigate("Details")}>
        Go to details
      </Button>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Error: {error.message}</Text>}
      {data && (
        <View>
          {data.map((album) => (
            <View key={album.trackId}>
              <Text>{album.artistName}</Text>
              <Text>{album.collectionName}</Text>
            </View>
          ))}
        </View>
      )}
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

export default HomeScreen;
