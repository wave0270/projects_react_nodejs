import Crawler from './crawler'
import axios from 'axios'
import jsdom from 'jsdom'
import WEBSITE_DATA from './data'
import Custom from './custom'
import models from '../api/sequelize/models'

let StartCrawling = {

    state: {
        status: null // default, test
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
        this.state.status = 'test'

        let promiseArr = [];
        let listArr = [];
        let getDetailErrors = []

        for(let k in WEBSITE_DATA){
            if(k !== 'youtube_com'){
                let urlArr = WEBSITE_DATA[k].pages;
                let path_obj = WEBSITE_DATA[k].info;

                /* if just test */
                if(this.state.status === 'test'){
                    urlArr = [urlArr[0]]
                }
                /* end, if just test */

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
                                        listArr = Crawler.getList(window.document
                                                                , listArr
                                                                , path_obj.csspath[i]
                                                                , path_obj.domain
                                                                , urlObj.type
                                                                , urlObj.table
                                                                , e)
                                    }
                                    e.number = listArr.length - oldLength;
                                    resolve(e);
                                }
                            );
                            }).catch((error) => {
                                e.errors = true;
                                resolve(e);
                            })
                        }
                    );
                    promiseArr.push(p)
                })
            }
        }
        /** start promise */
        await Promise.all(promiseArr).then(async (status) => { 
            await this.getDetailAll(ctx, listArr, status);
        })
    },

    async getDetailAll(ctx, listArr, status){
        console.log('Start to get detail --------------------')
        let promiseArr = [];
        let detailErrs = [];

        listArr.forEach((e, i) => {
            let p = new Promise( (resolve, reject) => {
                axios.get(e.href)
                .then((response) => {
                    const html = Custom.afterGetRemoteUrl(response.data);
                    jsdom.env(
                        html,
                        (err, window) => {
                            listArr[i] = Crawler.getDetail(window.document, listArr[i], detailErrs)
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
            await this.saveToDatabase(ctx, listArr, detailErrs, status);
        }).catch(async (reason) => { 
            console.log('error detail--------------------------')
            await this.saveToDatabase(ctx, listArr, detailErrs, status);
        });
    },

    async saveToDatabase(ctx, listArr, detailErrs, status){
        let results = {
            success: [],
            errors: []
        }
        let promiseArr = [];
        listArr.forEach((e, i) => {
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
            var saveErrs = this.splitErrors(results)
            ctx.body = { status, listArr, detailErrs , saveErrs, results}
        }).catch(reason => { 
            console.log('error saveToDatabase--------------------------')
            ctx.body = { status, listArr, detailErrs, reason }
        });
    },

    splitErrors(arr){
        var saveErrs = [];
        arr.forEach((e,i) => {
            e.errors ? saveErrs.push(e) : '';
        })
        return saveErrs;
    }

}
	    
export default StartCrawling