"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commonHelper_1 = require("../../utils/commonHelper");
Page({
    data: {
        isShowAmount: true,
        hiddenFlag: commonHelper_1.HIDDEN_AMOUNT_FLAG,
    },
    onReady: function () { },
    onShow: function () {
        this.getBook();
    },
    onHide: function () { },
    onPullDownRefresh: function () { },
    onReachBottom: function () { },
    onShareAppMessage: function () { },
    getBook: function () {
        wx.cloud.callFunction({
            name: "getBook",
            data: {},
            success: (res) => {
                var _a;
                const bookList = (_a = res === null || res === void 0 ? void 0 : res.result) === null || _a === void 0 ? void 0 : _a.bookList;
                this.setData(this.getBooksData(bookList));
            },
            fail: (err) => {
                console.error("[云函数] [getBook] 调用失败", err);
            },
        });
    },
    onAddBook: function () {
        wx.navigateTo({
            url: "../addBook/addBook",
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
            isShowAmount: !this.data.isShowAmount,
        });
    },
    onItemTap: function (event) {
        const currBook = event === null || event === void 0 ? void 0 : event.detail;
        wx.navigateTo({
            url: `../bookDetail/bookDetail?bookid=${currBook._id}`,
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyREFBOEQ7QUFVOUQsSUFBSSxDQUFDO0lBSUgsSUFBSSxFQUFFO1FBQ0osWUFBWSxFQUFFLElBQUk7UUFDbEIsVUFBVSxFQUFFLGlDQUFrQjtLQUMvQjtJQUtELE9BQU8sRUFBRSxjQUFhLENBQUM7SUFLdkIsTUFBTSxFQUFFO1FBQ04sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFLRCxNQUFNLEVBQUUsY0FBYSxDQUFDO0lBS3RCLGlCQUFpQixFQUFFLGNBQWEsQ0FBQztJQUtqQyxhQUFhLEVBQUUsY0FBYSxDQUFDO0lBSzdCLGlCQUFpQixFQUFFLGNBQWEsQ0FBQztJQUVqQyxPQUFPLEVBQUU7UUFFUCxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUNwQixJQUFJLEVBQUUsU0FBUztZQUNmLElBQUksRUFBRSxFQUFFO1lBQ1IsT0FBTyxFQUFFLENBQUMsR0FBUSxFQUFFLEVBQUU7O2dCQUNwQixNQUFNLFFBQVEsR0FBRyxNQUFTLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxNQUFNLDBDQUFFLFFBQVEsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDNUMsQ0FBQztZQUNELElBQUksRUFBRSxDQUFDLEdBQVEsRUFBRSxFQUFFO2dCQUNqQixPQUFPLENBQUMsS0FBSyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzdDLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUyxFQUFFO1FBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxvQkFBb0I7U0FDMUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQU1ELFlBQVksRUFBRSxVQUFVLFFBQWlCO1FBQ3ZDLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQztRQUM1QixJQUFJLFNBQVMsR0FBVyxDQUFDLENBQUM7UUFFMUIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVcsRUFBRSxFQUFFO1lBQy9CLFdBQVcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQy9CLFNBQVMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBR0gsT0FBTztZQUNMLFFBQVE7WUFDUixXQUFXO1lBQ1gsU0FBUztZQUNULFdBQVcsRUFBRSxDQUFDO1NBQ2YsQ0FBQztJQUNKLENBQUM7SUFLRCxrQkFBa0IsRUFBRTtRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO1NBQ3RDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFLRCxTQUFTLEVBQUUsVUFBVSxLQUFVO1FBQzdCLE1BQU0sUUFBUSxHQUFHLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxNQUFlLENBQUM7UUFDeEMsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxtQ0FBbUMsUUFBUSxDQUFDLEdBQUcsRUFBRTtTQUN2RCxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUJvb2sgfSBmcm9tIFwiLi4vLi4vZGF0YU1vZGVsL2RhdGFcIjtcbmltcG9ydCB7IEhJRERFTl9BTU9VTlRfRkxBRyB9IGZyb20gXCIuLi8uLi91dGlscy9jb21tb25IZWxwZXJcIjtcblxuaW50ZXJmYWNlIHBhZ2VEYXRhIHtcbiAgYm9va0xpc3Q6IElCb29rW107XG4gIHRvdGFsQW1vdW50OiBudW1iZXI7IC8v5oC76LWE5LqnXG4gIHRvdGFsQ29zdDogbnVtYmVyOyAvLyDmgLvmipXlhaVcbiAgdG90YWxJbmNvbWU6IG51bWJlcjsgLy8g5oC75pS255uKXG4gIGlzU2hvd0Ftb3VudD86IGJvb2xlYW47IC8vIOaYr+WQpuaYvuekuui1hOS6p1xufVxuXG5QYWdlKHtcbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIGlzU2hvd0Ftb3VudDogdHJ1ZSxcbiAgICBoaWRkZW5GbGFnOiBISURERU5fQU1PVU5UX0ZMQUcsXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7fSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZ2V0Qm9vaygpO1xuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7fSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7fSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7fSxcblxuICAvKipcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXG4gICAqL1xuICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24gKCkge30sXG5cbiAgZ2V0Qm9vazogZnVuY3Rpb24gKCkge1xuICAgIC8vIOiwg+eUqOS6keWHveaVsFxuICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XG4gICAgICBuYW1lOiBcImdldEJvb2tcIixcbiAgICAgIGRhdGE6IHt9LFxuICAgICAgc3VjY2VzczogKHJlczogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGJvb2tMaXN0ID0gPElCb29rW10+cmVzPy5yZXN1bHQ/LmJvb2tMaXN0O1xuICAgICAgICB0aGlzLnNldERhdGEodGhpcy5nZXRCb29rc0RhdGEoYm9va0xpc3QpKTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlvkupHlh73mlbBdIFtnZXRCb29rXSDosIPnlKjlpLHotKVcIiwgZXJyKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG5cbiAgb25BZGRCb29rOiBmdW5jdGlvbiAoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IFwiLi4vYWRkQm9vay9hZGRCb29rXCIsXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOagueaNrui0puebruWIl+ihqOiuoeeul+mhtemdouaVsOaNrlxuICAgKiBAcGFyYW0gYm9va0xpc3RcbiAgICovXG4gIGdldEJvb2tzRGF0YTogZnVuY3Rpb24gKGJvb2tMaXN0OiBJQm9va1tdKTogcGFnZURhdGEge1xuICAgIGxldCB0b3RhbEFtb3VudDogbnVtYmVyID0gMDtcbiAgICBsZXQgdG90YWxDb3N0OiBudW1iZXIgPSAwO1xuXG4gICAgYm9va0xpc3QuZm9yRWFjaCgoYm9vazogSUJvb2spID0+IHtcbiAgICAgIHRvdGFsQW1vdW50ICs9IGJvb2suY3VyckFtb3VudDtcbiAgICAgIHRvdGFsQ29zdCArPSBib29rLmluaXRBbW91bnQ7XG4gICAgfSk7XG5cbiAgICAvLyBUT0RPXG4gICAgcmV0dXJuIHtcbiAgICAgIGJvb2tMaXN0LFxuICAgICAgdG90YWxBbW91bnQsXG4gICAgICB0b3RhbENvc3QsXG4gICAgICB0b3RhbEluY29tZTogMCxcbiAgICB9O1xuICB9LFxuXG4gIC8qKlxuICAgKiDmmL7npLov6ZqQ6JePIOi1hOS6p1xuICAgKi9cbiAgb25Ub2dnbGVTaG93QW1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGlzU2hvd0Ftb3VudDogIXRoaXMuZGF0YS5pc1Nob3dBbW91bnQsXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBvbkl0ZW1UYXA6IGZ1bmN0aW9uIChldmVudDogYW55KSB7XG4gICAgY29uc3QgY3VyckJvb2sgPSBldmVudD8uZGV0YWlsIGFzIElCb29rO1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vYm9va0RldGFpbC9ib29rRGV0YWlsP2Jvb2tpZD0ke2N1cnJCb29rLl9pZH1gLFxuICAgIH0pO1xuICB9LFxufSk7XG4iXX0=