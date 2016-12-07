import Crawler from 'crawler'

let StartCrawling = {
    NEWS_LIST: [],
	INDEX: 0,
	NEWS_LIST_2: [],
    html:  `<html>
                <body>
                    <div class="newclass">
                        <p>testing</p>
                    </div>
                    <div class="newclass">
                        <p>testing</p>
                    </div>
                    <div class="newclass">
                        <p>testing</p>
                    </div>
                </body>
            </html>`,

    saveToDatabase(arr){
        console.log('function saveToDatabase')
        if(arr !=undefined){
            var params = {
                arr		: arr,
            };
            console.log('params',params)
            return
            $.post(URL_ROOT + 'aj_save_news', params, function (data) {
                console.log('response data',data)
                INDEX ++;
                this.saveToDatabase(this.NEWS_LIST_2[this.INDEX]);
                // todo
            }).always(function() {
                //todo
            }).error(function(e){
                if(e.status == 401){
                    //todo
                }
            });
        }
    },

    save(){
        this.INDEX = 0;
        this.NEWS_LIST_2 = this.splitArr(this.NEWS_LIST);
        this.saveToDatabase(this.NEWS_LIST_2[this.INDEX]);
    },

    splitArr(arr){
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

    start(){
        var start_time = new Date().getTime();
        var arr = [];
        /*get news list : is ok*/

        /*vnexpress.net:106*/
        // for(var i=0; i<vnexpress_beauty.length; i++){
        // 		arr = Crawler.getListAll(vnexpress_beauty_obj,vnexpress_beauty[i],arr);
        // }
        // /*phunutoday.vn:*/
        // for(var i=0; i<phunutoday_vn.length; i++){
        // 		arr = Crawler.getListAll(phunutoday_vn_obj,phunutoday_vn[i],arr);
        // }
        // /*va.vn: 103*/
        // for(var i=0; i<eva_thoitrang.length; i++){
        // 		arr = Crawler.getListAll(eva_thoitrang_obj,eva_thoitrang[i],arr);
        // }


        /*get news list : is error*/
        /*ngoisao.net: can not get title*/
        // for(var i=0; i<ngoisao_news.length; i++){
        // 		arr = Crawler.getListAll(ngoisao_news_obj,ngoisao_news[i],arr);
        // }
        // /*kenh14.vn: can not get page*/
        // for(var i=0; i<kenh14_news.length; i++){
        // 		arr = Crawler.getListAll(kenh14_news_obj,kenh14_news[i],arr);
        // }
        // /*be.vn: website bao tri*/
        // (var i=0; i<ebe_vn.length; i++){
        // 		arr = Crawler.getListAll(ebe_vn_obj,ebe_vn[i],arr);
        //

        // et detail content*/
        console.log("get detail:**********************")
        arr = Crawler.getDetail(arr);

        /*video*****************************************************/
        /*youtube.com:*/
        for(var i=0; i<youtube_com.length; i++){
            arr = Crawler.getListAll(youtube_com_obj,youtube_com[i],arr);
        }
        /*get detail content*/
        console.log("get detail:**********************")
        arr = Crawler.getDetailYoutube(arr);

        /*check how long to get data*/
        var end_time = new Date().getTime();
        console.log('time: ', end_time-start_time)
        this.NEWS_LIST = arr;
        console.log('array length: ' + this.NEWS_LIST.length)
        console.log('array: ', this.NEWS_LIST)
    }
}
	    
export default StartCrawling