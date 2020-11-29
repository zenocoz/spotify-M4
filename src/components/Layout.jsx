import React from "react"
import Player from "./Player"
import {Link} from "react-router-dom"
import {Form, FormControl} from "react-bootstrap"

class Layout extends React.Component {
  state = {
    search_value: "",
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({search_value: e.target.value})
  }

  handleRequest = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      this.props.history.push("/artist/" + e.target.value)
    }
  }

  render() {
    return (
      <>
        <div className="wrapper d-flex flex-column-reverse flex-md-row">
          <div className="sideNav d-flex flex-row flex-md-column">
            <div className="sideNav__nav sideNav__top d-flex flex-row flex-md-column">
              <a href="#" className="sideNav__logo d-none d-md-block">
                <img
                  src="./imgs/Spotify_Logo_RGB_White.png"
                  alt="spotify_logo"
                />
              </a>

              <div className=" sideNav__nav-links d-flex flex-row flex-md-column text-left">
                <Link to="/">
                  <svg
                    className="mr-2"
                    viewBox="0 0 512 512"
                    style={{width: "24", height: "24"}}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z"
                      fill="currentColor"
                    ></path>
                  </svg>{" "}
                  <span>Home</span>
                </Link>

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

                <a href="artists.html">
                  <svg
                    className="mr-2"
                    viewBox="0 0 512 512"
                    style={{width: "24", height: "24"}}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="mr-2"
                      d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span> Your Artists</span>
                </a>
              </div>

              <div className=" sideNav__nav-links sideNav__playlist  d-none d-md-flex flex-row flex-md-column text-left mt-5">
                <h6 className="ml-3">PLAYLIST</h6>
                <a
                  className="sideNav__nav-addPlay"
                  data-toggle="modal"
                  data-target="#createPlaylistModal"
                >
                  <i className="fas fa-plus "></i>
                  <span>Create Playlist</span>
                </a>
                <a href="#">
                  <span className="sideNav__nav-play-thumb">
                    <i className="fas fa-music"></i>
                  </span>
                  <span> My Playlist</span>
                </a>
              </div>
            </div>

            <div className="sideNav__footer sideNav__nav-links text-left d-none d-md-block">
              <a href="#">
                {" "}
                <svg
                  role="img"
                  style={{width: "24", height: "24"}}
                  viewBox="0 0 24 24"
                  className="mr-2"
                >
                  <path
                    d="M11.5 0C5.149 0 0 5.148 0 11.5 0 17.851 5.149 23 11.5 23S23 17.851 23 11.5C23 5.148 17.851 0 11.5 0zm0 22C5.71 22 1 17.29 1 11.5S5.71 1 11.5 1 22 5.71 22 11.5 17.29 22 11.5 22zm.499-6.842V5h-1v10.149l-3.418-3.975-.758.652 4.678 5.44 4.694-5.439-.757-.653-3.439 3.984z"
                    fill="currentColor"
                  ></path>
                </svg>{" "}
                Install App
              </a>
              <a
                href="#"
                className="sideNav__user d-flex justify-content-between"
              >
                <div className="d-flex">
                  <div className="sideNav__user-avatar">
                    <img id="img-avatar" src="" className="img-fluid" alt="" />
                  </div>
                  <span id="usernameSpan"></span>
                </div>
                <span id="logout">
                  <i className="fas fa-sign-out-alt"></i>
                </span>
              </a>
            </div>
          </div>

          <main className="container-fluid container-index position-relative">
            {/* <div className="navArrows">
              <a href="#" disabled>
                <i className="fas fa-chevron-left"></i>
              </a>
              <a href="albums.html">
                <i className="fas fa-chevron-right"></i>
              </a>
            </div> */}

            <div className="d-none bedge" id="bedge">
              Album added to your favorite
            </div>

            <div className="navBar__hamburger d-flex justify-content-end d-md-none mt-4">
              <i className="fas fa-bars"></i>
            </div>
            <div
              className="index__navBar navBar col-12 d-none d-md-flex justify-content-center"
              id="indexNavbar"
            >
              <a href="#" className="navBar__link active">
                Trending
              </a>
              <a href="#" className="navBar__link">
                Metallica
              </a>
              <a href="albums.html" className="navBar__link">
                Queens
              </a>
              <a href="#" className="navBar__link">
                New releases
              </a>
              <a href="#" className="navBar__link">
                Discover
              </a>
            </div>
            <div className="row list-button-wrapper justify-content-center"></div>

            {/* ------------------------------Content is displayed here---------------------------------------------- */}

            <section className="index__cards container">
              {this.props.children}
              {/* 
              <div className="row fetch1 rows"></div>
              <div className="row fetch2 rows"></div> */}
            </section>

            <div
              className="modal fade"
              id="createPlaylistModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="createPlaylistModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header text-center">
                    <h5 className="modal-title" id="createPlaylistModalLabel">
                      Create Playlist
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">
                        <i className="far fa-times-circle text-white"></i>
                      </span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="input-group mb-3">
                      <input
                        id="playlistName"
                        type="text"
                        className="form-control"
                        placeholder="Playlist Name"
                        value=""
                        aria-label="Playlist Name"
                        aria-describedby="playslist-name"
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      id="createPlaylistBtn"
                      className="btn-login btn-green btn-modals"
                      data-dismiss="modal"
                    >
                      Create Playlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <Player />
      </>
    )
  }
}

export default Layout
