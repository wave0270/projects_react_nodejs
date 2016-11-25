import { users } from './data.json'
import models from './sequelize/models'


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

  /* Start sequelize mySQL */
  router.get('/sql/users', async function(ctx) {
    console.log('/sql/users')
    /** get all*/
    await models.User.findAll({
      include: [ models.Task ]
    }).then((usersArr) => {
      ctx.body = usersArr;
    });
  })
  router.get('/sql/users/:id', async function(ctx) {
    console.log('/sql/users/:id')
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
  /* End sequelize mySQL */
}

// can't export directly function, run into const issue
// see: https://phabricator.babeljs.io/T2892
export default routes
