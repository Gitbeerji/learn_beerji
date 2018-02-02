function formatterDateTime() {
	var date=new Date();
	var month=date.getMonth() + 1;
	var datetime = date.getFullYear() + ""
				 + (month >= 10 ? month : "0"+ month) + ""
	             + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + ""
	             + (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ""
	             + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + ""
	             + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date .getSeconds());
	return datetime;
}

var data = {
	"timestamp": formatterDateTime(),
	"appid": '55873', //这里需要改成自己的appid
	"sign": 'b74dadbbced14c92a9d9a98c07e017b1',  //这里需要改成自己的应用的密钥secret
};

function concatApi(api){
	var str = api + '?';
	str += 'showapi_appid=' + data.appid;
	str += '&showapi_sign=' + data.sign;
	str += '&showapi_timestamp=' + data.timestamp;
	return str;
}

var api = {
	//花瓣福利
	huaban: concatApi('819-1'),
	//笑话大全
	joker: concatApi('341-1')
};

export default api;