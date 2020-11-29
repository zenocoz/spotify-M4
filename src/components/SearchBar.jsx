import React, {Component} from "react"
import {withRouter} from "react-router-dom"
import {Form, FormControl} from "react-bootstrap"

class SearchBar extends React.Component {
  state = {
    search_value: "",
  }

  getArtistId = async (query) => {
    let url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`
    const headers = {
      "x-rapidapi-key": "f8be2f0c65mshfad5043cb400d5dp12eb36jsn70f4e3e3750f",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    }

    try {
      let response = await fetch(url, {
        method: "GET",
        headers: headers,
      })
      if (response.ok) {
        let results = await response.json()
        console.log(results.data[0].artist.id)
        let id = results.data[0].artist.id
        return id
      } else {
        alert("something went wrong with the fetch response")
      }
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({search_value: e.target.value})
  }

  handleRequest = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      let artist_id = await this.getArtistId(e.target.value)
      this.props.history.push("/artist/" + artist_id)
    }
  }
  render() {
    return (
      <div>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={(e) => this.handleChange(e)}
            onKeyDown={(e) => this.handleRequest(e)}
            value={this.state.search_value}
          />
          <svg
            className="mr-2"
            viewBox="0 0 512 512"
            style={{width: "24", height: "24"}}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
              fill="currentColor"
              fillRule="evenodd"
            ></path>
          </svg>
          <span>Search</span>
        </Form>
      </div>
    )
  }
}

export default withRouter(SearchBar)
