// pages/home/home.js
Page({
  data: {
    counter: 0,
    isShow: true
  },
  handleIncrement(event) {
    console.log("-----------", event)
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleClick(event) {
    console.log(event)
  },
  handleIncrementCpn() {
    //最终目的：修改my-sel里面的counter
    //1.获取组件对象
    const my_sel = this.selectComponent('#sel-id')
    console.log(my_sel)

    //2.通过组件对象调用setData方法来修改组件中的数据(不合理)
    // my_sel.setData({
    //   counter: my_sel.data.counter + 5
    // })

    //3.通过方法对组件内的数据进行修改
    my_sel.incrementCounter(10)
  },
  handleSwitch()  {
    this.setData({
      isShow: !this.data.isShow
    })
  }
})