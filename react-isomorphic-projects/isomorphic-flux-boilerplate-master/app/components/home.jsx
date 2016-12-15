import React, { Component, PropTypes } from 'react'
import connect from 'connect-alt'
import { Link } from 'react-router'

import superagent from 'superagent'

// import { replaceParams } from 'utils/localized-routes'

@connect(({ home: { collection } }) => ({ collection }))
class Home extends Component {

  static propTypes = { collection: PropTypes.array.isRequired }

  static contextTypes = {
    flux: PropTypes.object.isRequired,
    i18n: PropTypes.func.isRequired
  }

  componentWillMount() {
    const { flux, i18n } = this.context

    flux.getActions('helmet').update({ title: i18n('home.page-title') })
    flux.getActions('home').index()
  }

  handleRemove(index: number, id: number) {
    const { flux } = this.context
    /** remove local */
    flux.getActions('home').remove(index)
    /** remove database */
    superagent.del(`/api/sql/users/${id}`)
    .set('Accept', 'application/json')
    .end((err, res) => {
      console.log(res)
    })
  }

  clickTest() {
    /* get list */
    // superagent.get('/api/sql/news')
    //   .set('Accept', 'application/json')
    //   .end((err, res) => {
    //     console.log(res)
    //   })
    /* get a specific */
    // superagent.post('/api/sql/users-put')
    //   .set('Accept', 'application/json')
    //   .send({ id: 1 })
    //   .end((err, res) => {
    //     console.log(res)
    //   })
    superagent.get('/api/read-meta-tag-with-jsdom')
      .set('Accept', 'application/json')
      .end((err, res) => {
        console.log(res)
      })
  }

  putUser(index, id) {
    const time = new Date().getTime()
    const data = {
      email: `${time}.coleman83@example.com`
    }
    superagent.put(`/api/sql/users/${id}`)
    .set('Accept', 'application/json')
    .send({ data })
    .end((err, res) => {
      console.log(res)
    })
  }

  postUser() {
    const data = {
      gender: 'female',
      email: 'clara.coleman83@example.com',
      username: 'smallsnake436',
      password: 'total',
      salt: 'ROOujBwn',
      sha1: '81f58d15787d3e0a63685facfa139399f05f947c',
      sha256: '0687fe39adb0e43c28c8ffb70e84baa2ea2e1bae0afa349db31b4e861208ec8e',
      registered: '1238304997',
      dob: '56822726',
      phone: '(951)-385-6121',
      cell: '(657)-919-3511',
      picture: 'http://api.randomuser.me/portraits/women/72.jpg',
      nationality: 'US'
    }
    superagent.post('/api/sql/users')
    .set('Accept', 'application/json')
    .send({ data })
    .end((err, res) => {
      console.log(res)
    })
  }

  renderUser = (user, index: number) => {
    const { i18n } = this.context
    const { email, id } = user

    return (
      <tr className='user--row' key={ index }>
        <td>{ email }</td>
        <td className='text-center'>
          <Link >{ i18n('users.profile') }</Link>
        </td>
        <td className='text-center'>
          <button
            className='user--remove'
            onClick={ () => this.handleRemove(index, id) }>
            X
          </button>
        </td>
        <td className='text-center'>
          <button
            onClick={ () => this.putUser(index, id) }>
            Edit
          </button>
        </td>
      </tr>
    )
  }

  render() {
    const { collection } = this.props
    const { i18n } = this.context
    console.log(collection.length)

    return (
      <div>
        <h1 className='text-center'>
          Home page
        </h1>
        <button onClick={ () => this.clickTest() }>Testing</button>
        <button onClick={ () => this.postUser() }>Add user</button>
        <table className='app--users'>
          <thead>
            <tr>
              <th> { i18n('home.email') } </th>
              <th colSpan='2'> { i18n('home.actions') } </th>
            </tr>
          </thead>
          <tbody>
            { collection.map(this.renderUser) }
          </tbody>
        </table>
      </div>
    )
  }

}

export default Home
