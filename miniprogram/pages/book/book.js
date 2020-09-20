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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyREFBOEQ7QUFVOUQsSUFBSSxDQUFDO0lBSUgsSUFBSSxFQUFFO1FBQ0osWUFBWSxFQUFFLElBQUk7UUFDbEIsVUFBVSxFQUFFLGlDQUFrQjtLQUMvQjtJQUtELE9BQU8sRUFBRSxjQUFhLENBQUM7SUFLdkIsTUFBTSxFQUFFO1FBQ04sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFLRCxNQUFNLEVBQUUsY0FBYSxDQUFDO0lBS3RCLGlCQUFpQixFQUFFLGNBQWEsQ0FBQztJQUtqQyxhQUFhLEVBQUUsY0FBYSxDQUFDO0lBSzdCLGlCQUFpQixFQUFFLGNBQWEsQ0FBQztJQUVqQyxPQUFPLEVBQUU7UUFFUCxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUNwQixJQUFJLEVBQUUsU0FBUztZQUNmLElBQUksRUFBRSxFQUFFO1lBQ1IsT0FBTyxFQUFFLENBQUMsR0FBUSxFQUFFLEVBQUU7O2dCQUNwQixNQUFNLFFBQVEsR0FBRyxNQUFTLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxNQUFNLDBDQUFFLFFBQVEsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDNUMsQ0FBQztZQUNELElBQUksRUFBRSxDQUFDLEdBQVEsRUFBRSxFQUFFO2dCQUNqQixPQUFPLENBQUMsS0FBSyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzdDLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUyxFQUFFO1FBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxvQkFBb0I7U0FDMUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQU1ELFlBQVksRUFBRSxVQUFVLFFBQWlCO1FBQ3ZDLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQztRQUM1QixJQUFJLFNBQVMsR0FBVyxDQUFDLENBQUM7UUFFMUIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVcsRUFBRSxFQUFFO1lBQy9CLFdBQVcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQy9CLFNBQVMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBR0gsT0FBTztZQUNMLFFBQVE7WUFDUixXQUFXO1lBQ1gsU0FBUztZQUNULFdBQVcsRUFBRSxDQUFDO1NBQ2YsQ0FBQztJQUNKLENBQUM7SUFLRCxrQkFBa0IsRUFBRTtRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO1NBQ3RDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFLRCxTQUFTLEVBQUUsVUFBVSxLQUFVO1FBQzdCLE1BQU0sUUFBUSxHQUFHLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxNQUFlLENBQUM7UUFDeEMsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxtQ0FBbUMsUUFBUSxDQUFDLEdBQUcsRUFBRTtTQUN2RCxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUJvb2sgfSBmcm9tIFwiLi4vLi4vZGF0YU1vZGVsL2RhdGFcIjtcclxuaW1wb3J0IHsgSElEREVOX0FNT1VOVF9GTEFHIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbkhlbHBlclwiO1xyXG5cclxuaW50ZXJmYWNlIHBhZ2VEYXRhIHtcclxuICBib29rTGlzdDogSUJvb2tbXTtcclxuICB0b3RhbEFtb3VudDogbnVtYmVyOyAvL+aAu+i1hOS6p1xyXG4gIHRvdGFsQ29zdDogbnVtYmVyOyAvLyDmgLvmipXlhaVcclxuICB0b3RhbEluY29tZTogbnVtYmVyOyAvLyDmgLvmlLbnm4pcclxuICBpc1Nob3dBbW91bnQ/OiBib29sZWFuOyAvLyDmmK/lkKbmmL7npLrotYTkuqdcclxufVxyXG5cclxuUGFnZSh7XHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgaXNTaG93QW1vdW50OiB0cnVlLFxyXG4gICAgaGlkZGVuRmxhZzogSElEREVOX0FNT1VOVF9GTEFHLFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge30sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XHJcbiAgICovXHJcbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmdldEJvb2soKTtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge30sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHt9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuICAgKi9cclxuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7fSxcclxuXHJcbiAgLyoqXHJcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXHJcbiAgICovXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uICgpIHt9LFxyXG5cclxuICBnZXRCb29rOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyDosIPnlKjkupHlh73mlbBcclxuICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgIG5hbWU6IFwiZ2V0Qm9va1wiLFxyXG4gICAgICBkYXRhOiB7fSxcclxuICAgICAgc3VjY2VzczogKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYm9va0xpc3QgPSA8SUJvb2tbXT5yZXM/LnJlc3VsdD8uYm9va0xpc3Q7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHRoaXMuZ2V0Qm9va3NEYXRhKGJvb2tMaXN0KSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJb5LqR5Ye95pWwXSBbZ2V0Qm9va10g6LCD55So5aSx6LSlXCIsIGVycik7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBvbkFkZEJvb2s6IGZ1bmN0aW9uICgpIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6IFwiLi4vYWRkQm9vay9hZGRCb29rXCIsXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDmoLnmja7otKbnm67liJfooajorqHnrpfpobXpnaLmlbDmja5cclxuICAgKiBAcGFyYW0gYm9va0xpc3RcclxuICAgKi9cclxuICBnZXRCb29rc0RhdGE6IGZ1bmN0aW9uIChib29rTGlzdDogSUJvb2tbXSk6IHBhZ2VEYXRhIHtcclxuICAgIGxldCB0b3RhbEFtb3VudDogbnVtYmVyID0gMDtcclxuICAgIGxldCB0b3RhbENvc3Q6IG51bWJlciA9IDA7XHJcblxyXG4gICAgYm9va0xpc3QuZm9yRWFjaCgoYm9vazogSUJvb2spID0+IHtcclxuICAgICAgdG90YWxBbW91bnQgKz0gYm9vay5jdXJyQW1vdW50O1xyXG4gICAgICB0b3RhbENvc3QgKz0gYm9vay5pbml0QW1vdW50O1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVE9ET1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYm9va0xpc3QsXHJcbiAgICAgIHRvdGFsQW1vdW50LFxyXG4gICAgICB0b3RhbENvc3QsXHJcbiAgICAgIHRvdGFsSW5jb21lOiAwLFxyXG4gICAgfTtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDmmL7npLov6ZqQ6JePIOi1hOS6p1xyXG4gICAqL1xyXG4gIG9uVG9nZ2xlU2hvd0Ftb3VudDogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgaXNTaG93QW1vdW50OiAhdGhpcy5kYXRhLmlzU2hvd0Ftb3VudCxcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgb25JdGVtVGFwOiBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xyXG4gICAgY29uc3QgY3VyckJvb2sgPSBldmVudD8uZGV0YWlsIGFzIElCb29rO1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogYC4uL2Jvb2tEZXRhaWwvYm9va0RldGFpbD9ib29raWQ9JHtjdXJyQm9vay5faWR9YCxcclxuICAgIH0pO1xyXG4gIH0sXHJcbn0pO1xyXG4iXX0=