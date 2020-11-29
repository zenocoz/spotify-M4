import React, {Component} from "react"
import AlbumList from "./AlbumList"
// import {fetchRandomAlbums} from "../data_source"
import {DataSource} from "../data_source"
import {ApiFetchSubscriber} from "./ApiFetchSubscriber"

const Home = () => {
  // componentDidMount = async () => {
  //   this.setState({albums: await DataSource.fetchRandomAlbums()})
  // }

  // handleSelectedAlbum = (id) => {}

  const NewHome = ApiFetchSubscriber(Home, DataSource.fetchRandomAlbums())
  {
    return (
      <>
        <h3 className="text-left my-3" style={{fontWeight: "bold"}}>
          Home Page
        </h3>
        <div className="row">
          <NewHome />

          {/* <div
            className="col-6 col-md-4 col-lg-3 col-xl-2 text-center d-flex"
            style={{marginBottom: "2rem"}}
          ></div> */}
        </div>
      </>
    )
  }
}
export default Home
