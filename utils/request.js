const baseURL = "https://huangfushengkun.online/api"
//获取token 
const token = wx.getStorageSync('token')
const header = {}
if(token) {
  header.Authorization = 'Bearar ' + token
}

module.exports = {
  get (url, data) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: baseURL + url,
        data,
        header,
        success: (res) => {
          resolve(res)
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
  },
  post (url, data = {}) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: baseURL + url,
        data,
        header,
        method: 'POST',
        success: (res) => {
          resolve(res)
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
  }
}