import React from "react"
import {Link, withRouter} from "react-router-dom"

function SingleAlbum(props) {
  return (
    <div
      onClick={() => {
        props.history.push("/album/" + props.singleAlbum.album.id)
      }}
      className="col-6 col-md-4 col-lg-3 col-xl-2 text-center d-flex"
      style={{marginBottom: "2rem"}}
    >
      <div className="card card-spotify">
        <div className="img-albums">
          <div className="imgAlbum">
            <img
              src={props.singleAlbum.album.cover}
              className="card-img-top d-flex"
              alt="..."
            />

            <div className="play_container">
              <i className="far fa-play-circle playFav"></i>
            </div>
            <div className="hearth_container">
              <i className="far fa-heart hearthFav"></i>
            </div>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.singleAlbum.album.title} </h5>
          <h6 className="card-title">{props.singleAlbum.artist.name}</h6>
        </div>
      </div>
    </div>
  )
}

export default withRouter(SingleAlbum)
