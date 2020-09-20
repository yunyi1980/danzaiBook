"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commonHelper_1 = require("../../utils/commonHelper");
Component({
    properties: {
        labelText: String,
        placeholder: String,
        mode: String,
        valueEventName: String,
        initValue: {
            type: String,
            value: commonHelper_1.toFormatString(new Date()),
        },
    },
    data: {},
    methods: {
        onValueChange: function (event) {
            const { detail: { value }, } = event;
            this.triggerEvent(this.properties.valueEventName, value);
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRFpQaWNrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEWlBpY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUEwRDtBQUUxRCxTQUFTLENBQUM7SUFJUixVQUFVLEVBQUU7UUFDVixTQUFTLEVBQUUsTUFBTTtRQUNqQixXQUFXLEVBQUUsTUFBTTtRQUNuQixJQUFJLEVBQUUsTUFBTTtRQUNaLGNBQWMsRUFBRSxNQUFNO1FBQ3RCLFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLDZCQUFjLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUNsQztLQUNGO0lBS0QsSUFBSSxFQUFFLEVBQUU7SUFLUixPQUFPLEVBQUU7UUFDUCxhQUFhLEVBQUUsVUFBVSxLQUFVO1lBQ2pDLE1BQU0sRUFDSixNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FDbEIsR0FBRyxLQUFLLENBQUM7WUFDVixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNELENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvRm9ybWF0U3RyaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbkhlbHBlclwiO1xyXG5cclxuQ29tcG9uZW50KHtcclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcclxuICAgKi9cclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBsYWJlbFRleHQ6IFN0cmluZyxcclxuICAgIHBsYWNlaG9sZGVyOiBTdHJpbmcsXHJcbiAgICBtb2RlOiBTdHJpbmcsXHJcbiAgICB2YWx1ZUV2ZW50TmFtZTogU3RyaW5nLFxyXG4gICAgaW5pdFZhbHVlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6IHRvRm9ybWF0U3RyaW5nKG5ldyBEYXRlKCkpLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7fSxcclxuXHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXHJcbiAgICovXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25WYWx1ZUNoYW5nZTogZnVuY3Rpb24gKGV2ZW50OiBhbnkpIHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIGRldGFpbDogeyB2YWx1ZSB9LFxyXG4gICAgICB9ID0gZXZlbnQ7XHJcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHRoaXMucHJvcGVydGllcy52YWx1ZUV2ZW50TmFtZSwgdmFsdWUpO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl19