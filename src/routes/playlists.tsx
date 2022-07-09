import React from "react";
import { PlaylistItem } from "../components/playlist-item";
import "../interfaces/playlist";
import { Playlist } from "../interfaces/playlist";
export function Playlists() {
  const [playlists, setPlaylists] = React.useState<Playlist[]>([]);
  React.useEffect(() => {
    fetch("playlists.json").then((res) =>
      res.json().then((res) => {
        setPlaylists(res);
      })
    );
  }, []);

  const newPlaylist = () => {
    let name: any = ""; //TODO ensure name and desc are not null before creating playlist
    name = window.prompt("Enter a name for your new playlist");
    let description: any = "";
    description = window.prompt("Enter a description for your new playlist");
    const dateObj = new Date();
    const dateStr =
      dateObj.getFullYear() +
      "-" +
      dateObj.getMonth() +
      "-" +
      dateObj.getDay() +
      "T" +
      dateObj.getHours() +
      ":" +
      dateObj.getMinutes() +
      ":" +
      dateObj.getSeconds();
    const playlist: Playlist = {
      //TODO generate a unique id
      id: 2038101,
      name: name,
      description: description,
      dateCreated: dateStr,
      videoIds: [],
    };
    const newPlaylists = [...playlists];
    newPlaylists.push(playlist);
    setPlaylists(newPlaylists);
  };

  const deletePlaylist = (location: number) => {
    const newPlaylists = [...playlists];
    newPlaylists.splice(location, 1);
    setPlaylists(newPlaylists);
  };

  return (
    <main>
      <h1>Playlists</h1>
      {playlists.map((item, i) => {
        return (
          <PlaylistItem
            playlist={item}
            delete={() => deletePlaylist(i)}
            key={i}
          ></PlaylistItem>
        );
      })}
      <button onClick={() => newPlaylist()}>Create New Playlist</button>
    </main>
  );
}
