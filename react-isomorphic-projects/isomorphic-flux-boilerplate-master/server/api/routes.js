import { users } from './data.json'
import models from './sequelize/models'


const simplifyUsers = (collection) => collection
  .map(({ user, seed }) => ({ ...user, seed }))
  .map(({ email, name, seed, picture }) => ({ email, name, seed, picture }))

let NEWS = [];

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
  router.get('/sql/users', async function(ctx) {
    // ctx.body = simplifyUsers(users.slice(0, 10))
    /** get all*/
    await models.User.findAll({
      offset: 0, limit: 50 
    }).then((usersArr) => {
      ctx.body = usersArr;
    });
  })

  router.get('/sql/users/:id', async function(ctx) {
    /** get one*/
    const { id } = ctx.params
    await models.User.find({
      where: {
        id: id
      }
    }).then((user) => {
      ctx.body = user;
    });
  })

  router.post('/sql/users-put', async function(ctx, dataAPI, dataAPIArgs) {
    const { id } = ctx.request.body
    await models.User.find({
      where: {
        id: id
      }
    }).then((user) => {
      ctx.body = user;
    });
  })

  router.post('/sql/users-new', async function(ctx, dataAPI, dataAPIArgs) {
    // const { id } = ctx.request.body
    const data = {
      "gender": "female",
      "email": "clara.coleman83@example.com",
      "username": "smallsnake436",
      "password": "total",
      "salt": "ROOujBwn",
      "sha1": "81f58d15787d3e0a63685facfa139399f05f947c",
      "sha256": "0687fe39adb0e43c28c8ffb70e84baa2ea2e1bae0afa349db31b4e861208ec8e",
      "registered": "1238304997",
      "dob": "56822726",
      "phone": "(951)-385-6121",
      "cell": "(657)-919-3511",
      "picture": "http://api.randomuser.me/portraits/women/72.jpg",
      "nationality": "US"
    }
    await models.User.create(data).then((user) => {
      ctx.body = user
    })
  })

  router.get('/sql/news', async function(ctx) {
    /** get all*/
    console.log('call news ---------------------')
    await models.news_beauty_tb.findAll({
    }).then((arr) => {
      // console.log(arr[0].title)
      ctx.body = arr;
    });
  })
  router.get('/sql/news/:id', async function (ctx) {
    const { id } = ctx.params
    await models.news_beauty_tb.find({
      where: {
        id: id
      }
    }).then((obj) => {
      // console.log(obj.id)
      ctx.body = obj;
    });
  })
  /* End sequelize mySQL */
}

// can't export directly function, run into const issue
// see: https://phabricator.babeljs.io/T2892
export default routes
