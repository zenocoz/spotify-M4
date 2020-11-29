import React from "react"

class Artist extends React.Component {
  state = {}

  render() {
    return (
      <div class="wrapper d-flex flex-column-reverse flex-md-row">
        <main class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="jumbotron jumbotron-fluid">
                <div class="jumbo__overlay"></div>
                <div class="container">
                  <div class="row">
                    <div class="col-12 text-center jumbo-content">
                      <h6>33,000,575 monthly listeners</h6>
                      <h1 class="display-4">Queen</h1>
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
