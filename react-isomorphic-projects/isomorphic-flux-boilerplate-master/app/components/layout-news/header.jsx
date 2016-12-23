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

  render() {
    const { inProgress, session } = this.props
    const { locales: [ activeLocale ], i18n } = this.context

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
          <ul className='app--navbar un-select'>
            <li>
              <Link to={ i18n('routes.guides') }>
                News
              </Link>
            </li>
            <li>
              <Link to={ i18n('routes.guides') }>
                Video
              </Link>
            </li>
            <li>
              <Link to={ i18n('routes.guides') }>
                Comic
              </Link>
            </li>
          </ul>
        </div>
        <div className='header-group-bottom container'>
          { /* React Logo in header */ }
          <Link to='/' className='app--logo'>
            <img src={ reactLogo } alt='react-logo' />
          </Link>

          { /* Links in the navbar */ }
          <ul className='app--navbar text-center reset-list un-select'>
            <li>
              <Link to={ i18n('routes.guides') }>
                Home
              </Link>
            </li>
            <li>
              <Link to={ i18n('routes.guides') }>
                Beauty
              </Link>
            </li>
            <li>
              <Link to={ i18n('routes.guides') }>
                Personal
              </Link>
            </li>
            <li>
              <Link to={ i18n('routes.guides') }>
                Travel
              </Link>
            </li>
            <li>
              <Link to={ i18n('routes.guides') }>
                Social
              </Link>
            </li>
            { session ? '' : '' }
          </ul>
        </div>
      </header>
    )
  }
}

export default Header
