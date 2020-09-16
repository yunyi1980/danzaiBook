"use strict";
Component({
    properties: {
        type: String,
        text: String,
        tapEventName: String
    },
    data: {},
    methods: {
        onBtnTap: function () {
            this.triggerEvent(this.properties.tapEventName);
        },
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRFpCdXR0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEWkJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsTUFBTTtRQUNaLFlBQVksRUFBRSxNQUFNO0tBQ3JCO0lBS0QsSUFBSSxFQUFFLEVBRUw7SUFLRCxPQUFPLEVBQUU7UUFDUCxRQUFRLEVBQUU7WUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDakQsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gIGltcG9ydCB7YnRuVHlwZX0gZnJvbSAnLi4vLi4vZGF0YU1vZGVsL2RhdGEnO1xuXG5Db21wb25lbnQoe1xuICAvKipcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXG4gICAqL1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHRleHQ6IFN0cmluZyxcbiAgICB0YXBFdmVudE5hbWU6IFN0cmluZ1xuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBcbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXG4gICAqL1xuICBtZXRob2RzOiB7XG4gICAgb25CdG5UYXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHRoaXMucHJvcGVydGllcy50YXBFdmVudE5hbWUpXG4gICAgfSxcbiAgfVxufSlcbiJdfQ==