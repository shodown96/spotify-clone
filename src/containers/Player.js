import React from "react";
import Footer from "../components/Footer";
import "../css/Player.css";
import Sidebar from "../components/Sidebar";
import Home from "./Home";
import Library from "./Library";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./Search";
import Header from "../components/Header";
// import Playlist from "./Playlist";

function Player() {
  return (
    <div className="player">
      <Router>
        <div className="player__body">
          <Sidebar />

          <div className="body">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/search" component={Search} />
              {/* <Route path="/playlist/:id" component={Playlist} /> */}
              <Route exact path="/library" component={Library} />
              {/* <Route path="/playlist/:id" render={(props) => <Playlist {...props} spotify={spotify} />} /> */}
            </Switch>
          </div>
        </div>
      </Router>

      <Footer />
    </div>
  );
}

export default Player;
