"use strict";
Component({
    properties: {
        placeholder: String,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRFpFZGl0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEWkVkaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFO1FBQ1YsV0FBVyxFQUFFLE1BQU07UUFDbkIsY0FBYyxFQUFFLE1BQU07S0FDdkI7SUFLRCxJQUFJLEVBQUUsRUFFTDtJQUtELE9BQU8sRUFBRTtRQUNQLGFBQWEsRUFBRSxVQUFVLEtBQVU7WUFDakMsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsS0FBSyxDQUFBO1lBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDMUQsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9EWkVkaXRvci9EWkVkaXRvci5qc1xuQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgcHJvcGVydGllczoge1xuICAgIHBsYWNlaG9sZGVyOiBTdHJpbmcsXG4gICAgdmFsdWVFdmVudE5hbWU6IFN0cmluZ1xuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgICBvblZhbHVlQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xuICAgICAgY29uc3QgeyBkZXRhaWw6IHsgdmFsdWUgfSB9ID0gZXZlbnRcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHRoaXMucHJvcGVydGllcy52YWx1ZUV2ZW50TmFtZSwgdmFsdWUpXG4gICAgfVxuICB9XG59KVxuIl19