// components/article/article.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    article: {
      type:Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    like (e) {
      console.log(e.target.dataset)
      const id = e.target.dataset.id
      const token = wx.getStorageSync('token')
      //调用点赞接口
      wx.request({
        url: `https://huangfushengkun.online/api/article/${id}/like`,
        
        header: {
          "Authorization": "bearar " + token
        },
        method: 'POST',
        success: (res) => {
          if (res.data.res_code === 200) {
            wx.showToast({
              title: '收藏成功',
            })
            this.targgetEvent('like',{starus: true})
          }
        }
      })
    }
  }
})
