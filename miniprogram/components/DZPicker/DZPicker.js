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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRFpQaWNrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEWlBpY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUEwRDtBQUUxRCxTQUFTLENBQUM7SUFJUixVQUFVLEVBQUU7UUFDVixTQUFTLEVBQUUsTUFBTTtRQUNqQixXQUFXLEVBQUUsTUFBTTtRQUNuQixJQUFJLEVBQUUsTUFBTTtRQUNaLGNBQWMsRUFBRSxNQUFNO1FBQ3RCLFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLDZCQUFjLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUNsQztLQUNGO0lBS0QsSUFBSSxFQUFFLEVBQUU7SUFLUixPQUFPLEVBQUU7UUFDUCxhQUFhLEVBQUUsVUFBVSxLQUFVO1lBQ2pDLE1BQU0sRUFDSixNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FDbEIsR0FBRyxLQUFLLENBQUM7WUFDVixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNELENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvRm9ybWF0U3RyaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbkhlbHBlclwiO1xuXG5Db21wb25lbnQoe1xuICAvKipcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXG4gICAqL1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgbGFiZWxUZXh0OiBTdHJpbmcsXG4gICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcbiAgICBtb2RlOiBTdHJpbmcsXG4gICAgdmFsdWVFdmVudE5hbWU6IFN0cmluZyxcbiAgICBpbml0VmFsdWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiB0b0Zvcm1hdFN0cmluZyhuZXcgRGF0ZSgpKSxcbiAgICB9LFxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHt9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgICBvblZhbHVlQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBkZXRhaWw6IHsgdmFsdWUgfSxcbiAgICAgIH0gPSBldmVudDtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHRoaXMucHJvcGVydGllcy52YWx1ZUV2ZW50TmFtZSwgdmFsdWUpO1xuICAgIH0sXG4gIH0sXG59KTtcbiJdfQ==