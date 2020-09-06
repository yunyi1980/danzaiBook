"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Page({
    data: {},
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
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFlQSxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUUsRUFDTDtJQUtELE1BQU0sRUFBRSxVQUFVLE9BQU87SUFFekIsQ0FBQztJQUtELE9BQU8sRUFBRTtJQUNULENBQUM7SUFLRCxNQUFNLEVBQUU7UUFDTixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBRUQsT0FBTyxFQUFFO1FBRVAsRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDcEIsSUFBSSxFQUFFLFNBQVM7WUFDZixJQUFJLEVBQUUsRUFBRTtZQUNSLE9BQU8sRUFBRSxDQUFDLEdBQU8sRUFBRSxFQUFFOztnQkFDbkIsTUFBTSxRQUFRLEdBQUcsTUFBUSxHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsTUFBTSwwQ0FBRSxRQUFRLENBQUE7Z0JBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO1lBQzNDLENBQUM7WUFDRCxJQUFJLEVBQUUsQ0FBQyxHQUFPLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUM1QyxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFNBQVMsRUFBRTtRQUNULEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsb0JBQW9CO1NBQzFCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFNRCxZQUFZLEVBQUUsVUFBVSxRQUFnQjtRQUN0QyxJQUFJLFdBQVcsR0FBVSxDQUFDLENBQUM7UUFDM0IsSUFBSSxTQUFTLEdBQVUsQ0FBQyxDQUFDO1FBRXpCLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtZQUM3QixXQUFXLElBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQTtZQUMvQixTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQTtRQUM5QixDQUFDLENBQUMsQ0FBQTtRQUdGLE9BQU87WUFDTCxRQUFRO1lBQ1IsV0FBVztZQUNYLFNBQVM7WUFDVCxXQUFXLEVBQUUsQ0FBQztTQUNmLENBQUE7SUFDSCxDQUFDO0NBRUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib29rfSBmcm9tICcuLi8uLi9kYXRhTW9kZWwvZGF0YSdcclxuXHJcbmludGVyZmFjZSBwYWdlRGF0YSB7XHJcbiAgYm9va0xpc3Q6IGJvb2tbXSxcclxuICB0b3RhbEFtb3VudDogbnVtYmVyLCAvL+aAu+i1hOS6p1xyXG4gIHRvdGFsQ29zdDogbnVtYmVyLCAvLyDmgLvmipXlhaVcclxuICB0b3RhbEluY29tZTogbnVtYmVyLCAvLyDmgLvmlLbnm4pcclxufVxyXG5cclxuLy8gaW50ZXJmYWNlIHJlc3BvbnNlIGV4dGVuZHMgcGFnZURhdGF7XHJcbi8vICAgcmVzdWx0OiB7XHJcbi8vICAgICBib29rTGlzdDogYm9va1tdXHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5QYWdlKHtcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5nZXRCb29rKCk7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxyXG4gICAqL1xyXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXHJcbiAgICovXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgZ2V0Qm9vazogZnVuY3Rpb24gKCkge1xyXG4gICAgLy8g6LCD55So5LqR5Ye95pWwXHJcbiAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICBuYW1lOiAnZ2V0Qm9vaycsXHJcbiAgICAgIGRhdGE6IHt9LFxyXG4gICAgICBzdWNjZXNzOiAocmVzOmFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJvb2tMaXN0ID0gPGJvb2tbXT5yZXM/LnJlc3VsdD8uYm9va0xpc3RcclxuICAgICAgICB0aGlzLnNldERhdGEodGhpcy5nZXRCb29rc0RhdGEoYm9va0xpc3QpKVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiAoZXJyOmFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1vkupHlh73mlbBdIFtnZXRCb29rXSDosIPnlKjlpLHotKUnLCBlcnIpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgb25BZGRCb29rOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiAnLi4vYWRkQm9vay9hZGRCb29rJ1xyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDmoLnmja7otKbnm67liJfooajorqHnrpfpobXpnaLmlbDmja5cclxuICAgKiBAcGFyYW0gYm9va0xpc3QgXHJcbiAgICovXHJcbiAgZ2V0Qm9va3NEYXRhOiBmdW5jdGlvbiAoYm9va0xpc3Q6IGJvb2tbXSk6IHBhZ2VEYXRhIHtcclxuICAgIGxldCB0b3RhbEFtb3VudDpudW1iZXIgPSAwO1xyXG4gICAgbGV0IHRvdGFsQ29zdDpudW1iZXIgPSAwO1xyXG5cclxuICAgIGJvb2tMaXN0LmZvckVhY2goKGJvb2s6Ym9vaykgPT4ge1xyXG4gICAgICB0b3RhbEFtb3VudCArPSAgYm9vay5jdXJyQW1vdW50XHJcbiAgICAgIHRvdGFsQ29zdCArPSBib29rLmluaXRBbW91bnRcclxuICAgIH0pXHJcblxyXG4gICAgLy8gVE9ET1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYm9va0xpc3QsXHJcbiAgICAgIHRvdGFsQW1vdW50LFxyXG4gICAgICB0b3RhbENvc3QsXHJcbiAgICAgIHRvdGFsSW5jb21lOiAwLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pIl19