"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HIDDEN_AMOUNT_FLAG = exports.toFormatString = void 0;
function toFormatString(pDate) {
    const year = pDate.getFullYear();
    const date = pDate.getDate();
    const month = pDate.getMonth() + 1;
    const formatMonth = month < 10 ? `0${month}` : `${month}`;
    const formateDate = date < 10 ? `0${date}` : `${date}`;
    return `${year}-${formatMonth}-${formateDate}`;
}
exports.toFormatString = toFormatString;
exports.HIDDEN_AMOUNT_FLAG = '****';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uSGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tbW9uSGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLFNBQWdCLGNBQWMsQ0FBQyxLQUFXO0lBQ3hDLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0IsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUVuQyxNQUFNLFdBQVcsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDO0lBQzFELE1BQU0sV0FBVyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFFdkQsT0FBTyxHQUFHLElBQUksSUFBSSxXQUFXLElBQUksV0FBVyxFQUFFLENBQUE7QUFDaEQsQ0FBQztBQVRELHdDQVNDO0FBRVksUUFBQSxrQkFBa0IsR0FBVyxNQUFNLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gdG9Gb3JtYXRTdHJpbmcocERhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gIGNvbnN0IHllYXIgPSBwRGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gIGNvbnN0IGRhdGUgPSBwRGF0ZS5nZXREYXRlKCk7XHJcbiAgY29uc3QgbW9udGggPSBwRGF0ZS5nZXRNb250aCgpICsgMTtcclxuXHJcbiAgY29uc3QgZm9ybWF0TW9udGggPSBtb250aCA8IDEwID8gYDAke21vbnRofWAgOiBgJHttb250aH1gO1xyXG4gIGNvbnN0IGZvcm1hdGVEYXRlID0gZGF0ZSA8IDEwID8gYDAke2RhdGV9YCA6IGAke2RhdGV9YDtcclxuXHJcbiAgcmV0dXJuIGAke3llYXJ9LSR7Zm9ybWF0TW9udGh9LSR7Zm9ybWF0ZURhdGV9YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSElEREVOX0FNT1VOVF9GTEFHOiBzdHJpbmcgPSAnKioqKidcclxuIl19