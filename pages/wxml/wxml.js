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
    isActive: false
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
  }
})