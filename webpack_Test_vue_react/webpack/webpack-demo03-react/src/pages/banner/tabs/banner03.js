import React, { Component } from "react";
import banner from "../images/03.jpg";
import './style.less'
export default class banner03 extends Component {
  render() {
    return (
      <>
        <div className="banner03">
          <img src={banner}></img>
        </div>
      </>
    );
  }
}
