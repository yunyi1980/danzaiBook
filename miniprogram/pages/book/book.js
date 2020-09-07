"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commonHelper_1 = require("../../utils/commonHelper");
Page({
    data: {
        isShowAmount: true,
        hiddenFlag: commonHelper_1.HIDDEN_AMOUNT_FLAG,
    },
    onReady: function () {
        this.getBook();
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
    onShareAppMessage: function () {
    },
    getBook: function () {
        wx.cloud.callFunction({
            name: 'getBook',
            data: {},
            success: (res) => {
                var _a;
                const bookList = (_a = res === null || res === void 0 ? void 0 : res.result) === null || _a === void 0 ? void 0 : _a.bookList;
                this.setData(this.getBooksData(bookList));
            },
            fail: (err) => {
                console.error('[云函数] [getBook] 调用失败', err);
            }
        });
    },
    onAddBook: function () {
        wx.navigateTo({
            url: '../addBook/addBook'
        });
    },
    getBooksData: function (bookList) {
        let totalAmount = 0;
        let totalCost = 0;
        bookList.forEach((book) => {
            totalAmount += book.currAmount;
            totalCost += book.initAmount;
        });
        return {
            bookList,
            totalAmount,
            totalCost,
            totalIncome: 0,
        };
    },
    onToggleShowAmount: function () {
        this.setData({
            isShowAmount: !this.data.isShowAmount
        });
    },
    onItemTap: function () {
        wx.navigateTo({
            url: "../addRecord/addRecord"
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyREFBMkQ7QUFVM0QsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osWUFBWSxFQUFFLElBQUk7UUFDbEIsVUFBVSxFQUFFLGlDQUFrQjtLQUMvQjtJQUtELE9BQU8sRUFBRTtRQUNQLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBS0QsTUFBTSxFQUFFO0lBQ1IsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBS0QsYUFBYSxFQUFFO0lBRWYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFFRCxPQUFPLEVBQUU7UUFFUCxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUNwQixJQUFJLEVBQUUsU0FBUztZQUNmLElBQUksRUFBRSxFQUFFO1lBQ1IsT0FBTyxFQUFFLENBQUMsR0FBTyxFQUFFLEVBQUU7O2dCQUNuQixNQUFNLFFBQVEsR0FBRyxNQUFRLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxNQUFNLDBDQUFFLFFBQVEsQ0FBQTtnQkFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7WUFDM0MsQ0FBQztZQUNELElBQUksRUFBRSxDQUFDLEdBQU8sRUFBRSxFQUFFO2dCQUNoQixPQUFPLENBQUMsS0FBSyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQzVDLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsU0FBUyxFQUFFO1FBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxvQkFBb0I7U0FDMUIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQU1ELFlBQVksRUFBRSxVQUFVLFFBQWdCO1FBQ3RDLElBQUksV0FBVyxHQUFVLENBQUMsQ0FBQztRQUMzQixJQUFJLFNBQVMsR0FBVSxDQUFDLENBQUM7UUFFekIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO1lBQzdCLFdBQVcsSUFBSyxJQUFJLENBQUMsVUFBVSxDQUFBO1lBQy9CLFNBQVMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFBO1FBQzlCLENBQUMsQ0FBQyxDQUFBO1FBR0YsT0FBTztZQUNMLFFBQVE7WUFDUixXQUFXO1lBQ1gsU0FBUztZQUNULFdBQVcsRUFBRSxDQUFDO1NBQ2YsQ0FBQTtJQUNILENBQUM7SUFLRCxrQkFBa0IsRUFBRTtRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO1NBQ3RDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxTQUFTLEVBQUU7UUFDVCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLHdCQUF3QjtTQUM5QixDQUFDLENBQUE7SUFDSixDQUFDO0NBRUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib29rfSBmcm9tICcuLi8uLi9kYXRhTW9kZWwvZGF0YSdcbmltcG9ydCB7SElEREVOX0FNT1VOVF9GTEFHfSBmcm9tICcuLi8uLi91dGlscy9jb21tb25IZWxwZXInXG5cbmludGVyZmFjZSBwYWdlRGF0YSB7XG4gIGJvb2tMaXN0OiBib29rW10sXG4gIHRvdGFsQW1vdW50OiBudW1iZXIsIC8v5oC76LWE5LqnXG4gIHRvdGFsQ29zdDogbnVtYmVyLCAvLyDmgLvmipXlhaVcbiAgdG90YWxJbmNvbWU6IG51bWJlciwgLy8g5oC75pS255uKXG4gIGlzU2hvd0Ftb3VudD86IGJvb2xlYW4sIC8vIOaYr+WQpuaYvuekuui1hOS6p1xufVxuXG5QYWdlKHtcblxuICAvKipcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgaXNTaG93QW1vdW50OiB0cnVlLFxuICAgIGhpZGRlbkZsYWc6IEhJRERFTl9BTU9VTlRfRkxBRyxcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmdldEJvb2soKTtcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXG4gICAqL1xuICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgZ2V0Qm9vazogZnVuY3Rpb24gKCkge1xuICAgIC8vIOiwg+eUqOS6keWHveaVsFxuICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XG4gICAgICBuYW1lOiAnZ2V0Qm9vaycsXG4gICAgICBkYXRhOiB7fSxcbiAgICAgIHN1Y2Nlc3M6IChyZXM6YW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGJvb2tMaXN0ID0gPGJvb2tbXT5yZXM/LnJlc3VsdD8uYm9va0xpc3RcbiAgICAgICAgdGhpcy5zZXREYXRhKHRoaXMuZ2V0Qm9va3NEYXRhKGJvb2tMaXN0KSlcbiAgICAgIH0sXG4gICAgICBmYWlsOiAoZXJyOmFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdb5LqR5Ye95pWwXSBbZ2V0Qm9va10g6LCD55So5aSx6LSlJywgZXJyKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgb25BZGRCb29rOiBmdW5jdGlvbiAoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9hZGRCb29rL2FkZEJvb2snXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICog5qC55o2u6LSm55uu5YiX6KGo6K6h566X6aG16Z2i5pWw5o2uXG4gICAqIEBwYXJhbSBib29rTGlzdCBcbiAgICovXG4gIGdldEJvb2tzRGF0YTogZnVuY3Rpb24gKGJvb2tMaXN0OiBib29rW10pOiBwYWdlRGF0YSB7XG4gICAgbGV0IHRvdGFsQW1vdW50Om51bWJlciA9IDA7XG4gICAgbGV0IHRvdGFsQ29zdDpudW1iZXIgPSAwO1xuXG4gICAgYm9va0xpc3QuZm9yRWFjaCgoYm9vazpib29rKSA9PiB7XG4gICAgICB0b3RhbEFtb3VudCArPSAgYm9vay5jdXJyQW1vdW50XG4gICAgICB0b3RhbENvc3QgKz0gYm9vay5pbml0QW1vdW50XG4gICAgfSlcblxuICAgIC8vIFRPRE9cbiAgICByZXR1cm4ge1xuICAgICAgYm9va0xpc3QsXG4gICAgICB0b3RhbEFtb3VudCxcbiAgICAgIHRvdGFsQ29zdCxcbiAgICAgIHRvdGFsSW5jb21lOiAwLFxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICog5pi+56S6L+makOiXjyDotYTkuqdcbiAgICovXG4gIG9uVG9nZ2xlU2hvd0Ftb3VudDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBpc1Nob3dBbW91bnQ6ICF0aGlzLmRhdGEuaXNTaG93QW1vdW50XG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICogXG4gICAqL1xuICBvbkl0ZW1UYXA6IGZ1bmN0aW9uICgpe1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBcIi4uL2FkZFJlY29yZC9hZGRSZWNvcmRcIlxuICAgIH0pXG4gIH0sXG5cbn0pIl19