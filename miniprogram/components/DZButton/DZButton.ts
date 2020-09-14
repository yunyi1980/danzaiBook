//  import {btnType} from '../../dataModel/data';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type: String,
    text: String,
    tapEventName: String
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
    onBtnTap: function () {
      this.triggerEvent(this.properties.tapEventName)
    },
  }
})
