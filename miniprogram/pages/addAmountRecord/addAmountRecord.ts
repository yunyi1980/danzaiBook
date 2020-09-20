import { IBookAmountRecord, IValidRes } from "../../dataModel/data";
import { toFormatString } from "../../utils/commonHelper";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    _id: "",
    openid: "",
    bookid: "",
    amount: 0,
    updateDate: toFormatString(new Date()),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      bookid: options.bookid,
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

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

  /**
   * 设置资产
   * @param event
   */
  onAmountChange: function (event: any) {
    const { detail } = event;
    this.setData({
      amount: detail,
    });
  },

  /**
   * 设置描述
   * @param event
   */
  onDescChange: function (event: any) {
    const { detail } = event;
    this.setData({
      desc: detail,
    });
  },
  /**
   * 增加资产记录
   */
  onAddAmountRecord: function () {
    const record: IBookAmountRecord = {
      ...this.data,
    };

    const validRes = this.isRecordValid(record);
    if (!validRes.isValid) {
      wx.showModal({
        title: validRes.msg,
        showCancel: false,
        confirmColor: "#3f98f3",
      });
    } else {
      wx.cloud
        .callFunction({
          name: "addBookAmountRecord",
          data: {
            ...record,
          },
        })
        .then((res) => {
          console.log(res);
          wx.navigateBack();
        })
        .catch((res) => {
          wx.showToast({
            title: res,
          });
        });
    }
  },

  /**
   * 设置日期
   * @param event
   */
  onDateChange: function (event: any) {
    const { detail } = event;
    this.setData({
      updateDate: detail,
    });
  },

  isRecordValid: function (record: IBookAmountRecord): IValidRes {
    let validRes: IValidRes = {
      isValid: true,
      msg: "",
    };

    if (record.amount <= 0) {
      validRes.isValid = false;
      validRes.msg = "总资产有误";
    }
    // } else if (record.updateDate) {
    //   validRes.isValid = false;
    //   validRes.msg = "总资产有误";
    // }
    return validRes;
  },
});
