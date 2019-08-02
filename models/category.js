import {
	HTTP
} from "../utils/http.js"
class CategoryModel extends HTTP {
	getcategory(param) {
		return this.request({
			url: "/category"
			
		})
	}
	getSubcategory(maitKey){
		return this.request({
			url: "/subcategory",
			data:{
				maitKey
			}
		})
	}
}
export {CategoryModel}