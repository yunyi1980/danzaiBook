"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commonHelper_1 = require("../../utils/commonHelper");
Page({
    data: {
        record: {
            _id: "",
            openid: "",
            bookid: "",
            amount: 0,
            updateDate: commonHelper_1.toFormatString(new Date()),
        },
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
        if (record === null || record === void 0 ? void 0 : record.amount) {
            validRes.isValid = false;
            validRes.msg = "总资产有误";
        }
        return validRes;
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkQW1vdW50UmVjb3JkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkQW1vdW50UmVjb3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkRBQTBEO0FBRTFELElBQUksQ0FBQztJQUlILElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRTtZQUNOLEdBQUcsRUFBRSxFQUFFO1lBQ1AsTUFBTSxFQUFFLEVBQUU7WUFDVixNQUFNLEVBQUUsRUFBRTtZQUNWLE1BQU0sRUFBRSxDQUFDO1lBQ1QsVUFBVSxFQUFFLDZCQUFjLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUN2QztLQUNGO0lBS0QsTUFBTSxFQUFFLFVBQVUsT0FBTztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1NBQ3ZCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFLRCxPQUFPLEVBQUUsY0FBYSxDQUFDO0lBS3ZCLE1BQU0sRUFBRSxjQUFhLENBQUM7SUFLdEIsTUFBTSxFQUFFLGNBQWEsQ0FBQztJQUt0QixRQUFRLEVBQUUsY0FBYSxDQUFDO0lBS3hCLGlCQUFpQixFQUFFLGNBQWEsQ0FBQztJQUtqQyxhQUFhLEVBQUUsY0FBYSxDQUFDO0lBSzdCLGlCQUFpQixFQUFFLGNBQWEsQ0FBQztJQU1qQyxjQUFjLEVBQUUsVUFBVSxLQUFVO1FBQ2xDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLE1BQU0sRUFBRSxNQUFNO1NBQ2YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQU1ELFlBQVksRUFBRSxVQUFVLEtBQVU7UUFDaEMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBSUQsaUJBQWlCLEVBQUU7SUFLbkIsQ0FBQztJQU1ELFlBQVksRUFBRSxVQUFVLEtBQVU7UUFDaEMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGFBQWEsRUFBRSxVQUFVLE1BQXlCO1FBQ2hELElBQUksUUFBUSxHQUFjO1lBQ3hCLE9BQU8sRUFBRSxJQUFJO1lBQ2IsR0FBRyxFQUFFLEVBQUU7U0FDUixDQUFDO1FBRUYsSUFBSSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsTUFBTSxFQUFFO1lBQ2xCLFFBQVEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLFFBQVEsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1NBQ3hCO1FBS0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElCb29rQW1vdW50UmVjb3JkLCBJVmFsaWRSZXMgfSBmcm9tIFwiLi4vLi4vZGF0YU1vZGVsL2RhdGFcIjtcbmltcG9ydCB7IHRvRm9ybWF0U3RyaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbkhlbHBlclwiO1xuXG5QYWdlKHtcbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIHJlY29yZDoge1xuICAgICAgX2lkOiBcIlwiLFxuICAgICAgb3BlbmlkOiBcIlwiLFxuICAgICAgYm9va2lkOiBcIlwiLFxuICAgICAgYW1vdW50OiAwLFxuICAgICAgdXBkYXRlRGF0ZTogdG9Gb3JtYXRTdHJpbmcobmV3IERhdGUoKSksXG4gICAgfSxcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgYm9va2lkOiBvcHRpb25zLmJvb2tpZCxcbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHt9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7fSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge30sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge30sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge30sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge30sXG5cbiAgLyoqXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xuICAgKi9cbiAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uICgpIHt9LFxuXG4gIC8qKlxuICAgKiDorr7nva7otYTkuqdcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBvbkFtb3VudENoYW5nZTogZnVuY3Rpb24gKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCB7IGRldGFpbCB9ID0gZXZlbnQ7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGFtb3VudDogZGV0YWlsLFxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxuICAgKiDorr7nva7mj4/ov7BcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBvbkRlc2NDaGFuZ2U6IGZ1bmN0aW9uIChldmVudDogYW55KSB7XG4gICAgY29uc3QgeyBkZXRhaWwgfSA9IGV2ZW50O1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBkZXNjOiBkZXRhaWwsXG4gICAgfSk7XG4gIH0sXG4gIC8qKlxuICAgKiDlop7liqDotYTkuqforrDlvZVcbiAgICovXG4gIG9uQWRkQW1vdW50UmVjb3JkOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gY29uc3QgeyBkZXRhaWwgfSA9IGV2ZW50O1xuICAgIC8vIHRoaXMuc2V0RGF0YSh7XG4gICAgLy8gICB1cGRhdGVEYXRlOiBkZXRhaWwsXG4gICAgLy8gfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOiuvue9ruaXpeacn1xuICAgKiBAcGFyYW0gZXZlbnRcbiAgICovXG4gIG9uRGF0ZUNoYW5nZTogZnVuY3Rpb24gKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCB7IGRldGFpbCB9ID0gZXZlbnQ7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHVwZGF0ZURhdGU6IGRldGFpbCxcbiAgICB9KTtcbiAgfSxcblxuICBpc1JlY29yZFZhbGlkOiBmdW5jdGlvbiAocmVjb3JkOiBJQm9va0Ftb3VudFJlY29yZCk6IElWYWxpZFJlcyB7XG4gICAgbGV0IHZhbGlkUmVzOiBJVmFsaWRSZXMgPSB7XG4gICAgICBpc1ZhbGlkOiB0cnVlLFxuICAgICAgbXNnOiBcIlwiLFxuICAgIH07XG5cbiAgICBpZiAocmVjb3JkPy5hbW91bnQpIHtcbiAgICAgIHZhbGlkUmVzLmlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIHZhbGlkUmVzLm1zZyA9IFwi5oC76LWE5Lqn5pyJ6K+vXCI7XG4gICAgfVxuICAgIC8vIH0gZWxzZSBpZiAocmVjb3JkLnVwZGF0ZURhdGUpIHtcbiAgICAvLyAgIHZhbGlkUmVzLmlzVmFsaWQgPSBmYWxzZTtcbiAgICAvLyAgIHZhbGlkUmVzLm1zZyA9IFwi5oC76LWE5Lqn5pyJ6K+vXCI7XG4gICAgLy8gfVxuICAgIHJldHVybiB2YWxpZFJlcztcbiAgfSxcbn0pO1xuIl19