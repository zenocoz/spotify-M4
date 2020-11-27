import "./App.css"
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import Home from "./components/Home"
import Artist from "./components/Artist"
import Album from "./components/Album"
import NavBar from "./components/NavBar"

function App() {
  return (
    // <div className="App">
    //   <Router>
    //     <NavBar />
    //     <Route path="/" exact component={Home} />
    //     <Route path="/artist" exact component={Artist} />
    //     <Route path="/album" exact component={Album} />
    //   </Router>
    // </div>
    <div className="App">
      <NavBar />
      {/* <Route path="/" exact component={Home} />
        <Route path="/artist" exact component={Artist} />
        <Route path="/album" exact component={Album} /> */}
    </div>
  )
}

export default App
