"use strict";
Component({
    properties: {
        labelText: String,
        placeholder: String,
        mode: String,
        valueEventName: String,
        initValue: String
    },
    data: {},
    methods: {
        onValueChange: function (event) {
            const { detail: { value } } = event;
            this.triggerEvent(this.properties.valueEventName, value);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRFpQaWNrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEWlBpY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFO1FBQ1YsU0FBUyxFQUFFLE1BQU07UUFDakIsV0FBVyxFQUFFLE1BQU07UUFDbkIsSUFBSSxFQUFFLE1BQU07UUFDWixjQUFjLEVBQUUsTUFBTTtRQUN0QixTQUFTLEVBQUUsTUFBTTtLQUNsQjtJQUtELElBQUksRUFBRSxFQUVMO0lBS0QsT0FBTyxFQUFFO1FBQ1AsYUFBYSxFQUFFLFVBQVUsS0FBVTtZQUNqQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBRyxLQUFLLENBQUE7WUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUMxRCxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL0RaUGlja2VyL0RaUGlja2VyLmpzXG5Db21wb25lbnQoe1xuICAvKipcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXG4gICAqL1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgbGFiZWxUZXh0OiBTdHJpbmcsXG4gICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcbiAgICBtb2RlOiBTdHJpbmcsXG4gICAgdmFsdWVFdmVudE5hbWU6IFN0cmluZyxcbiAgICBpbml0VmFsdWU6IFN0cmluZ1xuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgICBvblZhbHVlQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xuICAgICAgY29uc3QgeyBkZXRhaWw6IHsgdmFsdWUgfSB9ID0gZXZlbnRcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHRoaXMucHJvcGVydGllcy52YWx1ZUV2ZW50TmFtZSwgdmFsdWUpXG4gICAgfVxuICB9XG59KVxuIl19