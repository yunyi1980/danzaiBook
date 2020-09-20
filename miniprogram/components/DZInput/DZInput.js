"use strict";
Component({
    properties: {
        labelText: String,
        placeholder: String,
        type: String,
        valueEventName: String
    },
    data: {},
    methods: {
        onValueChange: function (event) {
            const { detail: { value } } = event;
            this.triggerEvent(this.properties.valueEventName, value);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRFpJbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRaSW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVMsQ0FBQztJQUlSLFVBQVUsRUFBRTtRQUNWLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLFdBQVcsRUFBRSxNQUFNO1FBQ25CLElBQUksRUFBRSxNQUFNO1FBQ1osY0FBYyxFQUFFLE1BQU07S0FDdkI7SUFLRCxJQUFJLEVBQUUsRUFFTDtJQUtELE9BQU8sRUFBRTtRQUNQLGFBQWEsRUFBRSxVQUFVLEtBQVU7WUFDakMsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsS0FBSyxDQUFBO1lBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDMUQsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcclxuICAgKi9cclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBsYWJlbFRleHQ6IFN0cmluZyxcclxuICAgIHBsYWNlaG9sZGVyOiBTdHJpbmcsXHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICB2YWx1ZUV2ZW50TmFtZTogU3RyaW5nXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcclxuICAgKi9cclxuICBtZXRob2RzOiB7XHJcbiAgICBvblZhbHVlQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xyXG4gICAgICBjb25zdCB7IGRldGFpbDogeyB2YWx1ZSB9IH0gPSBldmVudFxyXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh0aGlzLnByb3BlcnRpZXMudmFsdWVFdmVudE5hbWUsIHZhbHVlKVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIl19