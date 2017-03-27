import React from "react";
import Helmet from 'react-helmet';
import deep from "deep-get-set";
import Loading from "../../components/Loading";

// var pdfDoc = null,
// 		pageNum = 1,
// 		pageRendering = false,
// 		pageNumPending = null,
// 		scale = 1 || 0.8,
// 		canvas = null,
// 		ctx = null;
// const url = 'https://pdfkit.org/demo/out.pdf'

export default React.createClass({
	getDefaultProps() {
		return {
			name: 'Image to Base64 Page!',
		};
	},
	getInitialState() {
		return {
			isLoading: false,
			url: 'http://dienthoai.pro/wp-content/uploads/2016/04/hinh-anh-gai-dep-kute-nhat-1-3-301x450.jpg',
			pdfInfo: {
				pdfDoc: null,
				pageNum: 1,
				pageRendering: false,
				pageNumPending: null,
				scale: 1 || 0.8,
				canvas: null,
				ctx: null
			}
		};
	},

	componentDidMount(){
		let { pdfDoc, pageNum, pageRendering, pageNumPending, scale, canvas, ctx } = this.state.pdfInfo;

		canvas = document.getElementById('the-canvas'),
		ctx = canvas.getContext('2d');

		PDFJS.getDocument(url).then((pdfDoc_) => {
			pdfDoc = pdfDoc_;
			console.log(pdfDoc)
			document.getElementById('page_count').textContent = pdfDoc.numPages;

			// Initial/first page rendering
			this.renderPage(pageNum);
		});
		
	},

	/**
	 * Get page info from document, resize canvas accordingly, and render page.
	 * @param num Page number.
	 */
	renderPage(num) {
		let { pdfDoc, pageNum, pageRendering, pageNumPending, scale, canvas, ctx } = this.state.pdfInfo;

		pageRendering = true;
		// Using promise to fetch the page
		pdfDoc.getPage(num).then(function(page) {
			var viewport = page.getViewport(scale);
			canvas.height = viewport.height;
			canvas.width = viewport.width;

			// Render PDF page into canvas context
			var renderContext = {
			canvasContext: ctx,
			viewport: viewport
			};
			var renderTask = page.render(renderContext);

			// Wait for rendering to finish
			renderTask.promise.then(function() {
			pageRendering = false;
			if (pageNumPending !== null) {
				// New page rendering is pending
				this.renderPage(pageNumPending);
				pageNumPending = null;
			}
			});
		});

		// Update page counters
		document.getElementById('page_num').textContent = pageNum;
	},

	/**
	 * If another page rendering in progress, waits until the rendering is
	 * finised. Otherwise, executes rendering immediately.
	 */
	queueRenderPage(num) {
		let { pdfDoc, pageNum, pageRendering, pageNumPending, scale, canvas, ctx } = this.state.pdfInfo;

		if (pageRendering) {
			pageNumPending = num;
		} else {
			this.renderPage(num);
		}
	},

	/**
	 * Displays previous page.
	 */
	onPrevPage() {
		let { pdfDoc, pageNum, pageRendering, pageNumPending, scale, canvas, ctx } = this.state.pdfInfo;

		if (pageNum <= 1) {
			return;
		}
		pageNum--;
		this.queueRenderPage(pageNum);
	},

	/**
	 * Displays next page.
	 */
	onNextPage() {
		let { pdfDoc, pageNum, pageRendering, pageNumPending, scale, canvas, ctx } = this.state.pdfInfo;

		if (pageNum >= pdfDoc.numPages) {
			return;
		}
		pageNum++;
		this.queueRenderPage(pageNum);
	},
	
	render() {
		const { file = {}, imgURL, minFile = {} } = this.state;
		return (
			<div className="container" >
				<Helmet
					script={[
						{"src": "//mozilla.github.io/pdf.js/build/pdf.js", "type": "text/javascript"},
					]}
				/>
				{this.state.isLoading &&
					<Loading />
				}
				<div>
					<h1>PDF.js Previous/Next example</h1>
					<div>
					<button id="prev" onClick={ this.onPrevPage }>Previous</button>
					<button id="next" onClick={ this.onNextPage }>Next</button>
					&nbsp; &nbsp;
					<span>Page: <span id="page_num"></span> / <span id="page_count"></span></span>
					</div>
				</div>
				<canvas id="the-canvas"></canvas>
				
			</div>
		);
	}
});


