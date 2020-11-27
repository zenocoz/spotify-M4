import React from "react"
import {Row} from "react-bootstrap"
import SingleAlbum from "./SingleAlbum"

export default function AlbumList(props) {
  return (
    <Row>
      {props.albums.map((album) => (
        <SingleAlbum key={album.id} singleAlbum={album} />
      ))}
    </Row>
  )
}
