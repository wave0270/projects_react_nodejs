/**
 * Manual Function
 * parse Global Menu from the Calypso json Structure to the Frankly json Structure
 */
 MenuData.prototype.parseGlobalMenu = function(data){
	 var requireData = {};
	 //other fields
	 requireData['objectId'] = data['objectId'] ;
	 requireData['name'] = data['title'];
	 requireData['affiliateId'] = data['affiliateId'];
	 requireData['platform'] = null;
	 requireData['version'] = null;
	 requireData['auditTrail'] = data['auditTrail'];
	 requireData['id'] = data['id'];
	 //menu fields
	 requireData['config'] = [];
	 if(data['items']){
		 requireData['config'] = this.parseGlobalMenuItem(data['items'],0);
	 }
	 return requireData;
 };
 MenuData.prototype.parseGlobalMenuItem = function(items,level){
	 var arrItem = [];
	 for(var i=0; i<items.length; i++){
		 var newItem = {};
		 //frankly fields
		 newItem['text'] = items[i]['title'];
		 newItem['level'] = items[i]['level'];
		 newItem['order'] = items[i]['order'];
		 newItem['openInBrowser'] = items[i]['linkTarget'];
		 //calypso fields
		 newItem['id'] = items[i]['id'];
		 newItem['type'] = items[i]['type'];
		 newItem['contentId'] = items[i]['content_id'];
		 newItem['url'] = items[i]['url'];
		 newItem['typeFamily'] = items[i]['type_family'];
		 newItem['viewLayout'] = items[i]['viewLayout'];
		 newItem['advanced'] = items[i]['advanced'];

		 if(items[i]['items']){
			 newItem['children'] = this.parseGlobalMenuItem(items[i]['items'],level + 1);
		 }
		 arrItem.push(newItem);
	 }
	 return arrItem;
 };
 /**
  * Manual Function
  * parse Global Menu from the the Frankly json Structure to Calypso json Structure
  */
 MenuData.prototype.reParseGlobalMenu = function(data){
	 var requireData = {};
	 //other fields
	 requireData['objectId'] = data['objectId'];
	 requireData['title'] = data['name'];
	 requireData['affiliateId'] = data['affiliateId'];
	 requireData['platform'] = data['platform'];
	 requireData['version'] = data['platform'];
	 requireData['auditTrail'] = data['auditTrail'];
	 requireData['id'] = data['id'];
	 //menu fields
	 requireData['items'] = [];
	 if(data['config']){
		 requireData['items'] = this.reParseGlobalMenuItem(data['config']);
	 }
	 return requireData;
 };
 MenuData.prototype.reParseGlobalMenuItem = function(items){
	 var arrItem = [];
	 for(var i=0; i<items.length; i++){
		 var newItem = {};
		 //frankly fields
		 newItem['title'] = items[i]['text'];
		 newItem['linkTarget'] = items[i]['openInBrowser'];
		 newItem['level'] = items[i]['level'];
		 newItem['order'] = items[i]['order'];
		 //calypso fields
		 newItem['id'] = items[i]['id'];
		 newItem['type'] = items[i]['type'];
		 newItem['content_id'] = items[i]['contentId'];
		 newItem['url'] = items[i]['url'];
		 newItem['type_family'] = items[i]['typeFamily'];
		 newItem['viewLayout'] = items[i]['viewLayout'];
		 newItem['advanced'] = items[i]['advanced'];

		 if(items[i]['children']){
			 newItem['items'] = this.reParseGlobalMenuItem(items[i]['children']);
		 }
		 arrItem.push(newItem);
	 }
	 return arrItem;
 };

