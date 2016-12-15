import React, { Component, PropTypes } from 'react'
import connect from 'connect-alt'
import { Link } from 'react-router'

import { replaceParams } from 'utils/localized-routes'

@connect(({ news: { collection } }) => ({ collection }))
class News extends Component {

  static propTypes = { collection: PropTypes.array.isRequired }

  static contextTypes = {
    flux: PropTypes.object.isRequired,
    i18n: PropTypes.func.isRequired
  }

  componentWillMount() {
    const { flux, i18n } = this.context

    flux.getActions('helmet').update({ title: i18n('news.page-title') })
    flux.getActions('news').index()
  }

  handleRemove(index: number) {
    const { flux } = this.context
    flux.getActions('news').remove(index)
  }

  renderNew = (child, index) => {
    const { i18n } = this.context
    const { id, title, image } = child
    // const profileRoute: string = replaceParams(i18n('routes.profile'), { id })

    return (
      <tr className='user--row' key={ index }>
        <td><img src={ image } alt={ title } width='100' height='60' /></td>
        <td>{ title }</td>
        <td className='text-center'>
          <Link to={ `/news-detail/${id}` } >{ i18n('news.profile') }</Link>
        </td>
        <td className='text-center'>
          <button
            className='user--remove'
            onClick={ () => this.handleRemove(index, id) }>
            X
          </button>
        </td>
      </tr>
    )
  }

  renderUser = (user: { seed: string, email: string }, index: number) => {
    const { i18n } = this.context
    const { seed, email } = user
    const profileRoute: string = replaceParams(i18n('routes.profile'), { seed })

    return (
      <tr className='user--row' key={ index }>
        <td>{ email }</td>
        <td className='text-center'>
          <Link to={ profileRoute }>{ i18n('news.profile') }</Link>
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
    console.log('---------------')
    console.log(collection.length)

    return (
      <div>
        <h1 className='text-center'>
          { i18n('news.title') }
        </h1>
        <table className='app--users'>
          <thead>
            <tr>
              <th> { i18n('news.email') } </th>
              <th colSpan='2'> { i18n('news.actions') } </th>
            </tr>
          </thead>
          <tbody>
            { collection.map(this.renderNew) }
          </tbody>
        </table>
      </div>
    )
  }

}

export default News
