import React from "react";
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
		};
	},

	handleImgBase64WithURL() {
		this.setState({ isLoading: true });
		var params = {
			url: this.state.imgURL,
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
		e.preventDefault();
		var files = e.dataTransfer.files;
		var fileCount = files.length;
		var i;
		console.log('---------', files)

		if (fileCount > 0) {
			for (i = 0; i < fileCount; i = i + 1) {
				var file = files[i];
				var name = file.name;
				var size = this.bytesToSize(file.size);
				var type = file.type;
				var reader = new FileReader();
				console.log(file)
				reader.readAsDataURL(file);
				reader.onload = (e) => {
					const base64Str = e.target.result;
					this.setState({ base64Str });
				};
			}
		}
	},

	simulateclick() {
		document.getElementById("readimg").click();
	},

	readImage() {
		var fileToLoad = document.getElementById("readimg").files[0];
		var fileReader = new FileReader();
		console.log(fileToLoad)
		fileReader.readAsDataURL(fileToLoad);
		fileReader.onload = (fileLoadedEvent) => {
			var base64Str = fileLoadedEvent.target.result;
			this.setState({ base64Str })
		};
	},

	bytesToSize(bytes) {
		var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
		if (bytes == 0) return '0 Bytes';
		var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
		return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
	},

	render() {
		const { base64Str } = this.state;
		return (
			<div className="container" >
				{this.state.isLoading &&
					<Loading />
				}
				<input className="form-control" type="text" onChange={this.handleValue.bind(this, 'imgURL')} value={this.state.imgURL} />
				<button className="btn btn-primary" onClick={this.handleImgBase64WithURL}>Handle Img To Base64 With URL</button>
				<hr />
				<div>
					<p>Get Base64 code</p>
					<textarea id="getbase64" className="form-control" rows="10" value={base64Str} ></textarea>
					<input style={ {display: 'none'} } id="readimg" onChange={this.readImage} type="file" name="imagereader" />
					<button id="openimage" onClick={this.simulateclick}>open image form file system</button>
					<hr />
					<p>Or Drag & Drop</p>
					<div id="getimage"></div>
					<div id="zona-drop" style={{ width: '200px;', height: '200px;', border: '1px dashed green' }}
						onDrop={this.onDrop}
						onDragOver={this.onDragOver}
						>
					</div>
				</div>
				<div className="container">
					<img width="100%" height="500px" className="panel" src={base64Str} />
				</div>
			</div>
		);
	}
});
