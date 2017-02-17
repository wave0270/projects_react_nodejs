import React from "react";
import Helmet from 'react-helmet';
import base64Img from "base64-img";
import deep from "deep-get-set";

/*
* Manual class
*/
var API = require('../api/common');
/*
* COMPONENTS
*/
var Loading = require('../components/Loading');


export default React.createClass({
	getDefaultProps() {
		return {
			name: 'Image to Base64 Page!',
		};
	},
	getInitialState() {
		return {
			isLoading: false,
			imgURL: 'http://dienthoai.pro/wp-content/uploads/2016/04/hinh-anh-gai-dep-kute-nhat-1-3-301x450.jpg',
			// imgURL: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/flip.jpg',
			file: {},
			minFile: {}
		};
	},

	handleImgBase64WithURL() {
		this.setState({ isLoading: true });
		const { imgURL } = this.state
		var params = {
			imgURL
		}
		API.post('/image/base64', params, (err, res) => {
			this.setState({ isLoading: false, base64Str: res.body.base64Str });
		});
	},

	handleValue(path, e) {
		deep(this.state, path, e.target.value);
		this.setState(this.state);
	},

	onDragOver(e) {
		e.preventDefault();
	},
	onDrop(e) {
		console.log('---------', 'onDrop')
		e.preventDefault();
		let files = e.dataTransfer.files;
		if(files.length > 0){
			this.readImage(files[0]);
		}
	},

	colectFromBrowser(){
		let files = document.getElementById("readimg").files;
		if(files.length > 0){
			this.readImage(files[0]);
		}
	},

	simulateclick() {
		document.getElementById("readimg").click();
	},

	readImage(file) {
		var fileReader = new FileReader();
		fileReader.readAsDataURL(file);
		fileReader.onload = (e) => {
			file.base64Str = e.target.result;
			this.setState({ file })
			/** scale image */
			this.scaleImgByJimp(file.base64Str)
		};
	},

	bytesToSize(bytes) {
		var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
		if (bytes == 0) return '0 Bytes';
		var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
		return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
	},

	scaleImgByJimp(data){
		console.log('---------', 'handleBuJimp')
		/** data = base64 or blobUrl*/
		Jimp.read(data).then((image) => {
			image.resize(250, Jimp.AUTO )            // resize
				.quality(90)                 // set JPEG quality
				// .greyscale()                 // set greyscale
				.getBase64(Jimp.MIME_JPEG, (err, base64Str) => {
					var minFile = { base64Str }
					this.setState({ minFile })
				});
		}).catch(function (err) {
			console.error(err);
		});
	},

	render() {
		const { file = {}, imgURL, minFile = {} } = this.state;
		return (
			<div className="container" >
				<Helmet
					title={this.props.name+" test"}
					script={[
						{"src": "https://cdn.rawgit.com/oliver-moran/jimp/v0.2.27/browser/lib/jimp.min.js", "type": "text/javascript"},
					]}
				/>
				{this.state.isLoading &&
					<Loading />
				}
				<div className="col-sm-6">
					<input className="form-control" type="text" onChange={this.handleValue.bind(this, 'imgURL')} value={imgURL} />
				</div>
				<div className="col-sm-6">
					<img src={ imgURL } width="100" height="100"/>
				</div>
				<button className="btn btn-primary" onClick={this.handleImgBase64WithURL}>Handle Img To Base64 With URL</button>
				<hr />
				<div>
					<p>Get Image by browse:</p>
					<input style={ {display: 'none'} } id="readimg" onChange={this.colectFromBrowser} type="file" name="imagereader" />
					<button id="openimage" onClick={this.simulateclick}>open image form file system</button>
					<hr />
					<p>Or Get Image by Drag & Drop</p>
					<div id="getimage"></div>
					<div id="zona-drop" style={{ width: '200px;', height: '200px;', border: '1px dashed green' }}
						onDrop={this.onDrop}
						onDragOver={this.onDragOver}
						>
					</div>
				</div>

				<hr />
				<h3>Ogirin Image:</h3>
				<div className="row">
					<div className="col-sm-6">
						<img  className="panel" src={file.base64Str} />
					</div>
					<div className="col-sm-3">
						<p>Name: {file.name}</p>
						<p>Size: {this.bytesToSize(file.size)}</p>
						<p>Type: {file.type}</p>
					</div>
					<div className="col-sm-3">
						<textarea id="getbase64" className="form-control" rows="10" value={file.base64Str} ></textarea>
					</div>
				</div>

				<h3>Min Image:</h3>
				<div className="row">
					<div className="col-sm-6">
						<img className="panel" src={minFile.base64Str} />
					</div>
					<div className="col-sm-6">
						<textarea id="getbase64" className="form-control" rows="10" value={minFile.base64Str} ></textarea>
					</div>
				</div>
				
			</div>
		);
	}
});
