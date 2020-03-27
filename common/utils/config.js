/**
 * 签名参数与后台参数一致
 */
const client = 'mini-program';
const version = '1.0';
const key = '512162086@561kiojdsy';

/**
 *  控制台打印请求和响应日志 debug=true
 */
const debug = false;

/**
 * dev 开发
 * pro 正式
 */
const active = 'dev';

/**
 * 开发服务器地址
 */
const webUrl_dev = 'http://ld.haiyunzy.com/zlbean/';
const apiUrl_dev = 'http://ld.haiyunzy.com/zlbean/';
const loginUrl_dev = 'http://ld.haiyunzy.com/zlbean/frontpage/activity/index';
const hosturl_dev = 'http://ld.haiyunzy.com/zlbean/';
const imghosturl_dev =  'http://ld.haiyunzy.com/zlbean/';
const jssdkUrl_dev =  'http://ld.haiyunzy.com/zlbean/jsSdkConfig/getJsSdkConfig';

/**
 * 正式服务器地址
 */
const webUrl_pro = 'http://ld.thewm.cn/zlbean/';
const apiUrl_pro = 'http://ld.thewm.cn/zlbean/';
const loginUrl_pro = 'http://ld.thewm.cn/zlbean/frontpage/activity/index';
const hosturl_pro = 'http://ld.thewm.cn/zlbean/';
const imghosturl_pro =  'http://ld.thewm.cn/zlbean/';
const jssdkUrl_pro =  'http://ld.thewm.com/zlbean/jsSdkConfig/getJsSdkConfig';


export default {
    client,
    version,
    key,
    debug,
    webUrl: active === 'dev' ? webUrl_dev : webUrl_pro,
    apiUrl: active === 'dev' ? apiUrl_dev : apiUrl_pro,
    loginUrl: active === 'dev' ? loginUrl_dev : loginUrl_pro,
	hosturl: active === 'dev' ? hosturl_dev : hosturl_pro,
	imghosturl: active === 'dev' ? imghosturl_dev : imghosturl_pro,
	jssdkUrl: active === 'dev' ? jssdkUrl_dev : jssdkUrl_pro,
}