var PAGE = {
	"client": {
		"pushBehavior": {
			"_enabled": "true",
			"_provider": "parse",
			"_production-app-id": "jAGlm2AlhbtpwuvQWz3REI2JJqOJXAxgeRoh5K01",
			"_production-app-key": "291VnT9j3n3MrZkrKWeHZ4jos9AXNwZpQnzmUedL"
		},
		"reportingBehavior": {
			"_id": "UA-31959767-27"
		},
		"adBehavior": [{
			"_exclude-device": "iPhone",
			"_network": "dfp",
			"_network-key": "/43459271/loc-mob/krgv/app-news",
			"_show-ads": "true",
			"_url": "",
			"_random-number-parameter": "&c=",
			"_video-preroll-url": ""
		}, {
			"_exclude-device": "iPad",
			"_network": "dfp",
			"_network-key": "/43459271/loc-mob/krgv/app-news",
			"_show-ads": "true",
			"_url": "",
			"_random-number-parameter": "&c=",
			"_video-preroll-url": ""
		}],
		"section": [{
			"feed": [{
				"_item-query-suffix": "&clienttype=rssstory&config=media",
				"_url": "http://www.wsiltv.com/category/301474/news?clienttype=rss",
				"_view-layout": "list"
			}],
			"_icon-url": "news.png",
			"_title": "Local News",
			"_item-photo-placement": "left",
			"_items-per-feed": "20",
			"_view-layout": "list"
		}, {
			"feed": [{
				"_item-query-suffix": "&clienttype=rssstory&config=media",
				"_url": "http://www.wsiltv.com/category/301472/weather?clienttype=rssweather",
				"_view-layout": "current-conditions"
			}, {
				"_item-query-suffix": "&clienttype=rssstory&config=media",
				"_url": "http://www.wsiltv.com/category/301472/weather?clienttype=rssweather",
				"_view-layout": "extended-forecast-vertical",
				"_filter": "category contains[cd] 'multi day forecast' AND title contains[cd] 'KMWA'"
			}, {
				"_exclude-device": "iPad",
				"_item-query-suffix": "",
				"_url": "http://mobile.mobdub.com/wsil_iphone_weather.xml",
				"_view-layout": "list"
			}, {
				"_exclude-device": "iPhone",
				"_item-query-suffix": "",
				"_url": "http://mobile.mobdub.com/wsil_tablet_weather.xml",
				"_view-layout": "list"
			}],
			"_icon-url": "weathersun.png",
			"_title": "Weather",
			"_item-photo-placement": "none",
			"_items-per-feed": "20",
			"_view-layout": "weather"
		}, {
			"feed": [{
				"_item-query-suffix": "&clienttype=rssstory&config=media",
				"_url": "http://www.wsiltv.com/category/301475/sports?clienttype=rss",
				"_view-layout": "list"
			}],
			"_icon-url": "baseball.png",
			"_title": "Sports",
			"_item-photo-placement": "right",
			"_items-per-feed": "20",
			"_view-layout": "list"
		}, {
			"feed": [{
				"_items-per-feed": "3",
				"_item-query-suffix": "",
				"_exclude-device": "iPhone",
				"_url": "http://wnow.images.worldnow.com/apps/wsil_live_vid_cat_tablet.xml",
				"_view-layout": "list"
			}, {
				"_items-per-feed": "3",
				"_item-query-suffix": "",
				"_title": "Live Video",
				"_url": "http://wnow.images.worldnow.com/apps/wsil_live_vid_cat_iphone.xml",
				"_exclude-device": "iPad",
				"_view-layout": "list"
			}, {
				"_url": "http://www.wsiltv.com/category/301479/pop-video-top?clienttype=mrss",
				"_title": "News Video",
				"_view-layout": "list"
			}],
			"_icon-url": "tv.png",
			"_icon-res": "tv",
			"_title": "Video",
			"_item-photo-placement": "right",
			"_items-per-feed": "20",
			"_view-layout": "list"
		}, {
			"feed": [{
				"_item-query-suffix": "",
				"_url": "http://wnow.images.worldnow.com/apps/wsil_iphone_more.xml",
				"_view-layout": "list"
			}],
			"_icon-url": "bus.png",
			"_title": "Tools",
			"_suppress-ads": "true",
			"_exclude-device": "iPad",
			"_view-layout": "list",
			"_items-per-feed": "15"
		}, {
			"feed": [{
				"_item-query-suffix": "",
				"_url": "http://wnow.images.worldnow.com/apps/wsil_tablet_more.xml",
				"_view-layout": "list"
			}],
			"_icon-url": "bus.png",
			"_title": "Tools",
			"_suppress-ads": "true",
			"_exclude-device": "iPhone",
			"_view-layout": "list",
			"_items-per-feed": "15"
		}],
		"weather": {
			"_link": "true",
			"_hide-hilo": "true"
		},
		"_brand-header-image-url": "brandImage.png",
		"_default-item-photo-url": "wsilplace.jpg",
		"_item-photo-placement": "left",
		"_partner-id": "107",
		"_partner-name": "WSIL",
		"_push-enabled": "false"
	}
}
