const WEBSITE_DATA = {
	vnexpress_net: {
		pages: [
			{
				url_page 	: "http://suckhoe.vnexpress.net/tin-tuc/khoe-dep/page/{0}.html",
				url			: "http://suckhoe.vnexpress.net/tin-tuc/khoe-dep",
				type		: 'khoe-dep',
				table		: 'news_beauty_tb',
				num_page	: 1
			},
			{
				url_page 	: "http://suckhoe.vnexpress.net/tin-tuc/dinh-duong/page/{0}.html",
				url 		: "http://suckhoe.vnexpress.net/tin-tuc/dinh-duong",
				type		: 'dinh-duong',
				table		: 'news_beauty_tb',
				num_page	: 1
			},
			{
				url_page 	: "http://giaitri.vnexpress.net/tin-tuc/gioi-sao/page/{0}.html",
				url 		: "http://giaitri.vnexpress.net/tin-tuc/gioi-sao",
				type		: 'gioi-sao',
				table		: 'news_beauty_tb',
				num_page	: 1
			},
			{
				url_page 	: "http://vnexpress.net/tin-tuc/tam-su/page/{0}.html",
				url 		: "http://vnexpress.net/tin-tuc/tam-su",
				type		: 'tam-su',
				table		: 'news_beauty_tb',
				num_page	: 1
			}
		],
		info: {
			domain		: 'vnexpress.net',
			csspath		: [
				// page: ?
				{
					parent_path	: '#col_1 .list_news > li',
					title_path	: '.title_news .txt_link',
					href_path	: '.title_news .txt_link',
					image_path	: '.thumb img',
					desc_path	: '.news_lead'
				},

				// sub: ?
				// {
					// parent_path	: '.content_scoller > ul > li',
					// title_path	: '.title_news .txt_link',
					// href_path	: '.title_news .txt_link',
					// image_path	: '.icon_content',
					// desc_path	: '.news_lead',
				// },

				// hot: ?
				{
					parent_path	: '.box_hot_news',
					title_path	: '.title_news .txt_link',
					href_path	: '.title_news .txt_link',
					image_path	: '.width_image_common',
					desc_path	: '.news_lead',
				}
			],
			csspath_detail : {
				content	: '.main_content_detail',
			},
			csspath_remove : [
				'.block_timer_share'
				,'.relative_new','.title_news','.title_div_fbook','#box_comment','#box_tinkhac_detail','.block_tag','#box_tinlienquan',"#right_calculator"
			]
		}, 
	},

	eva_vn: {
		pages: [
			{
				url_page 	: "",
				url			: "http://eva.vn/nguoi-mau-c285.html",
				type		: 'tu-van-mac-dep',
				table		: 'news_beauty_tb',
				num_page	: 1,
			},
			{
				url_page 	: "",
				url			: "http://eva.vn/nhan-vat-dep-c262.html",
				type		: 'tu-van-mac-dep',
				table		: 'news_beauty_tb',
				num_page	: 1,
			},
			{
				url_page 	: "",
				url			: "http://eva.vn/lang-sao-c20.html",
				type		: 'gioi-sao',
				table		: 'news_beauty_tb',
				num_page	: 1,
			},
			{
				url_page 	: "",
				url			: "http://eva.vn/nuoi-con-c13.html",
				type		: 'day-con',
				table		: 'news_beauty_tb',
				num_page	: 1,
			},
			{
				url_page 	: "",
				url			: "http://eva.vn/tu-van-mac-dep-c160.html",
				type		: 'tu-van-mac-dep',
				table		: 'news_beauty_tb',
				num_page	: 1,
			},
			{
				url_page 	: "",
				url			: "http://eva.vn/chuan-bi-mang-thai-c12.html",
				type		: 'chuan-bi-mang-thai',
				table		: 'news_beauty_tb',
				num_page	: 1,
			},
			{
				url_page 	: "",
				url			: "http://eva.vn/lam-dep-c58.html",
				type		: 'lam-dep',
				table		: 'news_beauty_tb',
				num_page	: 1,
			},
			{
				url_page 	: "",
				url			: "http://eva.vn/bep-eva-c162.html",
				type		: 'bep-eva',
				table		: 'news_beauty_tb',
				num_page	: 1,
			},
			{
				url_page 	: "",
				url			: "http://eva.vn/eva-tam-c66.html",
				type		: 'eva-tam',
				table		: 'news_beauty_tb',
				num_page	: 1,
			},
		],
		info: {
			domain		: 'eva.vn',
			csspath		: [
				// page
				{
					parent_path	: '#centerContent.colCenter > div.boxDoi-sub-Item-trangtrong',
					title_path	: '.news-title > a',
					href_path	: '.news-title > a',
					image_path	: 'img',
					desc_path	: '.news-sapo',
				},
				// sub
				{
					parent_path	: '#centerContent.colCenter > div:nth-child(2).news-special-trangtrong > div:nth-child(2).newsSpecial-trangtrong > div.newsSpecial-item-trangtrong',
					title_path	: '.news-title-bk > a',
					href_path	: '.news-title-bk > a',
					image_path	: '.imgFloat > a > img',
					desc_path	: '.news-sapo',
				},
				// hot
				{
					parent_path	: '#centerContent.colCenter > div:nth-child(2).news-special-trangtrong > div:nth-child(1).breakingNews-trangtrong',
					title_path	: 'a.breakingNewsTitle',
					href_path	: 'a.breakingNewsTitle',
					image_path	: 'a > img',
					desc_path	: '.news-sapo',
				},
			],
			csspath_detail : {
				content	: '#baiviet-container',
			},
			csspath_remove : [
				'.baiviet-bailienquan'
			]
		}
	},
	ngoisao_net: {
		pages: [
			{
				url_page 	: "http://ngoisao.net/tin-tuc/hau-truong/page/{0}.html",
				url			: "http://ngoisao.net/tin-tuc/hau-truong/",
				type		: 'hau-truong',
				table		: 'news_beauty_tb',
				num_page	: 1,
			},
		],
		info: {
			domain		: 'ngoisao.net',
			csspath		: [
				// page
				{
					parent_path	: '#news_home.list_tin > li',
					title_path	: '.title_tin',
					href_path	: '.title_tin',
					image_path	: '.img_tin > img',
					desc_path	: '.lead_tin',
				},
				// sub

				// hot
				{
					parent_path	: '#col_680.left > div.left.sp-hau-truong.width_common > div.tnht.width_common > div:nth-child(2).news',
					title_path	: '.txw > h3 > a',
					href_path	: '.txw > h3 > a',
					image_path	: 'a.ptw > img',
					desc_path	: '.txw > p:nth-child(2)',
				},
			],
			csspath_detail : {
				content	: '#left .fck_detail',
				desc	: '.lead',
			},
			csspath_remove : [

			]
		}
	},
	
	kenh14_vn: {
		pages: [
			{
				url_page 	: "http://kenh14.vn/star/trang-{0}.chn",
				url			: "http://kenh14.vn/star.chn",
				type		: 'gioi-sao',
				table		: 'news_beauty_tb',
				num_page	: 1,
			},
		],
		info: {
			domain		: 'kenh14.vn',
			csspath		: [
				// page
				{
					parent_path	: 'ul.knsw-list > li.knswli.need-get-value-facebook.clearfix',
					title_path	: '.knswli-title > a',
					href_path	: '.knswli-title > a',
					image_path	: '.kscliw-ava > img',
					desc_path	: 'span.knswli-sapo',
				},
				// hot + sub
				{
					parent_path	: '.klw-top-news.clearfix > ul:nth-child(1).ktnc-list > li.ktncli',
					title_path	: '.ktncli-title > a',
					href_path	: '.ktncli-title > a',
					image_path	: 'a > img',
					desc_path	: 'span.ktncli-sapo',
				},
			],
			csspath_detail : {
				content	: '.postpadding .content',
				desc	: '.sapo',
			},
			csspath_remove : [

			]
		}
	},

	phunutoday_vn: {
		pages: [
			{
				url_page 	: "http://phunutoday.vn/thoi-trang/trang-{0}.html", //not yet
				url			: "http://phunutoday.vn/thoi-trang.html",
				type		: 'thoi-trang',
				table		: 'news_beauty_tb',
				num_page	: 1,
			},
		],
		info: {
			domain		: 'phunutoday.vn',
			csspath		: [
				// page
				{
					parent_path	: '.list_news > div > article',
					title_path	: 'a.title',
					href_path	: 'a.title',
					image_path	: 'img',
					desc_path	: '.intro',
				},

				// sub
				{
					parent_path	: 'ul.n_other > li > article',
					title_path	: '.title',
					href_path	: '.title',
					image_path	: 'img',
					desc_path	: null,
				},
				// hot
				{
					parent_path	: '.m_hot > article.n_lock',
					title_path	: '.title',
					href_path	: '.title',
					image_path	: 'img',
					desc_path	: '.intro',
				},

			],
			csspath_detail : {
				content	: '.description',
				desc	: '.summary',
			},
			csspath_remove : [
				'table.multimedia'
			]
		},
	},

	youtube_com: {
		pages: [
			// {
				// url_page 	: "",
				// url			: "https://www.youtube.com/results?search_query=nhạc+cho+bà+bầu",
				// type		: 'video-nhac-cho-ba-bau',
				// table		: 'video_tb',
				// num_page	: 1,
			// },
			{
				url_page 	: "",
				url			: "https://www.youtube.com/results?search_query=nhạc+cho+em+bé",
				type		: 'video-nhac-cho-ba-bau',
				table		: 'video_tb',
				num_page	: 1,
			},
		],
		info: {
			domain		: 'youtube.com',
			csspath		: [
				// page
				{
					title_path	: 'div:nth-of-type(2).yt-lockup-content > h3:nth-of-type(1).yt-lockup-title > a:nth-of-type(1).yt-uix-sessionlink.yt-uix-tile-link.yt-ui-ellipsis.yt-ui-ellipsis-2.spf-link',
					href_path	: 'div:nth-of-type(2).yt-lockup-content > h3:nth-of-type(1).yt-lockup-title > a:nth-of-type(1).yt-uix-sessionlink.yt-uix-tile-link.yt-ui-ellipsis.yt-ui-ellipsis-2.spf-link',
					image_path	: 'div:nth-of-type(1).yt-lockup-thumbnail.contains-addto > a:nth-of-type(1).yt-uix-sessionlink.spf-link > div:nth-of-type(1).yt-thumb.video-thumb > span:nth-of-type(1).yt-thumb-simple > img:nth-of-type(1)',
					desc_path	: null,
					time_path	: 'a .video-time',
					quality_path: '.yt-badge',
						parent_path: ".yt-lockup"
				},
				// sub

				// hot

			],
			csspath_detail : {
				content	: '.postpadding .content',
			},
			csspath_remove : [

			]
		}
	}
}

export default WEBSITE_DATA
