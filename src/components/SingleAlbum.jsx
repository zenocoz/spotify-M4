import React from "react"

export default function SingleAlbum() {
  return (
    <div className="card card-spotify">
      <div className="img-albums">
        <div className="imgAlbum">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/71V74NRrgPL._AC_SL1200_.jpg"
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
        <h5 className="card-title">
          Bohemian Rhapsody (The Original Soundtrack)
        </h5>
        <h6 className="card-title">Queen</h6>
      </div>
    </div>
  )
}
