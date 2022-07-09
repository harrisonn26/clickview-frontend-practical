import React from "react";
import VideoItem from "../components/video-item";
import { Video } from "../interfaces/video";

export function Videos() {
  const [videos, setVideos] = React.useState<Video[]>([]);
  React.useEffect(() => {
    fetch("videos.json").then((res) =>
      res.json().then((res) => {
        setVideos(res);
      })
    );
  }, []);
  return (
    <main>
      <h1>Videos</h1>
      {videos.map((item, i) => {
        return <VideoItem video={item} key={i}></VideoItem>;
      })}
    </main>
  );
}
