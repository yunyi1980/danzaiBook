"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commonHelper_1 = require("../../utils/commonHelper");
Page({
    data: {},
    onReady: function () {
        const currDate = commonHelper_1.toFormatString(new Date());
        const newBook = {
            bookName: "",
            _id: "",
            initDate: currDate,
            initAmount: 0,
            currency: "CNY",
            currAmount: 0,
            desc: "",
        };
        this.setData(Object.assign({}, newBook));
    },
    onDateChange: function (event) {
        const { detail } = event;
        this.setData({
            initDate: detail,
        });
    },
    onNameChange: function (event) {
        const { detail } = event;
        this.setData({
            bookName: detail,
        });
    },
    onAmountChange: function (event) {
        const { detail } = event;
        this.setData({
            initAmount: parseFloat(detail),
        });
    },
    onDescChange: function (event) {
        const { detail } = event;
        this.setData({
            desc: detail,
        });
    },
    onAddBook: function () {
        const book = this.data;
        const isBookValidRes = this.isBookValid(book);
        if (!isBookValidRes.isValid) {
            wx.showModal({
                title: "账户检测提示",
                content: isBookValidRes.msg,
                showCancel: false,
                confirmColor: "#3f98f3",
            });
        }
        else {
            wx.cloud
                .callFunction({
                name: "addBook",
                data: Object.assign({}, book),
            })
                .then((res) => {
                console.log("调用success", res);
                wx.navigateBack({
                    delta: 0,
                });
            })
                .catch((err) => console.log(err));
        }
    },
    isBookValid: function (book) {
        let res = {
            isValid: true,
            msg: "",
        };
        if (!book.bookName) {
            res.isValid = false;
            res.msg = "账户名称不能为空！";
        }
        else if (!book.initAmount) {
            res.isValid = false;
            res.msg = "需要输入总资产";
        }
        else if (!book.initDate) {
            res.isValid = false;
            res.msg = "需要选中一个时间";
        }
        return res;
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkQm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZEJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyREFBMEQ7QUFHMUQsSUFBSSxDQUFDO0lBSUgsSUFBSSxFQUFFLEVBQUU7SUFLUixPQUFPLEVBQUU7UUFDUCxNQUFNLFFBQVEsR0FBRyw2QkFBYyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM1QyxNQUFNLE9BQU8sR0FBVTtZQUNyQixRQUFRLEVBQUUsRUFBRTtZQUNaLEdBQUcsRUFBRSxFQUFFO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsVUFBVSxFQUFFLENBQUM7WUFDYixRQUFRLEVBQUUsS0FBSztZQUNmLFVBQVUsRUFBRSxDQUFDO1lBQ2IsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sbUJBQ1AsT0FBTyxFQUNWLENBQUM7SUFDTCxDQUFDO0lBU0QsWUFBWSxFQUFFLFVBQVUsS0FBVTtRQUNoQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxRQUFRLEVBQUUsTUFBTTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBWSxFQUFFLFVBQVUsS0FBVTtRQUNoQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxRQUFRLEVBQUUsTUFBTTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsY0FBYyxFQUFFLFVBQVUsS0FBVTtRQUNsQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxVQUFVLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQztTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBWSxFQUFFLFVBQVUsS0FBVTtRQUNoQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxTQUFTLEVBQUU7UUFDVCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBYSxDQUFDO1FBQ2hDLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDM0IsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxLQUFLLEVBQUUsUUFBUTtnQkFDZixPQUFPLEVBQUUsY0FBYyxDQUFDLEdBQUc7Z0JBQzNCLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixZQUFZLEVBQUUsU0FBUzthQUN4QixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsRUFBRSxDQUFDLEtBQUs7aUJBQ0wsWUFBWSxDQUFDO2dCQUNaLElBQUksRUFBRSxTQUFTO2dCQUNmLElBQUksb0JBQ0MsSUFBSSxDQUNSO2FBQ0YsQ0FBQztpQkFDRCxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDOUIsRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFLLEVBQUUsQ0FBQztpQkFDVCxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBS0QsV0FBVyxFQUFFLFVBQVUsSUFBVztRQUNoQyxJQUFJLEdBQUcsR0FBYztZQUNuQixPQUFPLEVBQUUsSUFBSTtZQUNiLEdBQUcsRUFBRSxFQUFFO1NBQ1IsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDM0IsR0FBRyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDcEIsR0FBRyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7U0FDckI7YUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN6QixHQUFHLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNwQixHQUFHLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQztTQUN0QjtRQUVELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvRm9ybWF0U3RyaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbkhlbHBlclwiO1xuaW1wb3J0IHsgSUJvb2ssIElWYWxpZFJlcyB9IGZyb20gXCIuLi8uLi9kYXRhTW9kZWwvZGF0YVwiO1xuXG5QYWdlKHtcbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge30sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY3VyckRhdGUgPSB0b0Zvcm1hdFN0cmluZyhuZXcgRGF0ZSgpKTtcbiAgICBjb25zdCBuZXdCb29rOiBJQm9vayA9IHtcbiAgICAgIGJvb2tOYW1lOiBcIlwiLFxuICAgICAgX2lkOiBcIlwiLFxuICAgICAgaW5pdERhdGU6IGN1cnJEYXRlLFxuICAgICAgaW5pdEFtb3VudDogMCxcbiAgICAgIGN1cnJlbmN5OiBcIkNOWVwiLFxuICAgICAgY3VyckFtb3VudDogMCxcbiAgICAgIGRlc2M6IFwiXCIsXG4gICAgfTtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgLi4ubmV3Qm9vayxcbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXG4gICAqL1xuICAvLyBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24gKCkge1xuXG4gIC8vIH0sXG5cbiAgb25EYXRlQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IHsgZGV0YWlsIH0gPSBldmVudDtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgaW5pdERhdGU6IGRldGFpbCxcbiAgICB9KTtcbiAgfSxcblxuICBvbk5hbWVDaGFuZ2U6IGZ1bmN0aW9uIChldmVudDogYW55KSB7XG4gICAgY29uc3QgeyBkZXRhaWwgfSA9IGV2ZW50O1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBib29rTmFtZTogZGV0YWlsLFxuICAgIH0pO1xuICB9LFxuXG4gIG9uQW1vdW50Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IHsgZGV0YWlsIH0gPSBldmVudDtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgaW5pdEFtb3VudDogcGFyc2VGbG9hdChkZXRhaWwpLFxuICAgIH0pO1xuICB9LFxuXG4gIG9uRGVzY0NoYW5nZTogZnVuY3Rpb24gKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCB7IGRldGFpbCB9ID0gZXZlbnQ7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGRlc2M6IGRldGFpbCxcbiAgICB9KTtcbiAgfSxcblxuICBvbkFkZEJvb2s6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBib29rID0gdGhpcy5kYXRhIGFzIElCb29rO1xuICAgIGNvbnN0IGlzQm9va1ZhbGlkUmVzID0gdGhpcy5pc0Jvb2tWYWxpZChib29rKTtcbiAgICBpZiAoIWlzQm9va1ZhbGlkUmVzLmlzVmFsaWQpIHtcbiAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiBcIui0puaIt+ajgOa1i+aPkOekulwiLFxuICAgICAgICBjb250ZW50OiBpc0Jvb2tWYWxpZFJlcy5tc2csXG4gICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICBjb25maXJtQ29sb3I6IFwiIzNmOThmM1wiLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHd4LmNsb3VkXG4gICAgICAgIC5jYWxsRnVuY3Rpb24oe1xuICAgICAgICAgIG5hbWU6IFwiYWRkQm9va1wiLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIC4uLmJvb2ssXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwi6LCD55Soc3VjY2Vzc1wiLCByZXMpO1xuICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICBkZWx0YTogMCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICog5pWw5o2u5piv5ZCm5ZCI5rOVXG4gICAqL1xuICBpc0Jvb2tWYWxpZDogZnVuY3Rpb24gKGJvb2s6IElCb29rKTogSVZhbGlkUmVzIHtcbiAgICBsZXQgcmVzOiBJVmFsaWRSZXMgPSB7XG4gICAgICBpc1ZhbGlkOiB0cnVlLFxuICAgICAgbXNnOiBcIlwiLFxuICAgIH07XG5cbiAgICBpZiAoIWJvb2suYm9va05hbWUpIHtcbiAgICAgIHJlcy5pc1ZhbGlkID0gZmFsc2U7XG4gICAgICByZXMubXNnID0gXCLotKbmiLflkI3np7DkuI3og73kuLrnqbrvvIFcIjtcbiAgICB9IGVsc2UgaWYgKCFib29rLmluaXRBbW91bnQpIHtcbiAgICAgIHJlcy5pc1ZhbGlkID0gZmFsc2U7XG4gICAgICByZXMubXNnID0gXCLpnIDopoHovpPlhaXmgLvotYTkuqdcIjtcbiAgICB9IGVsc2UgaWYgKCFib29rLmluaXREYXRlKSB7XG4gICAgICByZXMuaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgcmVzLm1zZyA9IFwi6ZyA6KaB6YCJ5Lit5LiA5Liq5pe26Ze0XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfSxcbn0pO1xuIl19