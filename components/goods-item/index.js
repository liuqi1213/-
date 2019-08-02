// components/goods-item/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
		item:Object
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
goodsItemClick(){
	// console.log(this.properties.item.iid);
	const param=this.properties.item.iid
	wx.navigateTo({
		url:"/pages/detail/index?iid="+param
	})
}
  }
})
