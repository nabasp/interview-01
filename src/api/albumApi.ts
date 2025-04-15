import { AlbumType } from "../common";

export async function getAlbums(term: string): Promise<AlbumType[]> {
  if (!term.length) {
    return [];
  }
  return await fetch(`https://itunes.apple.com/search?term=${term}`)
    .then((response) => response.json())
    .then((json) => json.results);
}
