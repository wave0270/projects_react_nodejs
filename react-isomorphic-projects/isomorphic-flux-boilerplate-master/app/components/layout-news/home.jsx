import React, { Component, PropTypes } from 'react'
import connect from 'connect-alt'
import { Link } from 'react-router'
// import HeaderCom from './header'

// import imageResolver from 'utils/image-resolver'

// Load styles for the header
// and load the `react-logo.png` image
// for the `<img src='' />` element
// let reactLogo
// /* istanbul ignore next */
// if (process.env.BROWSER) {
//   reactLogo = require('images/react-logo.png')
// } else {
//   reactLogo = imageResolver('images/react-logo.png')
// }

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
      {
        title: 'Home',
        childs: [
          { title: 'Home 1' },
          { title: 'Home 2' }
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
    // const { inProgress, session } = this.props
    // const { locales: [ activeLocale ] } = this.context
    return (
      <body className='home page-template page-template-template-home page-template-template-home-php page page-id-4 browser-not-ie not-retina' cz-shortcut-listen='true'>
        <div id='page' className='site'>
          <div id='top-bar' data-mtst-selector='#top-bar' data-mtst-label='Top Bar' data-mtst-no-support='typography,border'>
            <div className='wrapper clearfix'>
              <div id='top-bar-navigation' data-mtst-selector='#top-bar-navigation li' data-mtst-label='Top Bar - Navigation'>
                <div className='menu-top-bar-container'>
                  <ul id='top-bar-menu' className='menu'>
                    <li id='menu-item-14' className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-14'><a href='http://meridianthemes-demo.net/the-essence/category/beauty/'>Beauty</a></li>
                    <li id='menu-item-19' className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-19'><a href='http://meridianthemes-demo.net/the-essence/category/travel/'>Travel</a></li>
                    <li id='menu-item-17' className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-17'><a href='http://meridianthemes-demo.net/the-essence/category/personal/'>Personal</a></li>
                    <li id='menu-item-142' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-142'><a href='http://meridianthemes-demo.net/the-essence/about/'>About</a></li>
                    <li id='menu-item-141' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-141'><a href='http://meridianthemes-demo.net/the-essence/contact/'>Contact</a></li>
                  </ul>
                </div>
              </div>
              { /* <!-- .top-bar-navigation --> */}
              <div id='top-bar-social' className='clearfix' data-mtst-selector='#top-bar-social a' data-mtst-label='Top Bar - Social' data-mtst-no-support='background,border'>
                <a href='http://meridianthemes-demo.net/the-essence/#' target='_blank'><span className='fa fa-twitter-square'></span></a>
                <a href='http://meridianthemes-demo.net/the-essence/#' target='_blank'><span className='fa fa-facebook-square'></span></a>
                <a href='http://meridianthemes-demo.net/the-essence/#' target='_blank'><span className='fa fa-youtube-square'></span></a>
                <a href='http://meridianthemes-demo.net/the-essence/#' target='_blank'><span className='fa fa-vimeo-square'></span></a>
                <a href='http://meridianthemes-demo.net/the-essence/#' target='_blank'><span className='fa fa-pinterest-square'></span></a>
              </div>
              { /* <!-- .top-bar-social --> */}
            </div>
            { /* <!-- .wrapper --> */}
          </div>
          { /* <!-- #top-bar --> */}
          <header id='header' className='site-header'>
            <div className='wrapper clearfix'>
              <div id='logo' data-mtst-selector='#logo' data-mtst-label='Logo' data-mtst-no-support='typography,border'>
                <h2>
                  <a href='http://meridianthemes-demo.net/the-essence/' rel='home'>
                    <span className='visuallyhidden'>The Essence</span>
                    <img className='has-retina-ver' src='src/logo.png' data-retina-ver='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/logoretina.png' alt='The Essence' />
                  </a>
                </h2>
              </div>
              { /* <!-- #logo --> */}
              <nav id='navigation' className=''>
                <div id='navigation-panel-hook'><span className='fa fa-align-left'></span></div>
                <div id='navigation-main' data-mtst-selector='#navigation .menu &gt; li &gt; a' data-mtst-label='Navigation Items' data-mtst-no-support='background,border'>
                  <div className='menu-primary-container'>
                    <ul id='primary-menu' className='menu'>
                      <li id='menu-item-6' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-4 current_page_item current-menu-ancestor current_page_ancestor menu-item-has-children menu-item-6'><a href='http://meridianthemes-demo.net/the-essence/'>Home<span className='fa fa-chevron-down'></span></a>
                        <ul className='sub-menu'>
                          <li id='menu-item-134' className='menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-134'><a href='http://meridianthemes-demo.net/the-essence/#'>Post Style A</a>
                            <ul className='sub-menu'>
                              <li id='menu-item-138' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-4 current_page_item menu-item-138'><a href='http://meridianthemes-demo.net/the-essence/'>Post Example 1</a></li>
                              <li id='menu-item-114' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-114'><a href='http://meridianthemes-demo.net/the-essence/home-2/'>Post Example 2</a></li>
                              <li id='menu-item-113' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-113'><a href='http://meridianthemes-demo.net/the-essence/home-3/'>Post Example 3</a></li>
                            </ul>
                          </li>
                          <li id='menu-item-135' className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-135'><a href='http://meridianthemes-demo.net/the-essence/#'>Post Style B</a>
                            <ul className='sub-menu'>
                              <li id='menu-item-112' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-112'><a href='http://meridianthemes-demo.net/the-essence/home-4/'>Post Example 4</a></li>
                              <li id='menu-item-111' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-111'><a href='http://meridianthemes-demo.net/the-essence/home-5/'>Post  Example 5</a></li>
                              <li id='menu-item-110' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-110'><a href='http://meridianthemes-demo.net/the-essence/home-6/'>Post Example 6</a></li>
                              <li id='menu-item-109' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-109'><a href='http://meridianthemes-demo.net/the-essence/home-7/'>Post Example 7</a></li>
                              <li id='menu-item-108' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-108'><a href='http://meridianthemes-demo.net/the-essence/home-8/'>Post Example 8</a></li>
                            </ul>
                          </li>
                          <li id='menu-item-136' className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-136'><a href='http://meridianthemes-demo.net/the-essence/#'>Post Style C</a>
                            <ul className='sub-menu'>
                              <li id='menu-item-133' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-133'><a href='http://meridianthemes-demo.net/the-essence/home-9/'>Post Example 9</a></li>
                              <li id='menu-item-125' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-125'><a href='http://meridianthemes-demo.net/the-essence/home-10/'>Post Example 10</a></li>
                              <li id='menu-item-126' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-126'><a href='http://meridianthemes-demo.net/the-essence/home-11/'>Post Example 11</a></li>
                              <li id='menu-item-127' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-127'><a href='http://meridianthemes-demo.net/the-essence/home-12/'>Post Example 12</a></li>
                              <li id='menu-item-128' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-128'><a href='http://meridianthemes-demo.net/the-essence/home-13/'>Post Example 13</a></li>
                            </ul>
                          </li>
                          <li id='menu-item-137' className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-137'><a href='http://meridianthemes-demo.net/the-essence/#'>Post Style D</a>
                            <ul className='sub-menu'>
                              <li id='menu-item-129' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-129'><a href='http://meridianthemes-demo.net/the-essence/home-14/'>Post Example 14</a></li>
                              <li id='menu-item-130' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-130'><a href='http://meridianthemes-demo.net/the-essence/home-15/'>Post Example 15</a></li>
                              <li id='menu-item-131' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-131'><a href='http://meridianthemes-demo.net/the-essence/home-16/'>Post Example 16</a></li>
                              <li id='menu-item-132' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-132'><a href='http://meridianthemes-demo.net/the-essence/home-17/'>Post Example 17</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li id='menu-item-8' className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-8'><a href='http://meridianthemes-demo.net/the-essence/category/beauty/'>Beauty</a></li>
                      <li id='menu-item-11' className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-11'><a href='http://meridianthemes-demo.net/the-essence/category/personal/'>Personal</a></li>
                      <li id='menu-item-13' className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-13'><a href='http://meridianthemes-demo.net/the-essence/category/travel/'>Travel</a></li>
                      <li id='menu-item-7' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-7'><a href='http://meridianthemes-demo.net/the-essence/about/'>About</a></li>
                      <li id='menu-item-151' className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-151'><a href='http://meridianthemes-demo.net/the-essence/#'>Social<span className='fa fa-chevron-down'></span></a>
                        <ul className='sub-menu'>
                          <li id='menu-item-152' className='menu-item menu-item-type-custom menu-item-object-custom menu-item-152'><a href='http://meridianthemes-demo.net/the-essence/#'>Facebook</a></li>
                          <li id='menu-item-153' className='menu-item menu-item-type-custom menu-item-object-custom menu-item-153'><a href='http://meridianthemes-demo.net/the-essence/#'>Instagram</a></li>
                          <li id='menu-item-154' className='menu-item menu-item-type-custom menu-item-object-custom menu-item-154'><a href='http://meridianthemes-demo.net/the-essence/#'>Twitter</a></li>
                          <li id='menu-item-155' className='menu-item menu-item-type-custom menu-item-object-custom menu-item-155'><a href='http://meridianthemes-demo.net/the-essence/#'>Pinterest</a></li>
                        </ul>
                      </li>
                      <li id='menu-item-140' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-140'><a href='http://meridianthemes-demo.net/the-essence/contact/'>Contact</a></li>
                    </ul>
                  </div>
                </div>
                { /* <!-- #navigation-main --> */}
                <div id='navigation-search-form'>
                  <form method='get' action='http://meridianthemes-demo.net/the-essence/'>
                    <input name='s' type='text' placeholder='Enter search term and hit enter' />
                  </form>
                </div>
                { /* <!-- .navigation-search-form --> */}
                <div id='navigation-search-hook'><span className='fa fa-search'></span><span className='fa fa-close'></span></div>
              </nav>
              { /* <!-- #navigation --> */}
            </div>
            { /* <!-- .wrapper --> */}
          </header>

          { /* <!-- #header --> */}
          <div className='carousel-wrapper horizontal-carousel-wrapper'>
            <div className='wrapper'>
              <div className='carousel horizontal-carousel clearfix owl-carousel owl-theme' data-pagination='true' styleERR='display: block; margin-left: -14.9592px; width: 1113.92px; opacity: 1;'>
                <div className='owl-wrapper-outer'>
                  <div className='owl-wrapper' styleERR='width: 4452px; left: 0px; display: block;'>
                    <div className='owl-item carousel-item-visible' styleERR='width: 371px;'>
                      <div className='blog-post-s2 clearfix col col-3 col-first carousel-item  post-32 post type-post status-publish format-standard has-post-thumbnail hentry category-lifestyle tag-carousel-small' styleERR='padding-left: 14.9592px; padding-right: 14.9592px;'>
                        <div className='blog-post-s2-thumb'>
                          <a href='http://meridianthemes-demo.net/the-essence/2016/04/06/republicans-say-theyre-embarrassed-by-trump-but-voting-for-him-anyway/'><img width='165' height='82' src='src/1-165x82.jpg' className='attachment-the-essence-s2 size-the-essence-s2 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/1-165x82.jpg 165w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/1-600x300.jpg 600w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/1-610x305.jpg 610w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/1-395x197.jpg 395w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/1-288x144.jpg 288w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/1-823x412.jpg 823w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/1-401x200.jpg 401w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/1-260x130.jpg 260w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/1-189x94.jpg 189w' sizes='(max-width: 165px) 100vw, 165px' /></a>
                        </div>
                        { /* <!-- .blog-post-s2-thumb --> */}
                        <div className='blog-post-s2-title' styleERR='padding-top: 7px;'>
                          <h4 data-mtst-selector='.blog-post-s2-title h4' data-mtst-label='Blog Post S2 - Title'><a href='http://meridianthemes-demo.net/the-essence/2016/04/06/republicans-say-theyre-embarrassed-by-trump-but-voting-for-him-anyway/'>Republicans Say Theyâ€™re Embarrassed by Trump but Voting for Him Anyway</a></h4>
                        </div>
                        { /* <!-- .blog-post-s2-title --> */}
                      </div>
                    </div>
                    <div className='owl-item carousel-item-visible' styleERR='width: 371px;'>
                      <div className='blog-post-s2 clearfix col col-3 carousel-item  post-31 post type-post status-publish format-standard has-post-thumbnail hentry category-fashion tag-carousel-small' styleERR='padding-left: 14.9592px; padding-right: 14.9592px;'>
                        <div className='blog-post-s2-thumb'>
                          <a href='http://meridianthemes-demo.net/the-essence/2016/04/06/what-daredevil-got-right-that-the-walking-dead-and-game-of-thrones-got-wrong/'><img width='165' height='82' src='src/2-3-165x82.jpg' className='attachment-the-essence-s2 size-the-essence-s2 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/2-3-165x82.jpg 165w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/2-3-600x300.jpg 600w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/2-3-610x305.jpg 610w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/2-3-395x197.jpg 395w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/2-3-288x144.jpg 288w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/2-3-823x412.jpg 823w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/2-3-401x200.jpg 401w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/2-3-260x130.jpg 260w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/2-3-189x94.jpg 189w' sizes='(max-width: 165px) 100vw, 165px' /></a>
                        </div>
                        { /* <!-- .blog-post-s2-thumb --> */}
                        <div className='blog-post-s2-title' styleERR='padding-top: 7px;'>
                          <h4 data-mtst-selector='.blog-post-s2-title h4' data-mtst-label='Blog Post S2 - Title'><a href='http://meridianthemes-demo.net/the-essence/2016/04/06/what-daredevil-got-right-that-the-walking-dead-and-game-of-thrones-got-wrong/'>What Daredevil Got Right That The Walking Dead and Game of Thrones Got Wrong</a></h4>
                        </div>
                        { /* <!-- .blog-post-s2-title --> */}
                      </div>
                    </div>
                    <div className='owl-item carousel-item-visible' styleERR='width: 371px;'>
                      <div className='blog-post-s2 clearfix col col-3 carousel-item  post-30 post type-post status-publish format-standard has-post-thumbnail hentry category-beauty tag-carousel-small' styleERR='padding-left: 14.9592px; padding-right: 14.9592px;'>
                        <div className='blog-post-s2-thumb'>
                          <a href='http://meridianthemes-demo.net/the-essence/2016/04/06/the-walking-dead-which-major-character-just-died-in-the-season-6-finale/'><img width='165' height='82' src='src/3-165x82.jpg' className='attachment-the-essence-s2 size-the-essence-s2 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/3-165x82.jpg 165w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/3-600x300.jpg 600w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/3-610x305.jpg 610w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/3-395x197.jpg 395w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/3-288x144.jpg 288w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/3-823x412.jpg 823w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/3-401x200.jpg 401w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/3-260x130.jpg 260w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/3-189x94.jpg 189w' sizes='(max-width: 165px) 100vw, 165px' /></a>
                        </div>
                        { /* <!-- .blog-post-s2-thumb --> */}
                        <div className='blog-post-s2-title' styleERR='padding-top: 7px;'>
                          <h4 data-mtst-selector='.blog-post-s2-title h4' data-mtst-label='Blog Post S2 - Title'><a href='http://meridianthemes-demo.net/the-essence/2016/04/06/the-walking-dead-which-major-character-just-died-in-the-season-6-finale/'>The Walking Dead: Which Major Character Just Died in the Season 6 Finale?</a></h4>
                        </div>
                        { /* <!-- .blog-post-s2-title --> */}
                      </div>
                    </div>
                    <div className='owl-item' styleERR='width: 371px;'>
                      <div className='blog-post-s2 clearfix col col-3 col-last carousel-item  post-29 post type-post status-publish format-standard has-post-thumbnail hentry category-lifestyle tag-carousel-small' styleERR='padding-left: 14.9592px; padding-right: 14.9592px;'>
                        <div className='blog-post-s2-thumb'>
                          <a href='http://meridianthemes-demo.net/the-essence/2016/04/06/why-the-night-managers-elizabeth-debicki-is-every-costume-designers-dream-come-true/'><img width='165' height='82' src='src/16-165x82.jpg' className='attachment-the-essence-s2 size-the-essence-s2 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/16-165x82.jpg 165w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/16-600x300.jpg 600w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/16-610x305.jpg 610w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/16-395x197.jpg 395w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/16-288x144.jpg 288w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/16-823x412.jpg 823w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/16-401x200.jpg 401w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/16-260x130.jpg 260w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/16-189x94.jpg 189w' sizes='(max-width: 165px) 100vw, 165px' /></a>
                        </div>
                        { /* <!-- .blog-post-s2-thumb --> */}
                        <div className='blog-post-s2-title' styleERR='padding-top: 1.25px;'>
                          <h4 data-mtst-selector='.blog-post-s2-title h4' data-mtst-label='Blog Post S2 - Title'><a href='http://meridianthemes-demo.net/the-essence/2016/04/06/why-the-night-managers-elizabeth-debicki-is-every-costume-designers-dream-come-true/'>Why The Night Managerâ€™s Elizabeth Debicki Is Every Costume Designerâ€™s Dream Come True</a></h4>
                        </div>
                        { /* <!-- .blog-post-s2-title --> */}
                      </div>
                    </div>
                    <div className='owl-item' styleERR='width: 371px;'>
                      <div className='blog-post-s2 clearfix col col-3 col-first carousel-item  post-28 post type-post status-publish format-standard has-post-thumbnail hentry category-fashion tag-carousel-small' styleERR='padding-left: 14.9592px; padding-right: 14.9592px;'>
                        <div className='blog-post-s2-thumb'>
                          <a href='http://meridianthemes-demo.net/the-essence/2016/04/06/5-reasons-why-well-never-see-anything-like-the-o-j-simpson-verdict-again/'><img width='165' height='82' src='src/17-165x82.jpg' className='attachment-the-essence-s2 size-the-essence-s2 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/17-165x82.jpg 165w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/17-600x300.jpg 600w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/17-610x305.jpg 610w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/17-395x197.jpg 395w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/17-288x144.jpg 288w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/17-823x412.jpg 823w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/17-401x200.jpg 401w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/17-260x130.jpg 260w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/17-189x94.jpg 189w' sizes='(max-width: 165px) 100vw, 165px' /></a>
                        </div>
                        { /* <!-- .blog-post-s2-thumb --> */}
                        <div className='blog-post-s2-title' styleERR='padding-top: 7px;'>
                          <h4 data-mtst-selector='.blog-post-s2-title h4' data-mtst-label='Blog Post S2 - Title'><a href='http://meridianthemes-demo.net/the-essence/2016/04/06/5-reasons-why-well-never-see-anything-like-the-o-j-simpson-verdict-again/'>5 Reasons Why Weâ€™ll Never See Anything Like the O.J. Simpson Verdict Again</a></h4>
                        </div>
                        { /* <!-- .blog-post-s2-title --> */}
                      </div>
                    </div>
                    <div className='owl-item' styleERR='width: 371px;'>
                      <div className='blog-post-s2 clearfix col col-3 carousel-item  post-27 post type-post status-publish format-standard has-post-thumbnail hentry category-beauty tag-carousel-small' styleERR='padding-left: 14.9592px; padding-right: 14.9592px;'>
                        <div className='blog-post-s2-thumb'>
                          <a href='http://meridianthemes-demo.net/the-essence/2016/04/06/harry-styles-had-to-fend-off-selfie-seeking-fan-at-grandmothers-funeral/'><img width='165' height='82' src='src/13-1-165x82.jpg' className='attachment-the-essence-s2 size-the-essence-s2 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/13-1-165x82.jpg 165w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/13-1-600x300.jpg 600w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/13-1-610x305.jpg 610w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/13-1-395x197.jpg 395w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/13-1-288x144.jpg 288w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/13-1-823x412.jpg 823w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/13-1-401x200.jpg 401w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/13-1-260x130.jpg 260w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/13-1-189x94.jpg 189w' sizes='(max-width: 165px) 100vw, 165px' /></a>
                        </div>
                        { /* <!-- .blog-post-s2-thumb --> */}
                        <div className='blog-post-s2-title' styleERR='padding-top: 7px;'>
                          <h4 data-mtst-selector='.blog-post-s2-title h4' data-mtst-label='Blog Post S2 - Title'><a href='http://meridianthemes-demo.net/the-essence/2016/04/06/harry-styles-had-to-fend-off-selfie-seeking-fan-at-grandmothers-funeral/'>Harry Styles Had to Fend Off Selfie-Seeking Fan at Grandmotherâ€™s Funeral</a></h4>
                        </div>
                        { /* <!-- .blog-post-s2-title --> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='owl-controls clickable'>
                  <div className='owl-pagination'>
                    <div className='owl-page active'><span className=''></span></div>
                    <div className='owl-page'><span className=''></span></div>
                  </div>
                </div>
              </div>
              { /* <!-- .horizontal-carousel --> */}
            </div>
            { /* <!-- .wrapper --> */}
          </div>
          { /* <!-- .horizontal-carousel-wrapper --> */}
          <div className='carousel-wrapper vertical-carousel-wrapper'>
            <div className='wrapper'>
              <div className='carousel vertical-carousel clearfix owl-carousel owl-theme' data-pagination='false' styleERR='display: block; margin-left: -14.9592px; width: 1113.92px; opacity: 1;'>
                <div className='owl-wrapper-outer'>
                  <div className='owl-wrapper' styleERR='width: 3710px; left: 0px; display: block;'>
                    <div className='owl-item carousel-item-visible' styleERR='width: 371px;'>
                      <div className='blog-post-s3 clearfix col col-3 col-first carousel-item  post-39 post type-post status-publish format-standard has-post-thumbnail hentry category-travel tag-beauty tag-carousel tag-hair tag-style' styleERR='padding-left: 14.9592px; padding-right: 14.9592px;'>
                        <div className='blog-post-s3-thumb'>
                          <a href='http://meridianthemes-demo.net/the-essence/2016/04/07/why-did-reed-krakoff-walk-away-from-his-brand/'><img width='395' height='373' src='src/8-1-395x373.jpg' className='attachment-the-essence-s3-4 size-the-essence-s3-4 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-395x373.jpg 395w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-288x271.jpg 288w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-401x378.jpg 401w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-260x245.jpg 260w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-189x178.jpg 189w' sizes='(max-width: 395px) 100vw, 395px' /></a>
                          <div className='blog-post-s3-thumb-cats' data-mtst-selector='.blog-post-s3-thumb-cats' data-mtst-label='Blog Post S3 - Category'>
                            <a href='http://meridianthemes-demo.net/the-essence/category/travel/' rel='category tag'>Travel</a> </div>
                          { /* <!-- .blog-post-s3-thumb-cats --> */}
                        </div>
                        { /* <!-- .blog-post-s3-thumb --> */}
                        <div className='blog-post-s3-main'>
                          <h4 className='blog-post-s3-title' data-mtst-selector='.blog-post-s3-title' data-mtst-label='Blog Post S3 - Title' data-mtst-no-support='border,background'><a href='http://meridianthemes-demo.net/the-essence/2016/04/07/why-did-reed-krakoff-walk-away-from-his-brand/'>Why Did Reed Krakoff Walk Away from His Brand?</a></h4>
                          <div className='blog-post-s3-meta'>
                            <span className='blog-post-s3-meta-author' data-mtst-selector='.blog-post-s3-meta-author a' data-mtst-label='Blog Post S2 - Author' data-mtst-no-support='spacing,background,border'>
                              <a href='http://meridianthemes-demo.net/the-essence/author/0176wpczar/' title='Posts by Carley Keener' rel='author'>Carley Keener</a>			</span>
                            { /* <!-- .blog-post-s3-meta-author --> */}
                            <span className='blog-post-s3-meta-separator'></span>
                            <span className='blog-post-s3-meta-date' data-mtst-selector='.blog-post-s3-meta-date' data-mtst-label='Blog Post S2 - Date' data-mtst-no-support='spacing,background,border'>10 months ago			</span>
                            { /* <!-- .blog-post-s3-meta-date --> */}
                          </div>
                          { /* <!-- .vertica-carousel-item-meta --> */}
                        </div>
                        { /* <!-- .blog-post-s3-main --> */}
                      </div>
                    </div>
                    <div className='owl-item carousel-item-visible' styleERR='width: 371px;'>
                      <div className='blog-post-s3 clearfix col col-3 carousel-item  post-38 post type-post status-publish format-standard has-post-thumbnail hentry category-personal tag-carousel' styleERR='padding-left: 14.9592px; padding-right: 14.9592px;'>
                        <div className='blog-post-s3-thumb'>
                          <a href='http://meridianthemes-demo.net/the-essence/2016/04/06/leon-bridges-and-andra-day-rbs-rising-stars-talk-teaming-up/'><img width='395' height='373' src='src/7-395x373.jpg' className='attachment-the-essence-s3-4 size-the-essence-s3-4 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/7-395x373.jpg 395w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/7-288x271.jpg 288w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/7-401x378.jpg 401w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/7-260x245.jpg 260w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/7-189x178.jpg 189w' sizes='(max-width: 395px) 100vw, 395px' /></a>
                          <div className='blog-post-s3-thumb-cats' data-mtst-selector='.blog-post-s3-thumb-cats' data-mtst-label='Blog Post S3 - Category'>
                            <a href='http://meridianthemes-demo.net/the-essence/category/personal/' rel='category tag'>Personal</a> </div>
                          { /* <!-- .blog-post-s3-thumb-cats --> */}
                        </div>
                        { /* <!-- .blog-post-s3-thumb --> */}
                        <div className='blog-post-s3-main'>
                          <h4 className='blog-post-s3-title' data-mtst-selector='.blog-post-s3-title' data-mtst-label='Blog Post S3 - Title' data-mtst-no-support='border,background'><a href='http://meridianthemes-demo.net/the-essence/2016/04/06/leon-bridges-and-andra-day-rbs-rising-stars-talk-teaming-up/'>Leon Bridges and Andra Day, R&amp;Bâ€™s Rising Stars, Talk Teaming Up</a></h4>
                          <div className='blog-post-s3-meta'>
                            <span className='blog-post-s3-meta-author' data-mtst-selector='.blog-post-s3-meta-author a' data-mtst-label='Blog Post S2 - Author' data-mtst-no-support='spacing,background,border'>
                              <a href='http://meridianthemes-demo.net/the-essence/author/0176wpczar/' title='Posts by Carley Keener' rel='author'>Carley Keener</a>			</span>
                            { /* <!-- .blog-post-s3-meta-author --> */}
                            <span className='blog-post-s3-meta-separator'></span>
                            <span className='blog-post-s3-meta-date' data-mtst-selector='.blog-post-s3-meta-date' data-mtst-label='Blog Post S2 - Date' data-mtst-no-support='spacing,background,border'>10 months ago			</span>
                            { /* <!-- .blog-post-s3-meta-date --> */}
                          </div>
                          { /* <!-- .vertica-carousel-item-meta --> */}
                        </div>
                        { /* <!-- .blog-post-s3-main --> */}
                      </div>
                    </div>
                    <div className='owl-item carousel-item-visible' styleERR='width: 371px;'>
                      <div className='blog-post-s3 clearfix col col-3 carousel-item  post-36 post type-post status-publish format-standard has-post-thumbnail hentry category-personal tag-carousel' styleERR='padding-left: 14.9592px; padding-right: 14.9592px;'>
                        <div className='blog-post-s3-thumb'>
                          <a href='http://meridianthemes-demo.net/the-essence/2016/04/06/hot-looks-a-fun-random-beauty-report-straight-from-the-closet/'><img width='395' height='373' src='src/11-1-395x373.jpg' className='attachment-the-essence-s3-4 size-the-essence-s3-4 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/11-1-395x373.jpg 395w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/11-1-288x271.jpg 288w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/11-1-401x378.jpg 401w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/11-1-260x245.jpg 260w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/11-1-189x178.jpg 189w' sizes='(max-width: 395px) 100vw, 395px' /></a>
                          <div className='blog-post-s3-thumb-cats' data-mtst-selector='.blog-post-s3-thumb-cats' data-mtst-label='Blog Post S3 - Category'>
                            <a href='http://meridianthemes-demo.net/the-essence/category/personal/' rel='category tag'>Personal</a> </div>
                          { /* <!-- .blog-post-s3-thumb-cats --> */}
                        </div>
                        { /* <!-- .blog-post-s3-thumb --> */}
                        <div className='blog-post-s3-main'>
                          <h4 className='blog-post-s3-title' data-mtst-selector='.blog-post-s3-title' data-mtst-label='Blog Post S3 - Title' data-mtst-no-support='border,background'><a href='http://meridianthemes-demo.net/the-essence/2016/04/06/hot-looks-a-fun-random-beauty-report-straight-from-the-closet/'>Hot Looks: A Fun, Random Beauty Report Straight From The Closet</a></h4>
                          <div className='blog-post-s3-meta'>
                            <span className='blog-post-s3-meta-author' data-mtst-selector='.blog-post-s3-meta-author a' data-mtst-label='Blog Post S2 - Author' data-mtst-no-support='spacing,background,border'>
                              <a href='http://meridianthemes-demo.net/the-essence/author/0176wpczar/' title='Posts by Carley Keener' rel='author'>Carley Keener</a>			</span>
                            { /* <!-- .blog-post-s3-meta-author --> */}
                            <span className='blog-post-s3-meta-separator'></span>
                            <span className='blog-post-s3-meta-date' data-mtst-selector='.blog-post-s3-meta-date' data-mtst-label='Blog Post S2 - Date' data-mtst-no-support='spacing,background,border'>10 months ago			</span>
                            { /* <!-- .blog-post-s3-meta-date --> */}
                          </div>
                          { /* <!-- .vertica-carousel-item-meta --> */}
                        </div>
                        { /* <!-- .blog-post-s3-main --> */}
                      </div>
                    </div>
                    <div className='owl-item' styleERR='width: 371px;'>
                      <div className='blog-post-s3 clearfix col col-3 col-last carousel-item  post-35 post type-post status-publish format-standard has-post-thumbnail hentry category-travel tag-beauty tag-carousel tag-hair tag-style' styleERR='padding-left: 14.9592px; padding-right: 14.9592px;'>
                        <div className='blog-post-s3-thumb'>
                          <a href='http://meridianthemes-demo.net/the-essence/2016/04/06/poached-eggs-with-roasted-tomatoes-and-portabellas-copy/'><img width='395' height='373' src='src/10-1-395x373.jpg' className='attachment-the-essence-s3-4 size-the-essence-s3-4 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/10-1-395x373.jpg 395w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/10-1-288x271.jpg 288w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/10-1-401x378.jpg 401w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/10-1-260x245.jpg 260w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/10-1-189x178.jpg 189w' sizes='(max-width: 395px) 100vw, 395px' /></a>
                          <div className='blog-post-s3-thumb-cats' data-mtst-selector='.blog-post-s3-thumb-cats' data-mtst-label='Blog Post S3 - Category'>
                            <a href='http://meridianthemes-demo.net/the-essence/category/travel/' rel='category tag'>Travel</a> </div>
                          { /* <!-- .blog-post-s3-thumb-cats --> */}
                        </div>
                        { /* <!-- .blog-post-s3-thumb --> */}
                        <div className='blog-post-s3-main'>
                          <h4 className='blog-post-s3-title' data-mtst-selector='.blog-post-s3-title' data-mtst-label='Blog Post S3 - Title' data-mtst-no-support='border,background'><a href='http://meridianthemes-demo.net/the-essence/2016/04/06/poached-eggs-with-roasted-tomatoes-and-portabellas-copy/'>How to Make the Best French Toast of Your Life</a></h4>
                          <div className='blog-post-s3-meta'>
                            <span className='blog-post-s3-meta-author' data-mtst-selector='.blog-post-s3-meta-author a' data-mtst-label='Blog Post S2 - Author' data-mtst-no-support='spacing,background,border'>
                              <a href='http://meridianthemes-demo.net/the-essence/author/0176wpczar/' title='Posts by Carley Keener' rel='author'>Carley Keener</a>			</span>
                            { /* <!-- .blog-post-s3-meta-author --> */}
                            <span className='blog-post-s3-meta-separator'></span>
                            <span className='blog-post-s3-meta-date' data-mtst-selector='.blog-post-s3-meta-date' data-mtst-label='Blog Post S2 - Date' data-mtst-no-support='spacing,background,border'>10 months ago			</span>
                            { /* <!-- .blog-post-s3-meta-date --> */}
                          </div>
                          { /* <!-- .vertica-carousel-item-meta --> */}
                        </div>
                        { /* <!-- .blog-post-s3-main --> */}
                      </div>
                    </div>
                    <div className='owl-item' styleERR='width: 371px;'>
                      <div className='blog-post-s3 clearfix col col-3 col-first carousel-item  post-33 post type-post status-publish format-standard has-post-thumbnail hentry category-personal tag-beauty tag-carousel tag-hair tag-style' styleERR='padding-left: 14.9592px; padding-right: 14.9592px;'>
                        <div className='blog-post-s3-thumb'>
                          <a href='http://meridianthemes-demo.net/the-essence/2016/04/06/poached-eggs-with-roasted-tomatoes-and-portabellas/'><img width='395' height='373' src='src/9-1-395x373.jpg' className='attachment-the-essence-s3-4 size-the-essence-s3-4 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/9-1-395x373.jpg 395w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/9-1-288x271.jpg 288w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/9-1-401x378.jpg 401w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/9-1-260x245.jpg 260w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/9-1-189x178.jpg 189w' sizes='(max-width: 395px) 100vw, 395px' /></a>
                          <div className='blog-post-s3-thumb-cats' data-mtst-selector='.blog-post-s3-thumb-cats' data-mtst-label='Blog Post S3 - Category'>
                            <a href='http://meridianthemes-demo.net/the-essence/category/personal/' rel='category tag'>Personal</a> </div>
                          { /* <!-- .blog-post-s3-thumb-cats --> */}
                        </div>
                        { /* <!-- .blog-post-s3-thumb --> */}
                        <div className='blog-post-s3-main'>
                          <h4 className='blog-post-s3-title' data-mtst-selector='.blog-post-s3-title' data-mtst-label='Blog Post S3 - Title' data-mtst-no-support='border,background'><a href='http://meridianthemes-demo.net/the-essence/2016/04/06/poached-eggs-with-roasted-tomatoes-and-portabellas/'>Poached Eggs with Roasted Tomatoes and Portabellas</a></h4>
                          <div className='blog-post-s3-meta'>
                            <span className='blog-post-s3-meta-author' data-mtst-selector='.blog-post-s3-meta-author a' data-mtst-label='Blog Post S2 - Author' data-mtst-no-support='spacing,background,border'>
                              <a href='http://meridianthemes-demo.net/the-essence/author/0176wpczar/' title='Posts by Carley Keener' rel='author'>Carley Keener</a>			</span>
                            { /* <!-- .blog-post-s3-meta-author --> */}
                            <span className='blog-post-s3-meta-separator'></span>
                            <span className='blog-post-s3-meta-date' data-mtst-selector='.blog-post-s3-meta-date' data-mtst-label='Blog Post S2 - Date' data-mtst-no-support='spacing,background,border'>10 months ago			</span>
                            { /* <!-- .blog-post-s3-meta-date --> */}
                          </div>
                          { /* <!-- .vertica-carousel-item-meta --> */}
                        </div>
                        { /* <!-- .blog-post-s3-main --> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              { /* <!-- .vertical-carousel --> */}
              <span className='carousel-nav-prev'><span className='fa fa-angle-left'></span></span>
              <span className='carousel-nav-next'><span className='fa fa-angle-right'></span></span>
            </div>
            { /* <!-- .wrapper --> */}
          </div>
          { /* <!-- .vertical-carousel-wrapper --> */}
          <div className='promo-boxes clearfix'>
            <div className='wrapper'>
              <div className='promo-box promo-box-1 col col-4' styleERR='background-image:url(http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/box1-1.jpg)' data-mtst-selector='.promo-box' data-mtst-label='Promo Box' data-mtst-no-support='typography'>
                <div className='promo-box-inner' data-mtst-selector='.promo-box-inner' data-mtst-label='Promo Box - Inner' data-mtst-no-support='typography'>
                  <div className='promo-box-secondary' data-mtst-selector='.promo-box-secondary' data-mtst-label='Promo Box - Subtitle' data-mtst-no-support='background,border'>Learn More</div>
                  <h2 className='promo-box-primary' data-mtst-selector='.promo-box-primary' data-mtst-label='Promo Box - Title' data-mtst-no-support='background,border'>About Myself</h2>
                </div>
                { /* <!-- .promo-box-inner --> */}
                <a href='http://meridianthemes-demo.net/the-essence/about/' className='promo-box-link'></a>
              </div>
              { /* <!-- .promo-box --> */}
              <div className='promo-box promo-box-2 col col-4' styleERR='background-image:url(http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/box2-1.jpg)'>
                <div className='promo-box-inner'>
                  <div className='promo-box-secondary'>Follow Me</div>
                  <h2 className='promo-box-primary'>On Instagram</h2>
                </div>
                { /* <!-- .promo-box-inner --> */}
                <a href='http://meridianthemes-demo.net/the-essence/2016/04/06/how-bette-davis-became-an-icon-by-refusing-to-conform-at-every-turn/' className='promo-box-link'></a>
              </div>
              { /* <!-- .promo-box --> */}
              <div className='promo-box promo-box-3 col col-4 col-last' styleERR='background-image:url(http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/box3-1.jpg)'>
                <div className='promo-box-inner'>
                  <div className='promo-box-secondary'>Discover</div>
                  <h2 className='promo-box-primary'>My Travels</h2>
                </div>
                { /* <!-- .promo-box-inner --> */}
                <a href='http://meridianthemes-demo.net/the-essence/category/travel/' className='promo-box-link'></a>
              </div>
              { /* <!-- .promo-box --> */}
            </div>
            { /* <!-- .wrapper --> */}
          </div>
          { /* <!-- .promo-boxes --> */}
          <div id='main' className='site-content'>
            <div className='wrapper clearfix'>
              <div id='content' className='col col-8'>
                <div className='blog-posts-listing blog-posts-listing-1_cs_12'>
                  <div className='blog-posts-listing-inner clearfix'>
                    <div className='blog-post clearfix col col-12 col-first col-last  post-39 post type-post status-publish format-standard has-post-thumbnail hentry category-travel tag-beauty tag-carousel tag-hair tag-style'>
                      <div className='blog-post-cats' data-mtst-selector='.blog-post-cats' data-mtst-label='Blog Post S1 - Category'>
                        <a href='http://meridianthemes-demo.net/the-essence/category/travel/' rel='category tag'>Travel</a> </div>
                      { /* <!-- .blog-post-cats --> */}
                      <div className='blog-post-title'>
                        <h2 data-mtst-selector='.blog-post-title h2' data-mtst-label='Blog Post S1 - Title' data-mtst-no-support='spacing,border'><a href='http://meridianthemes-demo.net/the-essence/2016/04/07/why-did-reed-krakoff-walk-away-from-his-brand/'>Why Did Reed Krakoff Walk Away from His Brand?</a></h2>
                      </div>
                      { /* <!-- .blog-post-title --> */}
                      <div className='blog-post-meta clearfix'>
                        <div className='blog-post-meta-author clearfix'>
                          <div className='blog-post-meta-author-avatar'><img alt='' src='src/gravatar.jpg' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/themes/the-essence/images/gravatar.jpg 2x' className='avatar avatar-40 photo' height='40' width='40' /></div>
                          <div className='blog-post-meta-author-main'>
                            <div className='blog-post-meta-author-name' data-mtst-selector='.blog-post-meta-author-name' data-mtst-label='Blog S1 - Author' data-mtst-no-support='border,background'>by <a href='http://meridianthemes-demo.net/the-essence/author/0176wpczar/' title='Posts by Carley Keener' rel='author'>Carley Keener</a></div>
                            <div className='blog-post-meta-author-date' data-mtst-selector='.blog-post-meta-author-date' data-mtst-label='Blog S1 - Date' data-mtst-no-support='border,background'>10 months ago</div>
                          </div>
                          { /* <!-- .blog-post-meta-author-main --> */}
                        </div>
                        { /* <!-- .blog-post-meta-author --> */}
                        <div className='blog-post-meta-separator'></div>
                        <div className='blog-post-meta-comments-count' data-mtst-selector='.blog-post-meta-comments-count' data-mtst-label='Blog S1 - Comment Count' data-mtst-no-support='border,background'>
                          <span className='fa fa-commenting-o' data-mtst-selector='.blog-post-meta-comments-count .fa' data-mtst-label='Blog S1 - Comment Count Icon' data-mtst-no-support='border,background'></span>
                          <span><a href='http://meridianthemes-demo.net/the-essence/2016/04/07/why-did-reed-krakoff-walk-away-from-his-brand/#comments'>3 comments</a></span>
                        </div>
                        { /* <!-- .blog-post-meta-comments-count --> */}
                        <div className='blog-post-meta-separator'></div>
                        <div className='blog-post-meta-share-count'>
                          <span className='blog-post-meta-share-count-num' data-mtst-selector='.blog-post-meta-share-count-num' data-mtst-label='Blog S1 - Share Count' data-mtst-no-support='border,background'>108</span>
                          <span className='blog-post-meta-share-count-text' data-mtst-selector='.blog-post-meta-share-count-text' data-mtst-label='Blog S1 - Share Count' data-mtst-no-support='border,background'>shares</span>
                        </div>
                        { /* <!-- .blog-post-meta-share-count --> */}
                        <div className='blog-post-meta-separator'></div>
                        <div className='blog-post-meta-share'>
                          <a href='http://meridianthemes-demo.net/the-essence/#' className='social-link-facebook' target='_blank' onClick='return the_essence_social_share(400, 300, &#39;http://www.facebook.com/share.php?u=http://meridianthemes-demo.net/the-essence/2016/04/07/why-did-reed-krakoff-walk-away-from-his-brand/&#39;)'><span className='fa fa-facebook-square'></span></a>
                          <a href='http://meridianthemes-demo.net/the-essence/#' className='social-link-pinterest' onClick='return the_essence_social_share(400, 300, &#39;https://pinterest.com/pin/create/button/?url=http://meridianthemes-demo.net/the-essence/2016/04/07/why-did-reed-krakoff-walk-away-from-his-brand/&amp;media=http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1.jpg&#39;)'><span className='fa fa-pinterest-square'></span></a>
                          <a href='http://meridianthemes-demo.net/the-essence/#' className='social-link-twitter' onClick='return the_essence_social_share(400, 300, &#39;https://twitter.com/home?status=Why Did Reed Krakoff Walk Away from His Brand? http://meridianthemes-demo.net/the-essence/2016/04/07/why-did-reed-krakoff-walk-away-from-his-brand/&#39;)'><span className='fa fa-twitter'></span></a>
                          <a href='http://meridianthemes-demo.net/the-essence/#' className='social-link-google-plus' onClick='return the_essence_social_share(400, 300, &#39;https://plus.google.com/share?url=http://meridianthemes-demo.net/the-essence/2016/04/07/why-did-reed-krakoff-walk-away-from-his-brand/&#39;)'><span className='fa fa-google-plus'></span></a>
                          <a href='mailto:someone@example.com?subject=Why%20Did%20Reed%20Krakoff%20Walk%20Away%20from%20His%20Brand%3F&amp;body=Why%20Did%20Reed%20Krakoff%20Walk%20Away%20from%20His%20Brand%3F%20http%3A%2F%2Fmeridianthemes-demo.net%2Fthe-essence%2F2016%2F04%2F07%2Fwhy-did-reed-krakoff-walk-away-from-his-brand%2F' className='social-link-email'><span className='fa fa-envelope-o'></span></a>
                        </div>
                        { /* <!-- .blog-post-meta-share --> */}
                      </div>
                      { /* <!-- .blog-post-meta --> */}
                      <div className='blog-post-thumb'>
                        <a href='http://meridianthemes-demo.net/the-essence/2016/04/07/why-did-reed-krakoff-walk-away-from-his-brand/'><img width='823' height='515' src='src/8-1-823x515.jpg' className='attachment-the-essence-s1-s-12 size-the-essence-s1-s-12 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1.jpg 823w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-300x188.jpg 300w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-768x481.jpg 768w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-600x375.jpg 600w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-610x381.jpg 610w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-395x247.jpg 395w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-288x180.jpg 288w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-401x251.jpg 401w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-260x162.jpg 260w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-189x118.jpg 189w' sizes='(max-width: 823px) 100vw, 823px' /></a>
                      </div>
                      { /* <!-- .blog-post-thumb --> */}
                      <div className='blog-post-excerpt' data-mtst-selector='.blog-post-excerpt' data-mtst-label='Blog Post S1 - Excerpt'>
                        <p><span className='blog-post-excerpt-big-cap'>N</span>am ultrices orci nibh, eget malesuada nibh eleifend sit amet. Aliquamlaoreet diam ut quam fringilla egestas. Cras commodo erat quis congue pretium. Aliquam erat volutpat. Quisque elementumtortor elit, ac porta leo ultrices id. Aliquam sit amet mattis mi. Donec facilisis consectetur interdum. </p>
                        <p>Curabitur aliquam consequat ullamcorper. Maecenas eget lectus commodo, laoreet nulla eu, viverra enim. Cum sociisnatoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                      </div>
                      { /* <!-- .blog-post-excerpt --> */}
                      <div className='blog-post-read-more'>
                        <a data-mtst-selector='.blog-post-read-more a' data-mtst-label='Blog Post S1 - Button' href='http://meridianthemes-demo.net/the-essence/2016/04/07/why-did-reed-krakoff-walk-away-from-his-brand/'>CONTINUE READING</a>
                      </div>
                      { /* <!-- .blog-post-read-more --> */}
                      <div className='related-posts-wrapper'>
                        <h2 className='section-heading pink'>Related Posts</h2>
                        <div className='related-posts clearfix'>
                          <div className='col col-4  blog-post-s4'>
                            <div className='blog-post-s4-thumb'>
                              <a href='http://meridianthemes-demo.net/the-essence/2016/04/06/how-bette-davis-became-an-icon-by-refusing-to-conform-at-every-turn/'><img width='395' height='274' src='src/12-1-395x274.jpg' className='attachment-the-essence-s4-4 size-the-essence-s4-4 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/12-1-395x274.jpg 395w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/12-1-610x424.jpg 610w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/12-1-288x200.jpg 288w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/12-1-401x278.jpg 401w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/12-1-260x180.jpg 260w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/12-1-189x131.jpg 189w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/12-1-600x416.jpg 600w' sizes='(max-width: 395px) 100vw, 395px' /></a>
                            </div>
                            { /* <!-- .blog-post-s4-thumb --> */}
                            <div className='blog-post-s4-main'>
                              <div className='blog-post-s4-meta'>
                                <span className='blog-post-s4-meta-author' data-mtst-selector='.related-posts .blog-post-s4-meta-author a' data-mtst-label='Related Post - Author' data-mtst-no-support='background,border,spacing'><a href='http://meridianthemes-demo.net/the-essence/author/Carley%20Keener/'>Carley Keener</a></span>
                                <span className='blog-post-s4-meta-separator'></span>
                                <span className='blog-post-s4-meta-date' data-mtst-selector='.related-posts .blog-post-s4-meta-date' data-mtst-label='Related Post - Date' data-mtst-no-support='background,border,spacing'>10 months ago</span>
                              </div>
                              { /* <!-- .blog-post-s4-meta --> */}
                              <h4 className='blog-post-s4-title' data-mtst-selector='.related-posts .blog-post-s4-title' data-mtst-label='Related Post - Title' data-mtst-no-support='background,border,spacing'><a href='http://meridianthemes-demo.net/the-essence/2016/04/06/how-bette-davis-became-an-icon-by-refusing-to-conform-at-every-turn/'>How Bette Davis Became an Icon By Refusing to Conform at Every Turn</a></h4>
                            </div>
                            { /* <!-- .blog-post-s4-main --> */}
                          </div>
                          { /* <!-- .blog-post-s4 --> */}
                          <div className='col col-4  blog-post-s4'>
                            <div className='blog-post-s4-thumb'>
                              <a href='http://meridianthemes-demo.net/the-essence/2016/04/07/heres-how-you-can-check-if-your-partner-is-cheating-on-tinder/'><img width='395' height='274' src='src/14-395x274.jpg' className='attachment-the-essence-s4-4 size-the-essence-s4-4 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/14-395x274.jpg 395w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/14-610x424.jpg 610w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/14-288x200.jpg 288w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/14-401x278.jpg 401w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/14-260x180.jpg 260w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/14-189x131.jpg 189w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/14-600x416.jpg 600w' sizes='(max-width: 395px) 100vw, 395px' /></a>
                            </div>
                            { /* <!-- .blog-post-s4-thumb --> */}
                            <div className='blog-post-s4-main'>
                              <div className='blog-post-s4-meta'>
                                <span className='blog-post-s4-meta-author' data-mtst-selector='.related-posts .blog-post-s4-meta-author a' data-mtst-label='Related Post - Author' data-mtst-no-support='background,border,spacing'><a href='http://meridianthemes-demo.net/the-essence/author/Carley%20Keener/'>Carley Keener</a></span>
                                <span className='blog-post-s4-meta-separator'></span>
                                <span className='blog-post-s4-meta-date' data-mtst-selector='.related-posts .blog-post-s4-meta-date' data-mtst-label='Related Post - Date' data-mtst-no-support='background,border,spacing'>10 months ago</span>
                              </div>
                              { /* <!-- .blog-post-s4-meta --> */}
                              <h4 className='blog-post-s4-title' data-mtst-selector='.related-posts .blog-post-s4-title' data-mtst-label='Related Post - Title' data-mtst-no-support='background,border,spacing'><a href='http://meridianthemes-demo.net/the-essence/2016/04/07/heres-how-you-can-check-if-your-partner-is-cheating-on-tinder/'>Hereâ€™s How You Can Check if Your Partner Is Cheating on Tinder</a></h4>
                            </div>
                            { /* <!-- .blog-post-s4-main --> */}
                          </div>
                          { /* <!-- .blog-post-s4 --> */}
                          <div className='col col-4 col-last blog-post-s4'>
                            <div className='blog-post-s4-thumb'>
                              <a href='http://meridianthemes-demo.net/the-essence/2016/04/06/poached-eggs-with-roasted-tomatoes-and-portabellas-copy/'><img width='395' height='274' src='src/10-1-395x274.jpg' className='attachment-the-essence-s4-4 size-the-essence-s4-4 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/10-1-395x274.jpg 395w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/10-1-610x424.jpg 610w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/10-1-288x200.jpg 288w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/10-1-401x278.jpg 401w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/10-1-260x180.jpg 260w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/10-1-189x131.jpg 189w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/10-1-600x416.jpg 600w' sizes='(max-width: 395px) 100vw, 395px' /></a>
                            </div>
                            { /* <!-- .blog-post-s4-thumb --> */}
                            <div className='blog-post-s4-main'>
                              <div className='blog-post-s4-meta'>
                                <span className='blog-post-s4-meta-author' data-mtst-selector='.related-posts .blog-post-s4-meta-author a' data-mtst-label='Related Post - Author' data-mtst-no-support='background,border,spacing'><a href='http://meridianthemes-demo.net/the-essence/author/Carley%20Keener/'>Carley Keener</a></span>
                                <span className='blog-post-s4-meta-separator'></span>
                                <span className='blog-post-s4-meta-date' data-mtst-selector='.related-posts .blog-post-s4-meta-date' data-mtst-label='Related Post - Date' data-mtst-no-support='background,border,spacing'>10 months ago</span>
                              </div>
                              { /* <!-- .blog-post-s4-meta --> */}
                              <h4 className='blog-post-s4-title' data-mtst-selector='.related-posts .blog-post-s4-title' data-mtst-label='Related Post - Title' data-mtst-no-support='background,border,spacing'><a href='http://meridianthemes-demo.net/the-essence/2016/04/06/poached-eggs-with-roasted-tomatoes-and-portabellas-copy/'>How to Make the Best French Toast of Your Life</a></h4>
                            </div>
                            { /* <!-- .blog-post-s4-main --> */}
                          </div>
                          { /* <!-- .blog-post-s4 --> */}
                        </div>
                        { /* <!-- .related-posts --> */}
                      </div>
                      { /* <!-- .related-posts-wrapper --> */}
                    </div>
                    { /* <!-- .blog-post --> */}
                    <div className='blog-post clearfix col col-12 col-first col-last  post-79 post type-post status-publish format-standard has-post-thumbnail hentry category-beauty'>
                      <div className='blog-post-cats' data-mtst-selector='.blog-post-cats' data-mtst-label='Blog Post S1 - Category'>
                        <a href='http://meridianthemes-demo.net/the-essence/category/beauty/' rel='category tag'>Beauty</a> </div>
                      { /* <!-- .blog-post-cats --> */}
                      <div className='blog-post-title'>
                        <h2 data-mtst-selector='.blog-post-title h2' data-mtst-label='Blog Post S1 - Title' data-mtst-no-support='spacing,border'><a href='http://meridianthemes-demo.net/the-essence/2016/04/07/sir-patrick-stewart-answers-the-proust-questionnaire/'>Sir Patrick Stewart Answers the Proust Questionnaire</a></h2>
                      </div>
                      { /* <!-- .blog-post-title --> */}
                      <div className='blog-post-meta clearfix'>
                        <div className='blog-post-meta-author clearfix'>
                          <div className='blog-post-meta-author-avatar'><img alt='' src='src/gravatar.jpg' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/themes/the-essence/images/gravatar.jpg 2x' className='avatar avatar-40 photo' height='40' width='40' /></div>
                          <div className='blog-post-meta-author-main'>
                            <div className='blog-post-meta-author-name' data-mtst-selector='.blog-post-meta-author-name' data-mtst-label='Blog S1 - Author' data-mtst-no-support='border,background'>by <a href='http://meridianthemes-demo.net/the-essence/author/0176wpczar/' title='Posts by Carley Keener' rel='author'>Carley Keener</a></div>
                            <div className='blog-post-meta-author-date' data-mtst-selector='.blog-post-meta-author-date' data-mtst-label='Blog S1 - Date' data-mtst-no-support='border,background'>10 months ago</div>
                          </div>
                          { /* <!-- .blog-post-meta-author-main --> */}
                        </div>
                        { /* <!-- .blog-post-meta-author --> */}
                        <div className='blog-post-meta-separator'></div>
                        <div className='blog-post-meta-comments-count' data-mtst-selector='.blog-post-meta-comments-count' data-mtst-label='Blog S1 - Comment Count' data-mtst-no-support='border,background'>
                          <span className='fa fa-commenting-o' data-mtst-selector='.blog-post-meta-comments-count .fa' data-mtst-label='Blog S1 - Comment Count Icon' data-mtst-no-support='border,background'></span>
                          <span><a href='http://meridianthemes-demo.net/the-essence/2016/04/07/sir-patrick-stewart-answers-the-proust-questionnaire/#comments'>3 comments</a></span>
                        </div>
                        { /* <!-- .blog-post-meta-comments-count --> */}
                        <div className='blog-post-meta-separator'></div>
                        <div className='blog-post-meta-share-count'>
                          <span className='blog-post-meta-share-count-num' data-mtst-selector='.blog-post-meta-share-count-num' data-mtst-label='Blog S1 - Share Count' data-mtst-no-support='border,background'>101</span>
                          <span className='blog-post-meta-share-count-text' data-mtst-selector='.blog-post-meta-share-count-text' data-mtst-label='Blog S1 - Share Count' data-mtst-no-support='border,background'>shares</span>
                        </div>
                        { /* <!-- .blog-post-meta-share-count --> */}
                        <div className='blog-post-meta-separator'></div>
                        <div className='blog-post-meta-share'>
                          <a href='http://meridianthemes-demo.net/the-essence/#' className='social-link-facebook' target='_blank' onClick='return the_essence_social_share(400, 300, &#39;http://www.facebook.com/share.php?u=http://meridianthemes-demo.net/the-essence/2016/04/07/sir-patrick-stewart-answers-the-proust-questionnaire/&#39;)'><span className='fa fa-facebook-square'></span></a>
                          <a href='http://meridianthemes-demo.net/the-essence/#' className='social-link-pinterest' onClick='return the_essence_social_share(400, 300, &#39;https://pinterest.com/pin/create/button/?url=http://meridianthemes-demo.net/the-essence/2016/04/07/sir-patrick-stewart-answers-the-proust-questionnaire/&amp;media=http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/15.jpg&#39;)'><span className='fa fa-pinterest-square'></span></a>
                          <a href='http://meridianthemes-demo.net/the-essence/#' className='social-link-twitter' onClick='return the_essence_social_share(400, 300, &#39;https://twitter.com/home?status=Sir Patrick Stewart Answers the Proust Questionnaire http://meridianthemes-demo.net/the-essence/2016/04/07/sir-patrick-stewart-answers-the-proust-questionnaire/&#39;)'><span className='fa fa-twitter'></span></a>
                          <a href='http://meridianthemes-demo.net/the-essence/#' className='social-link-google-plus' onClick='return the_essence_social_share(400, 300, &#39;https://plus.google.com/share?url=http://meridianthemes-demo.net/the-essence/2016/04/07/sir-patrick-stewart-answers-the-proust-questionnaire/&#39;)'><span className='fa fa-google-plus'></span></a>
                          <a href='mailto:someone@example.com?subject=Sir%20Patrick%20Stewart%20Answers%20the%20Proust%20Questionnaire&amp;body=Sir%20Patrick%20Stewart%20Answers%20the%20Proust%20Questionnaire%20http%3A%2F%2Fmeridianthemes-demo.net%2Fthe-essence%2F2016%2F04%2F07%2Fsir-patrick-stewart-answers-the-proust-questionnaire%2F' className='social-link-email'><span className='fa fa-envelope-o'></span></a>
                        </div>
                        { /* <!-- .blog-post-meta-share --> */}
                      </div>
                      { /* <!-- .blog-post-meta --> */}
                      <div className='blog-post-thumb'>
                        <a href='http://meridianthemes-demo.net/the-essence/2016/04/07/sir-patrick-stewart-answers-the-proust-questionnaire/'><img width='823' height='515' src='src/15-823x515.jpg' className='attachment-the-essence-s1-s-12 size-the-essence-s1-s-12 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/15.jpg 823w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/15-300x188.jpg 300w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/15-768x481.jpg 768w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/15-600x375.jpg 600w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/15-610x381.jpg 610w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/15-395x247.jpg 395w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/15-288x180.jpg 288w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/15-401x251.jpg 401w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/15-260x162.jpg 260w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/15-189x118.jpg 189w' sizes='(max-width: 823px) 100vw, 823px' /></a>
                      </div>
                      { /* <!-- .blog-post-thumb --> */}
                      <div className='blog-post-excerpt' data-mtst-selector='.blog-post-excerpt' data-mtst-label='Blog Post S1 - Excerpt'>
                        <p><span className='blog-post-excerpt-big-cap'>C</span>urabitur dolor leo, eleifend a mollis at, iaculis vitae erat. Integer vulputate, erat nec tempus interdum, ipsum nisl tempor ligula, ac vehicula eros urna sit amet ex. Etiam non ex nec purus ullamcorper lobortis tincidunt id nibh.</p>
                        <p>Sed ullamcorper lacus sed ullamcorper viverra. Curabitur vitae lacinia felis. Phasellus vitae dolor pellentesque,varius lectus in, mollis leo. Maecenas eget lectus commodo, laoreet nulla eu, viverra enim.</p>
                      </div>
                      { /* <!-- .blog-post-excerpt --> */}
                      <div className='blog-post-read-more'>
                        <a data-mtst-selector='.blog-post-read-more a' data-mtst-label='Blog Post S1 - Button' href='http://meridianthemes-demo.net/the-essence/2016/04/07/sir-patrick-stewart-answers-the-proust-questionnaire/'>CONTINUE READING</a>
                      </div>
                      { /* <!-- .blog-post-read-more --> */}
                      <div className='related-posts-wrapper'>
                        <h2 className='section-heading pink'>Related Posts</h2>
                        <div className='related-posts clearfix'>
                          <div className='col col-4  blog-post-s4'>
                            <div className='blog-post-s4-thumb'>
                              <a href='http://meridianthemes-demo.net/the-essence/2016/04/06/the-walking-dead-which-major-character-just-died-in-the-season-6-finale/'><img width='395' height='274' src='src/3-395x274.jpg' className='attachment-the-essence-s4-4 size-the-essence-s4-4 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/3-395x274.jpg 395w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/3-610x424.jpg 610w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/3-288x200.jpg 288w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/3-401x278.jpg 401w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/3-260x180.jpg 260w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/3-189x131.jpg 189w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/3-600x416.jpg 600w' sizes='(max-width: 395px) 100vw, 395px' /></a>
                            </div>
                            { /* <!-- .blog-post-s4-thumb --> */}
                            <div className='blog-post-s4-main'>
                              <div className='blog-post-s4-meta'>
                                <span className='blog-post-s4-meta-author' data-mtst-selector='.related-posts .blog-post-s4-meta-author a' data-mtst-label='Related Post - Author' data-mtst-no-support='background,border,spacing'><a href='http://meridianthemes-demo.net/the-essence/author/Carley%20Keener/'>Carley Keener</a></span>
                                <span className='blog-post-s4-meta-separator'></span>
                                <span className='blog-post-s4-meta-date' data-mtst-selector='.related-posts .blog-post-s4-meta-date' data-mtst-label='Related Post - Date' data-mtst-no-support='background,border,spacing'>10 months ago</span>
                              </div>
                              { /* <!-- .blog-post-s4-meta --> */}
                              <h4 className='blog-post-s4-title' data-mtst-selector='.related-posts .blog-post-s4-title' data-mtst-label='Related Post - Title' data-mtst-no-support='background,border,spacing'><a href='http://meridianthemes-demo.net/the-essence/2016/04/06/the-walking-dead-which-major-character-just-died-in-the-season-6-finale/'>The Walking Dead: Which Major Character Just Died in the Season 6 Finale?</a></h4>
                            </div>
                            { /* <!-- .blog-post-s4-main --> */}
                          </div>
                          { /* <!-- .blog-post-s4 --> */}
                          <div className='col col-4  blog-post-s4'>
                            <div className='blog-post-s4-thumb'>
                              <a href='http://meridianthemes-demo.net/the-essence/2016/04/07/rogue-one-trailer-star-wars-welcomes-yet-another-new-generation/'><img width='395' height='274' src='src/12-395x274.jpg' className='attachment-the-essence-s4-4 size-the-essence-s4-4 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/12-395x274.jpg 395w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/12-610x424.jpg 610w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/12-288x200.jpg 288w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/12-401x278.jpg 401w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/12-260x180.jpg 260w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/12-189x131.jpg 189w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/12-600x416.jpg 600w' sizes='(max-width: 395px) 100vw, 395px' /></a>
                            </div>
                            { /* <!-- .blog-post-s4-thumb --> */}
                            <div className='blog-post-s4-main'>
                              <div className='blog-post-s4-meta'>
                                <span className='blog-post-s4-meta-author' data-mtst-selector='.related-posts .blog-post-s4-meta-author a' data-mtst-label='Related Post - Author' data-mtst-no-support='background,border,spacing'><a href='http://meridianthemes-demo.net/the-essence/author/Carley%20Keener/'>Carley Keener</a></span>
                                <span className='blog-post-s4-meta-separator'></span>
                                <span className='blog-post-s4-meta-date' data-mtst-selector='.related-posts .blog-post-s4-meta-date' data-mtst-label='Related Post - Date' data-mtst-no-support='background,border,spacing'>10 months ago</span>
                              </div>
                              { /* <!-- .blog-post-s4-meta --> */}
                              <h4 className='blog-post-s4-title' data-mtst-selector='.related-posts .blog-post-s4-title' data-mtst-label='Related Post - Title' data-mtst-no-support='background,border,spacing'><a href='http://meridianthemes-demo.net/the-essence/2016/04/07/rogue-one-trailer-star-wars-welcomes-yet-another-new-generation/'>Rogue One Trailer: Star Wars Welcomes Yet Another New Generation</a></h4>
                            </div>
                            { /* <!-- .blog-post-s4-main --> */}
                          </div>
                          { /* <!-- .blog-post-s4 --> */}
                          <div className='col col-4 col-last blog-post-s4'>
                            <div className='blog-post-s4-thumb'>
                              <a href='http://meridianthemes-demo.net/the-essence/2016/04/06/harry-styles-had-to-fend-off-selfie-seeking-fan-at-grandmothers-funeral/'><img width='395' height='274' src='src/13-1-395x274.jpg' className='attachment-the-essence-s4-4 size-the-essence-s4-4 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/13-1-395x274.jpg 395w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/13-1-610x424.jpg 610w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/13-1-288x200.jpg 288w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/13-1-401x278.jpg 401w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/13-1-260x180.jpg 260w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/13-1-189x131.jpg 189w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/13-1-600x416.jpg 600w' sizes='(max-width: 395px) 100vw, 395px' /></a>
                            </div>
                            { /* <!-- .blog-post-s4-thumb --> */}
                            <div className='blog-post-s4-main'>
                              <div className='blog-post-s4-meta'>
                                <span className='blog-post-s4-meta-author' data-mtst-selector='.related-posts .blog-post-s4-meta-author a' data-mtst-label='Related Post - Author' data-mtst-no-support='background,border,spacing'><a href='http://meridianthemes-demo.net/the-essence/author/Carley%20Keener/'>Carley Keener</a></span>
                                <span className='blog-post-s4-meta-separator'></span>
                                <span className='blog-post-s4-meta-date' data-mtst-selector='.related-posts .blog-post-s4-meta-date' data-mtst-label='Related Post - Date' data-mtst-no-support='background,border,spacing'>10 months ago</span>
                              </div>
                              { /* <!-- .blog-post-s4-meta --> */}
                              <h4 className='blog-post-s4-title' data-mtst-selector='.related-posts .blog-post-s4-title' data-mtst-label='Related Post - Title' data-mtst-no-support='background,border,spacing'><a href='http://meridianthemes-demo.net/the-essence/2016/04/06/harry-styles-had-to-fend-off-selfie-seeking-fan-at-grandmothers-funeral/'>Harry Styles Had to Fend Off Selfie-Seeking Fan at Grandmotherâ€™s Funeral</a></h4>
                            </div>
                            { /* <!-- .blog-post-s4-main --> */}
                          </div>
                          { /* <!-- .blog-post-s4 --> */}
                        </div>
                        { /* <!-- .related-posts --> */}
                      </div>
                      { /* <!-- .related-posts-wrapper --> */}
                    </div>
                    { /* <!-- .blog-post --> */}
                  </div>
                  { /* <!-- .blog-posts-listing-inner --> */}
                  <div className='pagination pagination-type-loadmore'>
                    <ul className='clearfix'>
                      <li className='pagination-load-more active' data-mtst-selector='.pagination-load-more a' data-mtst-label='Pagination'><span className='pagination-load-more-line'></span>
                        <a href='http://meridianthemes-demo.net/the-essence/page/2/'><span className='fa fa-refresh'></span>LOAD MORE POSTS</a>
                      </li>
                    </ul>
                    <div className='load-more-temp'></div>
                  </div>
                  { /* <!-- .pagination --> */}
                </div>
                { /* <!-- .blog-posts-listing --> */}
              </div>
              { /* <!-- #content --> */}
              <aside id='sidebar' className='col col-4 col-last'>
                <div id='sidebar-inner'>
                  <section id='the_essence_about_author_widget-2' className='widget widget_the_essence_about_author_widget'>
                    <h2 className='widget-title' data-mtst-selector='#sidebar .widget-title' data-mtst-label='Sidebar - Widget Title'>About Me</h2>
                    <div className='about-author-widget' data-mtst-selector='.about-author-widget' data-mtst-label='About Author' data-mtst-no-support='typography'>
                      <div className='about-author-image'><img src='src/about.jpg' alt='I&#39;m Susanna, I blog about fashion.' /></div>
                      <div className='about-author-widget-info'>
                        <h2 className='about-author-widget-name' data-mtst-selector='.about-author-widget-name' data-mtst-label='About Author - Name' data-mtst-no-support='background,borders'>I'm Susanna, I blog about fashion.</h2>
                        <div className='about-author-widget-text' data-mtst-selector='.about-author-widget-text' data-mtst-label='About Author - Text' data-mtst-no-support='background,borders'>This season, the American designer will showcase a series of historic objects from the New York museum's.</div>
                      </div>
                      { /* <!-- .about-author-widget-info --> */}
                      <div className='about-author-signature-image'><img src='src/about-author-widget-signature.png' alt='I&#39;m Susanna, I blog about fashion.' /></div>
                    </div>
                    { /* <!-- .about-author-widget --> */}
                  </section>
                  <section id='the_essence_subscribe_widget-3' className='widget widget_the_essence_subscribe_widget'>
                    <h2 className='widget-title' data-mtst-selector='#sidebar .widget-title' data-mtst-label='Sidebar - Widget Title'>My Newsletter</h2>
                    <div className='subscribe-widget' styleERR='background-image:url(http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/news-1.jpg);' data-mtst-selector='.subscribe-widget' data-mtst-label='Subscribe' data-mtst-no-support='typography'>
                      <div className='subscribe-widget-inner' data-mtst-selector='.subscribe-widget-inner' data-mtst-label='Subscribe Inner' data-mtst-no-support='typography'>
                        <h4 data-mtst-selector='.subscribe-widget h4' data-mtst-label='Subscribe Title' data-mtst-no-support='background,border'>Receive My News Straight Into Your Inbox!</h4>
                        <div className='widget_wysija_cont shortcode_wysija'>
                          <div id='msg-form-wysija-shortcode587e307fde346-1' className='wysija-msg ajax'></div>
                          <form id='form-wysija-shortcode587e307fde346-1' method='post' action='http://meridianthemes-demo.net/the-essence/#wysija' className='widget_wysija shortcode_wysija'>
                            <p className='wysija-paragraph'>
                              <input type='text' name='wysija[user][email]' className='wysija-input validate[required,custom[email]]' title='Your Email Address' placeholder='Your Email Address' value='' />
                              <span className='abs-req'>
                                <input type='text' name='wysija[user][abs][email]' className='wysija-input validated[abs][email]' value='' />
                              </span>
                            </p>
                            <input className='wysija-submit wysija-submit-field' type='submit' value='Send' />
                            <input type='hidden' name='form_id' value='1' />
                            <input type='hidden' name='action' value='save' />
                            <input type='hidden' name='controller' value='subscribers' />
                            <input type='hidden' value='1' name='wysija-page' />
                            <input type='hidden' name='wysija[user_list][list_ids]' value='1' />
                          </form>
                        </div>
                        <h5 data-mtst-selector='.subscribe-widget h5' data-mtst-label='Subscribe Subtitle' data-mtst-no-support='background,border'>Donâ€™t Worry, I Don't Spam.</h5>
                      </div>
                      { /* <!-- .subscribe-widget-inner --> */}
                    </div>
                    { /* <!-- .subscribe-widget --> */}
                  </section>
                  <section id='the_essence_posts_list_widget-3' className='widget widget_the_essence_posts_list_widget'>
                    <h2 className='widget-title' data-mtst-selector='#sidebar .widget-title' data-mtst-label='Sidebar - Widget Title'>Popular Posts</h2>
                    <div className='posts-list-widget clearfix'>
                      <div className='blog-post-s6 clearfix col col-12  post-37 post type-post status-publish format-standard has-post-thumbnail hentry category-travel tag-beauty tag-hair tag-style'>
                        <div className='blog-post-s6-thumb'>
                          <a href='http://meridianthemes-demo.net/the-essence/2016/04/06/how-bette-davis-became-an-icon-by-refusing-to-conform-at-every-turn/'><img width='85' height='85' src='src/12-1-85x85.jpg' className='attachment-the-essence-small size-the-essence-small wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/12-1-85x85.jpg 85w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/12-1-150x150.jpg 150w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/12-1-170x170.jpg 170w' sizes='(max-width: 85px) 100vw, 85px' /></a>
                        </div>
                        { /* <!-- .blog-post-s6-thumb --> */}
                        <div className='blog-post-s6-main'>
                          <div className='blog-post-s6-title' data-mtst-selector='.blog-post-s6-title' data-mtst-label='Blog Post S6 - Title' data-mtst-no-support='background,border'><a href='http://meridianthemes-demo.net/the-essence/2016/04/06/how-bette-davis-became-an-icon-by-refusing-to-conform-at-every-turn/'>How Bette Davis Became an Icon By Refusing to Conform at Every Turn</a></div>
                          <div className='blog-post-s6-comments' data-mtst-selector='.blog-post-s6-comments' data-mtst-label='Blog Post S6 - Title' data-mtst-no-support='background,border'><span className='fa fa-commenting-o'></span>4 comments</div>
                        </div>
                        { /* <!-- .blog-post-s6-main --> */}
                      </div>
                      { /* <!-- .blog-post-s6-post --> */}
                      <div className='blog-post-s6 clearfix col col-12  post-39 post type-post status-publish format-standard has-post-thumbnail hentry category-travel tag-beauty tag-carousel tag-hair tag-style'>
                        <div className='blog-post-s6-thumb'>
                          <a href='http://meridianthemes-demo.net/the-essence/2016/04/07/why-did-reed-krakoff-walk-away-from-his-brand/'><img width='85' height='85' src='src/8-1-85x85.jpg' className='attachment-the-essence-small size-the-essence-small wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-85x85.jpg 85w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-150x150.jpg 150w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-170x170.jpg 170w' sizes='(max-width: 85px) 100vw, 85px' /></a>
                        </div>
                        { /* <!-- .blog-post-s6-thumb --> */}
                        <div className='blog-post-s6-main'>
                          <div className='blog-post-s6-title' data-mtst-selector='.blog-post-s6-title' data-mtst-label='Blog Post S6 - Title' data-mtst-no-support='background,border'><a href='http://meridianthemes-demo.net/the-essence/2016/04/07/why-did-reed-krakoff-walk-away-from-his-brand/'>Why Did Reed Krakoff Walk Away from His Brand?</a></div>
                          <div className='blog-post-s6-comments' data-mtst-selector='.blog-post-s6-comments' data-mtst-label='Blog Post S6 - Title' data-mtst-no-support='background,border'><span className='fa fa-commenting-o'></span>3 comments</div>
                        </div>
                        { /* <!-- .blog-post-s6-main --> */}
                      </div>
                      { /* <!-- .blog-post-s6-post --> */}
                      <div className='blog-post-s6 clearfix col col-12  post-76 post type-post status-publish format-standard has-post-thumbnail hentry category-travel tag-beauty tag-hair tag-style'>
                        <div className='blog-post-s6-thumb'>
                          <a href='http://meridianthemes-demo.net/the-essence/2016/04/07/heres-how-you-can-check-if-your-partner-is-cheating-on-tinder/'><img width='85' height='85' src='src/14-85x85.jpg' className='attachment-the-essence-small size-the-essence-small wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/14-85x85.jpg 85w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/14-150x150.jpg 150w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/14-170x170.jpg 170w' sizes='(max-width: 85px) 100vw, 85px' /></a>
                        </div>
                        { /* <!-- .blog-post-s6-thumb --> */}
                        <div className='blog-post-s6-main'>
                          <div className='blog-post-s6-title' data-mtst-selector='.blog-post-s6-title' data-mtst-label='Blog Post S6 - Title' data-mtst-no-support='background,border'><a href='http://meridianthemes-demo.net/the-essence/2016/04/07/heres-how-you-can-check-if-your-partner-is-cheating-on-tinder/'>Hereâ€™s How You Can Check if Your Partner Is Cheating on Tinder</a></div>
                          <div className='blog-post-s6-comments' data-mtst-selector='.blog-post-s6-comments' data-mtst-label='Blog Post S6 - Title' data-mtst-no-support='background,border'><span className='fa fa-commenting-o'></span>3 comments</div>
                        </div>
                        { /* <!-- .blog-post-s6-main --> */}
                      </div>
                      { /* <!-- .blog-post-s6-post --> */}
                      <div className='blog-post-s6 clearfix col col-12  post-79 post type-post status-publish format-standard has-post-thumbnail hentry category-beauty'>
                        <div className='blog-post-s6-thumb'>
                          <a href='http://meridianthemes-demo.net/the-essence/2016/04/07/sir-patrick-stewart-answers-the-proust-questionnaire/'><img width='85' height='85' src='src/15-85x85.jpg' className='attachment-the-essence-small size-the-essence-small wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/15-85x85.jpg 85w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/15-150x150.jpg 150w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/15-170x170.jpg 170w' sizes='(max-width: 85px) 100vw, 85px' /></a>
                        </div>
                        { /* <!-- .blog-post-s6-thumb --> */}
                        <div className='blog-post-s6-main'>
                          <div className='blog-post-s6-title' data-mtst-selector='.blog-post-s6-title' data-mtst-label='Blog Post S6 - Title' data-mtst-no-support='background,border'><a href='http://meridianthemes-demo.net/the-essence/2016/04/07/sir-patrick-stewart-answers-the-proust-questionnaire/'>Sir Patrick Stewart Answers the Proust Questionnaire</a></div>
                          <div className='blog-post-s6-comments' data-mtst-selector='.blog-post-s6-comments' data-mtst-label='Blog Post S6 - Title' data-mtst-no-support='background,border'><span className='fa fa-commenting-o'></span>3 comments</div>
                        </div>
                        { /* <!-- .blog-post-s6-main --> */}
                      </div>
                      { /* <!-- .blog-post-s6-post --> */}
                    </div>
                    { /* <!-- .posts-list-widget --> */}
                  </section>
                  <section id='the_essence_social_widget-2' className='widget widget_the_essence_social_widget'>
                    <h2 className='widget-title' data-mtst-selector='#sidebar .widget-title' data-mtst-label='Sidebar - Widget Title'>Social Profiles</h2>
                    <div className='social-widget'>
                      <a className='social-link-twitter' href='http://meridianthemes-demo.net/the-essence/#' target='_blank'><span className='fa fa-twitter'></span></a>
                      <a className='social-link-facebook' href='http://meridianthemes-demo.net/the-essence/#' target='_blank'><span className='fa fa-facebook'></span></a>
                      <a className='social-link-youtube' href='http://meridianthemes-demo.net/the-essence/#' target='_blank'><span className='fa fa-youtube-play'></span></a>
                      <a className='social-link-vimeo' href='http://meridianthemes-demo.net/the-essence/#' target='_blank'><span className='fa fa-vimeo'></span></a>
                      <a className='social-link-pinterest' href='http://meridianthemes-demo.net/the-essence/#' target='_blank'><span className='fa fa-pinterest'></span></a>
                    </div>
                    { /* <!-- .subscribe-widget --> */}
                  </section>
                  <section id='the_essence_instagram_widget-2' className='widget widget_the_essence_instagram_widget'>
                    <h2 className='widget-title' data-mtst-selector='#sidebar .widget-title' data-mtst-label='Sidebar - Widget Title'>Instagram Photos</h2>
                    <div className='instagram-widget-images clearfix'>
                    </div>
                  </section>
                  <section id='the_essence_posts_list_alt_widget-2' className='widget widget_the_essence_posts_list_alt_widget'>
                    <h2 className='widget-title' data-mtst-selector='#sidebar .widget-title' data-mtst-label='Sidebar - Widget Title'>Recent Posts</h2>
                    <div className='posts-list-alt-widget clearfix'>
                      <div className='blog-post-s7 clearfix col col-12 col-first col-last  post-39 post type-post status-publish format-standard has-post-thumbnail hentry category-travel tag-beauty tag-carousel tag-hair tag-style'>
                        <div className='blog-post-s7-thumb' data-mtst-selector='.blog-post-s7-thumb' data-mtst-label='Blog Post S7 - Thumbnail' data-mtst-no-support='typography'>
                          <a href='http://meridianthemes-demo.net/the-essence/2016/04/07/why-did-reed-krakoff-walk-away-from-his-brand/'><img width='395' height='197' src='src/8-1-395x197.jpg' className='attachment-the-essence-s7-4 size-the-essence-s7-4 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-395x197.jpg 395w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-165x82.jpg 165w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-600x300.jpg 600w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-610x305.jpg 610w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-288x144.jpg 288w http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-823x412.jpg 823w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-401x200.jpg 401w http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-260x130.jpg 260w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-189x94.jpg 189w' sizes='(max-width: 395px) 100vw, 395px' /></a>
                          <div className='blog-post-s7-thumb-cats' data-mtst-selector='.blog-post-s7-thumb-cats' data-mtst-label='Blog Post S7 - Category'><a href='http://meridianthemes-demo.net/the-essence/category/travel/' rel='category tag'>Travel</a></div>
                          { /* <!-- .blog-post-s7-thumb-cats --> */}
                        </div>
                        { /* <!-- .blog-post-s7-thumb --> */}
                        <div className='blog-post-s7-number' data-mtst-selector='.blog-post-s7-number' data-mtst-label='Blog Post S7 - Number' data-mtst-no-support='background,border'>01 </div>
                        { /* <!-- .blog-post-s7-number --> */}
                        <div className='blog-post-s7-main'>
                          <div className='blog-post-s7-title' data-mtst-selector='.blog-post-s7-title' data-mtst-label='Blog Post S7 - Title' data-mtst-no-support='border,background'><a href='http://meridianthemes-demo.net/the-essence/2016/04/07/why-did-reed-krakoff-walk-away-from-his-brand/'>Why Did Reed Krakoff Walk Away from His Brand?</a></div>
                          <div className='blog-post-s7-author' data-mtst-selector='.blog-post-s7-author' data-mtst-label='Blog Post S7 - Author' data-mtst-no-support='border,background'>by <a href='http://meridianthemes-demo.net/the-essence/author/0176wpczar/' title='Posts by Carley Keener' rel='author'>Carley Keener</a></div>
                          <div className='blog-post-s7-date' data-mtst-selector='.blog-post-s7-date' data-mtst-label='Blog Post S7 - Date' data-mtst-no-support='border,background'>10 months ago</div>
                        </div>
                        { /* <!-- .blog-post-s7-main --> */}
                      </div>
                      { /* <!-- .blog-post-s7 --> */}
                      <div className='blog-post-s7 clearfix col col-12 col-first col-last  post-79 post type-post status-publish format-standard has-post-thumbnail hentry category-beauty'>
                        <div className='blog-post-s7-thumb' data-mtst-selector='.blog-post-s7-thumb' data-mtst-label='Blog Post S7 - Thumbnail' data-mtst-no-support='typography'>
                          <a href='http://meridianthemes-demo.net/the-essence/2016/04/07/sir-patrick-stewart-answers-the-proust-questionnaire/'><img width='395' height='197' src='src/15-395x197.jpg' className='attachment-the-essence-s7-4 size-the-essence-s7-4 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/15-395x197.jpg 395w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/15-165x82.jpg 165w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/15-600x300.jpg 600w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/15-610x305.jpg 610w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/15-288x144.jpg 288w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/15-823x412.jpg 823w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/15-401x200.jpg 401w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/15-260x130.jpg 260w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/15-189x94.jpg 189w' sizes='(max-width: 395px) 100vw, 395px' /></a>
                          <div className='blog-post-s7-thumb-cats' data-mtst-selector='.blog-post-s7-thumb-cats' data-mtst-label='Blog Post S7 - Category'>
                            <a href='http://meridianthemes-demo.net/the-essence/category/beauty/' rel='category tag'>Beauty</a> </div>
                          { /* <!-- .blog-post-s7-thumb-cats --> */}
                        </div>
                        { /* <!-- .blog-post-s7-thumb --> */}
                        <div className='blog-post-s7-number' data-mtst-selector='.blog-post-s7-number' data-mtst-label='Blog Post S7 - Number' data-mtst-no-support='background,border'> 02 </div>
                        { /* <!-- .blog-post-s7-number --> */}
                        <div className='blog-post-s7-main'>
                          <div className='blog-post-s7-title' data-mtst-selector='.blog-post-s7-title' data-mtst-label='Blog Post S7 - Title' data-mtst-no-support='border,background'><a href='http://meridianthemes-demo.net/the-essence/2016/04/07/sir-patrick-stewart-answers-the-proust-questionnaire/'>Sir Patrick Stewart Answers the Proust Questionnaire</a></div>
                          <div className='blog-post-s7-author' data-mtst-selector='.blog-post-s7-author' data-mtst-label='Blog Post S7 - Author' data-mtst-no-support='border,background'>by <a href='http://meridianthemes-demo.net/the-essence/author/0176wpczar/' title='Posts by Carley Keener' rel='author'>Carley Keener</a></div>
                          <div className='blog-post-s7-date' data-mtst-selector='.blog-post-s7-date' data-mtst-label='Blog Post S7 - Date' data-mtst-no-support='border,background'>10 months ago</div>
                        </div>
                        { /* <!-- .blog-post-s7-main --> */}
                      </div>
                      { /* <!-- .blog-post-s7 --> */}
                      <div className='blog-post-s7 clearfix col col-12 col-first col-last  post-76 post type-post status-publish format-standard has-post-thumbnail hentry category-travel tag-beauty tag-hair tag-style'>
                        <div className='blog-post-s7-thumb' data-mtst-selector='.blog-post-s7-thumb' data-mtst-label='Blog Post S7 - Thumbnail' data-mtst-no-support='typography'>
                          <a href='http://meridianthemes-demo.net/the-essence/2016/04/07/heres-how-you-can-check-if-your-partner-is-cheating-on-tinder/'><img width='395' height='197' src='src/14-395x197.jpg' className='attachment-the-essence-s7-4 size-the-essence-s7-4 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/14-395x197.jpg 395w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/14-165x82.jpg 165w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/14-600x300.jpg 600w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/14-610x305.jpg 610w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/14-288x144.jpg 288w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/14-823x412.jpg 823w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/14-401x200.jpg 401w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/14-260x130.jpg 260w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/14-189x94.jpg 189w' sizes='(max-width: 395px) 100vw, 395px' /></a>
                          <div className='blog-post-s7-thumb-cats' data-mtst-selector='.blog-post-s7-thumb-cats' data-mtst-label='Blog Post S7 - Category'>
                            <a href='http://meridianthemes-demo.net/the-essence/category/travel/' rel='category tag'>Travel</a> </div>
                          { /* <!-- .blog-post-s7-thumb-cats --> */}
                        </div>
                        { /* <!-- .blog-post-s7-thumb --> */}
                        <div className='blog-post-s7-number' data-mtst-selector='.blog-post-s7-number' data-mtst-label='Blog Post S7 - Number' data-mtst-no-support='background,border'>3 </div>
                        { /* <!-- .blog-post-s7-number --> */}
                        <div className='blog-post-s7-main'>
                          <div className='blog-post-s7-title' data-mtst-selector='.blog-post-s7-title' data-mtst-label='Blog Post S7 - Title' data-mtst-no-support='border,background'><a href='http://meridianthemes-demo.net/the-essence/2016/04/07/heres-how-you-can-check-if-your-partner-is-cheating-on-tinder/'>Hereâ€™s How You Can Check if Your Partner Is Cheating on Tinder</a></div>
                          <div className='blog-post-s7-author' data-mtst-selector='.blog-post-s7-author' data-mtst-label='Blog Post S7 - Author' data-mtst-no-support='border,background'>by <a href='http://meridianthemes-demo.net/the-essence/author/0176wpczar/' title='Posts by Carley Keener' rel='author'>Carley Keener</a></div>
                          <div className='blog-post-s7-date' data-mtst-selector='.blog-post-s7-date' data-mtst-label='Blog Post S7 - Date' data-mtst-no-support='border,background'>10 months ago</div>
                        </div>
                        { /* <!-- .blog-post-s7-main --> */}
                      </div>
                      { /* <!-- .blog-post-s7 --> */}
                      <div className='blog-post-s7 clearfix col col-12 col-first col-last  post-74 post type-post status-publish format-standard has-post-thumbnail hentry category-beauty tag-beauty tag-hair tag-style'>
                        <div className='blog-post-s7-thumb' data-mtst-selector='.blog-post-s7-thumb' data-mtst-label='Blog Post S7 - Thumbnail' data-mtst-no-support='typography'>
                          <a href='http://meridianthemes-demo.net/the-essence/2016/04/07/rogue-one-trailer-star-wars-welcomes-yet-another-new-generation/'><img width='395' height='197' src='src/12-395x197.jpg' className='attachment-the-essence-s7-4 size-the-essence-s7-4 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/12-395x197.jpg 395w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/12-165x82.jpg 165w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/12-600x300.jpg 600w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/12-610x305.jpg 610w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/12-288x144.jpg 288w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/12-823x412.jpg 823w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/12-401x200.jpg 401w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/12-260x130.jpg 260w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/12-189x94.jpg 189w' sizes='(max-width: 395px) 100vw, 395px' /></a>
                          <div className='blog-post-s7-thumb-cats' data-mtst-selector='.blog-post-s7-thumb-cats' data-mtst-label='Blog Post S7 - Category'>
                            <a href='http://meridianthemes-demo.net/the-essence/category/beauty/' rel='category tag'>Beauty</a> </div>
                          { /* <!-- .blog-post-s7-thumb-cats --> */}
                        </div>
                        { /* <!-- .blog-post-s7-thumb --> */}
                        <div className='blog-post-s7-number' data-mtst-selector='.blog-post-s7-number' data-mtst-label='Blog Post S7 - Number' data-mtst-no-support='background,border'> 04 </div>
                        { /* <!-- .blog-post-s7-number --> */}
                        <div className='blog-post-s7-main'>
                          <div className='blog-post-s7-title' data-mtst-selector='.blog-post-s7-title' data-mtst-label='Blog Post S7 - Title' data-mtst-no-support='border,background'><a href='http://meridianthemes-demo.net/the-essence/2016/04/07/rogue-one-trailer-star-wars-welcomes-yet-another-new-generation/'>Rogue One Trailer: Star Wars Welcomes Yet Another New Generation</a></div>
                          <div className='blog-post-s7-author' data-mtst-selector='.blog-post-s7-author' data-mtst-label='Blog Post S7 - Author' data-mtst-no-support='border,background'>by <a href='http://meridianthemes-demo.net/the-essence/author/0176wpczar/' title='Posts by Carley Keener' rel='author'>Carley Keener</a></div>
                          <div className='blog-post-s7-date' data-mtst-selector='.blog-post-s7-date' data-mtst-label='Blog Post S7 - Date' data-mtst-no-support='border,background'>10 months ago</div>
                        </div>
                        { /* <!-- .blog-post-s7-main --> */}
                      </div>
                      { /* <!-- .blog-post-s7 --> */}
                    </div>
                    { /* <!-- .posts-lists-alt-widget --> */}
                  </section>
                  <section id='the_essence_social_widget-3' className='widget widget_the_essence_social_widget'>
                    <h2 className='widget-title' data-mtst-selector='#sidebar .widget-title' data-mtst-label='Sidebar - Widget Title'>Social Profiles</h2>
                    <div className='social-widget'>
                      <a className='social-link-twitter' href='http://meridianthemes-demo.net/the-essence/#' target='_blank'><span className='fa fa-twitter'></span></a>
                      <a className='social-link-facebook' href='http://meridianthemes-demo.net/the-essence/#' target='_blank'><span className='fa fa-facebook'></span></a>
                      <a className='social-link-youtube' href='http://meridianthemes-demo.net/the-essence/#' target='_blank'><span className='fa fa-youtube-play'></span></a>
                      <a className='social-link-vimeo' href='http://meridianthemes-demo.net/the-essence/#' target='_blank'><span className='fa fa-vimeo'></span></a>
                      <a className='social-link-pinterest' href='http://meridianthemes-demo.net/the-essence/#' target='_blank'><span className='fa fa-pinterest'></span></a>
                    </div>
                    { /* <!-- .subscribe-widget --> */}
                  </section>
                </div>
                { /* <!-- #sidebar-inner --> */}
              </aside>
              { /* <!-- #sidebar --> */}
            </div>
            { /* <!-- .wrapper --> */}
          </div>
          { /* <!-- #main --> */}
          <div id='footer-posts' data-mtst-selector='#footer-posts' data-mtst-label='Footer Posts' data-mtst-no-support='typogrpahy,border'>
            <div className='wrapper'>
              <h4 className='section-heading' data-mtst-selector='#footer-posts .section-heading' data-mtst-label='Footer Posts - Heading' data-mtst-no-support='background,border'>Popular Posts</h4>
              <div className='carousel-wrapper'>
                <div className='carousel clearfix owl-carousel owl-theme' data-pagination='false' data-items='4' styleERR='display: block; margin-left: -14.9592px; width: 1113.92px; opacity: 1;'>
                  <div className='owl-wrapper-outer'>
                    <div className='owl-wrapper' styleERR='width: 6696px; left: 0px; display: block;'>
                      <div className='owl-item carousel-item-visible' styleERR='width: 279px;'>
                        <div className='blog-post-s5 col col-3 col-first carousel-item  post-37 post type-post status-publish format-standard has-post-thumbnail hentry category-travel tag-beauty tag-hair tag-style' styleERR='padding-left: 14.9592px; padding-right: 14.9592px;'>
                          <div className='blog-post-s5-thumb' data-mtst-selector='.blog-post-s5-thumb' data-mtst-label='Blog Post S5 - Thumbnail' data-mtst-no-support='typography'>
                            <a href='http://meridianthemes-demo.net/the-essence/2016/04/06/how-bette-davis-became-an-icon-by-refusing-to-conform-at-every-turn/'><img width='272' height='160' src='src/12-1-272x160.jpg' className='attachment-the-essence-s5 size-the-essence-s5 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/12-1-272x160.jpg 272w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/12-1-600x352.jpg 600w' sizes='(max-width: 272px) 100vw, 272px' /></a>
                          </div>
                          { /* <!-- .blog-post-s5-thumb --> */}
                          <div className='blog-post-s5-title'>
                            <h2 data-mtst-selector='.blog-post-s5-title h2' data-mtst-label='Blog Post S5 - Title' data-mtst-no-support='background,border'><a href='http://meridianthemes-demo.net/the-essence/2016/04/06/how-bette-davis-became-an-icon-by-refusing-to-conform-at-every-turn/'>How Bette Davis Became an Icon By Refusing to Conform at Every Turn</a></h2>
                          </div>
                          { /* <!-- .blog-post-s5-title --> */}
                          <div className='blog-post-s5-meta'>
                            <div className='blog-post-s5-meta-author' data-mtst-selector='.blog-post-s5-meta-author' data-mtst-label='Blog Post S5 - Author' data-mtst-no-support='background,border'>
                              <a href='http://meridianthemes-demo.net/the-essence/author/0176wpczar/' title='Posts by Carley Keener' rel='author'>Carley Keener</a>												</div>
                            { /* <!-- .blog-post-s5-meta-author --> */}
                            <div className='blog-post-s5-meta-date' data-mtst-selector='.blog-post-s5-meta-date' data-mtst-label='Blog Post S5 - Date' data-mtst-no-support='background,border'>10 months ago </div>
                            { /* <!-- .blog-post-s5-meta-date --> */}
                          </div>
                          { /* <!-- .blog-post-s5-meta --> */}
                        </div>
                      </div>
                      <div className='owl-item carousel-item-visible' styleERR='width: 279px;'>
                        <div className='blog-post-s5 col col-3 carousel-item  post-76 post type-post status-publish format-standard has-post-thumbnail hentry category-travel tag-beauty tag-hair tag-style' styleERR='padding-left: 14.9592px; padding-right: 14.9592px;'>
                          <div className='blog-post-s5-thumb' data-mtst-selector='.blog-post-s5-thumb' data-mtst-label='Blog Post S5 - Thumbnail' data-mtst-no-support='typography'>
                            <a href='http://meridianthemes-demo.net/the-essence/2016/04/07/heres-how-you-can-check-if-your-partner-is-cheating-on-tinder/'><img width='272' height='160' src='src/14-272x160.jpg' className='attachment-the-essence-s5 size-the-essence-s5 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/14-272x160.jpg 272w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/14-600x352.jpg 600w' sizes='(max-width: 272px) 100vw, 272px' /></a>
                          </div>
                          { /* <!-- .blog-post-s5-thumb --> */}
                          <div className='blog-post-s5-title'>
                            <h2 data-mtst-selector='.blog-post-s5-title h2' data-mtst-label='Blog Post S5 - Title' data-mtst-no-support='background,border'><a href='http://meridianthemes-demo.net/the-essence/2016/04/07/heres-how-you-can-check-if-your-partner-is-cheating-on-tinder/'>Hereâ€™s How You Can Check if Your Partner Is Cheating on Tinder</a></h2>
                          </div>
                          { /* <!-- .blog-post-s5-title --> */}
                          <div className='blog-post-s5-meta'>
                            <div className='blog-post-s5-meta-author' data-mtst-selector='.blog-post-s5-meta-author' data-mtst-label='Blog Post S5 - Author' data-mtst-no-support='background,border'>
                              <a href='http://meridianthemes-demo.net/the-essence/author/0176wpczar/' title='Posts by Carley Keener' rel='author'>Carley Keener</a>												</div>
                            { /* <!-- .blog-post-s5-meta-author --> */}
                            <div className='blog-post-s5-meta-date' data-mtst-selector='.blog-post-s5-meta-date' data-mtst-label='Blog Post S5 - Date' data-mtst-no-support='background,border'>10 months ago </div>
                            { /* <!-- .blog-post-s5-meta-date --> */}
                          </div>
                          { /* <!-- .blog-post-s5-meta --> */}
                        </div>
                      </div>
                      <div className='owl-item carousel-item-visible' styleERR='width: 279px;'>
                        <div className='blog-post-s5 col col-3 carousel-item  post-79 post type-post status-publish format-standard has-post-thumbnail hentry category-beauty' styleERR='padding-left: 14.9592px; padding-right: 14.9592px;'>
                          <div className='blog-post-s5-thumb' data-mtst-selector='.blog-post-s5-thumb' data-mtst-label='Blog Post S5 - Thumbnail' data-mtst-no-support='typography'>
                            <a href='http://meridianthemes-demo.net/the-essence/2016/04/07/sir-patrick-stewart-answers-the-proust-questionnaire/'><img width='272' height='160' src='src/15-272x160.jpg' className='attachment-the-essence-s5 size-the-essence-s5 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/15-272x160.jpg 272w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/15-600x352.jpg 600w' sizes='(max-width: 272px) 100vw, 272px' /></a>
                          </div>
                          { /* <!-- .blog-post-s5-thumb --> */}
                          <div className='blog-post-s5-title'>
                            <h2 data-mtst-selector='.blog-post-s5-title h2' data-mtst-label='Blog Post S5 - Title' data-mtst-no-support='background,border'><a href='http://meridianthemes-demo.net/the-essence/2016/04/07/sir-patrick-stewart-answers-the-proust-questionnaire/'>Sir Patrick Stewart Answers the Proust Questionnaire</a></h2>
                          </div>
                          { /* <!-- .blog-post-s5-title --> */}
                          <div className='blog-post-s5-meta'>
                            <div className='blog-post-s5-meta-author' data-mtst-selector='.blog-post-s5-meta-author' data-mtst-label='Blog Post S5 - Author' data-mtst-no-support='background,border'>
                              <a href='http://meridianthemes-demo.net/the-essence/author/0176wpczar/' title='Posts by Carley Keener' rel='author'>Carley Keener</a>												</div>
                            { /* <!-- .blog-post-s5-meta-author --> */}
                            <div className='blog-post-s5-meta-date' data-mtst-selector='.blog-post-s5-meta-date' data-mtst-label='Blog Post S5 - Date' data-mtst-no-support='background,border'>10 months ago </div>
                            { /* <!-- .blog-post-s5-meta-date --> */}
                          </div>
                          { /* <!-- .blog-post-s5-meta --> */}
                        </div>
                      </div>
                      <div className='owl-item carousel-item-visible' styleERR='width: 279px;'>
                        <div className='blog-post-s5 col col-3 col-last carousel-item  post-39 post type-post status-publish format-standard has-post-thumbnail hentry category-travel tag-beauty tag-carousel tag-hair tag-style' styleERR='padding-left: 14.9592px; padding-right: 14.9592px;'>
                          <div className='blog-post-s5-thumb' data-mtst-selector='.blog-post-s5-thumb' data-mtst-label='Blog Post S5 - Thumbnail' data-mtst-no-support='typography'>
                            <a href='http://meridianthemes-demo.net/the-essence/2016/04/07/why-did-reed-krakoff-walk-away-from-his-brand/'><img width='272' height='160' src='src/8-1-272x160.jpg' className='attachment-the-essence-s5 size-the-essence-s5 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-272x160.jpg 272w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-600x352.jpg 600w' sizes='(max-width: 272px) 100vw, 272px' /></a>
                          </div>
                          { /* <!-- .blog-post-s5-thumb --> */}
                          <div className='blog-post-s5-title'>
                            <h2 data-mtst-selector='.blog-post-s5-title h2' data-mtst-label='Blog Post S5 - Title' data-mtst-no-support='background,border'><a href='http://meridianthemes-demo.net/the-essence/2016/04/07/why-did-reed-krakoff-walk-away-from-his-brand/'>Why Did Reed Krakoff Walk Away from His Brand?</a></h2>
                          </div>
                          { /* <!-- .blog-post-s5-title --> */}
                          <div className='blog-post-s5-meta'>
                            <div className='blog-post-s5-meta-author' data-mtst-selector='.blog-post-s5-meta-author' data-mtst-label='Blog Post S5 - Author' data-mtst-no-support='background,border'>
                              <a href='http://meridianthemes-demo.net/the-essence/author/0176wpczar/' title='Posts by Carley Keener' rel='author'>Carley Keener</a>												</div>
                            { /* <!-- .blog-post-s5-meta-author --> */}
                            <div className='blog-post-s5-meta-date' data-mtst-selector='.blog-post-s5-meta-date' data-mtst-label='Blog Post S5 - Date' data-mtst-no-support='background,border'>10 months ago </div>
                            { /* <!-- .blog-post-s5-meta-date --> */}
                          </div>
                          { /* <!-- .blog-post-s5-meta --> */}
                        </div>
                      </div>
                      <div className='owl-item' styleERR='width: 279px;'>
                        <div className='blog-post-s5 col col-3 col-first carousel-item  post-27 post type-post status-publish format-standard has-post-thumbnail hentry category-beauty tag-carousel-small' styleERR='padding-left: 14.9592px; padding-right: 14.9592px;'>
                          <div className='blog-post-s5-thumb' data-mtst-selector='.blog-post-s5-thumb' data-mtst-label='Blog Post S5 - Thumbnail' data-mtst-no-support='typography'>
                            <a href='http://meridianthemes-demo.net/the-essence/2016/04/06/harry-styles-had-to-fend-off-selfie-seeking-fan-at-grandmothers-funeral/'><img width='272' height='160' src='src/13-1-272x160.jpg' className='attachment-the-essence-s5 size-the-essence-s5 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/13-1-272x160.jpg 272w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/13-1-600x352.jpg 600w' sizes='(max-width: 272px) 100vw, 272px' /></a>
                          </div>
                          { /* <!-- .blog-post-s5-thumb --> */}
                          <div className='blog-post-s5-title'>
                            <h2 data-mtst-selector='.blog-post-s5-title h2' data-mtst-label='Blog Post S5 - Title' data-mtst-no-support='background,border'><a href='http://meridianthemes-demo.net/the-essence/2016/04/06/harry-styles-had-to-fend-off-selfie-seeking-fan-at-grandmothers-funeral/'>Harry Styles Had to Fend Off Selfie-Seeking Fan at Grandmotherâ€™s Funeral</a></h2>
                          </div>
                          { /* <!-- .blog-post-s5-title --> */}
                          <div className='blog-post-s5-meta'>
                            <div className='blog-post-s5-meta-author' data-mtst-selector='.blog-post-s5-meta-author' data-mtst-label='Blog Post S5 - Author' data-mtst-no-support='background,border'>
                              <a href='http://meridianthemes-demo.net/the-essence/author/0176wpczar/' title='Posts by Carley Keener' rel='author'>Carley Keener</a>												</div>
                            { /* <!-- .blog-post-s5-meta-author --> */}
                            <div className='blog-post-s5-meta-date' data-mtst-selector='.blog-post-s5-meta-date' data-mtst-label='Blog Post S5 - Date' data-mtst-no-support='background,border'>10 months ago </div>
                            { /* <!-- .blog-post-s5-meta-date --> */}
                          </div>
                          { /* <!-- .blog-post-s5-meta --> */}
                        </div>
                      </div>
                      <div className='owl-item' styleERR='width: 279px;'>
                        <div className='blog-post-s5 col col-3 carousel-item  post-38 post type-post status-publish format-standard has-post-thumbnail hentry category-personal tag-carousel' styleERR='padding-left: 14.9592px; padding-right: 14.9592px;'>
                          <div className='blog-post-s5-thumb' data-mtst-selector='.blog-post-s5-thumb' data-mtst-label='Blog Post S5 - Thumbnail' data-mtst-no-support='typography'>
                            <a href='http://meridianthemes-demo.net/the-essence/2016/04/06/leon-bridges-and-andra-day-rbs-rising-stars-talk-teaming-up/'><img width='272' height='160' src='src/7-272x160.jpg' className='attachment-the-essence-s5 size-the-essence-s5 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/7-272x160.jpg 272w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/7-600x352.jpg 600w' sizes='(max-width: 272px) 100vw, 272px' /></a>
                          </div>
                          { /* <!-- .blog-post-s5-thumb --> */}
                          <div className='blog-post-s5-title'>
                            <h2 data-mtst-selector='.blog-post-s5-title h2' data-mtst-label='Blog Post S5 - Title' data-mtst-no-support='background,border'><a href='http://meridianthemes-demo.net/the-essence/2016/04/06/leon-bridges-and-andra-day-rbs-rising-stars-talk-teaming-up/'>Leon Bridges and Andra Day, R&amp;Bâ€™s Rising Stars, Talk Teaming Up</a></h2>
                          </div>
                          { /* <!-- .blog-post-s5-title --> */}
                          <div className='blog-post-s5-meta'>
                            <div className='blog-post-s5-meta-author' data-mtst-selector='.blog-post-s5-meta-author' data-mtst-label='Blog Post S5 - Author' data-mtst-no-support='background,border'>
                              <a href='http://meridianthemes-demo.net/the-essence/author/0176wpczar/' title='Posts by Carley Keener' rel='author'>Carley Keener</a>												</div>
                            { /* <!-- .blog-post-s5-meta-author --> */}
                            <div className='blog-post-s5-meta-date' data-mtst-selector='.blog-post-s5-meta-date' data-mtst-label='Blog Post S5 - Date' data-mtst-no-support='background,border'>10 months ago </div>
                            { /* <!-- .blog-post-s5-meta-date --> */}
                          </div>
                          { /* <!-- .blog-post-s5-meta --> */}
                        </div>
                      </div>
                      <div className='owl-item' styleERR='width: 279px;'>
                        <div className='blog-post-s5 col col-3 carousel-item  post-36 post type-post status-publish format-standard has-post-thumbnail hentry category-personal tag-carousel' styleERR='padding-left: 14.9592px; padding-right: 14.9592px;'>
                          <div className='blog-post-s5-thumb' data-mtst-selector='.blog-post-s5-thumb' data-mtst-label='Blog Post S5 - Thumbnail' data-mtst-no-support='typography'>
                            <a href='http://meridianthemes-demo.net/the-essence/2016/04/06/hot-looks-a-fun-random-beauty-report-straight-from-the-closet/'><img width='272' height='160' src='src/11-1-272x160.jpg' className='attachment-the-essence-s5 size-the-essence-s5 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/11-1-272x160.jpg 272w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/11-1-600x352.jpg 600w' sizes='(max-width: 272px) 100vw, 272px' /></a>
                          </div>
                          { /* <!-- .blog-post-s5-thumb --> */}
                          <div className='blog-post-s5-title'>
                            <h2 data-mtst-selector='.blog-post-s5-title h2' data-mtst-label='Blog Post S5 - Title' data-mtst-no-support='background,border'><a href='http://meridianthemes-demo.net/the-essence/2016/04/06/hot-looks-a-fun-random-beauty-report-straight-from-the-closet/'>Hot Looks: A Fun Random Beauty Report Straight From The Closet</a></h2>
                          </div>
                          { /* <!-- .blog-post-s5-title --> */}
                          <div className='blog-post-s5-meta'>
                            <div className='blog-post-s5-meta-author' data-mtst-selector='.blog-post-s5-meta-author' data-mtst-label='Blog Post S5 - Author' data-mtst-no-support='background,border'>
                              <a href='http://meridianthemes-demo.net/the-essence/author/0176wpczar/' title='Posts by Carley Keener' rel='author'>Carley Keener</a>												</div>
                            { /* <!-- .blog-post-s5-meta-author --> */}
                            <div className='blog-post-s5-meta-date' data-mtst-selector='.blog-post-s5-meta-date' data-mtst-label='Blog Post S5 - Date' data-mtst-no-support='background,border'>10 months ago </div>
                            { /* <!-- .blog-post-s5-meta-date --> */}
                          </div>
                          { /* <!-- .blog-post-s5-meta --> */}
                        </div>
                      </div>
                      <div className='owl-item' styleERR='width: 279px;'>
                        <div className='blog-post-s5 col col-3 col-last carousel-item  post-35 post type-post status-publish format-standard has-post-thumbnail hentry category-travel tag-beauty tag-carousel tag-hair tag-style' styleERR='padding-left: 14.9592px; padding-right: 14.9592px;'>
                          <div className='blog-post-s5-thumb' data-mtst-selector='.blog-post-s5-thumb' data-mtst-label='Blog Post S5 - Thumbnail' data-mtst-no-support='typography'>
                            <a href='http://meridianthemes-demo.net/the-essence/2016/04/06/poached-eggs-with-roasted-tomatoes-and-portabellas-copy/'><img width='272' height='160' src='src/10-1-272x160.jpg' className='attachment-the-essence-s5 size-the-essence-s5 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/10-1-272x160.jpg 272w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/10-1-600x352.jpg 600w' sizes='(max-width: 272px) 100vw, 272px' /></a>
                          </div>
                          { /* <!-- .blog-post-s5-thumb --> */}
                          <div className='blog-post-s5-title'>
                            <h2 data-mtst-selector='.blog-post-s5-title h2' data-mtst-label='Blog Post S5 - Title' data-mtst-no-support='background,border'><a href='http://meridianthemes-demo.net/the-essence/2016/04/06/poached-eggs-with-roasted-tomatoes-and-portabellas-copy/'>How to Make the Best French Toast of Your Life</a></h2>
                          </div>
                          { /* <!-- .blog-post-s5-title --> */}
                          <div className='blog-post-s5-meta'>
                            <div className='blog-post-s5-meta-author' data-mtst-selector='.blog-post-s5-meta-author' data-mtst-label='Blog Post S5 - Author' data-mtst-no-support='background,border'>
                              <a href='http://meridianthemes-demo.net/the-essence/author/0176wpczar/' title='Posts by Carley Keener' rel='author'>Carley Keener</a>												</div>
                            { /* <!-- .blog-post-s5-meta-author --> */}
                            <div className='blog-post-s5-meta-date' data-mtst-selector='.blog-post-s5-meta-date' data-mtst-label='Blog Post S5 - Date' data-mtst-no-support='background,border'>10 months ago </div>
                            { /* <!-- .blog-post-s5-meta-date --> */}
                          </div>
                          { /* <!-- .blog-post-s5-meta --> */}
                        </div>
                      </div>
                      <div className='owl-item' styleERR='width: 279px;'>
                        <div className='blog-post-s5 col col-3 col-first carousel-item  post-32 post type-post status-publish format-standard has-post-thumbnail hentry category-lifestyle tag-carousel-small' styleERR='padding-left: 14.9592px; padding-right: 14.9592px;'>
                          <div className='blog-post-s5-thumb' data-mtst-selector='.blog-post-s5-thumb' data-mtst-label='Blog Post S5 - Thumbnail' data-mtst-no-support='typography'>
                            <a href='http://meridianthemes-demo.net/the-essence/2016/04/06/republicans-say-theyre-embarrassed-by-trump-but-voting-for-him-anyway/'><img width='272' height='160' src='src/1-272x160.jpg' className='attachment-the-essence-s5 size-the-essence-s5 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/1-272x160.jpg 272w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/1-600x352.jpg 600w' sizes='(max-width: 272px) 100vw, 272px' /></a>
                          </div>
                          { /* <!-- .blog-post-s5-thumb --> */}
                          <div className='blog-post-s5-title'>
                            <h2 data-mtst-selector='.blog-post-s5-title h2' data-mtst-label='Blog Post S5 - Title' data-mtst-no-support='background,border'><a href='http://meridianthemes-demo.net/the-essence/2016/04/06/republicans-say-theyre-embarrassed-by-trump-but-voting-for-him-anyway/'>Republicans Say Theyâ€™re Embarrassed by Trump but Voting for Him Anyway</a></h2>
                          </div>
                          { /* <!-- .blog-post-s5-title --> */}
                          <div className='blog-post-s5-meta'>
                            <div className='blog-post-s5-meta-author' data-mtst-selector='.blog-post-s5-meta-author' data-mtst-label='Blog Post S5 - Author' data-mtst-no-support='background,border'>
                              <a href='http://meridianthemes-demo.net/the-essence/author/0176wpczar/' title='Posts by Carley Keener' rel='author'>Carley Keener</a>												</div>
                            { /* <!-- .blog-post-s5-meta-author --> */}
                            <div className='blog-post-s5-meta-date' data-mtst-selector='.blog-post-s5-meta-date' data-mtst-label='Blog Post S5 - Date' data-mtst-no-support='background,border'>10 months ago </div>
                            { /* <!-- .blog-post-s5-meta-date --> */}
                          </div>
                          { /* <!-- .blog-post-s5-meta --> */}
                        </div>
                      </div>
                      <div className='owl-item' styleERR='width: 279px;'>
                        <div className='blog-post-s5 col col-3 carousel-item  post-31 post type-post status-publish format-standard has-post-thumbnail hentry category-fashion tag-carousel-small' styleERR='padding-left: 14.9592px; padding-right: 14.9592px;'>
                          <div className='blog-post-s5-thumb' data-mtst-selector='.blog-post-s5-thumb' data-mtst-label='Blog Post S5 - Thumbnail' data-mtst-no-support='typography'>
                            <a href='http://meridianthemes-demo.net/the-essence/2016/04/06/what-daredevil-got-right-that-the-walking-dead-and-game-of-thrones-got-wrong/'><img width='272' height='160' src='src/2-3-272x160.jpg' className='attachment-the-essence-s5 size-the-essence-s5 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/2-3-272x160.jpg 272w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/2-3-600x352.jpg 600w' sizes='(max-width: 272px) 100vw, 272px' /></a>
                          </div>
                          { /* <!-- .blog-post-s5-thumb --> */}
                          <div className='blog-post-s5-title'>
                            <h2 data-mtst-selector='.blog-post-s5-title h2' data-mtst-label='Blog Post S5 - Title' data-mtst-no-support='background,border'><a href='http://meridianthemes-demo.net/the-essence/2016/04/06/what-daredevil-got-right-that-the-walking-dead-and-game-of-thrones-got-wrong/'>What Daredevil Got Right That The Walking Dead and Game of Thrones Got Wrong</a></h2>
                          </div>
                          { /* <!-- .blog-post-s5-title --> */}
                          <div className='blog-post-s5-meta'>
                            <div className='blog-post-s5-meta-author' data-mtst-selector='.blog-post-s5-meta-author' data-mtst-label='Blog Post S5 - Author' data-mtst-no-support='background,border'>
                              <a href='http://meridianthemes-demo.net/the-essence/author/0176wpczar/' title='Posts by Carley Keener' rel='author'>Carley Keener</a>												</div>
                            { /* <!-- .blog-post-s5-meta-author --> */}
                            <div className='blog-post-s5-meta-date' data-mtst-selector='.blog-post-s5-meta-date' data-mtst-label='Blog Post S5 - Date' data-mtst-no-support='background,border'>10 months ago </div>
                            { /* <!-- .blog-post-s5-meta-date --> */}
                          </div>
                          { /* <!-- .blog-post-s5-meta --> */}
                        </div>
                      </div>
                      <div className='owl-item' styleERR='width: 279px;'>
                        <div className='blog-post-s5 col col-3 carousel-item  post-30 post type-post status-publish format-standard has-post-thumbnail hentry category-beauty tag-carousel-small' styleERR='padding-left: 14.9592px; padding-right: 14.9592px;'>
                          <div className='blog-post-s5-thumb' data-mtst-selector='.blog-post-s5-thumb' data-mtst-label='Blog Post S5 - Thumbnail' data-mtst-no-support='typography'>
                            <a href='http://meridianthemes-demo.net/the-essence/2016/04/06/the-walking-dead-which-major-character-just-died-in-the-season-6-finale/'><img width='272' height='160' src='src/3-272x160.jpg' className='attachment-the-essence-s5 size-the-essence-s5 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/3-272x160.jpg 272w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/3-600x352.jpg 600w' sizes='(max-width: 272px) 100vw, 272px' /></a>
                          </div>
                          { /* <!-- .blog-post-s5-thumb --> */}
                          <div className='blog-post-s5-title'>
                            <h2 data-mtst-selector='.blog-post-s5-title h2' data-mtst-label='Blog Post S5 - Title' data-mtst-no-support='background,border'><a href='http://meridianthemes-demo.net/the-essence/2016/04/06/the-walking-dead-which-major-character-just-died-in-the-season-6-finale/'>The Walking Dead: Which Major Character Just Died in the Season 6 Finale?</a></h2>
                          </div>
                          { /* <!-- .blog-post-s5-title --> */}
                          <div className='blog-post-s5-meta'>
                            <div className='blog-post-s5-meta-author' data-mtst-selector='.blog-post-s5-meta-author' data-mtst-label='Blog Post S5 - Author' data-mtst-no-support='background,border'>
                              <a href='http://meridianthemes-demo.net/the-essence/author/0176wpczar/' title='Posts by Carley Keener' rel='author'>Carley Keener</a>												</div>
                            { /* <!-- .blog-post-s5-meta-author --> */}
                            <div className='blog-post-s5-meta-date' data-mtst-selector='.blog-post-s5-meta-date' data-mtst-label='Blog Post S5 - Date' data-mtst-no-support='background,border'>10 months ago </div>
                            { /* <!-- .blog-post-s5-meta-date --> */}
                          </div>
                          { /* <!-- .blog-post-s5-meta --> */}
                        </div>
                      </div>
                      <div className='owl-item' styleERR='width: 279px;'>
                        <div className='blog-post-s5 col col-3 col-last carousel-item  post-28 post type-post status-publish format-standard has-post-thumbnail hentry category-fashion tag-carousel-small' styleERR='padding-left: 14.9592px; padding-right: 14.9592px;'>
                          <div className='blog-post-s5-thumb' data-mtst-selector='.blog-post-s5-thumb' data-mtst-label='Blog Post S5 - Thumbnail' data-mtst-no-support='typography'>
                            <a href='http://meridianthemes-demo.net/the-essence/2016/04/06/5-reasons-why-well-never-see-anything-like-the-o-j-simpson-verdict-again/'><img width='272' height='160' src='src/17-272x160.jpg' className='attachment-the-essence-s5 size-the-essence-s5 wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/17-272x160.jpg 272w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/17-600x352.jpg 600w' sizes='(max-width: 272px) 100vw, 272px' /></a>
                          </div>
                          { /* <!-- .blog-post-s5-thumb --> */}
                          <div className='blog-post-s5-title'>
                            <h2 data-mtst-selector='.blog-post-s5-title h2' data-mtst-label='Blog Post S5 - Title' data-mtst-no-support='background,border'><a href='http://meridianthemes-demo.net/the-essence/2016/04/06/5-reasons-why-well-never-see-anything-like-the-o-j-simpson-verdict-again/'>5 Reasons Why Weâ€™ll Never See Anything Like the O.J. Simpson Verdict Again</a></h2>
                          </div>
                          { /* <!-- .blog-post-s5-title --> */}
                          <div className='blog-post-s5-meta'>
                            <div className='blog-post-s5-meta-author' data-mtst-selector='.blog-post-s5-meta-author' data-mtst-label='Blog Post S5 - Author' data-mtst-no-support='background,border'>
                              <a href='http://meridianthemes-demo.net/the-essence/author/0176wpczar/' title='Posts by Carley Keener' rel='author'>Carley Keener</a>												</div>
                            { /* <!-- .blog-post-s5-meta-author --> */}
                            <div className='blog-post-s5-meta-date' data-mtst-selector='.blog-post-s5-meta-date' data-mtst-label='Blog Post S5 - Date' data-mtst-no-support='background,border'>10 months ago </div>
                            { /* <!-- .blog-post-s5-meta-date --> */}
                          </div>
                          { /* <!-- .blog-post-s5-meta --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                { /* <!-- .carousel --> */}
                <span className='carousel-nav-prev'><span className='fa fa-angle-left'></span></span>
                <span className='carousel-nav-next'><span className='fa fa-angle-right'></span></span>
              </div>
              { /* <!-- .carousel-wrapper --> */}
            </div>
            { /* <!-- .wrapper --> */}
          </div>
          { /* <!-- #footer-posts --> */}
          <footer id='footer' className='site-footer'>
            <div id='footer-widgets'>
              <div className='wrapper clearfix'>
                <div className='footer-widgets-1 col col-4'>
                  <section id='text-2' className='widget widget_text'>
                    <div className='textwidget'>
                      <p><img src='src/logo-small.png' alt='The Essence' /></p>
                      <h4>The Essence</h4>
                      <p>Tortor. Curabitur sed semper neque. Integer lectus arcu, ornare eu nisi sit amet, vehicula finibus odio. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </div>
                  </section>
                  <section id='tag_cloud-2' className='widget widget_tag_cloud'>
                    <h2 className='widget-title' data-mtst-selector='#footer .widget-title' data-mtst-label='Footer - Widget Title'>Popular Tags</h2>
                    <div className='tagcloud'><a href='http://meridianthemes-demo.net/the-essence/tag/beauty/' className='tag-link-15 tag-link-position-1' title='6 topics' styleERR='font-size: 22pt;'>beauty</a>
                      <a href='http://meridianthemes-demo.net/the-essence/tag/carousel/' className='tag-link-12 tag-link-position-2' title='5 topics' styleERR='font-size: 8pt;'>carousel</a>
                      <a href='http://meridianthemes-demo.net/the-essence/tag/carousel-small/' className='tag-link-11 tag-link-position-3' title='6 topics' styleERR='font-size: 22pt;'>carousel-small</a>
                      <a href='http://meridianthemes-demo.net/the-essence/tag/hair/' className='tag-link-16 tag-link-position-4' title='6 topics' styleERR='font-size: 22pt;'>hair</a>
                      <a href='http://meridianthemes-demo.net/the-essence/tag/style/' className='tag-link-14 tag-link-position-5' title='6 topics' styleERR='font-size: 22pt;'>style</a></div>
                  </section>
                </div>
                <div className='footer-widgets-2 col col-4'>
                  <section id='the_essence_subscribe_widget-2' className='widget widget_the_essence_subscribe_widget'>
                    <h2 className='widget-title' data-mtst-selector='#footer .widget-title' data-mtst-label='Footer - Widget Title'>My Newsletter</h2>
                    <div className='subscribe-widget' styleERR='background-image:url(http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/news-1.jpg);' data-mtst-selector='.subscribe-widget' data-mtst-label='Subscribe' data-mtst-no-support='typography'>
                      <div className='subscribe-widget-inner' data-mtst-selector='.subscribe-widget-inner' data-mtst-label='Subscribe Inner' data-mtst-no-support='typography'>
                        <h4 data-mtst-selector='.subscribe-widget h4' data-mtst-label='Subscribe Title' data-mtst-no-support='background,border'>Receive My News Straight Into Your Inbox!</h4>
                        <div className='widget_wysija_cont shortcode_wysija'>
                          <div id='msg-form-wysija-shortcode587e30801787a-1' className='wysija-msg ajax'></div>
                          <form id='form-wysija-shortcode587e30801787a-1' method='post' action='http://meridianthemes-demo.net/the-essence/#wysija' className='widget_wysija shortcode_wysija'>
                            <p className='wysija-paragraph'>
                              <input type='text' name='wysija[user][email]' className='wysija-input validate[required,custom[email]]' title='Your Email Address' placeholder='Your Email Address' value='' />
                              <span className='abs-req'>
                                <input type='text' name='wysija[user][abs][email]' className='wysija-input validated[abs][email]' value='' />
                              </span>
                            </p>
                            <input className='wysija-submit wysija-submit-field' type='submit' value='Send' />
                            <input type='hidden' name='form_id' value='1' />
                            <input type='hidden' name='action' value='save' />
                            <input type='hidden' name='controller' value='subscribers' />
                            <input type='hidden' value='1' name='wysija-page' />
                            <input type='hidden' name='wysija[user_list][list_ids]' value='1' />
                          </form>
                        </div>
                        <h5 data-mtst-selector='.subscribe-widget h5' data-mtst-label='Subscribe Subtitle' data-mtst-no-support='background,border'>Donâ€™t Worry, I Don't Spam.</h5>
                      </div>
                      { /* <!-- .subscribe-widget-inner --> */}
                    </div>
                    { /* <!-- .subscribe-widget --> */}
                  </section>
                </div>
                <div className='footer-widgets-3 col col-4 col-last'>
                  <section id='the_essence_posts_list_widget-2' className='widget widget_the_essence_posts_list_widget'>
                    <h2 className='widget-title' data-mtst-selector='#footer .widget-title' data-mtst-label='Footer - Widget Title'>Recent Posts</h2>
                    <div className='posts-list-widget clearfix'>
                      <div className='blog-post-s6 clearfix col col-12  post-39 post type-post status-publish format-standard has-post-thumbnail hentry category-travel tag-beauty tag-carousel tag-hair tag-style'>
                        <div className='blog-post-s6-thumb'>
                          <a href='http://meridianthemes-demo.net/the-essence/2016/04/07/why-did-reed-krakoff-walk-away-from-his-brand/'><img width='85' height='85' src='src/8-1-85x85.jpg' className='attachment-the-essence-small size-the-essence-small wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-85x85.jpg 85w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-150x150.jpg 150w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/8-1-170x170.jpg 170w' sizes='(max-width: 85px) 100vw, 85px' /></a>
                        </div>
                        { /* <!-- .blog-post-s6-thumb --> */}
                        <div className='blog-post-s6-main'>
                          <div className='blog-post-s6-title' data-mtst-selector='.blog-post-s6-title' data-mtst-label='Blog Post S6 - Title' data-mtst-no-support='background,border'><a href='http://meridianthemes-demo.net/the-essence/2016/04/07/why-did-reed-krakoff-walk-away-from-his-brand/'>Why Did Reed Krakoff Walk Away from His Brand?</a></div>
                          <div className='blog-post-s6-comments' data-mtst-selector='.blog-post-s6-comments' data-mtst-label='Blog Post S6 - Title' data-mtst-no-support='background,border'><span className='fa fa-commenting-o'></span>3 comments</div>
                        </div>
                        { /* <!-- .blog-post-s6-main --> */}
                      </div>
                      { /* <!-- .blog-post-s6-post --> */}
                      <div className='blog-post-s6 clearfix col col-12  post-79 post type-post status-publish format-standard has-post-thumbnail hentry category-beauty'>
                        <div className='blog-post-s6-thumb'>
                          <a href='http://meridianthemes-demo.net/the-essence/2016/04/07/sir-patrick-stewart-answers-the-proust-questionnaire/'><img width='85' height='85' src='src/15-85x85.jpg' className='attachment-the-essence-small size-the-essence-small wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/15-85x85.jpg 85w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/15-150x150.jpg 150w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/15-170x170.jpg 170w' sizes='(max-width: 85px) 100vw, 85px' /></a>
                        </div>
                        { /* <!-- .blog-post-s6-thumb --> */}
                        <div className='blog-post-s6-main'>
                          <div className='blog-post-s6-title' data-mtst-selector='.blog-post-s6-title' data-mtst-label='Blog Post S6 - Title' data-mtst-no-support='background,border'><a href='http://meridianthemes-demo.net/the-essence/2016/04/07/sir-patrick-stewart-answers-the-proust-questionnaire/'>Sir Patrick Stewart Answers the Proust Questionnaire</a></div>
                          <div className='blog-post-s6-comments' data-mtst-selector='.blog-post-s6-comments' data-mtst-label='Blog Post S6 - Title' data-mtst-no-support='background,border'><span className='fa fa-commenting-o'></span>3 comments</div>

                        </div>
                        { /* <!-- .blog-post-s6-main --> */}
                      </div>
                      { /* <!-- .blog-post-s6-post --> */}
                      <div className='blog-post-s6 clearfix col col-12  post-76 post type-post status-publish format-standard has-post-thumbnail hentry category-travel tag-beauty tag-hair tag-style'>
                        <div className='blog-post-s6-thumb'>
                          <a href='http://meridianthemes-demo.net/the-essence/2016/04/07/heres-how-you-can-check-if-your-partner-is-cheating-on-tinder/'><img width='85' height='85' src='src/14-85x85.jpg' className='attachment-the-essence-small size-the-essence-small wp-post-image' alt='' srcSet='http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/14-85x85.jpg 85w, http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/14-150x150.jpg 150w http://meridianthemes-demo.net/the-essence/wp-content/uploads/sites/4/2016/04/14-170x170.jpg 170w' sizes='(max-width: 85px) 100vw, 85px' /></a>
                        </div>
                        { /* <!-- .blog-post-s6-thumb --> */}
                        <div className='blog-post-s6-main'>
                          <div className='blog-post-s6-title' data-mtst-selector='.blog-post-s6-title' data-mtst-label='Blog Post S6 - Title' data-mtst-no-support='background,border'><a href='http://meridianthemes-demo.net/the-essence/2016/04/07/heres-how-you-can-check-if-your-partner-is-cheating-on-tinder/'>Hereâ€™s How You Can Check if Your Partner Is Cheating on Tinder</a></div>
                          <div className='blog-post-s6-comments' data-mtst-selector='.blog-post-s6-comments' data-mtst-label='Blog Post S6 - Title' data-mtst-no-support='background,border'><span className='fa fa-commenting-o'></span>3 comments</div>
                        </div>
                        { /* <!-- .blog-post-s6-main --> */}
                      </div>
                      { /* <!-- .blog-post-s6-post --> */}
                    </div>
                    { /* <!-- .posts-list-widget --> */}
                  </section>
                </div>
              </div>
              { /* <!-- .wrapper --> */}
            </div>
            { /* <!-- #footer-widgets --> */}
            <div id='footer-instagram'>
              <a href='https://www.instagram.com/p/08g_H6K1x-/' target='_blank'><img src='src/11116778_1426681444309225_750770058_n.jpg' alt='Instagram' /></a>
              <a href='https://www.instagram.com/p/08gqEHK1xY/' target='_blank'><img src='src/11056021_348258268701001_247404738_n.jpg' alt='Instagram' /></a>
              <a href='https://www.instagram.com/p/08gVvzK1wr/' target='_blank'><img src='src/11055927_538463749625229_60323098_n.jpg' alt='Instagram' /></a>
              <a href='https://www.instagram.com/p/zvatOqK139/' target='_blank'><img src='src/11049255_429424087215236_1945544751_n.jpg' alt='Instagram' /></a>
              <a href='https://www.instagram.com/p/zSrhzyq16m/' target='_blank'><img src='src/10932627_1407903062844673_150903746_n.jpg' alt='Instagram' /></a>
              <a href='https://www.instagram.com/p/zIduYGK1y9/' target='_blank'><img src='src/10958512_330032593853950_1669758396_n.jpg' alt='Instagram' /></a>
              <a href='https://www.instagram.com/p/y7sQ_wq19u/' target='_blank'><img src='src/10953065_1570617666488589_1213126666_n.jpg' alt='Instagram' /></a>
              <a href='https://www.instagram.com/p/y7ikDeq1_Y/' target='_blank'><img src='src/10631971_1554022871527071_2102677334_n.jpg' alt='Instagram' /></a>
            </div>
            { /* <!-- #footer-instagram --> */}
            <div id='footer-bottom' data-mtst-selector='#footer-bottom' data-mtst-label='Footer Bottom' data-mtst-no-support='typography,border'>
              <div className='wrapper clearfix'>
                <div id='footer-copyright' data-mtst-selector='#footer-copyright' data-mtst-label='Footer Copyright' data-mtst-no-support='background,border,spacing'>
                  Designed &amp; Developed by <a href='http://meridianthemes-demo.net/the-essence/#' rel='nofollow'>MeridianThemes</a>						</div>
                { /* <!-- #footer-copyright --> */}
                <div id='footer-navigation' data-mtst-selector='#footer-navigation li a' data-mtst-label='Footer Copyright' data-mtst-no-support='background,border,spacing'>
                  <div className='menu-footer-container'>
                    <ul id='footer-menu' className='menu'>
                      <li id='menu-item-20' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-4 current_page_item menu-item-20'><a href='http://meridianthemes-demo.net/the-essence/'>Home</a></li>
                      <li id='menu-item-21' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-21'><a href='http://meridianthemes-demo.net/the-essence/about/'>About The Essence</a></li>
                      <li id='menu-item-22' className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-22'><a href='http://meridianthemes-demo.net/the-essence/category/beauty/'>Beauty</a></li>
                      <li id='menu-item-85' className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-85'><a href='http://meridianthemes-demo.net/the-essence/category/travel/'>Travel</a></li>
                    </ul>
                  </div>
                </div>
                { /* <!-- #footer-navigation --> */}
              </div>
              { /* <!-- .wrapper --> */}
            </div>
            { /* <!-- #footer-bottom --> */}
          </footer>
          { /* <!-- #footer --> */}
        </div>
        { /* <!-- #page --> */}
        <div id='panel-overlay'></div>
        <div id='panel'>
          <div id='panel-inner'>
            <div id='panel-logo'>
              <a href='http://meridianthemes-demo.net/the-essence/' rel='home'><img className='' src='src/logo-small.png' alt='The Essence' /></a>
            </div>
            { /* <!-- #panel-logo --> */}
            <div id='panel-navigation'>
              <div className='menu-side-panel-container'>
                <ul id='panel-menu' className='menu'>
                  <li id='menu-item-87' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-4 current_page_item menu-item-87'><a href='http://meridianthemes-demo.net/the-essence/'>Home</a></li>
                  <li id='menu-item-88' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-88'><a href='http://meridianthemes-demo.net/the-essence/about/'>About Essence</a></li>
                  <li id='menu-item-89' className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-89'><a href='http://meridianthemes-demo.net/the-essence/category/beauty/'>Beauty</a></li>
                  <li id='menu-item-90' className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-90'><a href='http://meridianthemes-demo.net/the-essence/category/personal/'>Personal</a></li>
                  <li id='menu-item-91' className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-91'><a href='http://meridianthemes-demo.net/the-essence/category/travel/'>Travel</a></li>
                </ul>
              </div>
            </div>
            { /* <!-- #panel-navigation --> */}
            <div id='panel-widgets'>
              <section id='the_essence_about_author_widget-3' className='widget widget_the_essence_about_author_widget'>
                <div className='about-author-widget' data-mtst-selector='.about-author-widget' data-mtst-label='About Author' data-mtst-no-support='typography'>
                  <div className='about-author-image'><img src='src/about.jpg' alt='Hi. I&#39;m Susanna.' /></div>
                  <div className='about-author-widget-info'>
                    <h2 className='about-author-widget-name' data-mtst-selector='.about-author-widget-name' data-mtst-label='About Author - Name' data-mtst-no-support='background,borders'>Hi. I'm Susanna.</h2>
                    <div className='about-author-widget-text' data-mtst-selector='.about-author-widget-text' data-mtst-label='About Author - Text' data-mtst-no-support='background,borders'>This season, the American designer will showcase a series of historic objects from the New York museum's.</div>
                  </div>
                  { /* <!-- .about-author-widget-info --> */}
                  <div className='about-author-signature-image'><img src='src/about-author-widget-signature.png' alt='Hi. I&#39;m Susanna.' /></div>
                </div>
                { /* <!-- .about-author-widget --> */}
              </section>
            </div>
            { /* <!-- #panel-widgets --> */}
          </div>
          { /* <!-- #panel-inner --> */}
          <span id='panel-close'><span className='fa fa-close'></span></span>
        </div>
        { /* <!-- #panel --> */}
        <textarea styleERR='display: none;' id='mtst-panel-animation-data'></textarea>
      </body>)
  }
}

export default Header
