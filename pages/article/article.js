// pages/article/article.js
const {getArticle} = require('../../service/getData.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {}
  },

  setLike () {
    this.setData({
      'article.isLiked': true
    })
  },
  // getArticle (id) {
  //   wx.showLoading({
  //     title: '请求中...',
  //   })
  //   wx.request({
  //     url: `https://huangfushengkun.online/api/article/${id}`,
  //     success: (res) => {
  //       // console.log(res)
  //       this.setData({
  //         article: res.data.res
  //       },function () {
  //         wx.hideLoading()
  //       })
  //       wx.setNavigationBarTitle({
  //         title: this.data.article.title,
  //       })
  //     }
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    //根据id请求对应的数据  随机id 
    const id = Math.ceil(Math.random() * 500) 
    // console.log(e)
    wx.showLoading({
      title: '加载中...',
    })
    getArticle(id).then(res => {
      let url = res.data.res.img_url
      url = 'http://yuedufm.com'+ url.slice(15,url.length)
      // console.log(res.data.res.img_url)
      res.data.res.img_url = url
      this.setData({
        article: res.data.res
      },function () {
        wx.hideLoading()
      })
      wx.setNavigationBarTitle({
        title: this.data.article.title,
      })
    })
    // this.getArticle(256)


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})