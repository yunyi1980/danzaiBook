import {toFormatString} from '../../utils/dateHelper'

Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    const currDate = toFormatString(new Date())
    this.setData({
      currDate
    })
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

  },

  onDateChange: function (event) {
    const {detail:{value}} = event
    this.setData({
      date: value,
    })
  },

  onNameChange: function (event) {
    const {detail:{value}} = event
    this.setData({
      bookName: value,
    })
  },

  onAmountChange: function (event) {
    const {detail:{value}} = event
    this.setData({
      currAmount: value,
    })
  },

  onAddBook: function () {
    const {bookName, currAmount, date} = this.data;
    wx.cloud.callFunction({
      name: "addBook",
      data:{
        bookName,
        currAmount,
        date
      },
    }).then(res => {
      console.log('调用success', res)
    }).catch((err)=>console.log(err))
  }
})