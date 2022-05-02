import React, { Component } from "react";
import banner from "../images/02.jpg";
import './style.less'
export default class banner02 extends Component {
  render() {
    return (
      <>
        <div className="banner02">
          <img src={banner}></img>
        </div>
      </>
    );
  }
}
