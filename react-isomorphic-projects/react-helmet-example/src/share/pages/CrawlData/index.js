import React from 'react';
import Helmet from 'react-helmet';
import TopMenu from '../../components/TopMenu';
import NavMenu from '../../components/NavMenu';
console.log('-----------------------------')
var API = require('../../api/common');
/*Private components*/

export default React.createClass({
  getDefaultProps: function(){
    return {
      name: 'About'
    };
  },

  getInitialState: function(){
      return {
        NEWS_LIST : [],
	    	INDEX : 0,
	    	NEWS_LIST_2 : [],
      }
  },

  saveToDatabase: function(arr){
    console.log('function saveToDatabase')
    if(arr !=undefined){
      var params = {
        _token	: TOKEN,
        arr		: arr,
      };
      $.post(URL_ROOT + 'aj_save_news', params, function (data) {
        console.log(data)
        INDEX ++;
        this.saveToDatabase(NEWS_LIST_2[INDEX]);
        //todo
      }).always(function() {
        //todo
      }).error(function(e){
        if(e.status == 401){
          //todo
        }
      });
    }
  },
  save: function(){
    INDEX = 0;
    NEWS_LIST_2 = this.splitArr(NEWS_LIST);
    this.saveToDatabase(NEWS_LIST_2[INDEX]);
  },

  splitArr: function(arr){
    var arr_2 = [];
    var arr_sub = [];
    for(var i=0; i<arr.length ;i++){
      arr_sub.push(arr[i]);
      if( i%50 == 0 && i!=0){
        arr_2.push(arr_sub);
        arr_sub = [];
      }
    }
    if(arr_sub.length > 0){
      arr_2.push(arr_sub);
    }
    return arr_2
  },

  start: function(){
    var start_time = new Date().getTime();

    var arr = [];
    /*get news list*/

    /*vnexpress.net:106*/
    for(var i=0; i<vnexpress_beauty.length; i++){
      arr = getListAll(vnexpress_beauty_obj,vnexpress_beauty[i],arr);
    }

    /*eva.vn: 103*/
    for(var i=0; i<eva_thoitrang.length; i++){
      arr = getListAll(eva_thoitrang_obj,eva_thoitrang[i],arr);
    }

    /*ngoisao.net: 24*/
    for(var i=0; i<ngoisao_news.length; i++){
      arr = getListAll(ngoisao_news_obj,ngoisao_news[i],arr);
    }

    /*kenh14.vn:*/
    for(var i=0; i<kenh14_news.length; i++){
      arr = getListAll(kenh14_news_obj,kenh14_news[i],arr);
    }

    /*phunutoday.vn:*/
    for(var i=0; i<phunutoday_vn.length; i++){
      arr = getListAll(phunutoday_vn_obj,phunutoday_vn[i],arr);
    }

    /*ebe.vn:*/
    // for(var i=0; i<ebe_vn.length; i++){
      // arr = getListAll(ebe_vn_obj,ebe_vn[i],arr);
    // }

    /*get detail content*/
    // console.log("get detail:**********************")
    // arr = getDetail(arr);

    /*video*****************************************************/
    // /*youtube.com:*/
    // for(var i=0; i<youtube_com.length; i++){
      // arr = getListAll(youtube_com_obj,youtube_com[i],arr);
    // }
    // /*get detail content*/
    // console.log("get detail:**********************")
    // arr = getDetailYoutube(arr);

    /*check how long to get data*/
    var end_time = new Date().getTime();
    console.log(end_time-start_time)
    NEWS_LIST = arr;
    console.log(NEWS_LIST.length)
    console.log(NEWS_LIST)
  },

  callGetFetch: function(){
		this.setState({isLoading: true});
		var params = {
			url: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes'
		};
		API.post('/read-meta-tag', params, function(err,res){
			if(res){
        console.log(res.body.body)
				this.setState({isLoading: false, html: res.body.body, dataStr: JSON.stringify(res.body.meta)});
			}
		}.bind(this));
	},

  testFunction: function(){
    getRemoteUrl('https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes',false)
    this.callGetFetch()
    // testFunction();
  },
  render: function() {
    return (
      <div className="w-pages">
        <Helmet
            title={this.props.name+" test"}
            meta={[
                {property: 'og:title', content: 'About'},
            ]}
            script={[
              {"src": "static/js/crawl/crawl.js", "type": "text/javascript"},
              {"src": "static/js/crawl/custom.js", "type": "text/javascript"},
              {"src": "static/js/crawl/data.js", "type": "text/javascript"},
              {"src": "static/js/crawl/readability.js", "type": "text/javascript"},
            ]}
            />
            <div className="main-layout">
              {/*Top-area*/}
              <div className="">
                <TopMenu />
              </div>
              {/*End Top-area*/}

              {/*Main-area*/}
              <div className="container-fluid">

                {/*Left-area*/}
                <div className="col-sm-3 left-content">
                  <NavMenu />
                </div>
                {/*End Left-area*/}

                {/*Content-area*****************/}
                <div className="col-sm-9 main-content">
                  <p>{this.props.name} page</p>
                  <div>
                    <button onClick={this.testFunction}>test function</button>
                  </div>
                </div>
                {/*End Content-area****************/}

              </div>
              {/*End Main-area*/}

              {/*Bottom-area*/}
              <div className="">
                <p>bottom</p>
              </div>
              {/*End Bottom-area*/}
          </div>
    </div>
    );
  }
});
