import React from "react"

class Artist extends React.Component {
  state = {
    artistId: this.props.match.params.id,
    artist_data: {},
  }

  componentDidMount = () => {
    this.fetchArtist()
  }

  fetchArtist = async () => {
    let url = "https://deezerdevs-deezer.p.rapidapi.com/artist/"

    const headers = {
      "x-rapidapi-key": "f8be2f0c65mshfad5043cb400d5dp12eb36jsn70f4e3e3750f",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    }

    try {
      let response = await fetch(url + this.state.artistId, {
        method: "GET",
        headers: headers,
      })
      if (response.ok) {
        let data = await response.json()
        console.log(data)
        this.setState({artist_data: {...data}})
      } else {
        alert("something went wrong with the fetch response")
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div class="wrapper d-flex flex-column-reverse flex-md-row">
        <main class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div
                class="jumbotron jumbotron-fluid"
                style={{
                  backgroundImage: url(this.state.artist_data.picture_medium), //TODO not working
                }}
              >
                <div class="jumbo__overlay"></div>
                <div class="container">
                  <div class="row">
                    <div class="col-12 text-center jumbo-content">
                      <h6>{this.state.artist_data.nb_fan} monthly listeners</h6>
                      <h1 class="display-4">{this.state.artist_data.name}</h1>
                      <div class="d-flex flex-column buttons-links-wrapper">
                        >
                        <div class="d-flex justify-content-center buttons-wrapper align-items-center">
                          <button type="button" class="btn btn-primary">
                            Play
                          </button>
                          <button type="button" class="btn btn-secondary">
                            Follow
                          </button>
                          <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                    <div class="col-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="navBar col-12 d-flex justify-content-center jumbo-links">
            <a href="#" class="navBar__link active">
              Overview
            </a>
            <a href="#" class="navBar__link">
              Related Artists
            </a>
            <a href="#" class="navBar__link">
              About
            </a>
          </div>
        </main>
      </div>
    )
  }
}

export default Artist
