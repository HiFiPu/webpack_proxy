import React, { Component } from "react";
import banner from "../images/02.jpg";
import './style.less'
export default class banner05 extends Component {
  render() {
    return (
      <>
        <div className="banner01">
          <img src={banner}></img>
        </div>
      </>
    );
  }
}
