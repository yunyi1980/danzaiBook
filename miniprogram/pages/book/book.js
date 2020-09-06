"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Page({
    data: {
        isShowAmount: true
    },
    onLoad: function (options) {
    },
    onReady: function () {
    },
    onShow: function () {
        this.getBook();
    },
    onHide: function () {
    },
    onUnload: function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFnQkEsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osWUFBWSxFQUFFLElBQUk7S0FDbkI7SUFLRCxNQUFNLEVBQUUsVUFBVSxPQUFPO0lBRXpCLENBQUM7SUFLRCxPQUFPLEVBQUU7SUFDVCxDQUFDO0lBS0QsTUFBTSxFQUFFO1FBQ04sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUVELE9BQU8sRUFBRTtRQUVQLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQ3BCLElBQUksRUFBRSxTQUFTO1lBQ2YsSUFBSSxFQUFFLEVBQUU7WUFDUixPQUFPLEVBQUUsQ0FBQyxHQUFPLEVBQUUsRUFBRTs7Z0JBQ25CLE1BQU0sUUFBUSxHQUFHLE1BQVEsR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLE1BQU0sMENBQUUsUUFBUSxDQUFBO2dCQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtZQUMzQyxDQUFDO1lBQ0QsSUFBSSxFQUFFLENBQUMsR0FBTyxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDNUMsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxTQUFTLEVBQUU7UUFDVCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLG9CQUFvQjtTQUMxQixDQUFDLENBQUE7SUFDSixDQUFDO0lBTUQsWUFBWSxFQUFFLFVBQVUsUUFBZ0I7UUFDdEMsSUFBSSxXQUFXLEdBQVUsQ0FBQyxDQUFDO1FBQzNCLElBQUksU0FBUyxHQUFVLENBQUMsQ0FBQztRQUV6QixRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7WUFDN0IsV0FBVyxJQUFLLElBQUksQ0FBQyxVQUFVLENBQUE7WUFDL0IsU0FBUyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUE7UUFDOUIsQ0FBQyxDQUFDLENBQUE7UUFHRixPQUFPO1lBQ0wsUUFBUTtZQUNSLFdBQVc7WUFDWCxTQUFTO1lBQ1QsV0FBVyxFQUFFLENBQUM7U0FDZixDQUFBO0lBQ0gsQ0FBQztJQUVELGtCQUFrQixFQUFFO1FBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7U0FDdEMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Ym9va30gZnJvbSAnLi4vLi4vZGF0YU1vZGVsL2RhdGEnXHJcblxyXG5pbnRlcmZhY2UgcGFnZURhdGEge1xyXG4gIGJvb2tMaXN0OiBib29rW10sXHJcbiAgdG90YWxBbW91bnQ6IG51bWJlciwgLy/mgLvotYTkuqdcclxuICB0b3RhbENvc3Q6IG51bWJlciwgLy8g5oC75oqV5YWlXHJcbiAgdG90YWxJbmNvbWU6IG51bWJlciwgLy8g5oC75pS255uKXHJcbiAgaXNTaG93QW1vdW50PzogYm9vbGVhbiwgLy8g5piv5ZCm5pi+56S66LWE5LqnXHJcbn1cclxuXHJcbi8vIGludGVyZmFjZSByZXNwb25zZSBleHRlbmRzIHBhZ2VEYXRhe1xyXG4vLyAgIHJlc3VsdDoge1xyXG4vLyAgICAgYm9va0xpc3Q6IGJvb2tbXVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuUGFnZSh7XHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIGlzU2hvd0Ftb3VudDogdHJ1ZVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5nZXRCb29rKCk7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxyXG4gICAqL1xyXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXHJcbiAgICovXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgZ2V0Qm9vazogZnVuY3Rpb24gKCkge1xyXG4gICAgLy8g6LCD55So5LqR5Ye95pWwXHJcbiAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICBuYW1lOiAnZ2V0Qm9vaycsXHJcbiAgICAgIGRhdGE6IHt9LFxyXG4gICAgICBzdWNjZXNzOiAocmVzOmFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJvb2tMaXN0ID0gPGJvb2tbXT5yZXM/LnJlc3VsdD8uYm9va0xpc3RcclxuICAgICAgICB0aGlzLnNldERhdGEodGhpcy5nZXRCb29rc0RhdGEoYm9va0xpc3QpKVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiAoZXJyOmFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1vkupHlh73mlbBdIFtnZXRCb29rXSDosIPnlKjlpLHotKUnLCBlcnIpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgb25BZGRCb29rOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiAnLi4vYWRkQm9vay9hZGRCb29rJ1xyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDmoLnmja7otKbnm67liJfooajorqHnrpfpobXpnaLmlbDmja5cclxuICAgKiBAcGFyYW0gYm9va0xpc3QgXHJcbiAgICovXHJcbiAgZ2V0Qm9va3NEYXRhOiBmdW5jdGlvbiAoYm9va0xpc3Q6IGJvb2tbXSk6IHBhZ2VEYXRhIHtcclxuICAgIGxldCB0b3RhbEFtb3VudDpudW1iZXIgPSAwO1xyXG4gICAgbGV0IHRvdGFsQ29zdDpudW1iZXIgPSAwO1xyXG5cclxuICAgIGJvb2tMaXN0LmZvckVhY2goKGJvb2s6Ym9vaykgPT4ge1xyXG4gICAgICB0b3RhbEFtb3VudCArPSAgYm9vay5jdXJyQW1vdW50XHJcbiAgICAgIHRvdGFsQ29zdCArPSBib29rLmluaXRBbW91bnRcclxuICAgIH0pXHJcblxyXG4gICAgLy8gVE9ET1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYm9va0xpc3QsXHJcbiAgICAgIHRvdGFsQW1vdW50LFxyXG4gICAgICB0b3RhbENvc3QsXHJcbiAgICAgIHRvdGFsSW5jb21lOiAwLFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9uVG9nZ2xlU2hvd0Ftb3VudDogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgaXNTaG93QW1vdW50OiAhdGhpcy5kYXRhLmlzU2hvd0Ftb3VudFxyXG4gICAgfSlcclxuICB9XHJcblxyXG59KSJdfQ==