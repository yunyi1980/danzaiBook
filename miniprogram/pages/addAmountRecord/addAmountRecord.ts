import { IBook } from "../../dataModel/data";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    amount: Number,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.bookid);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const newBook: IBook = {
      bookName: "",
      _id: "",
      initDate: "",
      initAmount: 0,
      currency: "CNY",
      currAmount: 0,
      desc: "",
    };
    this.setData({
      ...newBook,
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

  onAmountChange: function (event: any) {
    console.log(event);
    const { detail } = event;
    this.setData({
      amount: detail,
    });
  },

  /**
   * 增加资产记录
   */
  onAddAmountRecord: function () {},
});
