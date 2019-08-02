// pages/home/index.js
import {
	indexModel
} from "../../models/index.js"
const IndexModel = new indexModel()
Page({
	data: {
		banner: String,
		recommend: String,
		title: ["流行", "新款", "精选"],
		showTabControl: false,
		goods: null,
		currentType:'pop',
		pageCount:1,
		loaddataArray:[],
		showBackTop:false
	},

	getMultiData() {
		IndexModel.getMultiData().then(res => {
			const imgUrl = res.data.banner.list.map(item => {
				return item.image
			})

			this.setData({
				banner: imgUrl,
				recommend: res.data.recommend.list
			})
		})
	},
	//接受子组件参数
	TabClick(e) {
		console.log(e.detail);
		console.log(this.selectComponent('.tab-control'));
		// this.selectComponent('.tab-control').setCurrentIndex(e.detail)
		// this.selectComponent('.tab-control-temp').setCurrentIndex(e.detail.index)
		// let currentType = ""

		switch (e.detail) {
			case 0:
				this.setData({
					currentType : 'pop'
				})
				break
			case 1:
				this.setData({
					currentType : 'new'
				})
				break
			case 2:
				this.setData({
					currentType : 'sell'
				})
				break
		}
		
		this.data.loaddataArray=[]
		this.data.pageCount=1
		this.getProductData(this.data.currentType,1)
	},
	// scrollPosition(e){
	// 	// console.log(111);
	// 	wx.createSelectorQuery().select('tab-control').boundingClientRect((rect)=>{
	// 		const show=rect.top>0
	// 		
	// 		this.setData({
	// 			showTabControl:!show
	// 		})
	// 	}).exec()
	// },

	//监听滚动事件 隐藏tabcontrol
	scrollfn(e) {
		const position=e.detail.scrollTop;
		this.setData({
			showBackTop:position>1000
		})
		wx.createSelectorQuery().select('.tab-control').boundingClientRect((rect) => {
			// console.log(rect.top);
			const show = rect.top > 0
			this.setData({
				showTabControl: !show
			})
		}).exec()
	},
	getProductData(currentType,pageCount) {
		IndexModel.getProductData(currentType, pageCount).then(res => {
			// console.log(res.data);
			
			this.data.loaddataArray= this.data.loaddataArray.concat(res.data.list)
			// console.log(this.data.loaddataArray);
			this.setData({
				goods: this.data.loaddataArray
			})
		})
	},
	loadmore(){
		console.log("chudi");
		this.setData({
			pageCount:this.data.pageCount+1
		})
		this.getProductData(this.data.currentType,this.data.pageCount)
		
	},
	onBackTop(){
		this.setData({
			topPosition:0,
			showBackTop:false,
			showTabControl:false
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		this.getMultiData()
		this.getProductData(this.data.currentType,this.data.pageCount)
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
