//app.js
App({
  onLaunch: function () {

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'danzaibook-001',
        traceUser: true,
      })
    }

    this.globalData = {}
  }
})

// TODO 正式发布记得替换 echart.js-> mini