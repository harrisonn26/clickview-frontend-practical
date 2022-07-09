import React from "react";
import { PlaylistItem } from "../components/playlist-item";
import "../interfaces/playlist";
import { Playlist } from "../interfaces/playlist";
export function Playlists() {
  const [playlist, setPlaylist] = React.useState<Playlist[]>([]);
  React.useEffect(() => {
    fetch("playlists.json").then((res) =>
      res.json().then((res) => {
        setPlaylist(res);
      })
    );
  }, []);

  return (
    <main>
      <h1>Playlists</h1>
      {playlist.map((item, i) => {
        return <PlaylistItem playlist={item} key={i}></PlaylistItem>;
        return <div>{item.name}</div>;
      })}
    </main>
  );
}
