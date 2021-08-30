import Home from "./pages/Home";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <h1>This is search page</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/* home {the one wirh the search on} */}

        {/* SearchPage{ the results page} */}
      </Router>
    </div>
  );
}
