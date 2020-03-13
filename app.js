App({
  //生命周期函数
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  //小程序初始化完成时，会执行的生命周期函数
  onLaunch: function () {
    //console.log('小程序初始化完成')

    //获取用户信息
    //异步调用
    //wx.getUserInfo({
      //数据拿到之后，再进行异步回调的
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })

    //测试onError
    // setTimeout(function() {
    //   const err = new Error()

    //   throw err
    // }, 3000)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  //小程序界面显示出来之后，会执行的生命周期函数
  onShow: function (options) {
    //console.log("界面显示完成")

    //1.判断小程序进入场景
    console.log(options)
    switch(options.scene){
      case 1001:
        break;
      case 1005:
        break;
    }

    //2.获取用户信息
    //异步调用
    wx.getUserInfo({
      //数据拿到之后，再进行异步回调的
      success: function(res) {
        console.log(res)
      }
    })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  //小程序被隐藏时，会执行的生命周期函数
  onHide: function () {
    //console.log('界面隐藏执行')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  //小程序发生一些错误时，会执行的生命周期函数
  onError: function (msg) {
    console.log('小程序发生错误执行')
  },
  //定义全局数据
  globalData: {
    name: 'lorry',
    age: 20
  }
})
