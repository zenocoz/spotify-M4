import React from "react"
import {Row, Container} from "react-bootstrap"
import SingleAlbum from "./SingleAlbum"

export default function AlbumList(props) {
  return (
    <Container>
      <Row>
        {props.albums.map((album) => (
          <SingleAlbum key={album.id} singleAlbum={album} />
        ))}
      </Row>
    </Container>
  )
}
