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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRFpJbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRaSW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVMsQ0FBQztJQUlSLFVBQVUsRUFBRTtRQUNWLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLFdBQVcsRUFBRSxNQUFNO1FBQ25CLElBQUksRUFBRSxNQUFNO1FBQ1osY0FBYyxFQUFFLE1BQU07S0FDdkI7SUFLRCxJQUFJLEVBQUUsRUFFTDtJQUtELE9BQU8sRUFBRTtRQUNQLGFBQWEsRUFBRSxVQUFVLEtBQVU7WUFDakMsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsS0FBSyxDQUFBO1lBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDMUQsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgcHJvcGVydGllczoge1xuICAgIGxhYmVsVGV4dDogU3RyaW5nLFxuICAgIHBsYWNlaG9sZGVyOiBTdHJpbmcsXG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHZhbHVlRXZlbnROYW1lOiBTdHJpbmdcbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG5cbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXG4gICAqL1xuICBtZXRob2RzOiB7XG4gICAgb25WYWx1ZUNoYW5nZTogZnVuY3Rpb24gKGV2ZW50OiBhbnkpIHtcbiAgICAgIGNvbnN0IHsgZGV0YWlsOiB7IHZhbHVlIH0gfSA9IGV2ZW50XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh0aGlzLnByb3BlcnRpZXMudmFsdWVFdmVudE5hbWUsIHZhbHVlKVxuICAgIH1cbiAgfVxufSlcbiJdfQ==