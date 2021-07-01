import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./Pages/About";
import HomePage from "./Pages/Home";
import NotFoud from "./Pages/NotFoud";
import Post from "./Pages/Post";
import Profile from "./Pages/Profile";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <button onClick={() => setLogin(!login)}>
          {login ? "logout" : "login"}
        </button>

        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={About} />
          <Route path="/profile">
            <Profile login={login} />
          </Route>
          <Route path="/post/:id" component={Post} />
          <Route component={NotFoud} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
