import "./App.css"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./components/Home"
import Artist from "./components/Artist"
import Album from "./components/Album"

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/artist" exact component={Artist} />
        <Route path="/album" exact component={Album} />
      </Router>
    </div>
  )
}

export default App
