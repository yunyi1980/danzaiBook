import { toFormatString } from '../../utils/commonHelper'
import { book } from '../../dataModel/data'

interface pageData extends book {
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const currDate = toFormatString(new Date())
    const newBook: book = {
      bookName: '',
      _id: '',
      initDate: currDate,
      initAmount: 0,
      currency: 'CNY',
      currAmount: 0,
      desc: '',
    }
    this.setData({
      ...newBook
    })
  },

  /**
   * 用户点击右上角分享
   */
  // onShareAppMessage: function () {

  // },

  onDateChange: function (event: any) {
    const { detail } = event
    this.setData({
      initDate: detail,
    })
  },

  onNameChange: function (event: any) {
    const { detail: { value } } = event
    this.setData({
      bookName: value,
    })
  },

  onAmountChange: function (event: any) {
    const { detail } = event
    this.setData({
      initAmount: parseFloat(detail),
    })
  },

  onDesChange: function (event: any) {
    const { detail } = event
    this.setData({
      desc: detail,
    })
  },

  onAddBook: function () {
    const { bookName, initAmount, initDate, currency } = this.data as pageData;
    wx.cloud.callFunction({
      name: "addBook",
      data: {
        bookName,
        initAmount,
        initDate,
        currency,
      },
    }).then(res => {
      console.log('调用success', res)
      wx.navigateBack({
        delta: 0,
      })
    }).catch((err) => console.log(err))
  }
})