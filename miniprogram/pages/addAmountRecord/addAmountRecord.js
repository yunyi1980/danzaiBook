"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commonHelper_1 = require("../../utils/commonHelper");
Page({
    data: {
        _id: "",
        openid: "",
        bookid: "",
        amount: 0,
        updateDate: commonHelper_1.toFormatString(new Date()),
    },
    onLoad: function (options) {
        this.setData({
            bookid: options.bookid,
        });
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { },
    onPullDownRefresh: function () { },
    onReachBottom: function () { },
    onShareAppMessage: function () { },
    onAmountChange: function (event) {
        const { detail } = event;
        this.setData({
            amount: detail,
        });
    },
    onDescChange: function (event) {
        const { detail } = event;
        this.setData({
            desc: detail,
        });
    },
    onAddAmountRecord: function () {
        const record = Object.assign({}, this.data);
        const validRes = this.isRecordValid(record);
        if (!validRes.isValid) {
            wx.showModal({
                title: validRes.msg,
                showCancel: false,
                confirmColor: "#3f98f3",
            });
        }
        else {
            wx.cloud
                .callFunction({
                name: "addBookAmountRecord",
                data: Object.assign({}, record),
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
    onDateChange: function (event) {
        const { detail } = event;
        this.setData({
            updateDate: detail,
        });
    },
    isRecordValid: function (record) {
        let validRes = {
            isValid: true,
            msg: "",
        };
        if (record.amount <= 0) {
            validRes.isValid = false;
            validRes.msg = "总资产有误";
        }
        return validRes;
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkQW1vdW50UmVjb3JkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkQW1vdW50UmVjb3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkRBQTBEO0FBRTFELElBQUksQ0FBQztJQUlILElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxFQUFFO1FBQ1AsTUFBTSxFQUFFLEVBQUU7UUFDVixNQUFNLEVBQUUsRUFBRTtRQUNWLE1BQU0sRUFBRSxDQUFDO1FBQ1QsVUFBVSxFQUFFLDZCQUFjLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztLQUN2QztJQUtELE1BQU0sRUFBRSxVQUFVLE9BQU87UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtTQUN2QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBS0QsT0FBTyxFQUFFLGNBQWEsQ0FBQztJQUt2QixNQUFNLEVBQUUsY0FBYSxDQUFDO0lBS3RCLE1BQU0sRUFBRSxjQUFhLENBQUM7SUFLdEIsUUFBUSxFQUFFLGNBQWEsQ0FBQztJQUt4QixpQkFBaUIsRUFBRSxjQUFhLENBQUM7SUFLakMsYUFBYSxFQUFFLGNBQWEsQ0FBQztJQUs3QixpQkFBaUIsRUFBRSxjQUFhLENBQUM7SUFNakMsY0FBYyxFQUFFLFVBQVUsS0FBVTtRQUNsQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxNQUFNLEVBQUUsTUFBTTtTQUNmLENBQUMsQ0FBQztJQUNMLENBQUM7SUFNRCxZQUFZLEVBQUUsVUFBVSxLQUFVO1FBQ2hDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLElBQUksRUFBRSxNQUFNO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUlELGlCQUFpQixFQUFFO1FBQ2pCLE1BQU0sTUFBTSxxQkFDUCxJQUFJLENBQUMsSUFBSSxDQUNiLENBQUM7UUFFRixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ3JCLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1gsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHO2dCQUNuQixVQUFVLEVBQUUsS0FBSztnQkFDakIsWUFBWSxFQUFFLFNBQVM7YUFDeEIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLEVBQUUsQ0FBQyxLQUFLO2lCQUNMLFlBQVksQ0FBQztnQkFDWixJQUFJLEVBQUUscUJBQXFCO2dCQUMzQixJQUFJLG9CQUNDLE1BQU0sQ0FDVjthQUNGLENBQUM7aUJBQ0QsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDYixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNYLEtBQUssRUFBRSxHQUFHO2lCQUNYLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDSCxDQUFDO0lBTUQsWUFBWSxFQUFFLFVBQVUsS0FBVTtRQUNoQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsYUFBYSxFQUFFLFVBQVUsTUFBeUI7UUFDaEQsSUFBSSxRQUFRLEdBQWM7WUFDeEIsT0FBTyxFQUFFLElBQUk7WUFDYixHQUFHLEVBQUUsRUFBRTtTQUNSLENBQUM7UUFFRixJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3RCLFFBQVEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLFFBQVEsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1NBQ3hCO1FBS0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElCb29rQW1vdW50UmVjb3JkLCBJVmFsaWRSZXMgfSBmcm9tIFwiLi4vLi4vZGF0YU1vZGVsL2RhdGFcIjtcclxuaW1wb3J0IHsgdG9Gb3JtYXRTdHJpbmcgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uSGVscGVyXCI7XHJcblxyXG5QYWdlKHtcclxuICAvKipcclxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICBfaWQ6IFwiXCIsXHJcbiAgICBvcGVuaWQ6IFwiXCIsXHJcbiAgICBib29raWQ6IFwiXCIsXHJcbiAgICBhbW91bnQ6IDAsXHJcbiAgICB1cGRhdGVEYXRlOiB0b0Zvcm1hdFN0cmluZyhuZXcgRGF0ZSgpKSxcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGJvb2tpZDogb3B0aW9ucy5ib29raWQsXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHt9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge30sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXHJcbiAgICovXHJcbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7fSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZDogZnVuY3Rpb24gKCkge30sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHt9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuICAgKi9cclxuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7fSxcclxuXHJcbiAgLyoqXHJcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXHJcbiAgICovXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uICgpIHt9LFxyXG5cclxuICAvKipcclxuICAgKiDorr7nva7otYTkuqdcclxuICAgKiBAcGFyYW0gZXZlbnRcclxuICAgKi9cclxuICBvbkFtb3VudENoYW5nZTogZnVuY3Rpb24gKGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IHsgZGV0YWlsIH0gPSBldmVudDtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGFtb3VudDogZGV0YWlsLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6K6+572u5o+P6L+wXHJcbiAgICogQHBhcmFtIGV2ZW50XHJcbiAgICovXHJcbiAgb25EZXNjQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xyXG4gICAgY29uc3QgeyBkZXRhaWwgfSA9IGV2ZW50O1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZGVzYzogZGV0YWlsLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiDlop7liqDotYTkuqforrDlvZVcclxuICAgKi9cclxuICBvbkFkZEFtb3VudFJlY29yZDogZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgcmVjb3JkOiBJQm9va0Ftb3VudFJlY29yZCA9IHtcclxuICAgICAgLi4udGhpcy5kYXRhLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB2YWxpZFJlcyA9IHRoaXMuaXNSZWNvcmRWYWxpZChyZWNvcmQpO1xyXG4gICAgaWYgKCF2YWxpZFJlcy5pc1ZhbGlkKSB7XHJcbiAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgdGl0bGU6IHZhbGlkUmVzLm1zZyxcclxuICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICBjb25maXJtQ29sb3I6IFwiIzNmOThmM1wiLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHd4LmNsb3VkXHJcbiAgICAgICAgLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICBuYW1lOiBcImFkZEJvb2tBbW91bnRSZWNvcmRcIixcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgLi4ucmVjb3JkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgocmVzKSA9PiB7XHJcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTogcmVzLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6K6+572u5pel5pyfXHJcbiAgICogQHBhcmFtIGV2ZW50XHJcbiAgICovXHJcbiAgb25EYXRlQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xyXG4gICAgY29uc3QgeyBkZXRhaWwgfSA9IGV2ZW50O1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgdXBkYXRlRGF0ZTogZGV0YWlsLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgaXNSZWNvcmRWYWxpZDogZnVuY3Rpb24gKHJlY29yZDogSUJvb2tBbW91bnRSZWNvcmQpOiBJVmFsaWRSZXMge1xyXG4gICAgbGV0IHZhbGlkUmVzOiBJVmFsaWRSZXMgPSB7XHJcbiAgICAgIGlzVmFsaWQ6IHRydWUsXHJcbiAgICAgIG1zZzogXCJcIixcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHJlY29yZC5hbW91bnQgPD0gMCkge1xyXG4gICAgICB2YWxpZFJlcy5pc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgIHZhbGlkUmVzLm1zZyA9IFwi5oC76LWE5Lqn5pyJ6K+vXCI7XHJcbiAgICB9XHJcbiAgICAvLyB9IGVsc2UgaWYgKHJlY29yZC51cGRhdGVEYXRlKSB7XHJcbiAgICAvLyAgIHZhbGlkUmVzLmlzVmFsaWQgPSBmYWxzZTtcclxuICAgIC8vICAgdmFsaWRSZXMubXNnID0gXCLmgLvotYTkuqfmnInor69cIjtcclxuICAgIC8vIH1cclxuICAgIHJldHVybiB2YWxpZFJlcztcclxuICB9LFxyXG59KTtcclxuIl19