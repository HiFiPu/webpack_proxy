import React, { Component } from "react";
import "./style.less";
import './type.css'
import $ from "jquery";
export default class pointView extends Component {
  componentDidMount() {
    var $navs = $("nav a"), // 导航
      $sections = $(".section"), // 模块
      $window = $(window),
      navLength = $navs.length - 1;

    $window.on("scroll", function () {
      var scrollTop = $window.scrollTop(),
        len = navLength;

      for (; len > -1; len--) {
        var that = $sections.eq(len);
        console.log(that.offset().top, "......",$sections,that,);
        if (scrollTop >= that.offset().top) {
          $navs.removeClass("current").eq(len).addClass("current");
          break;
        }
      }
    });
    $navs.on("click", function (e) {
      e.preventDefault();
      
      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top,
        },
        400
      );
    });
  }
  render() {
    return (
      <div>
        <div className="cover">
          <div className="wrapper">
            <div>
              <div className="section" id="section1">
                section1
              </div>
              <div className="section" id="section2">
                section2
              </div>
              <div className="section" id="section3">
                section3
              </div>
              <div className="section" id="section4">
                section4
              </div>
              <div className="section" id="section5">
                section5
              </div>
              <div
                style={{
                  width: "100%",
                  height: "300px",
                  backgroundColor: "grey",
                }}
              ></div>
            </div>
          </div>
          <nav>
            <a href="#section1" rel="external nofollow" className="current">
              section1
            </a>
            <a href="#section2" rel="external nofollow">
              section2
            </a>
            <a href="#section3" rel="external nofollow">
              section3
            </a>
            <a href="#section4" rel="external nofollow">
              section4
            </a>
            <a href="#section5" rel="external nofollow">
              section5
            </a>
          </nav>
        </div>
      </div>
    );
  }
}
