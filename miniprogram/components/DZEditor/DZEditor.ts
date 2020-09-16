// components/DZEditor/DZEditor.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder: String,
    valueEventName: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onValueChange: function (event: any) {
      const { detail: { value } } = event
      this.triggerEvent(this.properties.valueEventName, value)
    }
  }
})
