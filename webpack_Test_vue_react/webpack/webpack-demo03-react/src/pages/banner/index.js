import React, { Component } from "react";
import Banner01 from "./tabs/banner01";
import Banner02 from "./tabs/banner02";
import Banner03 from "./tabs/banner03";
import Banner04 from "./tabs/banner04";
import Banner05 from "./tabs/banner05";
import Banner06 from "./tabs/banner06";
import SwipBanner from "./Banner";
export default class index extends Component {
  render() {
    const Banners = [
      Banner01,
      Banner02,
      Banner03,
      Banner04,
      Banner05,
      Banner06,
    ];
    return (
      <div>
        <SwipBanner
          Banners={Banners}
          interval={3000}
          width={1080}
          height={256}
          speed={750}
          autoplay={true}
        />
      </div>
    );
  }
}
