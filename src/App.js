import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
