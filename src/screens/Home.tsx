import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { AlbumList } from "../components/Album";
import { Searchbar } from "react-native-paper";
import { AlbumType } from "../common";
import { getAlbums } from "../api/albumApi";
import { useDebounce } from "../hooks/useDebounce";
import { DEBOUNCE_DELAY } from "../common/constants";

const HomeScreen: React.FC = () => {
  const [filter, setFilter] = useState<string>("jack johnson");
  const debouncedQuery = useDebounce(filter, DEBOUNCE_DELAY);
  const { data, error, isLoading } = useQuery<AlbumType[], Error>({
    queryKey: ["albums", debouncedQuery],
    queryFn: () => getAlbums(debouncedQuery),
    enabled: !!debouncedQuery,
  });

  return (
    <View style={style.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={(query) => setFilter(query)}
        value={filter}
        style={{ marginBottom: 10 }}
      />
      {debouncedQuery?.length > 0 ? (
        <>
          {isLoading && <Text>Loading...</Text>}
          {error && <Text>Error</Text>}
          {data?.length && <AlbumList albums={data} />}
        </>
      ) : (
        <Text>Search for albums</Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default HomeScreen;
