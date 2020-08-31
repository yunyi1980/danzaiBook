// pages/book/book.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalAsset: 1000,
    accountList: [],
    array: [1, 2, 3, 4]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.setData({
    //   bookList: [{
    //     accountId: 1,
    //     name: '账本1',
    //     currAssest: 1000,
    //     currency: 'CNY',
    //     createTime: '2020-08-30'
    //   },
    //   {
    //     accountId: 1,
    //     name: '账本2demo',
    //     currAssest: 1000,
    //     currency: 'CNY',
    //     createTime: '2020-08-30'
    //   }]
    // })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getBook();
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

  },

  getBook: function () {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'getBook',
      data: {},
      success: res => {
        console.log('[云函数] [getBook] user openid: ', res.result.bookList)
        this.setData({
          bookList: res.result.bookList
        })
      },
      fail: err => {
        console.error('[云函数] [getBook] 调用失败', err)
      }
    })
  },

  onAddBook: function () {
    wx.navigateTo({
      url: '../userConsole/userConsole'
    })
  }


})