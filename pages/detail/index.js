// pages/detail/index.js
import {
	DetailModel,
	getBaseInfo,
	ShopInfo,
	ParamsInfo
} from "../../models/detail.js"
const detailModel = new DetailModel()
const app=getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrls: [],
		indicatorDots: true,
		autoplay: true,
		interval: 5000,
		duration: 1000,
		
		
		
		
	},

	getDetail(param) {
		console.log(param);
		detailModel.getDetail(param).then(res => {


			const data = res.result
			const detailinfo=data.detailInfo
			
			// console.log(data.itemParams.set);
			const baseinfo = new getBaseInfo(data.itemInfo, data.columns, data.shopInfo.services)
			const shopInfo = new ShopInfo(data.shopInfo)
			const paramsInfo=new ParamsInfo(data.itemParams.info, data.itemParams.rule)
			// console.log(paramsInfo);
			let commentInfo={}
			if(data.rate&&data.rate.cRate>0){
				commentInfo=data.rate.list[0]
			}
			this.setData({
				imgUrls: data.itemInfo.topImages,
				baseinfo,
				shopInfo,
				detailinfo,
				paramsInfo,
				commentInfo
				
				
				
			})
		})
	},
	getDetailRecommends(){
		detailModel.getDetailRecommends().then(res=>{
			// console.log(res);
			 this.setData({
        DetailRecommends: res.data.list
      })
		})
	},
	AddCart(){
		const obj={}
		obj.iid=this.data.param
		obj.imageURL=this.data.imgUrls[0]
		obj.title=this.data.baseinfo.title
		obj.desc=this.data.baseinfo.desc
		obj.price=this.data.baseinfo.realPrice
		
		//全局函数
		app.addToCart(obj)
		wx.showToast({
			title:"加入购物车成功"
		})
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		// console.log(options);
		const param = options.iid
		this.getDetail(param)
		this.getDetailRecommends();
		this.setData({
			param
		})
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
