import {config} from "../config.js"
class HTTP{
	request({url,data={},method="GET"}){
		return new Promise((resolve,reject)=>{
			this._request(url,data,method,resolve,reject)
		})
	}
	_request(url,data={},method="GET",resolve,reject){
		wx.request({
			url:config.url+url,
			method:method,
			data:data,
			header:{ 'content-type': 'application/json'},
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				reject()
			}
		})
	}
}
export {HTTP}