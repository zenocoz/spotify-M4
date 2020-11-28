import React from "react"
import {Row, Container, Col, Spinner} from "react-bootstrap"
import SingleAlbum from "./SingleAlbum"

class AlbumList extends React.Component {
  state = {}
  render() {
    return (
      <Container>
        <Row>
          {this.props.albums.map((album) => (
            <SingleAlbum key={album.id} singleAlbum={album} />
          ))}
        </Row>
      </Container>
    )
  }
}

export default AlbumList
