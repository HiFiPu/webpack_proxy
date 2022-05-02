import React, { Component } from "react";
import "./style.less";
export default class Ce extends Component {
  render() {
    // 方法一;
    // var child1 = React.createElement("li", null, "one");
    // var child2 = React.createElement("li", null, "two");
    // var content = React.createElement(
    //   "ul",
    //   { className: "teststyle" },
    //   child1,
    //   child2
    // ); // 第三个参数可以分开也可以写成一个数组
    // 方法二;
    var child1 = React.createElement("li", null, "one");
    var child2 = React.createElement("li", null, "two");
    var content = React.createElement("ul", { className: "teststyle" }, [
      child1,
      child2,
    ]);

    return <div>{content}</div>;
  }
}
