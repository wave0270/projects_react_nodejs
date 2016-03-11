import React from 'react';

/**
* Internal dependencies
*/
var FormButton = require('components/forms/form-button'),
				FormTextInputWithAffixes = require('components/forms/form-text-input-with-affixes');

/**
* component-wn dependencies
*/

export default React.createClass({
				getDefaultProps: function() {
								return {"_exclude-device": "iPad","_item-query-suffix": "&clienttype=rssstory&config=media", "_url": "http://www.wsiltv.com/category/301474/news?clienttype=rss", "_view-layout": "list"};
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
								//notice parent
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

				render() {
								return (
												<div className='feed-container'>
																<label>Feed {this.props.id}</label>
																<FormTextInputWithAffixes id="text_with_affixes" placeholder="Url..." prefix="Content" value={this.state['_url']} onChange={this.handleChange.bind(this,'_url')}/>
																<FormTextInputWithAffixes id="text_with_affixes" placeholder="" prefix="View Layout" value={this.state['_view-layout']} onChange={this.handleChange.bind(this,'_view-layout')}/>
																<FormTextInputWithAffixes id="text_with_affixes" placeholder="" prefix="Device" value={this.state['_exclude-device']} onChange={this.handleChange.bind(this,'_exclude-device')}/>
																{this.state['_filter']?<FormTextInputWithAffixes id="text_with_affixes" placeholder="" prefix="Filter" value={this.state['_filter']} onChange={this.handleChange.bind(this,'_filter')}/> : ''}
												</div>
								);
				}
});
