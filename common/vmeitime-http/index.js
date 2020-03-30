import http from './interface'
import config from '@/common/utils/config';

/**
 * 将业务所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 *
 */

//########################### 用户登陆接口 ##################################

// 获取用户信息
export const getUserIno = () => {
	return http.get('/user/user/get', {'accessToken': uni.getStorageSync('accessToken')})
};




//我的地址列表
export const addresslist = (data) => { return http.get('/address!list.action',data)};
//添加/编辑地址
export const saveAddress = (data) => { return http.post('/address!saveorUpdate.action', data)};
//获取详细地址并编辑
export const addressDetail = (data) => { return http.get('/address!getDetail.action', data)};
// 设置默认地址
export const setDefaut = (data) => { return http.get('/address!setDefaut.action', data)};



//##################扫码活动start#####
//扫码活动主页
export const scanIndex = (data) => { return http.get('/api/scan/index', data)};
//获取微信jssdk
export const getjssdk = (data) => { return http.get('/jsSdkConfig/getJsSdkConfig', data)};
//获取我的核心二维码
export const getVerifyUserCode = (data) => { return http.get('/api/verify/getVerifyUserCode', data)};
//扫码后点击确认核销
export const doverify = (data) => { return http.get('/api/verify/doverify', data)};



//###################扫码活动end#####



export default {
	scanIndex,
	getjssdk,
	doverify

}
