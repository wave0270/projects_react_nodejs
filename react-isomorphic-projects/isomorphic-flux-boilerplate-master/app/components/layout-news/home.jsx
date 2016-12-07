import React, { Component, PropTypes } from 'react'

// import { replaceParams } from 'utils/localized-routes'

// @connect(({ home: { collection } }) => ({ collection }))
class Home extends Component {

  static propTypes = { collection: PropTypes.array.isRequired }

  static contextTypes = {
    flux: PropTypes.object.isRequired,
    i18n: PropTypes.func.isRequired
  }

  componentWillMount() {
    // const { flux, i18n } = this.context

    // flux.getActions('helmet').update({ title: i18n('home.page-title') })
    // flux.getActions('home').index()
  }

  render() {
    return (
      <div>
        <h1 className='text-center'>
          News page
        </h1>
      </div>
    )
  }

}

export default Home
