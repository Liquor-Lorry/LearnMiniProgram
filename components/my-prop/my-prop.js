// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //写法一：title: String （无默认值）
    //写法二：可以给默认值
    title: {
      //类型
      type: String,
      //默认值
      value: '我是默认的标题',
      //观察者
      observer: function(newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    }
  },
  externalClasses: ['titleclass']
})
