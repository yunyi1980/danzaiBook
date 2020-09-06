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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyREFBMkQ7QUFVM0QsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osWUFBWSxFQUFFLElBQUk7UUFDbEIsVUFBVSxFQUFFLGlDQUFrQjtLQUMvQjtJQUtELE9BQU8sRUFBRTtRQUNQLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBS0QsTUFBTSxFQUFFO0lBQ1IsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBS0QsYUFBYSxFQUFFO0lBRWYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFFRCxPQUFPLEVBQUU7UUFFUCxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUNwQixJQUFJLEVBQUUsU0FBUztZQUNmLElBQUksRUFBRSxFQUFFO1lBQ1IsT0FBTyxFQUFFLENBQUMsR0FBTyxFQUFFLEVBQUU7O2dCQUNuQixNQUFNLFFBQVEsR0FBRyxNQUFRLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxNQUFNLDBDQUFFLFFBQVEsQ0FBQTtnQkFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7WUFDM0MsQ0FBQztZQUNELElBQUksRUFBRSxDQUFDLEdBQU8sRUFBRSxFQUFFO2dCQUNoQixPQUFPLENBQUMsS0FBSyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQzVDLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsU0FBUyxFQUFFO1FBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxvQkFBb0I7U0FDMUIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQU1ELFlBQVksRUFBRSxVQUFVLFFBQWdCO1FBQ3RDLElBQUksV0FBVyxHQUFVLENBQUMsQ0FBQztRQUMzQixJQUFJLFNBQVMsR0FBVSxDQUFDLENBQUM7UUFFekIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO1lBQzdCLFdBQVcsSUFBSyxJQUFJLENBQUMsVUFBVSxDQUFBO1lBQy9CLFNBQVMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFBO1FBQzlCLENBQUMsQ0FBQyxDQUFBO1FBR0YsT0FBTztZQUNMLFFBQVE7WUFDUixXQUFXO1lBQ1gsU0FBUztZQUNULFdBQVcsRUFBRSxDQUFDO1NBQ2YsQ0FBQTtJQUNILENBQUM7SUFLRCxrQkFBa0IsRUFBRTtRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO1NBQ3RDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxTQUFTLEVBQUU7UUFDVCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLHdCQUF3QjtTQUM5QixDQUFDLENBQUE7SUFDSixDQUFDO0NBRUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib29rfSBmcm9tICcuLi8uLi9kYXRhTW9kZWwvZGF0YSdcclxuaW1wb3J0IHtISURERU5fQU1PVU5UX0ZMQUd9IGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vbkhlbHBlcidcclxuXHJcbmludGVyZmFjZSBwYWdlRGF0YSB7XHJcbiAgYm9va0xpc3Q6IGJvb2tbXSxcclxuICB0b3RhbEFtb3VudDogbnVtYmVyLCAvL+aAu+i1hOS6p1xyXG4gIHRvdGFsQ29zdDogbnVtYmVyLCAvLyDmgLvmipXlhaVcclxuICB0b3RhbEluY29tZTogbnVtYmVyLCAvLyDmgLvmlLbnm4pcclxuICBpc1Nob3dBbW91bnQ/OiBib29sZWFuLCAvLyDmmK/lkKbmmL7npLrotYTkuqdcclxufVxyXG5cclxuUGFnZSh7XHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIGlzU2hvd0Ftb3VudDogdHJ1ZSxcclxuICAgIGhpZGRlbkZsYWc6IEhJRERFTl9BTU9VTlRfRkxBRyxcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuZ2V0Qm9vaygpO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XHJcbiAgICovXHJcbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcclxuICAgKi9cclxuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuICAgKi9cclxuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xyXG4gICAqL1xyXG4gIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIGdldEJvb2s6IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIOiwg+eUqOS6keWHveaVsFxyXG4gICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgbmFtZTogJ2dldEJvb2snLFxyXG4gICAgICBkYXRhOiB7fSxcclxuICAgICAgc3VjY2VzczogKHJlczphbnkpID0+IHtcclxuICAgICAgICBjb25zdCBib29rTGlzdCA9IDxib29rW10+cmVzPy5yZXN1bHQ/LmJvb2tMaXN0XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHRoaXMuZ2V0Qm9va3NEYXRhKGJvb2tMaXN0KSlcclxuICAgICAgfSxcclxuICAgICAgZmFpbDogKGVycjphbnkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdb5LqR5Ye95pWwXSBbZ2V0Qm9va10g6LCD55So5aSx6LSlJywgZXJyKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIG9uQWRkQm9vazogZnVuY3Rpb24gKCkge1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogJy4uL2FkZEJvb2svYWRkQm9vaydcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog5qC55o2u6LSm55uu5YiX6KGo6K6h566X6aG16Z2i5pWw5o2uXHJcbiAgICogQHBhcmFtIGJvb2tMaXN0IFxyXG4gICAqL1xyXG4gIGdldEJvb2tzRGF0YTogZnVuY3Rpb24gKGJvb2tMaXN0OiBib29rW10pOiBwYWdlRGF0YSB7XHJcbiAgICBsZXQgdG90YWxBbW91bnQ6bnVtYmVyID0gMDtcclxuICAgIGxldCB0b3RhbENvc3Q6bnVtYmVyID0gMDtcclxuXHJcbiAgICBib29rTGlzdC5mb3JFYWNoKChib29rOmJvb2spID0+IHtcclxuICAgICAgdG90YWxBbW91bnQgKz0gIGJvb2suY3VyckFtb3VudFxyXG4gICAgICB0b3RhbENvc3QgKz0gYm9vay5pbml0QW1vdW50XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIFRPRE9cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJvb2tMaXN0LFxyXG4gICAgICB0b3RhbEFtb3VudCxcclxuICAgICAgdG90YWxDb3N0LFxyXG4gICAgICB0b3RhbEluY29tZTogMCxcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDmmL7npLov6ZqQ6JePIOi1hOS6p1xyXG4gICAqL1xyXG4gIG9uVG9nZ2xlU2hvd0Ftb3VudDogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgaXNTaG93QW1vdW50OiAhdGhpcy5kYXRhLmlzU2hvd0Ftb3VudFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKi9cclxuICBvbkl0ZW1UYXA6IGZ1bmN0aW9uICgpe1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogXCIuLi9hZGRSZWNvcmQvYWRkUmVjb3JkXCJcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbn0pIl19