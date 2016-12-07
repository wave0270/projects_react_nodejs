import { users } from './data.json'
import models from './sequelize/models'
import axios from 'axios'
import jsdom from 'jsdom'


const simplifyUsers = (collection) => collection
  .map(({ user, seed }) => ({ ...user, seed }))
  .map(({ email, name, seed, picture }) => ({ email, name, seed, picture }))

/** table configuration */
const ITEM_LIMIT = 10
const TABLE_MAP = {
  users: {
    table: 'User',
    limit: ITEM_LIMIT
  },
  news: {
    table: 'news_beauty_tb',
    limit: 50
  }
}


function routes(router) {
  router.get('/users-static', async function (ctx) {
    ctx.body = simplifyUsers(users.slice(0, 10))
  })

  router.get('/users-static/:seed', async function (ctx) {
    const { seed } = ctx.params
    const [ result ] = simplifyUsers(users.filter(user => user.seed === seed))
    if (!result) {
      ctx.body = { error: { message: 'User not found' } }
    } else {
      ctx.body = result
    }
  })

  /* Start sequelize mySQL */
  router.get('/sql/:tb', async function(ctx) {
    /** get all*/
    const { tb } = ctx.params
    await models[table].findAll({ limit })
    .then((arr) => {
      ctx.body = arr;
    }); 
  }) 

  router.get('/sql/:tb/:id', async function(ctx) {
    /** get one*/
    const { id, tb } = ctx.params
    const { table } = TABLE_MAP[tb]
    await models[table].find({ where: { id: id }})
    .then((obj) => {
      ctx.body = obj;
    });
  })

  router.del('/sql/:tb/:id', async function(ctx) {
    /** delete one*/
    const { id, tb } = ctx.params
    const { table } = TABLE_MAP[tb]
    await models[table].destroy({ where: { id}})
    .then((obj) => {
      ctx.body = obj;
    });
  })

  router.post('/sql/:tb', async function(ctx) {
    /** add new one*/
    const { tb } = ctx.params
    const { table } = TABLE_MAP[tb]
    const { data } = ctx.request.body
    await models[table].create(data)
    .then((obj) => {
      ctx.body = obj
    })
  })

  router.put('/sql/:tb/:id', async function(ctx) {
    /** edit one*/
    const { id, tb } = ctx.params
    const { table } = TABLE_MAP[tb]
    const { data } = ctx.request.body
    await models[table].update(data, { where: { id }})
    .then((obj) => {
      ctx.body = obj
    });
  })

  router.get('/read-meta-tag-with-jsdom', async function(ctx) {
    let p1 = new Promise(
        function(resolve, reject) {
           axios.get('http://truyenyy.com/doc-truyen/dau-pha-thuong-khung/chuong-1174/')
          .then(function (response) {
            let images = ''
            jsdom.env(
              response.data,
              function (err, window) {
                /** 
                  childDom.parentNode
                  parentNode.tagName
                  window.document.querySelectorAll("div[data-oembed-url]")
                  domTMP.querySelector("iframe").src
                  var div = window.document.createElement('div');
                  bigParentNode.insertBefore(div.firstChild,parent);
                  parentOldDom.removeChild(domTMP);
                */
                images = window.document.querySelector("img").src;
                resolve({data: images});
              }
            );
          }).catch(function (error) {
            resolve({data: error});
          })
        }
    );

    await p1.then(
        function(val) {
            ctx.body = val
        })
    .catch(
        function(reason) {
            ctx.body = {data: 'err'}
        });



    
  })

  /* End sequelize mySQL */
}

// can't export directly function, run into const issue
// see: https://phabricator.babeljs.io/T2892
export default routes
