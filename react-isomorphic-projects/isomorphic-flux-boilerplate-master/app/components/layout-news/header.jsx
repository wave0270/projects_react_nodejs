import React, { Component, PropTypes } from 'react'
import connect from 'connect-alt'
import { Link } from 'react-router'

import imageResolver from 'utils/image-resolver'
import Spinner from 'components/shared/spinner'
import LangPicker from 'components/shared/lang-picker'

// Load styles for the header
// and load the `react-logo.png` image
// for the `<img src='' />` element
let reactLogo
/* istanbul ignore next */
if (process.env.BROWSER) {
  reactLogo = require('images/react-logo.png')
} else {
  reactLogo = imageResolver('images/react-logo.png')
}

@connect(({ requests: { inProgress }, session: { session } }) =>
  ({ inProgress, session }))
class Header extends Component {

  static propTypes = {
    inProgress: PropTypes.bool,
    session: PropTypes.object
  }

  static contextTypes = {
    locales: PropTypes.array.isRequired,
    flux: PropTypes.object.isRequired,
    i18n: PropTypes.func.isRequired
  }

  handleLocaleChange = (locale: string) => {
    const { flux } = this.context
    flux.getActions('locale').switchLocale({ locale })
  }

  handleLogout = () => {
    const { flux } = this.context
    flux.getActions('session').logout()
  }

  renderTopMenu() {
    const topMenus = [
      { title: 'News' },
      { title: 'Video' },
      { title: 'Comic' }
    ]
    return topMenus.map((e, i) => {
      const k = i
      return (
        <li key={ k }>
          <Link>
            { e.title }
          </Link>
        </li>
      )
    })
  }

  renderMainMenu() {
    const menus = [
      { title: 'Home',
        childs: [
          { title: 'Home 1' }
        ]
      },
      { title: 'Beauty' },
      { title: 'Personal' },
      { title: 'Travel' },
      { title: 'Social' }
    ]
    return menus.map((e, i) => {
      const k = i
      return (
        <li key={ k }>
          <Link>
            { e.title }
          </Link>
          { e.childs && e.childs.length > 0 &&
            <span className='fa-icon'><i className='fa fa-chevron-down' aria-hidden='true'></i></span>
          }
          { e.childs && e.childs.length > 0 &&
            <ul className='level-1'>
              { e.childs.map((ee, ii) => {
                const kk = ii
                return (
                  <li key={ kk }>
                    <Link>
                      { ee.title }
                    </Link>
                  </li>
                )
              }) }
            </ul>
          }
        </li>
      )
    })
  }

  render() {
    const { inProgress, session } = this.props
    const { locales: [ activeLocale ] } = this.context
    return (
      <header className='app--header--news'>
        { /* Spinner in the top right corner */ }
        <Spinner active={ inProgress } />

        { /* LangPicker on the right side */ }
        <LangPicker
          activeLocale={ activeLocale }
          onChange={ this.handleLocaleChange } />
        { /* Links in the navbar */ }
        <div className='app--navbar-top-container'>
          <ul className='app--navbar-top un-select'>
            { this.renderTopMenu() }
          </ul>
        </div>
        <div className='header-group-bottom container'>
          { /* React Logo in header */ }
          <Link to='/' className='app--logo'>
            <img src={ reactLogo } alt='react-logo' />
          </Link>

          { /* Links in the navbar */ }
          <div className='app--navbar-container'>
            <ul className='app--navbar text-center reset-list un-select'>
              { this.renderMainMenu() }
              { session ? '' : '' }
            </ul>
            <i className='fa fa-align-left fa-menu fa-left-group' aria-hidden='true'></i>
            <i className='fa fa-search fa-menu fa-right-group' aria-hidden='true'></i>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
