import Custom from './custom'
import WEBSITE_DATA from './data'

let Crawler = {
	name : 'Crawler Module', 

	// getListAll(path_obj, url_obj, list_arr, update){
	// 	/*first page*/
	// 	var html = Custom.afterGetRemoteUrl(Custom.getRemoteUrl(url_obj.url,false));
	// 	for(var i=path_obj.csspath.length-1; i>=0; i--){
	// 		list_arr = this.getList(html,path_obj.csspath[i],list_arr,path_obj.domain,url_obj.type,url_obj.table);
	// 	}
	// 	/*from page 2-not use when update*/
	// 	if(update!='update'){
	// 		for( var i=2 ; i<=url_obj.num_page; i++){
	// 			var html = Custom.afterGetRemoteUrl(Custom.getRemoteUrl(String.format(url_obj.url_page,i),false)) ;
	// 			list_arr = this.getList(html,path_obj.csspath[0],list_arr,path_obj.domain,url_obj.type,url_obj.table);
	// 		}
	// 	}
	// 	return list_arr;
	// },

	getListAll(path_obj, url_obj, list_arr, update){
		/*first page*/
		var html = Custom.afterGetRemoteUrl(Custom.getRemoteUrl(url_obj.url,false));
		for(var i=path_obj.csspath.length-1; i>=0; i--){
			list_arr = this.getList(html,path_obj.csspath[i],list_arr,path_obj.domain,url_obj.type,url_obj.table);
		}
		return list_arr;
	},

	getList(htmlDOM, list_arr, csspath, domain, type, table, e){
		var startNumber = list_arr.length
		var list = htmlDOM.querySelectorAll(csspath.parent_path)
		var totalNum = list.length
		e[`-${csspath.parent_path}`] = {}
		e[`-${csspath.parent_path}`].totalNum = totalNum

		for( var i=0; i<list.length; i++){
			if(list[i].querySelectorAll(csspath.title_path).length>0){
				/*check obj exist in arr*/
				var status = false;
				for(var j=0; j<list_arr.length; j++){
					if(list_arr[j].title == list[i].querySelectorAll(csspath.title_path)[0].textContent.trim()){
						console.log('Detect duplicate---------------', list_arr[j].title, list[i].querySelectorAll(csspath.title_path)[0].textContent.trim())
						status = true;
						break;
					}
				}
				/*add to array if not exist*/
				if(status==false){
					var desc = csspath.desc_path != null && list[i].querySelectorAll(csspath.desc_path).length>0 ? list[i].querySelectorAll(csspath.desc_path)[0].textContent.trim(): 'in detail';
					var title = list[i].querySelectorAll(csspath.title_path)[0].textContent.trim();
					var href = Custom.preLink(list[i].querySelectorAll(csspath.href_path)[0].getAttribute('href_none'),domain);
					var image = list[i].querySelectorAll(csspath.image_path)[0].getAttribute('src_none');
					var key = Custom.prettyURL(title);

					var obj = {
						title
						, key
						, href
						, image
						, desc
						, domain
						, type
						, table
						, content: '...'
						, image_full: '...'
					};
					/*domain Youtube.com*/
					if(domain == 'youtube.com'){
						obj['time'] = list[i].querySelectorAll(csspath.time_path)[0].textContent.trim();
						if(list[i].querySelectorAll(csspath.quality_path).length>0){
							obj['quality'] = list[i].querySelectorAll(csspath.quality_path)[0].textContent.trim();
						}else{
							obj['quality'] = 'normal';
						}
					}

					list_arr.push(obj);
				}else{
					/*case: don't find title*/
					console.log('Error duplicate: '+i);
				}
			}else{
				/*case: don't find title*/
				console.log("Error don't find title: ")
			}
		}
		/** check error */
		let gotNum = list_arr.length - startNumber;
		e[`-${csspath.parent_path}`].gotNum = gotNum
		if(gotNum < totalNum || totalNum === 0){
			e[`-${csspath.parent_path}`].errors = true;
			e.errors = e.errors ? `${e.errors} ** ${csspath.parent_path}`: csspath.parent_path;
		}
		return list_arr;
	},

	getDetail(htmlDOM, obj, err_arr){
		/*select cssdetail*/
		switch(obj.domain){
			case 'vnexpress.net' :
				var csspath_detail = WEBSITE_DATA.vnexpress_net.info.csspath_detail;
				var csspath_remove = WEBSITE_DATA.vnexpress_net.info.csspath_remove;
				break;
			case 'eva.vn' :
				var csspath_detail = WEBSITE_DATA.eva_vn.info.csspath_detail;
				var csspath_remove = WEBSITE_DATA.eva_vn.info.csspath_remove;
				break;
			case 'ngoisao.net' :
				var csspath_detail = WEBSITE_DATA.ngoisao_net.info.csspath_detail;
				var csspath_remove = WEBSITE_DATA.ngoisao_net.info.csspath_remove;
				break;
			case 'kenh14.vn' :
				var csspath_detail = WEBSITE_DATA.kenh14_vn.info.csspath_detail;
				var csspath_remove = WEBSITE_DATA.kenh14_vn.info.csspath_remove;
				break;
			case 'ebe.vn' :
				var csspath_detail = WEBSITE_DATA.ebe_vn.info.csspath_detail;
				var csspath_remove = WEBSITE_DATA.ebe_vn.info.csspath_remove;
				break;
			case 'phunutoday.vn' :
				var csspath_detail = WEBSITE_DATA.phunutoday_vn.info.csspath_detail;
				var csspath_remove = WEBSITE_DATA.phunutoday_vn.info.csspath_remove;
				break;
		}

		/*remove el*/
		this.removeEL(htmlDOM,csspath_remove);
		/*get missing description*/
		obj['desc'] = obj['desc'] == 'in detail' && htmlDOM.querySelectorAll(csspath_detail.desc).length>0? htmlDOM.querySelectorAll(csspath_detail.desc)[0].textContent.trim(): obj['desc'];
			/*get content*/
			let el_content = htmlDOM.querySelectorAll(csspath_detail.content);
			if(el_content.length > 0){
				let imgs = el_content[0].querySelectorAll('img');
				/*get image with extention .jpg, jpeg*/
				let imgArr = [];
				for(let j=0; j<imgs.length ; j++){
					if(Custom.checkURL(imgs[j].getAttribute('src_none'))){
						imgArr.push(imgs[j].getAttribute('src_none'));
					}
				}
				obj['image_full'] = imgArr.join('***');
				/** get detail content */
				obj['content'] = el_content[0].outerHTML.trim();
				obj['content'] = obj['content'].replace(/src_none=/g, "src=");
			}else{
				obj['image_full'] = obj['image'];
				err_arr.push(obj.href);
				console.log("Error: don't get detail content.")
			}
		return obj;
	},

	removeEL(html,arr){
		for(let i=0; i<arr.length; i++){
			let list = html.querySelectorAll(arr[i]);
			for( let j=0; j<list.length; j++){
				let element = list[j];
				element && element.parentNode && element.parentNode.removeChild(element);
			}
		}
	},

	getDetailYoutube(list_arr){
		for(var i=0; i<list_arr.length; i++){
			/*set default*/
			var str = list_arr[i].href;
			list_arr[i]['content'] = str.substring(str.indexOf('?v=')+3, str.length);
			list_arr[i]['image'] = 'http://i.ytimg.com/vi/'+list_arr[i]['content']+'/mqdefault.jpg';
			list_arr[i]['image_full'] = '...';
		}
		return list_arr;
	}
}

export default Crawler