// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '你好小程序！',
    firstName: 'Kobe',
    lastName: 'Bryant',
    age: 30,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 50,
    movies: ['华尔街之狼', '少年派的奇幻漂流', '大话西游'],
    nums:[
      [14, 12, 13, 17],
      [25, 27, 26, 29],
      [30, 35, 31, 38]
    ],
    letters: ['a', 'b', 'c']
  },
  onLoad() {
    setInterval( () => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  },
  handleSwitchColor() {
    //console.log('改变颜色')
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleUIncrement() {
    this.setData({
      score: this.data.score + 5
    })
  },
  numberToFixed(value) {
    return value.toFixed(2)
  }
})