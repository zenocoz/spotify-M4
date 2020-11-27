import React from "react"
import {Link} from "react-router-dom"
import SingleSong from "./SingleSong"

class Album extends React.Component {
  state = {
    album: null,
  }

  componentDidMount = () => {
    let albumId = this.props.match.params.id
    this.fetchSingleAlbum(albumId)
  }

  fetchSingleAlbum = async (id) => {
    const url = "https://deezerdevs-deezer.p.rapidapi.com/album/"
    const headers = {
      "x-rapidapi-key": "f8be2f0c65mshfad5043cb400d5dp12eb36jsn70f4e3e3750f",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    }

    try {
      let response = await fetch(url + id, {
        method: "GET",
        headers: headers,
      })
      if (response.ok) {
        let album_data = await response.json()
        console.log(album_data)
        this.setState({album: album_data})
      } else {
        alert("something went wrong fetching a single album")
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <section className="single-album">
        {this.state.album && (
          <div className="row">
            <div className="col-12 col-lg-4 px-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={this.state.album.cover_medium}
                  alt="Card image cap"
                />

                <div className="card-body d-flex flex-column align-items-center">
                  <h5 className=" card-title"></h5>

                  <h6>{this.state.album.title}</h6>

                  <div className="d-flex flex-column buttons-wrapper align-items-center">
                    <button
                      type="button"
                      className="btn-login btn-green d-inline"
                      style={{marginRight: 0}}
                    >
                      Play
                    </button>
                    <h6>1974 - 16 songs</h6>
                    <div className="icons-wrapper">
                      <i className="fa fa-heart" aria-hidden="true"></i>
                      <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <table className="table table-borderless table-dark table-album">
                <tbody className="song-list">
                  {/* render songs here */}
                  {this.state.album.tracks.data.map((track) => (
                    <SingleSong
                      id={track.id}
                      title={track.title}
                      duration={track.duration}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>
    )
  }
}

export default Album
