import { useParams } from "react-router-dom";
import React from "react";
import { Video } from "../interfaces/video";
import { Playlist } from "../interfaces/playlist";
import VideoItem from "../components/video-item";
export function PlaylistVideos() {
  const params = useParams();
  const playlistId = params.id!.slice(10, -1);

  const [videos, setVideos] = React.useState<Video[]>([]);
  const [playlistVideos, setPlaylistVideos] = React.useState<Video[]>([]);
  const [playlist, setPlaylist] = React.useState<Playlist>();

  React.useEffect(() => {
    fetch("playlists.json").then((res) =>
      res.json().then((res) => {
        const playlists: Playlist[] = res;
        const newPlaylist = playlists.find((val) => val.id + "" === playlistId);
        setPlaylist(newPlaylist);

        fetch("videos.json").then((res) =>
          res.json().then((res) => {
            const videos: Video[] = res;
            setVideos(videos);
            const sortedVideos: Video[] = videos.filter((val) =>
              newPlaylist?.videoIds.includes(val.id)
            );
            setPlaylistVideos(sortedVideos);
          })
        );
      })
    );
  }, []);

  const showAllVideos = () => {};

  return (
    <>
      <main>
        <h1>Playlist route for playlist id: {params.id}</h1>
      </main>
      {playlistVideos.map((item, i) => {
        return <VideoItem video={item} key={i}></VideoItem>;
      })}
      <button onClick={() => showAllVideos()}>Add Videos to Playlist</button>
    </>
  );
}
