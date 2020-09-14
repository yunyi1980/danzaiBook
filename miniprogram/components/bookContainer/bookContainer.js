// components/assestContainer.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    book: Object,
    isShowAmount: Boolean,
    hiddenFlag: String
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
    onBookTap: function () {
      this.triggerEvent('onBookItemTap', this.properties.book)
    }
  }
})
