/*
 * @Author: your name
 * @Date: 2021-12-30 10:33:02
 * @LastEditTime: 2021-12-30 11:38:32
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /MusicBlog../../js/Carousel.js
 */
/**
 * @description: 轮播图
 * @param {*}
 * @return {*}
 */
var Carousel = {
  // 配置及数据
  data: {
    config: {
      autoPlay: true,
      delay: 3,
      sliderData:[]
    },
    autoPlayFlag: null,
    current: 0
  },
  // 设置参数
  setConfig: function (config) {
    for (var key in config) {
      this.data.config[key] = config[key]
    }
  },
  // 设置轮播图项目数据
  setSliderData: function (sliderData) {
    this.data.config.sliderData = sliderData;
  },
  // 初始化函数
  init: function () {
    // 轮播图列表
    var sliderList = $(".slider-item-list");
    // 切换按钮
    var sliderDots = $(".slider-dots-wrap");
    // 项目数量
    var count = this.data.config.sliderData.length;
    // 轮播图列表宽度计算
    var itemWidth = 100 / count + '%';
    sliderList.css('width', count * 100 + '%');
    // 添加项
    for (var i = 0; i < count; i++) {
      var item = this.data.config.sliderData[i];
      sliderList.append("<div class=\"slider-item\" style=\"width: " + itemWidth + "\"><a href=\"" + item.url + "\" class=\"img\" style=\"background-image: url(" + item.pic + ")\"><div class=\"slider-item-title\">" + item.title + "</div><\/a><\/div>");
      sliderDots.append("<span class=\"slider-dot\" id=\"slider-dot-" + (i + 1) + "\" onclick=\"Carousel.go(" + (i + 1) + ")\"></span>");
    }
    // 选中第一个切换按钮
    $("#slider-dot-1").addClass('slider-dot-selected');
  },
  // 跳转i(i:项数, 1, -1)
  turn: function (i) {
    var count = this.data.config.sliderData.length;
    var _i = this.data.current + i;
    if (_i < 0) {
      _i = _i + count;
    }
    if (_i >= count) {
      _i = _i - count;
    }
    this.data.current = _i;
    $(".slider-item-list").css('left', -100 * this.data.current + '%');
    $("span[id^=slider-dot-]").removeClass('slider-dot-selected');
    $("#slider-dot-" + (_i + 1)).addClass('slider-dot-selected');
    this.pause();
    this.play();
  },
  // 播放
  play: function () {
    var self = this;
    if (this.data.config.autoPlay) {
      this.data.autoPlayFlag = setInterval(function () {
        self.turn(1);
      }, this.data.config.delay * 1000);
    }
  },
  // 暂停
  pause: function () {
    clearInterval(this.data.autoPlayFlag);
  },
  // 跳转到第i个(1,2,3..)
  go: function (i) {
    var option = i - 1 - this.data.current;
    this.turn(option);
  }
};
