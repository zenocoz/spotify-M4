import React, {Component} from "react"
import SingleAlbum from "./SingleAlbum"

export default class Home extends React.Component {
  state = {
    albums: [],
  }

  componentDidMount = async () => {
    this.fetchRandomAlbums()
  }

  fetchRandomAlbums = async () => {
    let url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=whatever"
    let headers = {
      "x-rapidapi-key": "f8be2f0c65mshfad5043cb400d5dp12eb36jsn70f4e3e3750f",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    }

    try {
      let response = await fetch(url, {
        method: "GET",
        headers: headers,
      })
      if (response.ok) {
        let albums = await response.json()
        console.log(albums)
        this.setState({albums: albums})
      } else {
        alert("something went wrong with the fetch response")
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <>
        <h3 className="text-left my-3" style={{fontWeight: "bold"}}>
          Home Page
        </h3>
        <div className="row">
          <div
            className="col-6 col-md-4 col-lg-3 col-xl-2 text-center d-flex"
            style={{marginBottom: "2rem"}}
          >
            <SingleAlbum />
          </div>
        </div>
      </>
    )
  }
}
