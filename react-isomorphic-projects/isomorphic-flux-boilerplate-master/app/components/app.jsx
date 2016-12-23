import React, { Component, PropTypes } from 'react'

import HeaderDefault from 'components/layout-default/header'
import Footer from 'components/layout-default/footer'
/**  new layout */
import HeaderForNews from 'components/layout-news/header'

/** this.context: flux + store
 *  this.props: route + location
*/
/* istanbul ignore next */
if (process.env.BROWSER) require('styles/app.css')

class App extends Component {

  static propTypes = { children: PropTypes.node }
  static contextTypes = { flux: PropTypes.object.isRequired }

  state = { i18n: this.context
      .flux.getStore('locale').getState() }

  componentDidMount() {
    const { flux } = this.context
    flux.getStore('helmet').listen(this.handleTitleChange)
  }

  componentWillUnmount() {
    const { flux } = this.context
    flux.getStore('helmet').unlisten(this.handleTitleChange)
  }

  handleTitleChange({ titleBase, title }) {
    document.title = titleBase + title
  }

  render() {
    const { children } = this.props
    let Header = HeaderDefault
    if (children.props.route.path.indexOf('manager/news') > -1) {
      Header = HeaderForNews
    }
    return (
      <div>
        <Header />
        { children }
        <Footer />
      </div>
    )
  }

}

export default App
