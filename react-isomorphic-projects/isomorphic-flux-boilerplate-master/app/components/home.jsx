import React, { Component, PropTypes } from 'react'
import connect from 'connect-alt'
import { Link } from 'react-router'

import superagent from 'superagent'

import { replaceParams } from 'utils/localized-routes'

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

  handleRemove(index: number) {
    const { flux } = this.context
    flux.getActions('home').remove(index)
  }

  clickTest() {
    console.log('res')
    superagent.get('/s-users')
      .set('Accept', 'application/json')
      .end((err, res) => {
        console.log(res)
      })
  }

  renderUser = (user: { id: number, email: string }, index: number) => {
    const { i18n } = this.context
    const { id, email } = user
    const profileRoute: string = replaceParams(i18n('routes.profile'), { id })

    return (
      <tr className='user--row' key={ index }>
        <td>{ email }</td>
        <td className='text-center'>
          <p>{ user.profile }</p>
          <Link to={ profileRoute }>{ i18n('user.profile') }</Link>
        </td>
        <td className='text-center'>
          <button
            className='user--remove'
            onClick={ () => this.handleRemove(index) }>
            X
          </button>
        </td>
      </tr>
    )
  }

  render() {
    const { collection } = this.props
    const { i18n } = this.context
    console.log('========collection')
    console.log(collection)
    return (
      <div>
        <h1 className='text-center'>
          BBBBBB dddddd
        </h1>
        <button onClick={ () => this.clickTest('test') }>BBBBBB test</button>
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
