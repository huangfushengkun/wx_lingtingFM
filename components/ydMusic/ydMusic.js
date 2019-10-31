// components/ydMusic/ydMusic.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    url: String,
    audio:null,
  },
  //声明周期
  lifetimes: {
    
    created () {
      // console.log(app.globalData)
      app.globalData.audio && app.globalData.audio.destroy()
      //创建一个应聘对象
      const audio = wx.createInnerAudioContext()
      // audio.autoplay = false
      // this.setData({
      //   audio
      // })
      app.globalData.audio = audio
      audio.onTimeUpdate( () => {
        //获取到当前的currenTime
        // console.log(audio.currentTime)
        const width = audio.currentTime / audio.duration * 100
        this.setData({
          width
        })
        this.formatTimes(audio.currentTime, audio.duration)
      })

    }
  },
  //监听数据的变化
  observers: {
    url (value) {
      console.log(value)
      console.log(value.slice(15,value.length))
      value = 'http://yuedufm.com'+value.slice(15,value.length)
      app.globalData.audio.src = value
        // console.log(app.globalData.audio)
      console.log(value)


    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    width: 0,
    time: '00:00',
    status: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    formatTimes (currentTime,duration) {
      const time = duration - currentTime
      let min = Math.floor(time / 60)
      let sec = Math.floor(time % 60)
      min = min < 10 ? '0' + min : min
      sec = sec < 10 ? '0' + sec : sec
      // return min + ':' + sec 
      this.setData({
        time: min + ':' + sec 
      })
    },
    play() {
      // const audio = wx.createInnerAudioContext()
      // app.globalData.audio = audio
      // app.globalData.audio.src = this.data.url
      const status = !this.data.status
      // console.log(status)
      this.setData({
        status
      })
      //让音乐播放或者暂停
      if (this.data.status) {

        app.globalData.audio.play()
        // console.log(app.globalData)
        // app.globalData.audio && app.globalData.audio.destroy()


      }else{
        app.globalData.audio.pause()
      }
    }
  }
  
})
