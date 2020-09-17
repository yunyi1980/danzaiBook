import { toFormatString } from "../../utils/commonHelper";
import { Ibook } from "../../dataModel/data";

interface IBookVaildRes {
  msg: string;
  isValid: Boolean;
}

Page({
  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const currDate = toFormatString(new Date());
    const newBook: Ibook = {
      bookName: "",
      _id: "",
      initDate: currDate,
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
   * 用户点击右上角分享
   */
  // onShareAppMessage: function () {

  // },

  onDateChange: function (event: any) {
    const { detail } = event;
    this.setData({
      initDate: detail,
    });
  },

  onNameChange: function (event: any) {
    const { detail } = event;
    this.setData({
      bookName: detail,
    });
  },

  onAmountChange: function (event: any) {
    const { detail } = event;
    this.setData({
      initAmount: parseFloat(detail),
    });
  },

  onDescChange: function (event: any) {
    const { detail } = event;
    this.setData({
      desc: detail,
    });
  },

  onAddBook: function () {
    const book = this.data as Ibook;
    const isBookValidRes = this.isBookValid(book);
    if (!isBookValidRes.isValid) {
      wx.showModal({
        title: "账户检测提示",
        content: isBookValidRes.msg,
        showCancel: false,
        confirmColor: "#3f98f3",
      });
    } else {
      wx.cloud
        .callFunction({
          name: "addBook",
          data: {
            ...book,
          },
        })
        .then((res) => {
          console.log("调用success", res);
          wx.navigateBack({
            delta: 0,
          });
        })
        .catch((err) => console.log(err));
    }
  },

  /**
   * 数据是否合法
   */
  isBookValid: function (book: Ibook): IBookVaildRes {
    let res: IBookVaildRes = {
      isValid: true,
      msg: "",
    };

    if (!book.bookName) {
      res.isValid = false;
      res.msg = "账户名称不能为空！";
    } else if (!book.initAmount) {
      res.isValid = false;
      res.msg = "需要输入总资产";
    } else if (!book.initDate) {
      res.isValid = false;
      res.msg = "需要选中一个时间";
    }

    return res;
  },
});
