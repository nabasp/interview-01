import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { AlbumCard } from "./AlbumCard";
import { AlbumType } from "../../common";
import { Text } from "react-native-paper";

interface AlbumListProps {
  albums: AlbumType[];
}

const AlbumList: React.FC<AlbumListProps> = ({ albums }) => {
  const renderAlbum = ({ item }: { item: AlbumType }) => (
    <AlbumCard {...item} />
  );

  return (
    <FlatList
      style={style.container}
      contentContainerStyle={style.albumContainer}
      data={albums}
      renderItem={renderAlbum}
      keyExtractor={(item, index) =>
        item.trackId ? index + item.trackId.toString() : index.toString()
      }
      ListEmptyComponent={() => <Text>"No albums found"</Text>}
    />
  );
};

const style = StyleSheet.create({
  container: {
    padding: 10,
  },
  albumContainer: {
    gap: 10,
    paddingBottom: 20,
  },
});

export default AlbumList;
