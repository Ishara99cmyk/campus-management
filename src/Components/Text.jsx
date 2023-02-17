import React, { Component } from "react";
import "./css/Text.css";

class Text extends Component {
  state = {};
  render() {
    return (
      <div className="welcometext">
        <h3>Welcome Back :)</h3>
        <div>
          <br></br>
          <br></br>
          <p>
            To keep connected with student management<br></br> system of
            department of Applied science<br></br> University of Vavuniya,
            please login with your<br></br>
            verified username and password.
          </p>
        </div>
      </div>
    );
  }
}

export default Text;
