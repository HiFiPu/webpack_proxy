import React, { Component } from "react";
// import Banner01 from "./images/01.jpg";
// import Banner02 from "./images/02.jpg";
// import Banner03 from "./images/03.jpg";
// import Banner04 from "./images/01.jpg";
// import Banner05 from "./images/02.jpg";
// import Banner06 from "./images/03.jpg";
import Banner01 from "./tabs/banner01"
import Banner02 from "./tabs/banner02"
import Banner03 from "./tabs/banner03"
import Banner04 from "./tabs/banner04"
import Banner05 from "./tabs/banner05"
import Banner06 from "./tabs/banner06"
import "./banner.css";
export default class index extends Component {
  componentDidMount() {
    // 获取DOM
    function $(Sel, isAll) {
      if (isAll) {
        return document.querySelectorAll(Sel);
      } else {
        return document.querySelector(Sel);
      }
    }

    /**
     * 获取非行内样式
     * @param el     目标元素节点
     * @param attr   对应属性键（key）
     * @returns {*}  对应属性值（value）
     */
    function getStyle(el, attr) {
      // 兼容IE
      if (el.currentStyle) {
        return el.currentStyle[attr];
      } else {
        return getComputedStyle(el, null)[attr];
      }
    }

    //淡入淡出

    function fade() {
      // 1. 获取DOM元素
      var _prevBtn = $(".fade .prev");
      var _nextBtn = $(".fade .next");
    //   var _imgs = $(".fade img", true);
      var _imgs = $(".fade .bannerX", true);
      var _idots = $(".fade .idot", true);
      var _wrapper = $(".fade-flash-wrapper");
      var _curIndex = 0;
      var _timer = null;
      // 2. 左右切换
      _prevBtn.onclick = function () {
        // 切换下标
        if (_curIndex === 0) {
          _curIndex = 5;
        } else {
          _curIndex--;
        }
        // 切换图片
        tab();
        updateIdot();
      };
      _nextBtn.onclick = function () {
        // 切换下标
        if (_curIndex === 5) {
          _curIndex = 0;
        } else {
          _curIndex++;
        }
        // 切换图片
        tab();
        updateIdot();
      };
      // 3. 点击小圆点切换
      _idots = Array.from(_idots); // es6 转数组
      _idots.forEach(function (idot, index) {
        // 添加自定义属性
        // data-index
        idot.dataset.index = index;
        idot.onclick = function () {
          var index = parseInt(this.dataset.index);
          // 异常处理
          if (index === _curIndex) {
            return;
          }
          // 更新当前显示下标
          _curIndex = index;
          // 切换图片
          tab();
          updateIdot();
        };
      });
      // 4. 自动切换
      play();
      // 5. 鼠标移入，停止定时器
      //    鼠标移出，启动定时器
      _wrapper.onmouseenter = stop;
      _wrapper.onmouseleave = play;
      // 6. 函数封装
      function play() {
        console.log("启动");
        _timer = setInterval(function () {
          _nextBtn.onclick();
        }, 3000);
      }
      function stop() {
        console.log("暂停");
        clearInterval(_timer);
      }
      function updateIdot() {
        for (var i = 0, len = _idots.length; i < len; i++) {
          if (_idots[i].classList.contains("selected")) {
            _idots[i].classList.remove("selected");
            break;
          }
        }
        _idots[_curIndex].classList.add("selected");
      }
      function tab() {
        // 显示_curIndex指定的图片
        // 异常处理/隐藏上一次显示的图片
        for (var i = 0, len = _imgs.length; i < len; i++) {
          if (_imgs[i].classList.contains("show")) {
            _imgs[i].classList.remove("show");
            break;
          }
        }
        _imgs[_curIndex].classList.add("show");
      }
    }

    (function () {
      // 淡入淡出效果
      fade();
    })();
  }
  render() {
    return (
      <>
        <main className="content">
          {/* 淡入淡出 */}
          <section className="fade">
            {/* <h1 className="title">淡入淡出效果</h1> */}
            <div className="fade-flash-wrapper flash-wrapper">
              {/* 图片显示区域  */}
              <div className="img-box">
              <Banner01/>
              <Banner02/>
              <Banner03/>
              <Banner04/>
              <Banner05/>
              <Banner06/>
                {/* <img className="show" src={Banner01} alt="图片加载失败..." />
                <img src={Banner02} alt="图片加载失败..." />
                <img src={Banner03} alt="图片加载失败..." />
                <img src={Banner04} alt="图片加载失败..." />
                <img src={Banner05} alt="图片加载失败..." />
                <img src={Banner06} alt="图片加载失败..." /> */}
              </div>
              {/* 左右按钮区域  */}
              <div className="btn-box">
                <span className="btn prev"></span>
                <span className="btn next"></span>
              </div>
              {/* 分页指示区域  */}
              <div className="idot-box">
                <span className="idot selected"></span>
                <span className="idot"></span>
                <span className="idot"></span>
                <span className="idot"></span>
                <span className="idot"></span>
                <span className="idot"></span>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}
