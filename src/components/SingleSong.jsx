import React from "react"

export default function SingleSong(props) {
  return (
    <tr>
      <th scope="row">
        <i class="fa fa-music" aria-hidden="true"></i>
        <i class="far fa-play-circle"></i>
      </th>
      <td>{props.title}</td>
      <td colspan="2">{props.duration}</td>
    </tr>
  )
}
