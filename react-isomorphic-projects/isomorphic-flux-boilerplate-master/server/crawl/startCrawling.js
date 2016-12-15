import Crawler from './crawler'
import axios from 'axios'
import jsdom from 'jsdom'
import WEBSITE_DATA from './data'
import Custom from './custom'

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

    // async start(ctx){
    //     let urlArr = [
    //         'http://khoahoc.tv/',
    //         'http://vnexpress.net/'
    //     ]
    //     let promiseArr = [];
    //     urlArr.forEach((e,i) => {
    //         let p = new Promise( (resolve, reject) => {
    //             axios.get(e)
    //             .then((response) => {
    //                 console.log(response)
    //                 jsdom.env(
    //                     response.data,
    //                     (err, window) => {
    //                         let result = [];
    //                         let images = window.document.querySelectorAll("img");
    //                         for(let k in images){
    //                             result.push(images[k].src)
    //                         }
    //                         resolve({data: result});
    //                     }
    //                 );
    //                 }).catch((error) => {
    //                     resolve({data: error});
    //                 })
    //             }
    //         );
    //         promiseArr.push(p)
    //     })

    //     await Promise.all(promiseArr).then(values => { 
    //         ctx.body = values
    //     }).catch(reason => { 
    //         ctx.body = reason
    //     });
    // },

    /** 
     childDom.parentNode
    parentNode.tagName
    window.document.querySelectorAll("div[data-oembed-url]")
    domTMP.querySelector("iframe").src
    var div = window.document.createElement('div');
    bigParentNode.insertBefore(div.firstChild,parent);
    parentOldDom.removeChild(domTMP);
    */
    async start(ctx){
        let urlArr = WEBSITE_DATA.vnexpress_beauty;
        let path_obj = WEBSITE_DATA.vnexpress_beauty_obj;
        let promiseArr = [];
        let listArr = [];
        urlArr.forEach((e, i) => {
            let urlObj = e;
            let p = new Promise( (resolve, reject) => {
                axios.get(urlObj.url)
                .then((response) => {
                    const html = Custom.afterGetRemoteUrl(response.data);
                    jsdom.env(
                        html,
                        (err, window) => {
                            
                            let oldLength = listArr.length;
                            for(let i = (path_obj.csspath.length-1); i>=0; i--){
                                listArr = Crawler.getList(window.document,listArr,path_obj.csspath[i],path_obj.domain,urlObj.type,urlObj.table);
                            }
                            resolve({ status: true, info: e, number: (listArr.length - oldLength) });
                        }
                    );
                    }).catch((error) => {
                        resolve({status: false, info: e});
                    })
                }
            );
            promiseArr.push(p)
        })

        await Promise.all(promiseArr).then(async (values) => { 
            await this.getDetailAll({ status: values, data: listArr}, ctx);
            // ctx.body = { status: values, data: listArr}
        })
    },

    async getDetailAll(list, ctx){
     console.log('[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]')
        console.log(list.data.length)
        let promiseArr = [];
        list.data.forEach((e, i) => {
            let p = new Promise( (resolve, reject) => {
                console.log(i, e.href)
                axios.get(e.href)
                .then((response) => {
                    // console.log(response.data)
                    const html = Custom.afterGetRemoteUrl(response.data);
                    jsdom.env(
                        html,
                        (err, window) => {
                            console.log('-----------------')
                            console.log(list.data[i])
                            list.data[i].detail_new = "ok"
                            resolve({ status: true });
                        }
                    );
                    }).catch((error) => {
                        resolve({status: false });
                    })
                }
            );
            promiseArr.push(p)
        })

        await Promise.all(promiseArr).then(values => { 
            console.log('ok')
            ctx.body = { data: list }
        }).catch(reason => { 
            console.log('error')
            ctx.body = { data: list }
        });
    },


    start2(){
        var start_time = new Date().getTime();
        var arr = [];
        
        /*get news list : is ok*/

        /*vnexpress.net:106*/
        for(var i=0; i<vnexpress_beauty.length; i++){
        	arr = Crawler.getListAll(vnexpress_beauty_obj,vnexpress_beauty[i],arr);
        }
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