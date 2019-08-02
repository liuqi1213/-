import {HTTP} from "../utils/http.js"
class indexModel extends  HTTP{
	getMultiData(){
	return	this.request({
			url:"/home/multidata"
		})
	}
	getProductData(type,page){
		return this.request({
			url:"/home/data",
			data:{
				type,
				page
			}
		})
	}
}
export {indexModel}