// pages/category/index.js
import {
	CategoryModel
} from "../../models/category.js"
const categoryModel = new CategoryModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	this.getcategory()
	this.getSubcategory(3627)
  },

	getcategory(){
		categoryModel.getcategory().then(res=>{
			console.log(res.data.category.list);
			const categoryList=res.data.category.list
			this.setData({
				categoryList
			})
			// console.log(this.data.categoryList[0].maitKey);
			
		})
	},
	//获取v-content数据
	getSubcategory(maitKey){
		categoryModel.getSubcategory(maitKey).then(res=>{
			console.log(res.data.list);
			this.setData({
				subcategories:res.data.list
			})
		})
	},
	//接受v-menu传递的参数 也是v-menu点击的函数
	menuItemClick(e){
		console.log(e.detail.currentIndex);
	let currentIndex=e.detail.currentIndex;
		// for(var i=0;i<this.data.categoryList.length;i++){
		// 	console.log(this.data.categoryList[i].maitKey);
		// }
			// console.log(this.data.categoryList[currentIndex].maitKey);
			const maitKey=this.data.categoryList[currentIndex].maitKey
			this.getSubcategory(maitKey)
	},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})