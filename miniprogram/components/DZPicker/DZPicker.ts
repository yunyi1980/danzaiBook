import { toFormatString } from "../../utils/commonHelper";

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    labelText: String,
    placeholder: String,
    mode: String,
    valueEventName: String,
    initValue: {
      type: String,
      value: toFormatString(new Date()),
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    onValueChange: function (event: any) {
      const {
        detail: { value },
      } = event;
      this.triggerEvent(this.properties.valueEventName, value);
    },
  },
});
