import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./Pages/About";
import HomePage from "./Pages/Home";
import Profile from "./Pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>

      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
