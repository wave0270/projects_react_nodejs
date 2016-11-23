import { users } from './data.json'
import models from './sequelize/models'
var data;
models.User.findAll({
  include: [ models.Task ]
}).then(function(usersData) {
  console.log('-----------/s-users')
  console.log(usersData)
  data = usersData
});


const simplifyUsers = (collection) => collection
  .map(({ user, seed }) => ({ ...user, seed }))
  .map(({ email, name, seed, picture }) => ({ email, name, seed, picture }))

function routes(router) {
  router.get('/users', async function (ctx) {
    ctx.body = simplifyUsers(users.slice(0, 10))
  })

  router.get('/users/:seed', async function (ctx) {
    const { seed } = ctx.params
    const [ result ] = simplifyUsers(users.filter(user => user.seed === seed))

    if (!result) {
      ctx.body = { error: { message: 'User not found' } }
    } else {
      ctx.body = result
    }
  })

  router.get('/s-users', async function(ctx) {
    models.User.findAll({
      include: [ models.Task ]
    }).then((usersData) => {
      console.log('-----------/api/s-users')
      // ctx.response.json({data: usersData})
      ctx.body = simplifyUsers(users.slice(0, 3))
    });
  })
}

// can't export directly function, run into const issue
// see: https://phabricator.babeljs.io/T2892
export default routes
