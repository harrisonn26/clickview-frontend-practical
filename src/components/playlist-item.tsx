import { Col, Row } from "react-bootstrap";
import { Playlist } from "../interfaces/playlist";

interface PlaylistItemProps {
  playlist: Playlist;
  delete: () => void;
}

export function PlaylistItem({ playlist }: PlaylistItemProps) {
  const videoCount =
    playlist.videoIds.length === 1
      ? "1 video"
      : `${playlist.videoIds.length} videos`;

  return (
    <Row className="border rounded p-2 mb-2">
      <Col xs="12" md="3">
        <h2 className="h5">{playlist.name}</h2>
        <p className="mb-0">{videoCount}</p>
      </Col>
      <Col xs="12" md="8">
        <p className="mb-0">{playlist.description}</p>
      </Col>
      <Col xs="12" md="1">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => null}
            style={{ border: 0, background: "none" }}
          >
            <img width={30} height={30} src="delete.svg"></img>
          </button>
        </div>
      </Col>
    </Row>
  );
}
