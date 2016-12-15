// import request from 'superagent'

class HomeActions {

  constructor() {
    this.generateActions(
      'indexSuccess', 'indexFail',
      'showSuccess', 'showFail',
      'remove'
    )
  }

  index() {
    // You need to return a fn in actions
    // to get alt instance as second parameter to access
    // `alt-resolver` and the ApiClient
    return (dispatch, alt) =>
      // We use `alt-resolver` from the boilerplate
      // to indicate the server we need to resolve
      // this data before server side rendering
      alt.resolve(async () => {
        try {
          alt.getActions('requests').start()
          const response = await alt.request({ url: '/sql/users' })
          this.indexSuccess(response)
        } catch (error) {
          this.indexFail({ error })
        }
        alt.getActions('requests').stop()
      })
  }

  index2() {
    // You need to return a fn in actions
    // to get alt instance as second parameter to access
    // `alt-resolver` and the ApiClient
    return (dispatch, alt) =>
      // We use `alt-resolver` from the boilerplate
      // to indicate the server we need to resolve
      // this data before server side rendering
      alt.resolve(async () => {
        alt.getActions('requests').start()
        const datanew = { name: 'binh' }
        try {
          const response = await alt.request({
            url: '/sql/users-put',
            method: 'post',
            data: datanew
          })
          this.indexSuccess(response)
        } catch (error) {
          this.indexFail({ error })
        }
        alt.getActions('requests').stop()
      })
  }

  show(id) {
    return (dispatch, alt) =>
      alt.resolve(async () => {
        try {
          alt.getActions('requests').start()
          const response = await alt.request({ url: `/sql/users/${id}` })
          this.showSuccess(response)
        } catch (error) {
          this.showFail({ error })
        }
        alt.getActions('requests').stop()
      })
  }

  update(id) {
    return (dispatch, alt) =>
      alt.resolve(async () => {
        try {
          alt.getActions('requests').start()
          const response = await alt.request({ url: `/sql/users/${id}` })
          this.showSuccess(response)
        } catch (error) {
          this.showFail({ error })
        }
        alt.getActions('requests').stop()
      })
  }

}

export default HomeActions
