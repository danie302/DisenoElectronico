import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./LeftCol.css";

class LeftCol extends Component {
  render() {
    return (
      <div className="colm col-md-2 text-light">
        <div className="title row mx-auto">
          <h1>Title</h1>
        </div>
        <div className="tag ">
          <Link to="" className="fas fa-user" />
          <Link to="#" className="text-light">
            {"   "}My profile
          </Link>
        </div>
        <div className="tag">
          <Link to="" className="fas fa-home " />
          <Link to="#" className="text-light">
            {"   "}
            {"   "}Home
          </Link>
        </div>
        <div className="tag">
          <Link to="" className="fas fa-users text-secondary" />
          <Link to="" className=" text-secondary">
            {"   "}Family Devices
          </Link>
        </div>
        <div className="tag">
          <Link to="" className="fas fa-cog" />
          <Link to="/" className=" text-light">
            {"   "}Log out
          </Link>
        </div>
      </div>
    );
  }
}

export default LeftCol;
