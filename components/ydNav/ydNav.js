// components/yeNav/ydNav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeId:1,
    /* list: [
      {
        type: '悦读',
        id: 1
      },{
        type: '情感',
        id: 2
      }, {
        type: '连播',
        id: 3
      }, {
        type: '校园',
        id: 4
      }, {
        type: '音乐',
        id: 5
      }, {
        type: 'Labs',
        id: 6
      }
    ] */
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab (e) {
      const activeId = e.target.dataset.id
      this.setData({
        activeId
      })
      //请求数据
      this.triggerEvent('getdata', { id: activeId})

    }
  }
})
