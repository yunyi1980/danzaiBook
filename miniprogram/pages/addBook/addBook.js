"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dateHelper_1 = require("../../utils/dateHelper");
Page({
    data: {},
    onLoad: function (options) {
    },
    onReady: function () {
        var currDate = dateHelper_1.toFormatString(new Date());
        var newBook = {
            bookName: '',
            bookid: '',
            initDate: new Date(),
            initAmount: 0,
            currency: 'CNY',
        };
        this.setData(__assign({ currDate: currDate }, newBook));
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
    onDateChange: function (event) {
        var value = event.detail.value;
        this.setData({
            date: value,
        });
    },
    onNameChange: function (event) {
        var value = event.detail.value;
        this.setData({
            bookName: value,
        });
    },
    onAmountChange: function (event) {
        var value = event.detail.value;
        this.setData({
            amount: value,
        });
    },
    onAddBook: function () {
        var _a = this.data, bookName = _a.bookName, amount = _a.amount, date = _a.date;
        wx.cloud.callFunction({
            name: "addBook",
            data: {
                bookName: bookName,
                amount: amount,
                date: date
            },
        }).then(function (res) {
            console.log('调用success', res);
            wx.navigateBack({
                delta: 0,
            });
        }).catch(function (err) { return console.log(err); });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkQm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZEJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFxRDtBQUdyRCxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUUsRUFDTDtJQUtELE1BQU0sRUFBRSxVQUFVLE9BQU87SUFFekIsQ0FBQztJQUtELE9BQU8sRUFBRTtRQUNQLElBQU0sUUFBUSxHQUFHLDJCQUFjLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQzNDLElBQU0sT0FBTyxHQUFTO1lBQ3BCLFFBQVEsRUFBRSxFQUFFO1lBQ1osTUFBTSxFQUFFLEVBQUU7WUFDVixRQUFRLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDcEIsVUFBVSxFQUFFLENBQUM7WUFDYixRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFBO1FBQ0QsSUFBSSxDQUFDLE9BQU8sWUFDVixRQUFRLFVBQUEsSUFDTCxPQUFPLEVBQ1YsQ0FBQTtJQUNKLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELFFBQVEsRUFBRTtJQUVWLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBS0QsYUFBYSxFQUFFO0lBRWYsQ0FBQztJQVNELFlBQVksRUFBRSxVQUFVLEtBQUs7UUFDWixJQUFBLEtBQUssR0FBSyxLQUFLLGFBQVYsQ0FBVTtRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsSUFBSSxFQUFFLEtBQUs7U0FDWixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsWUFBWSxFQUFFLFVBQVUsS0FBSztRQUNaLElBQUEsS0FBSyxHQUFLLEtBQUssYUFBVixDQUFVO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsY0FBYyxFQUFFLFVBQVUsS0FBSztRQUNkLElBQUEsS0FBSyxHQUFLLEtBQUssYUFBVixDQUFVO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxNQUFNLEVBQUUsS0FBSztTQUNkLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxTQUFTLEVBQUU7UUFDSCxJQUFBLEtBQTJCLElBQUksQ0FBQyxJQUFJLEVBQW5DLFFBQVEsY0FBQSxFQUFFLE1BQU0sWUFBQSxFQUFFLElBQUksVUFBYSxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQ3BCLElBQUksRUFBRSxTQUFTO1lBQ2YsSUFBSSxFQUFDO2dCQUNILFFBQVEsVUFBQTtnQkFDUixNQUFNLFFBQUE7Z0JBQ04sSUFBSSxNQUFBO2FBQ0w7U0FDRixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQzdCLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHLElBQUcsT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUE7SUFDbkMsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dG9Gb3JtYXRTdHJpbmd9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGVIZWxwZXInXHJcbmltcG9ydCB7Ym9va30gZnJvbSAnLi4vLi4vZGF0YU1vZGVsL2RhdGEnXHJcblxyXG5QYWdlKHtcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGN1cnJEYXRlID0gdG9Gb3JtYXRTdHJpbmcobmV3IERhdGUoKSlcclxuICAgIGNvbnN0IG5ld0Jvb2s6IGJvb2sgPSB7XHJcbiAgICAgIGJvb2tOYW1lOiAnJyxcclxuICAgICAgYm9va2lkOiAnJyxcclxuICAgICAgaW5pdERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgIGluaXRBbW91bnQ6IDAsXHJcbiAgICAgIGN1cnJlbmN5OiAnQ05ZJyxcclxuICAgIH1cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGN1cnJEYXRlLFxyXG4gICAgICAuLi5uZXdCb29rXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XHJcbiAgICovXHJcbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXHJcbiAgICovXHJcbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XHJcbiAgICovXHJcbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcclxuICAgKi9cclxuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuICAgKi9cclxuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xyXG4gICAqL1xyXG4gIC8vIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIC8vIH0sXHJcblxyXG4gIG9uRGF0ZUNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBjb25zdCB7ZGV0YWlsOnt2YWx1ZX19ID0gZXZlbnRcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGRhdGU6IHZhbHVlLFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBvbk5hbWVDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgY29uc3Qge2RldGFpbDp7dmFsdWV9fSA9IGV2ZW50XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBib29rTmFtZTogdmFsdWUsXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIG9uQW1vdW50Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGNvbnN0IHtkZXRhaWw6e3ZhbHVlfX0gPSBldmVudFxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgYW1vdW50OiB2YWx1ZSxcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgb25BZGRCb29rOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCB7Ym9va05hbWUsIGFtb3VudCwgZGF0ZX0gPSB0aGlzLmRhdGE7XHJcbiAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICBuYW1lOiBcImFkZEJvb2tcIixcclxuICAgICAgZGF0YTp7XHJcbiAgICAgICAgYm9va05hbWUsXHJcbiAgICAgICAgYW1vdW50LFxyXG4gICAgICAgIGRhdGVcclxuICAgICAgfSxcclxuICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ+iwg+eUqHN1Y2Nlc3MnLCByZXMpXHJcbiAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgZGVsdGE6IDAsXHJcbiAgICAgIH0pXHJcbiAgICB9KS5jYXRjaCgoZXJyKT0+Y29uc29sZS5sb2coZXJyKSlcclxuICB9XHJcbn0pIl19