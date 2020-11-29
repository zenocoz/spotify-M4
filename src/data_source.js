export const DataSource = {
  fetchRandomAlbums: async () => {
    let query = "metallica"
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
        let albums = await response.json()
        console.log(albums.data)
        return albums.data
        // this.setState({albums: albums.data, loading: false})
      } else {
        alert("something went wrong with the fetch response")
      }
    } catch (error) {
      console.log(error)
    }
  },

  fetchSingleAlbum: async (id) => {
    const url = "https://deezerdevs-deezer.p.rapidapi.com/album/"
    const headers = {
      "x-rapidapi-key": "f8be2f0c65mshfad5043cb400d5dp12eb36jsn70f4e3e3750f",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    }

    try {
      let response = await fetch(url + id, {
        method: "GET",
        headers: headers,
      })
      if (response.ok) {
        let album_data = await response.json()
        console.log(album_data)
        return album_data
        // this.setState({album: album_data})
      } else {
        alert("something went wrong fetching a single album")
      }
    } catch (error) {
      console.log(error)
    }
  },
}

// export const fetchRandomAlbums = async () => {
//   let query = "metallica"
//   let url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`
//   const headers = {
//     "x-rapidapi-key": "f8be2f0c65mshfad5043cb400d5dp12eb36jsn70f4e3e3750f",
//     "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
//   }

//   try {
//     let response = await fetch(url, {
//       method: "GET",
//       headers: headers,
//     })
//     if (response.ok) {
//       let albums = await response.json()
//       console.log(albums.data)
//       return albums.data
//       // this.setState({albums: albums.data, loading: false})
//     } else {
//       alert("something went wrong with the fetch response")
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

// export const fetchSingleAlbum = async (id) => {
//   const url = "https://deezerdevs-deezer.p.rapidapi.com/album/"
//   const headers = {
//     "x-rapidapi-key": "f8be2f0c65mshfad5043cb400d5dp12eb36jsn70f4e3e3750f",
//     "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
//   }

//   try {
//     let response = await fetch(url + id, {
//       method: "GET",
//       headers: headers,
//     })
//     if (response.ok) {
//       let album_data = await response.json()
//       console.log(album_data)
//       return album_data
//       // this.setState({album: album_data})
//     } else {
//       alert("something went wrong fetching a single album")
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }
