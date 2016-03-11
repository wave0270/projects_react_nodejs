import React from 'react';

/**
* Internal dependencies
*/
var Card = require('components/card'),
				Main = require('components/main'),
				Gridicon = require('components/gridicon'),
				FormSelect = require('components/forms/form-select'),
				SectionNav = require('components/section-nav'),
				NavTabs = require('components/section-nav/tabs'),
				NavSegmented = require('components/section-nav/segmented'),
				NavItem = require('components/section-nav/item'),
				Search = require('components/search'),
				Spinner = require('components/spinner'),
				FormButton = require('components/forms/form-button'),
				Dialog = require('components/dialog');
/**
* component-wn dependencies
*/
var Section = require('frankly-binh/components/section');

export default React.createClass({
				getDefaultProps: function() {
								return {
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
								};
				},
				getInitialState: function() {
								return this.props;
				},
				componentDidMount: function() {},
				componentWillUnmount: function() {},

				handleChange: function(name, event) {
								var arr = name.split('.');
								var obj = this.state[arr[0]];
								switch (name) {
												case 'select':
																var newValue = event.target.checked
																break;
												default:
																var newValue = event.target.value
																break;
								}
								obj = this.getObj(obj, arr, newValue);
								var param = {};
								param[arr[0]] = obj;
								this.setState(param);
				},
				getObj: function(obj, arr, value) {
								switch (arr.length) {
												case 1:
																obj = value;
																break;
												case 2:
																obj[arr[1]] = value;
																break;
												case 3:
																obj[arr[1]][arr[2]] = value;
																break;
												case 4:
																obj[arr[1]][arr[2]][arr[3]] = value;
																break;
								}
								return obj;
				},
				handleChangeSection: function(id, name, newValue) {
								var section = this.state.section;
								section[id][name] = newValue;
								this.setState({section: section});
				},

				render() {
								var that = this;
								var Sections = '';
								Sections = this.state.section.map(function(item, id) {
												return (<Section key={id + 'section'} id={id} {...item} noticeChange={that.handleChangeSection}/>);
								});
								return (
												<Main className="this.props.id">
																{Sections}
												</Main>
								);
				}
});
