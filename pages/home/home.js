// pages/home/home.js
Page({
  handleShowToast() {
    wx.showToast({
      title: '加载中',
      duration: 3000,
      icon: 'loading',
      //image: "/assets/icon/icon.png",
      mask: true,
      success: function() {
        console.log('展示弹窗成功')
      },
      fail: function() {
        console.log('展示弹窗失败')
      },
      complete: function() {
        console.log('完成函数的调用')
      }
    })
  },
  handleShowModal() {
    wx.showModal({
      title: '我是标题',
      content: '我是内容',
      //showCancel: false,
      //cancelText: '退出',
      //cancelColor: 'red',
      success: function(res) {
        console.log(res)
        if(res.cancel) {
          console.log('用户点击了取消')
        }
        if (res.confirm) {
          console.log('用户点击了确定')
        }
      }
    })
  },
  handleShowLoading() {
    wx.showLoading({
      title: '加载ing',
      mask: true
    })

    setTimeout(() => {
      //必须手动调用hideLoading才能让loading消失
      wx.hideLoading()
    }, 1000)
  },
  handleShowAction() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      itemColor: 'red',
      success: function(res) {
        console.log(res)
      }
    })
  },

  //右上角分享
  onShareAppMessage(options) {
    return {
      title: '你好啊,小盼子',
      path: 'pages/about/about',
      imageUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3548997539,3374462017&fm=26&gp=0.jpg'
    }
  }
})