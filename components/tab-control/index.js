// components/tab-control/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	title:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
	currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
	itemClick(e){
		// console.log(e.currentTarget.dataset.index);// 
		this.setData({
			currentIndex:e.currentTarget.dataset.index
		})
		let data=e.currentTarget.dataset.index
		this.triggerEvent("tabClick",data,{})
	}
  }
})
