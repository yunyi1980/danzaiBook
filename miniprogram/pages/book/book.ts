import {book} from '../../dataModel/data'
import {HIDDEN_AMOUNT_FLAG} from '../../utils/commonHelper'

interface pageData {
  bookList: book[],
  totalAmount: number, //总资产
  totalCost: number, // 总投入
  totalIncome: number, // 总收益
  isShowAmount?: boolean, // 是否显示资产
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowAmount: true,
    hiddenFlag: HIDDEN_AMOUNT_FLAG,
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getBook();
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
      success: (res:any) => {
        const bookList = <book[]>res?.result?.bookList
        this.setData(this.getBooksData(bookList))
      },
      fail: (err:any) => {
        console.error('[云函数] [getBook] 调用失败', err)
      }
    })
  },

  onAddBook: function () {
    wx.navigateTo({
      url: '../addBook/addBook'
    })
  },

  /**
   * 根据账目列表计算页面数据
   * @param bookList 
   */
  getBooksData: function (bookList: book[]): pageData {
    let totalAmount:number = 0;
    let totalCost:number = 0;

    bookList.forEach((book:book) => {
      totalAmount +=  book.currAmount
      totalCost += book.initAmount
    })

    // TODO
    return {
      bookList,
      totalAmount,
      totalCost,
      totalIncome: 0,
    }
  },

  /**
   * 显示/隐藏 资产
   */
  onToggleShowAmount: function () {
    this.setData({
      isShowAmount: !this.data.isShowAmount
    })
  },

  /**
   * 
   */
  onItemTap: function (event: any){
    const currBook = event?.detail as book;
    wx.navigateTo({
      url: `../bookDetail/bookDetail?bookid=${currBook._id}`
    })
  },

})