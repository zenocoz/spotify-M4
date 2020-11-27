import React, {Component} from "react"

export default class Player extends Component {
  render() {
    return (
      <section className="player">
        <iframe
          src="https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b"
          id="music-player"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
          autoplay="1"
        ></iframe>
      </section>
    )
  }
}
