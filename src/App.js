import "./App.css"
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import Home from "./components/Home"
import Artist from "./components/Artist"
import Album from "./components/Album"
import Layout from "./components/Layout"
function App() {
  return (
    <Router>
      <Route
        path="/"
        exact
        render={(props) => (
          <Layout {...props}>
            <Home {...props} />
          </Layout>
        )}
      />
      <Route
        path="/artist/:id"
        exact
        render={(props) => (
          <Layout {...props}>
            <Artist {...props} />
          </Layout>
        )}
      />
      <Route
        path="/album/:id"
        exact
        render={(props) => (
          <Layout {...props}>
            <Album {...props} />
          </Layout>
        )}
      />
    </Router>
  )
}

export default App
