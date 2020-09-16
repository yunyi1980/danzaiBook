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
    onItemTap: function (event) {
        const currBook = event === null || event === void 0 ? void 0 : event.detail;
        wx.navigateTo({
            url: `../bookDetail/bookDetail?bookid=${currBook._id}`
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyREFBMkQ7QUFVM0QsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osWUFBWSxFQUFFLElBQUk7UUFDbEIsVUFBVSxFQUFFLGlDQUFrQjtLQUMvQjtJQUtELE9BQU8sRUFBRTtRQUNQLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBS0QsTUFBTSxFQUFFO0lBQ1IsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBS0QsYUFBYSxFQUFFO0lBRWYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFFRCxPQUFPLEVBQUU7UUFFUCxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUNwQixJQUFJLEVBQUUsU0FBUztZQUNmLElBQUksRUFBRSxFQUFFO1lBQ1IsT0FBTyxFQUFFLENBQUMsR0FBTyxFQUFFLEVBQUU7O2dCQUNuQixNQUFNLFFBQVEsR0FBRyxNQUFTLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxNQUFNLDBDQUFFLFFBQVEsQ0FBQTtnQkFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7WUFDM0MsQ0FBQztZQUNELElBQUksRUFBRSxDQUFDLEdBQU8sRUFBRSxFQUFFO2dCQUNoQixPQUFPLENBQUMsS0FBSyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQzVDLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsU0FBUyxFQUFFO1FBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxvQkFBb0I7U0FDMUIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQU1ELFlBQVksRUFBRSxVQUFVLFFBQWlCO1FBQ3ZDLElBQUksV0FBVyxHQUFVLENBQUMsQ0FBQztRQUMzQixJQUFJLFNBQVMsR0FBVSxDQUFDLENBQUM7UUFFekIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVUsRUFBRSxFQUFFO1lBQzlCLFdBQVcsSUFBSyxJQUFJLENBQUMsVUFBVSxDQUFBO1lBQy9CLFNBQVMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFBO1FBQzlCLENBQUMsQ0FBQyxDQUFBO1FBR0YsT0FBTztZQUNMLFFBQVE7WUFDUixXQUFXO1lBQ1gsU0FBUztZQUNULFdBQVcsRUFBRSxDQUFDO1NBQ2YsQ0FBQTtJQUNILENBQUM7SUFLRCxrQkFBa0IsRUFBRTtRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO1NBQ3RDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxTQUFTLEVBQUUsVUFBVSxLQUFVO1FBQzdCLE1BQU0sUUFBUSxHQUFHLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxNQUFlLENBQUM7UUFDeEMsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxtQ0FBbUMsUUFBUSxDQUFDLEdBQUcsRUFBRTtTQUN2RCxDQUFDLENBQUE7SUFDSixDQUFDO0NBRUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJYm9va30gZnJvbSAnLi4vLi4vZGF0YU1vZGVsL2RhdGEnXG5pbXBvcnQge0hJRERFTl9BTU9VTlRfRkxBR30gZnJvbSAnLi4vLi4vdXRpbHMvY29tbW9uSGVscGVyJ1xuXG5pbnRlcmZhY2UgcGFnZURhdGEge1xuICBib29rTGlzdDogSWJvb2tbXSxcbiAgdG90YWxBbW91bnQ6IG51bWJlciwgLy/mgLvotYTkuqdcbiAgdG90YWxDb3N0OiBudW1iZXIsIC8vIOaAu+aKleWFpVxuICB0b3RhbEluY29tZTogbnVtYmVyLCAvLyDmgLvmlLbnm4pcbiAgaXNTaG93QW1vdW50PzogYm9vbGVhbiwgLy8g5piv5ZCm5pi+56S66LWE5LqnXG59XG5cblBhZ2Uoe1xuXG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBpc1Nob3dBbW91bnQ6IHRydWUsXG4gICAgaGlkZGVuRmxhZzogSElEREVOX0FNT1VOVF9GTEFHLFxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZ2V0Qm9vaygpO1xuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcbiAgICovXG4gIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICBnZXRCb29rOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8g6LCD55So5LqR5Ye95pWwXG4gICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcbiAgICAgIG5hbWU6ICdnZXRCb29rJyxcbiAgICAgIGRhdGE6IHt9LFxuICAgICAgc3VjY2VzczogKHJlczphbnkpID0+IHtcbiAgICAgICAgY29uc3QgYm9va0xpc3QgPSA8SWJvb2tbXT5yZXM/LnJlc3VsdD8uYm9va0xpc3RcbiAgICAgICAgdGhpcy5zZXREYXRhKHRoaXMuZ2V0Qm9va3NEYXRhKGJvb2tMaXN0KSlcbiAgICAgIH0sXG4gICAgICBmYWlsOiAoZXJyOmFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdb5LqR5Ye95pWwXSBbZ2V0Qm9va10g6LCD55So5aSx6LSlJywgZXJyKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgb25BZGRCb29rOiBmdW5jdGlvbiAoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9hZGRCb29rL2FkZEJvb2snXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICog5qC55o2u6LSm55uu5YiX6KGo6K6h566X6aG16Z2i5pWw5o2uXG4gICAqIEBwYXJhbSBib29rTGlzdCBcbiAgICovXG4gIGdldEJvb2tzRGF0YTogZnVuY3Rpb24gKGJvb2tMaXN0OiBJYm9va1tdKTogcGFnZURhdGEge1xuICAgIGxldCB0b3RhbEFtb3VudDpudW1iZXIgPSAwO1xuICAgIGxldCB0b3RhbENvc3Q6bnVtYmVyID0gMDtcblxuICAgIGJvb2tMaXN0LmZvckVhY2goKGJvb2s6SWJvb2spID0+IHtcbiAgICAgIHRvdGFsQW1vdW50ICs9ICBib29rLmN1cnJBbW91bnRcbiAgICAgIHRvdGFsQ29zdCArPSBib29rLmluaXRBbW91bnRcbiAgICB9KVxuXG4gICAgLy8gVE9ET1xuICAgIHJldHVybiB7XG4gICAgICBib29rTGlzdCxcbiAgICAgIHRvdGFsQW1vdW50LFxuICAgICAgdG90YWxDb3N0LFxuICAgICAgdG90YWxJbmNvbWU6IDAsXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiDmmL7npLov6ZqQ6JePIOi1hOS6p1xuICAgKi9cbiAgb25Ub2dnbGVTaG93QW1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGlzU2hvd0Ftb3VudDogIXRoaXMuZGF0YS5pc1Nob3dBbW91bnRcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIG9uSXRlbVRhcDogZnVuY3Rpb24gKGV2ZW50OiBhbnkpe1xuICAgIGNvbnN0IGN1cnJCb29rID0gZXZlbnQ/LmRldGFpbCBhcyBJYm9vaztcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL2Jvb2tEZXRhaWwvYm9va0RldGFpbD9ib29raWQ9JHtjdXJyQm9vay5faWR9YFxuICAgIH0pXG4gIH0sXG5cbn0pIl19