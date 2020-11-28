import React from "react"
import {Row, Container, Col, Spinner} from "react-bootstrap"
import SingleAlbum from "./SingleAlbum"

class AlbumList extends React.Component {
  state = {}
  render() {
    return (
      <Container>
        <Row>
          {this.props.loading
            ? //TODO why is it not working using simply the album array?
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((album) => (
                <div
                  key={album}
                  className="col-6 col-md-4 col-lg-3 col-xl-2 text-center d-flex"
                  style={{marginBottom: "2rem"}}
                >
                  <Spinner animation="border" variant="light" />
                </div>
              ))
            : this.props.albums
                .slice(0, 11)
                .map((album) => (
                  <SingleAlbum key={album.id} singleAlbum={album} />
                ))}

          {/* {this.props.loading && <h1>LOADING</h1>} */}
        </Row>
      </Container>
    )
  }
}

export default AlbumList
