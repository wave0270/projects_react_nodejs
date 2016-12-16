import Crawler from './crawler'
import axios from 'axios'
import jsdom from 'jsdom'
import WEBSITE_DATA from './data'
import Custom from './custom'
import models from '../api/sequelize/models'

let StartCrawling = {
    NEWS_LIST: [],
	INDEX: 0,
	NEWS_LIST_2: [],
 
    // saveToDatabase(arr){
    //     console.log('function saveToDatabase')
    //     if(arr !=undefined){
    //         var params = {
    //             arr		: arr,
    //         };
    //         console.log('params',params)
    //         return
    //         $.post(URL_ROOT + 'aj_save_news', params, function (data) {
    //             console.log('response data',data)
    //             INDEX ++;
    //             this.saveToDatabase(this.NEWS_LIST_2[this.INDEX]);
    //             // todo
    //         }).always(function() {
    //             //todo
    //         }).error(function(e){
    //             if(e.status == 401){
    //                 //todo
    //             }
    //         });
    //     }
    // },

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
        let promiseArr = [];
        let listArr = [];
        let getDetailErrors = []

        for(let k in WEBSITE_DATA){
            if(k !== 'youtube_com' || k === 'vnexpress_net'){
                let urlArr = WEBSITE_DATA[k].pages;
                let path_obj = WEBSITE_DATA[k].info;

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
                                    e.status = true;
                                    e.number = listArr.length - oldLength;
                                    resolve(e);
                                }
                            );
                            }).catch((error) => {
                                e.status = false;
                                resolve(e);
                            })
                        }
                    );
                    promiseArr.push(p)
                })
            }
        }
        /** start promise */
        await Promise.all(promiseArr).then(async (values) => { 
            await this.getDetailAll(ctx, { status: values, data: listArr});
        })
    },

    async getDetailAll(ctx, list){
        let promiseArr = [];
        let detailErrs = [];

        list.data.forEach((e, i) => {
            let p = new Promise( (resolve, reject) => {
                axios.get(e.href)
                .then((response) => {
                    const html = Custom.afterGetRemoteUrl(response.data);
                    jsdom.env(
                        html,
                        (err, window) => {
                            list.data[i] = Crawler.getDetail(window.document, list.data[i], detailErrs)
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

        await Promise.all(promiseArr).then(async (values) => { 
            console.log('ok detail-----------------------------')
            // ctx.body = { list, detailErrs }
            await this.saveToDatabase(ctx, list, detailErrs);
        }).catch(async (reason) => { 
            console.log('error detail--------------------------')
            // ctx.body = { list, detailErrs }
            await this.saveToDatabase(ctx, list, detailErrs);
        });
    },

    async saveToDatabase(ctx, list, detailErrs){
        let results = {
            success: [],
            errors: []
        }
        let promiseArr = [];
        list.data.forEach((e, i) => {
            let data = e

            let table = 'news_beauty_tb'
            let p = new Promise( (resolve, reject) => {
                    models[table].create(data).then((obj) => {
                        resolve(obj)
                    }).catch((error) => {
                        resolve(error)
                    })
                }
            );
            promiseArr.push(p)
        })

        await Promise.all(promiseArr).then(results => {  
            console.log('ok saveToDatabase-----------------------------')
            ctx.body = { list, detailErrs , results}
        }).catch(reason => { 
            console.log('error saveToDatabase--------------------------')
            ctx.body = { list, detailErrs, reason }
        });
    }
}
	    
export default StartCrawling