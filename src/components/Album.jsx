import React from "react"
import {Link} from "react-router-dom"

class Album extends React.Component {
  state = {}

  componentDidMount = () => {}
  render() {
    return (
      <section className="single-album">
        <div className="row">
          <div className="col-12 col-lg-4 px-4">
            <div className="card">
              <img className="card-img-top" src="" alt="Card image cap" />
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className=" card-title"></h5>

                <h6>Queen</h6>

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
              <tbody className="song-list"></tbody>
            </table>
          </div>
        </div>
      </section>
    )
  }
}

export default Album
