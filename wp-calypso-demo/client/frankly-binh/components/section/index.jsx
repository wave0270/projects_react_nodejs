import React from 'react';

/**
* Internal dependencies
*/
var FormButton = require('components/forms/form-button'),
FormTextInputWithAffixes = require('components/forms/form-text-input-with-affixes');
/**
* component-wn dependencies
*/
var Feed = require('frankly-binh/components/feed');

export default React.createClass({
				getDefaultProps: function() {
								return {
												"feed": [],
												"_icon-url": "news.png",
												"_title": "Local News",
												"_item-photo-placement": "left",
												"_items-per-feed": "20",
												"_view-layout": "list",
								}
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
								this.props.noticeChange(this.props.id,name,newValue);
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
				handleChangeFeed: function(id, name, newValue) {
								var feed = this.state.feed;
								feed[id][name] = newValue;
								this.setState({feed: feed});
								this.props.noticeChange(this.props.id,'feed',feed[id]);
				},
				handleChangeSection : function(){

				},
				render() {
								console.log(this.state)
								var that = this;
								var Feeds = '';
								Feeds = this.state.feed.map(function(item, id) {
												return (<Feed key={id + 'feed'} id={that.props.id+'.'+id} {...item} noticeChange={that.handleChangeFeed}/>);
								});
								// var ChildSections = '';
								// if(this.state.section){
								// 	ChildSections = this.state.section.map(function(item, id) {
								// 					return (<SectionChild key={id+'-section'} id={id} {...item} noticeChange={that.handleChangeSection}/>);
								// 	});
								// }


								return (
												<div className='feed-container' style="boder:2px solid red;">
																<label>Section {this.props.id}</label>
																{this.state['_title']
																				? <FormTextInputWithAffixes id="text_with_affixes" placeholder="" prefix="Title" value={this.state['_title']} onChange={this.handleChange.bind(this, '_title')}/>
																				: ''}
																{this.state['_icon-url']
																				? <FormTextInputWithAffixes id="text_with_affixes" placeholder="" prefix="Icon" value={this.state['_icon-url']} onChange={this.handleChange.bind(this, '_icon-url')}/>
																				: ''}
																{this.state['_item-photo-placement']
																				? <FormTextInputWithAffixes id="text_with_affixes" placeholder="" prefix="Photo Placement" value={this.state['_item-photo-placement']} onChange={this.handleChange.bind(this, '_item-photo-placement')}/>
																				: ''}
																{this.state['_items-per-feed']
																				? <FormTextInputWithAffixes id="text_with_affixes" placeholder="" prefix="Items-per-feed" value={this.state['_items-per-feed']} onChange={this.handleChange.bind(this, '_items-per-feed')}/>
																				: ''}
																{this.state['_view-layout']
																				? <FormTextInputWithAffixes id="text_with_affixes" placeholder="" prefix="Layout" value={this.state['_view-layout']} onChange={this.handleChange.bind(this, '_view-layout')}/>
																				: ''}
																{Feeds}

												</div>
								);
				}
});
