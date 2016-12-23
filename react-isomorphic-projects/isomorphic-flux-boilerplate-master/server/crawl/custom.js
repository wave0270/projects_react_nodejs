import friendlyUrl from 'friendly-url'

let Custom = {
	name: 'Custom Module',

	/**
	 * Load Html thông qua proxy. Kết quả trả vè ở dạng json. Nội dung của json bao gồm:
	 * - DATA: html content
	 * - ENCODING: encoding của html
	 * - ERROR_CODE: http error code. 200 = ok.
	 * - ERROR_MSG: thông báo lỗi (nếu có) ở dạng string
	 * Reference: http://api.jquery.com/jquery.ajax/
	 * @param url
	 * @param useCache: cờ báo hiệu cho biết có sử dụng cache hay không. Default là có dùng cache.
	 * @returns {*}
	 */
	// getRemoteUrl(url, useCache) {
	// 	var result = null;
	// 	if (useCache == null) useCache = true;  // Nếu không định nghĩa thì default là có sử dụng cache.
	// 	if (useCache == true) {
	// 		// Thử đọc dữ liệu từ session storage. Nếu có dữ liệu thì trả kết quả về.
	// 		response = sessionStorage.getItem(url);
	// 		if (response != null) {
	// 			console.log('getRemoteUrl: cache hit, url=', url);
	// 			result = JSON.parse(response);
	// 		}
	// 	}else{
	// 		console.log('getRemoteUrl: loading from url=', url);
	// 		$.ajax({
	// 			url: URL_ROOT+'server/getUrlContent.php',
	// 			type: 'POST',
	// 			async: false,
	// 			dataType: 'text',
	// 			data: {
	// 				address: url
	// 			},
	// 			success: function(response) {
	// 				// Lưu dữ liệu trong trường hợp có sử dụng cache
	// 				if (useCache == true) {
	// 					sessionStorage.setItem(url, response);
	// 				}
	// 				//after :
	// 				result = response;;
	// 			}
	// 		});
	// 	}
	// 	return result;
	// },

	// getContent(url){
	// 	if (url == undefined) {url = 'http://vnexpress.net/tin-tuc/the-gioi/phan-tich/vi-sao-co-pho-germanwings-lao-may-bay-xuong-nui-3174380.html';}
	// 	if (url != '') {	
	// 		$('.panel-heading').html('<div id="title"></div>');
	// 		$('.panel-body').html('<div id="content"></div>');
	// 		setTimeout(function(){
	// 			var data = this.getRemoteUrl(url,false);
	// 			this.getUrlCallback(data);	    		
	// 		},300);
	// 	} else {
	// 		$('#url').notify("URL is empty!", {
	// 			className : 'error',
	// 			position : "top",
	// 			autoHideDelay : 1000,
	// 			showDuration : 300,
	// 			hideDuration : 200
	// 		});
	// 	} 
	// },

	afterGetRemoteUrl(html){
		html = html.replace(/href/g, "href_none");
		html = html.replace(/src=/g, "src_none=");
		html = html.replace(/onlick=/g, "onlick_none=");
		html = html.replace(/onmouseover=/g, "onmouseover_none=");
		//xóa các script bên trong html
		while (html.indexOf("<script") > 0) {
			var temp = html.slice(html.indexOf("<script"), html.indexOf("</script>") + 9);
			html = html.replace(temp, " ");
		}	
		//xóa các iframe bên trong html
		while (html.indexOf("<iframe") > 0) {
			var temp = html.slice(html.indexOf("<iframe"), html.indexOf("</iframe>") + 9);
			html = html.replace(temp, " ");
		}
		//xóa các iframe bên trong xml
		while (html.indexOf("<xml") > 0) {
			var temp = html.slice(html.indexOf("<xml"), html.indexOf("</xml>") + 9);
			html = html.replace(temp, " ");
		}
		//xóa các iframe bên trong style
		while (html.indexOf("<style") > 0) {
			var temp = html.slice(html.indexOf("<style"), html.indexOf("</style>") + 9);
			html = html.replace(temp, " ");
		}
		return html;
	},

	/**
	 * Render data to document
	 * @param data : html string
	 * @returns 
	 */
	// getUrlCallback(data) {
	// 	try{
	// 		$('#content').html(data);
	// 	} catch (e) {};
	// 	readStyle='style-ebook';
	// 	readSize='size-medium';
	// 	readMargin='margin-x-narrow';
	// 	var obj_content = readability.init();
	// 	// $('.panel-heading').html(obj_content.title);
	// 	// $('.panel-body').html(obj_content.content);
	// 	return obj_content;
	// },

	getUrlFromInput(){
		var url = document.getElementById('url').value;
		this.getContent(url);
	},

	prettyURL(str){
		str = str.toLowerCase()
			.replace(/â|ấ|ậ|ầ|ă|ắ|ằ|ặ|á|à|ạ|ã|ả|ẫ|ẩ|ẵ|ẳ/g, "a")
			.replace(/é|è|ẹ|ê|ế|ề|ệ|ẽ|ẻ|ễ|ể/g, "e")
			.replace(/ó|ò|ọ|ô|ố|ồ|ộ|õ|ỏ|ỗ|ổ|ơ|ớ|ờ|ợ|ỡ|ở/g, "o")
			.replace(/í|ì|ị|ĩ|ỉ/g, "i")
			.replace(/ú|ù|ụ|ũ|ủ|ư|ứ|ừ|ự|ữ|ử/g, "u")
			.replace(/ý|ỳ|ỵ|ỹ|ỷ/g, "y")
			.replace(/đ/g, "d");
		str = friendlyUrl(str);
		return str;
	},

	checkURL(url) {
		url = url.toLowerCase();
		return(url.match(/\.(jpeg|jpg|png)$/) != null);
	},

	preLink(href_str, domain){
		if(href_str.search('http')<0){
			console.log('href_str',href_str)
			href_str = 'http://'+domain+href_str;
		}
		/*case: youtube*/
		return href_str;
	},
}

//khởi tạo hàm String.format
String.format = function() {
	var theString = arguments[0];
	for (var i = 1; i < arguments.length; i++) {
		var regEx = new RegExp("\\{" + (i - 1) + "\\}", "gm");
		theString = theString.replace(regEx, arguments[i]);
	}
	return theString;
};

export default Custom



