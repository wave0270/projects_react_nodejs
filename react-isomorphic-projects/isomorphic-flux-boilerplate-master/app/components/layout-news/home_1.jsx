import React, { Component, PropTypes } from 'react'

// import { replaceParams } from 'utils/localized-routes'

// @connect(({ home: { collection } }) => ({ collection }))
if (process.env.BROWSER) require('styles/layout-news/animate.css')
if (process.env.BROWSER) require('styles/layout-news/style.css')
if (process.env.BROWSER) require('styles/layout-news/styles.css')
if (process.env.BROWSER) require('styles/layout-news/init.css')
if (process.env.BROWSER) require('styles/layout-news/plugins.css')


const img = 'http://hookedoneverything.com/wp-content/uploads/2015/04/panama-featured-iamge1-810x539.jpg'
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

  renderContentNewsGroup1() {
    return (
      <div>
        <div className='row'>
          <div className='col-md-6'>
            <div className='news-group'>
              <div className='title-area'>
                <span className='title'>
                  KHỎE ĐẸP.
                </span>
              </div>
              <div className='group-content'>
                <div className='detail-content row'>
                  <div className='col-md-6'>
                    <div className='img-news'>
                      <img alt='title' src={ img } />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='title-news'>
                      Lý do khiến trẻ biếng ăn chậm lớn
                    </div>
                    <div className='desc-news'>
                      desc-news
                    </div>
                    <div className='date-news'>
                      26 May, 2013.
                    </div>
                    <div className='domain-news'>
                      vnexpress.net
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            { /* main group */ }
            <div className='news-group'>
              <div className='title-area'>
                <span className='title'>
                  KHỎE ĐẸP.
                </span>
              </div>
              <div className='group-content'>
                <div className='detail-content row'>
                  <div className='col-md-6'>
                    <div className='img-news'>
                      <img alt='title' src={ img } />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='title-news'>
                      Lý do khiến trẻ biếng ăn chậm lớn
                    </div>
                    <div className='desc-news'>
                      desc-news
                    </div>
                    <div className='date-news'>
                      26 May, 2013.
                    </div>
                  </div>
                </div>
                <div className='detail-content row'>
                  <div className='col-md-6'>
                    <div className='img-news'>
                      <img alt='title' src={ img } />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='title-news'>
                      Lý do khiến trẻ biếng ăn chậm lớn
                    </div>
                    <div className='desc-news'>
                      desc-news
                    </div>
                    <div className='date-news'>
                      26 May, 2013.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  renderMenuNewsGroup1() {
    return (
      <div>
        { /* main group */ }
        <div className='news-group'>
          <div className='title-area'>
            <span className='title'>
              KHỎE ĐẸP.
            </span>
          </div>
          <div className='group-content'>
            <div className='detail-content row'>
              <div className='col-md-6'>
                <div className='img-news'>
                  <img alt='title' src={ img } />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='title-news'>
                  Lý do khiến trẻ biếng ăn chậm lớn
                </div>
                <div className='date-news'>
                  26 May, 2013.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div id='news--home--area'>
        <div className='container'>
          { this.renderContentNewsGroup1() }
        </div>
      </div>
    )
  }

}

export default Home
