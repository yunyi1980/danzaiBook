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
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyREFBMkQ7QUFVM0QsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osWUFBWSxFQUFFLElBQUk7UUFDbEIsVUFBVSxFQUFFLGlDQUFrQjtLQUMvQjtJQUtELE9BQU8sRUFBRTtRQUNQLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBS0QsTUFBTSxFQUFFO0lBQ1IsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBS0QsYUFBYSxFQUFFO0lBRWYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFFRCxPQUFPLEVBQUU7UUFFUCxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUNwQixJQUFJLEVBQUUsU0FBUztZQUNmLElBQUksRUFBRSxFQUFFO1lBQ1IsT0FBTyxFQUFFLENBQUMsR0FBTyxFQUFFLEVBQUU7O2dCQUNuQixNQUFNLFFBQVEsR0FBRyxNQUFRLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxNQUFNLDBDQUFFLFFBQVEsQ0FBQTtnQkFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7WUFDM0MsQ0FBQztZQUNELElBQUksRUFBRSxDQUFDLEdBQU8sRUFBRSxFQUFFO2dCQUNoQixPQUFPLENBQUMsS0FBSyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQzVDLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsU0FBUyxFQUFFO1FBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxvQkFBb0I7U0FDMUIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQU1ELFlBQVksRUFBRSxVQUFVLFFBQWdCO1FBQ3RDLElBQUksV0FBVyxHQUFVLENBQUMsQ0FBQztRQUMzQixJQUFJLFNBQVMsR0FBVSxDQUFDLENBQUM7UUFFekIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO1lBQzdCLFdBQVcsSUFBSyxJQUFJLENBQUMsVUFBVSxDQUFBO1lBQy9CLFNBQVMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFBO1FBQzlCLENBQUMsQ0FBQyxDQUFBO1FBR0YsT0FBTztZQUNMLFFBQVE7WUFDUixXQUFXO1lBQ1gsU0FBUztZQUNULFdBQVcsRUFBRSxDQUFDO1NBQ2YsQ0FBQTtJQUNILENBQUM7SUFLRCxrQkFBa0IsRUFBRTtRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO1NBQ3RDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Jvb2t9IGZyb20gJy4uLy4uL2RhdGFNb2RlbC9kYXRhJ1xyXG5pbXBvcnQge0hJRERFTl9BTU9VTlRfRkxBR30gZnJvbSAnLi4vLi4vdXRpbHMvY29tbW9uSGVscGVyJ1xyXG5cclxuaW50ZXJmYWNlIHBhZ2VEYXRhIHtcclxuICBib29rTGlzdDogYm9va1tdLFxyXG4gIHRvdGFsQW1vdW50OiBudW1iZXIsIC8v5oC76LWE5LqnXHJcbiAgdG90YWxDb3N0OiBudW1iZXIsIC8vIOaAu+aKleWFpVxyXG4gIHRvdGFsSW5jb21lOiBudW1iZXIsIC8vIOaAu+aUtuebilxyXG4gIGlzU2hvd0Ftb3VudD86IGJvb2xlYW4sIC8vIOaYr+WQpuaYvuekuui1hOS6p1xyXG59XHJcblxyXG5QYWdlKHtcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgaXNTaG93QW1vdW50OiB0cnVlLFxyXG4gICAgaGlkZGVuRmxhZzogSElEREVOX0FNT1VOVF9GTEFHLFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5nZXRCb29rKCk7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxyXG4gICAqL1xyXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXHJcbiAgICovXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgZ2V0Qm9vazogZnVuY3Rpb24gKCkge1xyXG4gICAgLy8g6LCD55So5LqR5Ye95pWwXHJcbiAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICBuYW1lOiAnZ2V0Qm9vaycsXHJcbiAgICAgIGRhdGE6IHt9LFxyXG4gICAgICBzdWNjZXNzOiAocmVzOmFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJvb2tMaXN0ID0gPGJvb2tbXT5yZXM/LnJlc3VsdD8uYm9va0xpc3RcclxuICAgICAgICB0aGlzLnNldERhdGEodGhpcy5nZXRCb29rc0RhdGEoYm9va0xpc3QpKVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiAoZXJyOmFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1vkupHlh73mlbBdIFtnZXRCb29rXSDosIPnlKjlpLHotKUnLCBlcnIpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgb25BZGRCb29rOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiAnLi4vYWRkQm9vay9hZGRCb29rJ1xyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDmoLnmja7otKbnm67liJfooajorqHnrpfpobXpnaLmlbDmja5cclxuICAgKiBAcGFyYW0gYm9va0xpc3QgXHJcbiAgICovXHJcbiAgZ2V0Qm9va3NEYXRhOiBmdW5jdGlvbiAoYm9va0xpc3Q6IGJvb2tbXSk6IHBhZ2VEYXRhIHtcclxuICAgIGxldCB0b3RhbEFtb3VudDpudW1iZXIgPSAwO1xyXG4gICAgbGV0IHRvdGFsQ29zdDpudW1iZXIgPSAwO1xyXG5cclxuICAgIGJvb2tMaXN0LmZvckVhY2goKGJvb2s6Ym9vaykgPT4ge1xyXG4gICAgICB0b3RhbEFtb3VudCArPSAgYm9vay5jdXJyQW1vdW50XHJcbiAgICAgIHRvdGFsQ29zdCArPSBib29rLmluaXRBbW91bnRcclxuICAgIH0pXHJcblxyXG4gICAgLy8gVE9ET1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYm9va0xpc3QsXHJcbiAgICAgIHRvdGFsQW1vdW50LFxyXG4gICAgICB0b3RhbENvc3QsXHJcbiAgICAgIHRvdGFsSW5jb21lOiAwLFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOaYvuekui/pmpDol48g6LWE5LqnXHJcbiAgICovXHJcbiAgb25Ub2dnbGVTaG93QW1vdW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBpc1Nob3dBbW91bnQ6ICF0aGlzLmRhdGEuaXNTaG93QW1vdW50XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbn0pIl19