import React, { Component } from "react";
import authors from "./data";
import Navbar from "./Navbar";
import AuthorList from "./AuthorList";

class App extends Component {
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <Navbar />
          <div className="content col-10  ">
            <AuthorList authors={authors} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
