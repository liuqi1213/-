import {
	HTTP
} from "../utils/http.js"
class DetailModel extends HTTP {
	getDetail(param) {
		return this.request({
			url: "/detail",
			data: {
				iid: param
			}
		})
	}
	getDetailRecommends(){
		return this.request({
			url:"/recommend"
		})
	}
}

class getBaseInfo {
	constructor(itemInfo, columns, services) {
		this.title = itemInfo.title
		this.desc = itemInfo.desc
		this.newPrice = itemInfo.price
		this.oldPrice = itemInfo.oldPrice
		this.discount = itemInfo.discountDesc
		this.columns = columns
		this.services = services
		this.realPrice = itemInfo.lowNowPrice
	}

}

class ShopInfo {
	constructor(shopInfo) {
		this.logo = shopInfo.shopLogo
		this.name = shopInfo.name
		this.fans = shopInfo.cFans
		this.sells = shopInfo.cSells
		this.score = shopInfo.score
		this.goodsCount = shopInfo.cGoods
	}
}
class ParamsInfo {
	constructor(info,rule) {
		this.image=info.image?info.image[0]:"";
		this.infos=info.set;
		this.size=rule.tables;
	}
}
export {
	DetailModel,
	getBaseInfo,
	ShopInfo,
	ParamsInfo
	
}
