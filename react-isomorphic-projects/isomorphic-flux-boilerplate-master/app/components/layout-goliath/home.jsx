import React, { Component, PropTypes } from 'react'
import connect from 'connect-alt'

import Editor from 'components/layout-goliath/editor'
import Trending from 'components/layout-goliath/trending'
import Header from 'components/layout-goliath/header'
import MenuResponsive from 'components/layout-goliath/menuResponsive'
import Menu from 'components/layout-goliath/menu'
import Footer from 'components/layout-goliath/footer'
import Copyright from 'components/layout-goliath/copyright'
import SliderTabs from 'components/layout-goliath/content/SliderTabs'
import PostBlock1 from 'components/layout-goliath/content/PostBlock1'
import ContainerMosaic from 'components/layout-goliath/content/ContainerMosaic'
import ContainerSliderTabs from 'components/layout-goliath/content/ContainerSliderTabs'


@connect(({ requests: { inProgress }, session: { session } }) => ({ inProgress, session }))

export default class HomeNew extends Component {
    static propTypes = {
        inProgress: PropTypes.bool,
        session: PropTypes.object
    }
    static contextTypes = {
        locales: PropTypes.array.isRequired,
        flux: PropTypes.object.isRequired,
        i18n: PropTypes.func.isRequired
    }

    render() {
        const isHidden = true
        return (
            <div>
            mhgj
                {/* Editor */}
                { !isHidden &&
                    <Editor />
                }
                <div id="particles" />
                {/* Trending */}
                <Trending />
                {/* Header */}
                <Header />
                {/* Menu responsive */}
                <MenuResponsive />
                {/* Menu */}
                <Menu />
                {/* Homepage content */}
                <div className="container homepage-content">
                    <div className="main-content-column-1 full-width">
                        <div className="post"><div className="vc_row wpb_row vc_row-fluid"><div className="wpb_column vc_column_container vc_col-sm-12"><div className="wpb_wrapper">			{/* Mosaic */}
                            {/* ContainerMosaic */}
                            <ContainerMosaic />
                            {/* Slider tabs */}
                            <SliderTabs />

                        </div></div></div><div className="vc_row wpb_row vc_row-fluid"><div className="wpb_column vc_column_container vc_col-sm-8"><div className="wpb_wrapper">		{/* Latest posts */}
                            {/* PostBlock1 */}
                            <PostBlock1 />
                            
                            <div className="banner-468x60">
                                <a href target="_blank"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/themes/goliath/theme/assets/images/banner-468x60.png" alt="Default 468x60" /></a>
                            </div>
                            <div className="vc_row wpb_row vc_inner vc_row-fluid"><div className="wpb_column vc_column_container vc_col-sm-6"><div className="wpb_wrapper">
                                {/* Technology */}
                                <div className="post-block-2">
                                    <div className="title-default">
                                        <a href="http://planetshine.net/demo/goliath-news/category/travel/" className="active">Travel</a>
                                        <a href="http://planetshine.net/demo/goliath-news/category/travel/" className="view-all">View all</a>
                                    </div>
                                    <div className="items">
                                        <div className="post-item featured" data-overlay={1} data-overlay-excerpt="Engage large outlets with web enabled tech. Coordinate via new e-commerce and process centric &quot;outside the box&quot; thinking. Completely pursue scalable customer service through sustainable potentialities." data-overlay-url="http://planetshine.net/demo/goliath-news/how-i-walked-the-entire-great-wall-of-china/">
                                            <div className="image">
                                                <a href="http://planetshine.net/demo/goliath-news/how-i-walked-the-entire-great-wall-of-china/"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-6667068-couple-camping-m-e1417481107400-750x491.jpg" alt="How I walked the entire Great Wall of China" /></a>
                                            </div>
                                            <div className="title">
                                                <h2>
                                                    <a href="http://planetshine.net/demo/goliath-news/how-i-walked-the-entire-great-wall-of-china/">How I walked the entire Great Wall of China</a>
                                                    <span className="hotness">Hot</span>
                                                </h2>
                                                <p>
                                                    <a href="http://planetshine.net/demo/goliath-news/category/travel/" title="Travel" className="tag-default">Travel</a>
                                                    <span className="legend-default">
                                                        <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/how-i-walked-the-entire-great-wall-of-china/#respond" className="comment-link"><i className="fa fa-comments" />0</a>   </span>
                                                </p>  </div>
                                            <div className="intro">
                                                Engage large outlets with web enabled tech. Coordinate via new e-commerce and process centric "outside the box" thinking. Completely...  </div>
                                        </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing...." data-overlay-url="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/">
                                            <div className="inner-wrapper">
                                                <div className="title-image-row">
                                                    <div className="image">
                                                        <a href="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2254959-snowboard-m-70x70.jpg" alt="Trendiest snowboarding locations this season" /></a>
                                                    </div>
                                                    <div className="title">
                                                        <h2>
                                                            <a href="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/">Trendiest snowboarding locations this season</a>
                                                            <span className="hotness">Hot</span>
                                                        </h2>
                                                        <p>
                                                            <a href="http://planetshine.net/demo/goliath-news/category/travel/" title="Travel" className="tag-default">Travel</a>
                                                            <span className="legend-default">
                                                                <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/#comments" className="comment-link"><i className="fa fa-comments" />1</a>   </span>
                                                        </p>                      </div>
                                                </div>
                                            </div>
                                        </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Efficiently push a cross media info for great value. Quickly do timely deliverables for real time schemas. Dramatically maintain..." data-overlay-url="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/">
                                            <div className="inner-wrapper">
                                                <div className="title-image-row">
                                                    <div className="image">
                                                        <div className=" stars"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star-o" /><i className="fa fa-star-o" />
                                                        </div>                            <a href="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/"><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2650397-sailing-m-70x70.jpg" alt="11 “must-see” places for every hardcore traveler" /></a>
                                                    </div>
                                                    <div className="title">
                                                        <h2>
                                                            <a href="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/">11 “must-see” places for every hardcore traveler</a>
                                                            <span className="hotness">Hot</span>
                                                        </h2>
                                                        <p>
                                                            <a href="http://planetshine.net/demo/goliath-news/category/review/" title="Review" className="tag-default">Review</a>
                                                            <span className="legend-default">
                                                                <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/#comments" className="comment-link"><i className="fa fa-comments" />2</a>   </span>
                                                        </p>                      </div>
                                                </div>
                                            </div>
                                        </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Objectively innovate smart tech products with parallel platforms. Holisticly manage extensible testing procedures for reliable supply chains. Dramatically engage..." data-overlay-url="http://planetshine.net/demo/goliath-news/this-summers-hotest-travel-locations/">
                                            <div className="inner-wrapper">
                                                <div className="title-image-row">
                                                    <div className="image">
                                                        <div className=" stars"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star-half-o" />
                                                        </div>                            <a href="http://planetshine.net/demo/goliath-news/this-summers-hotest-travel-locations/"><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-835948-outside-tea-m-70x70.jpg" alt="This summers hotest travel locations" /></a>
                                                    </div>
                                                    <div className="title">
                                                        <h2>
                                                            <a href="http://planetshine.net/demo/goliath-news/this-summers-hotest-travel-locations/">This summers hotest travel locations</a>
                                                        </h2>
                                                        <p>
                                                            <a href="http://planetshine.net/demo/goliath-news/category/review/" title="Review" className="tag-default">Review</a>
                                                            <span className="legend-default">
                                                                <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/this-summers-hotest-travel-locations/#respond" className="comment-link"><i className="fa fa-comments" />0</a>   </span>
                                                        </p>                      </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div></div><div className="wpb_column vc_column_container vc_col-sm-6"><div className="wpb_wrapper">
                                {/* Technology */}
                                <div className="post-block-2">
                                    <div className="title-default">
                                        <a href="http://planetshine.net/demo/goliath-news/category/business/" className="active">Business</a>
                                        <a href="http://planetshine.net/demo/goliath-news/category/business/" className="view-all">View all</a>
                                    </div>
                                    <div className="items">
                                        <div className="post-item featured" data-overlay={1} data-overlay-excerpt="Proactive media based expertise and cross-media growth strategy. Seamlessly visualize quality rich  capital with fast collaboration and idea sharing. Holistically pontificate installed base portals after maintainable products." data-overlay-url="http://planetshine.net/demo/goliath-news/twitters-cfo-accidentally-tweeted-a-private-message-about-acquiring-a-company/">
                                            <div className="image">
                                                <a href="http://planetshine.net/demo/goliath-news/twitters-cfo-accidentally-tweeted-a-private-message-about-acquiring-a-company/"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/10/photodune-4283210-city-l-750x491.jpg" alt="CFO tweeted a message about buying a company" /></a>
                                            </div>
                                            <div className="title">
                                                <h2>
                                                    <a href="http://planetshine.net/demo/goliath-news/twitters-cfo-accidentally-tweeted-a-private-message-about-acquiring-a-company/">CFO tweeted a message about buying a company</a>
                                                    <span className="hotness">Hot</span>
                                                </h2>
                                                <p>
                                                    <a href="http://planetshine.net/demo/goliath-news/category/business/" title="Business" className="tag-default">Business</a>
                                                    <span className="legend-default">
                                                        <i className="fa fa-clock-o" />Oct 25, 2014         <a href="http://planetshine.net/demo/goliath-news/twitters-cfo-accidentally-tweeted-a-private-message-about-acquiring-a-company/#respond" className="comment-link"><i className="fa fa-comments" />0</a>   </span>
                                                </p>  </div>
                                            <div className="intro">
                                                Proactive media based expertise and cross-media growth strategy. Seamlessly visualize quality rich  capital with fast collaboration and idea...  </div>
                                        </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Manage key channels for virtual e-tailers.  Seize scalable metrics for proactive e-services. Seamlessly empower fully researched growth strategies..." data-overlay-url="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/">
                                            <div className="inner-wrapper">
                                                <div className="title-image-row">
                                                    <div className="image">
                                                        <a href="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/"><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2359457-extreme-ride-l-e1416940742544-70x70.jpg" alt="5 promising alternative energy sources" /></a>
                                                    </div>
                                                    <div className="title">
                                                        <h2>
                                                            <a href="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/">5 promising alternative energy sources</a>
                                                            <span className="hotness">Hot</span>
                                                        </h2>
                                                        <p>
                                                            <a href="http://planetshine.net/demo/goliath-news/category/business/" title="Business" className="tag-default">Business</a>
                                                            <span className="legend-default">
                                                                <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/#comments" className="comment-link"><i className="fa fa-comments" />4</a>   </span>
                                                        </p>                      </div>
                                                </div>
                                            </div>
                                        </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Proactively envisioned tech based expertise and cross media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and..." data-overlay-url="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/">
                                            <div className="inner-wrapper">
                                                <div className="title-image-row">
                                                    <div className="image">
                                                        <a href="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/"><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/10/photodune-2242753-urban-lifestyle-m-e1417481556893-70x70.jpg" alt="Photo sharing app effect on social media juggernauts" /></a>
                                                    </div>
                                                    <div className="title">
                                                        <h2>
                                                            <a href="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/">Photo sharing app effect on social media juggernauts</a>
                                                        </h2>
                                                        <p>
                                                            <a href="http://planetshine.net/demo/goliath-news/category/business/" title="Business" className="tag-default">Business</a>
                                                            <span className="legend-default">
                                                                <i className="fa fa-clock-o" />Oct 25, 2014         <a href="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/#respond" className="comment-link"><i className="fa fa-comments" />0</a>   </span>
                                                        </p>                      </div>
                                                </div>
                                            </div>
                                        </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Collaboratively manage markets via plug and play networks. Dynamically reach B2C users after installed base benefits. Dramatically visualize customer..." data-overlay-url="http://planetshine.net/demo/goliath-news/who-will-be-this-years-top-earning-ceo/">
                                            <div className="inner-wrapper">
                                                <div className="title-image-row">
                                                    <div className="image">
                                                        <a href="http://planetshine.net/demo/goliath-news/who-will-be-this-years-top-earning-ceo/"><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/09/photodune-3642871-city-crossroad-scene-l-70x70.jpg" alt="Uber? Lyft? Taxi? The best ways to travel" /></a>
                                                    </div>
                                                    <div className="title">
                                                        <h2>
                                                            <a href="http://planetshine.net/demo/goliath-news/who-will-be-this-years-top-earning-ceo/">Uber? Lyft? Taxi? The best ways to travel</a>
                                                        </h2>
                                                        <p>
                                                            <a href="http://planetshine.net/demo/goliath-news/category/advice/" title="Advice" className="tag-default">Advice</a>
                                                            <span className="legend-default">
                                                                <i className="fa fa-clock-o" />Sep 25, 2014         <a href="http://planetshine.net/demo/goliath-news/who-will-be-this-years-top-earning-ceo/#respond" className="comment-link"><i className="fa fa-comments" />0</a>   </span>
                                                        </p>                      </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div></div></div>						<div className="banner-468x60">
                                <a href target="_blank"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/themes/goliath/theme/assets/images/banner-468x60.png" alt="Default 468x60" /></a>
                            </div>
                            {/* Fitness */}
                            <div className="post-block-3">
                                <div className="title-default">
                                    <a href className="active">Advice</a>
                                    <a href className="view-all">View all</a>
                                </div>
                                <div className="items">
                                    <div className="post-item" data-overlay={1} data-overlay-excerpt="Completely manage resources for premier niche markets. Professionally cultivate your one-to-one customer service with robust ideas. Dynamically innovate resource leveling customer service for state of the art customer service." data-overlay-url="http://planetshine.net/demo/goliath-news/how-to-never-be-late-for-a-meeting-again/">
                                        <div className="image">
                                            <a href="http://planetshine.net/demo/goliath-news/how-to-never-be-late-for-a-meeting-again/"><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-5341504-students-looking-into-devices-at-school-m-691x967.jpg" alt="How to never be late for a meeting again" /></a>
                                        </div>
                                        <div className="title">
                                            <h2>
                                                <a href="http://planetshine.net/demo/goliath-news/how-to-never-be-late-for-a-meeting-again/">How to never be late for a meeting again</a>
                                            </h2>
                                            <p>
                                                <a href="http://planetshine.net/demo/goliath-news/category/advice/" title="Advice" className="tag-default">Advice</a>
                                                <span className="legend-default">
                                                    <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/how-to-never-be-late-for-a-meeting-again/#comments" className="comment-link"><i className="fa fa-comments" />3</a>   </span>
                                            </p>  </div>
                                        <div className="intro">
                                            Completely manage resources for premier niche markets. Professionally cultivate your one-to-one customer service with robust ideas. Dynamically innovate resource...  </div>
                                    </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Collaboratively manage markets via plug and play networks. Dynamically reach B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI." data-overlay-url="http://planetshine.net/demo/goliath-news/who-will-be-this-years-top-earning-ceo/">
                                        <div className="image">
                                            <a href="http://planetshine.net/demo/goliath-news/who-will-be-this-years-top-earning-ceo/"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/09/photodune-3642871-city-crossroad-scene-l-691x967.jpg" alt="Uber? Lyft? Taxi? The best ways to travel" /></a>
                                        </div>
                                        <div className="title">
                                            <h2>
                                                <a href="http://planetshine.net/demo/goliath-news/who-will-be-this-years-top-earning-ceo/">Uber? Lyft? Taxi? The best ways to travel</a>
                                            </h2>
                                            <p>
                                                <a href="http://planetshine.net/demo/goliath-news/category/advice/" title="Advice" className="tag-default">Advice</a>
                                                <span className="legend-default">
                                                    <i className="fa fa-clock-o" />Sep 25, 2014         <a href="http://planetshine.net/demo/goliath-news/who-will-be-this-years-top-earning-ceo/#respond" className="comment-link"><i className="fa fa-comments" />0</a>   </span>
                                            </p>  </div>
                                        <div className="intro">
                                            Collaboratively manage markets via plug and play networks. Dynamically reach B2C users after installed base benefits. Dramatically visualize customer...  </div>
                                    </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Proactive media based expertise and cross-media growth strategy. Seamlessly visualize quality rich capital with fast collaboration and idea sharing. Holistically pontificate installed base portals after maintainable products." data-overlay-url="http://planetshine.net/demo/goliath-news/8-productivity-tips-for-designers/">
                                        <div className="image">
                                            <div className=" stars"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                                            </div>                    <a href="http://planetshine.net/demo/goliath-news/8-productivity-tips-for-designers/"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/08/photodune-4161594-designer-at-work-m-691x967.jpg" alt="8 productivity tips for designers" /></a>
                                        </div>
                                        <div className="title">
                                            <h2>
                                                <a href="http://planetshine.net/demo/goliath-news/8-productivity-tips-for-designers/">8 productivity tips for designers</a>
                                            </h2>
                                            <p>
                                                <a href="http://planetshine.net/demo/goliath-news/category/advice/" title="Advice" className="tag-default">Advice</a>
                                                <span className="legend-default">
                                                    <i className="fa fa-clock-o" />Aug 23, 2014         <a href="http://planetshine.net/demo/goliath-news/8-productivity-tips-for-designers/#comments" className="comment-link"><i className="fa fa-comments" />2</a>   </span>
                                            </p>  </div>
                                        <div className="intro">
                                            Proactive media based expertise and cross-media growth strategy. Seamlessly visualize quality rich capital with fast collaboration and idea sharing....  </div>
                                    </div>
                                </div>
                            </div>
                        </div></div><div className="wpb_column vc_column_container vc_col-sm-4"><div className="wpb_wrapper">
                            <div className="wpb_widgetised_column wpb_content_element">
                                <div className="wpb_wrapper">
                                    <div id="goliath_sidebar_banner-3" className="sidebar-item clearfix goliath_sidebar_banner">
                                        <div className="banner-300x250">
                                            <a href target="_blank"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/themes/goliath/theme/assets/images/banner-300x250.png" alt="Default 300x250" /></a>
                                        </div>
                                    </div> {/* After widget close div */}
                                    <div id="goliath_sidebar_post_tabs-2" className="sidebar-item clearfix goliath_sidebar_post_tabs">
                                        {/* Tabs */}
                                        <div className="widget-tabs switchable-tabs mobile">
                                            <div className="title-default">
                                                <a href="#" className="active">Popular</a>
                                                <a href="#">Recent</a>
                                                <a href="#">Comments</a>
                                            </div>
                                            <div className="tabs-content">
                                                <div className="items">
                                                    <div className="post-item" data-overlay={1} data-overlay-excerpt="Manage key channels for virtual e-tailers.  Seize scalable metrics for proactive e-services. Seamlessly empower fully researched growth strategies..." data-overlay-url="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/">
                                                        <div className="inner-wrapper">
                                                            <div className="title-image-row">
                                                                <div className="image">
                                                                    <a href="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/"><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2359457-extreme-ride-l-e1416940742544-70x70.jpg" alt="5 promising alternative energy sources" /></a>
                                                                </div>
                                                                <div className="title">
                                                                    <h2>
                                                                        <a href="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/">5 promising alternative energy sources</a>
                                                                        <span className="hotness">Hot</span>
                                                                    </h2>
                                                                    <p>
                                                                        <a href="http://planetshine.net/demo/goliath-news/category/business/" title="Business" className="tag-default">Business</a>
                                                                        <span className="legend-default">
                                                                            <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/#comments" className="comment-link"><i className="fa fa-comments" />4</a>   </span>
                                                                    </p>                      </div>
                                                            </div>
                                                        </div>
                                                    </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Engage large outlets with web enabled tech. Coordinate via new e-commerce and process centric &quot;outside the box&quot; thinking. Completely..." data-overlay-url="http://planetshine.net/demo/goliath-news/how-i-walked-the-entire-great-wall-of-china/">
                                                        <div className="inner-wrapper">
                                                            <div className="title-image-row">
                                                                <div className="image">
                                                                    <a href="http://planetshine.net/demo/goliath-news/how-i-walked-the-entire-great-wall-of-china/"><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-6667068-couple-camping-m-e1417481107400-70x70.jpg" alt="How I walked the entire Great Wall of China" /></a>
                                                                </div>
                                                                <div className="title">
                                                                    <h2>
                                                                        <a href="http://planetshine.net/demo/goliath-news/how-i-walked-the-entire-great-wall-of-china/">How I walked the entire Great Wall of China</a>
                                                                        <span className="hotness">Hot</span>
                                                                    </h2>
                                                                    <p>
                                                                        <a href="http://planetshine.net/demo/goliath-news/category/travel/" title="Travel" className="tag-default">Travel</a>
                                                                        <span className="legend-default">
                                                                            <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/how-i-walked-the-entire-great-wall-of-china/#respond" className="comment-link"><i className="fa fa-comments" />0</a>   </span>
                                                                    </p>                      </div>
                                                            </div>
                                                        </div>
                                                    </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing...." data-overlay-url="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/">
                                                        <div className="inner-wrapper">
                                                            <div className="title-image-row">
                                                                <div className="image">
                                                                    <a href="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2254959-snowboard-m-70x70.jpg" alt="Trendiest snowboarding locations this season" /></a>
                                                                </div>
                                                                <div className="title">
                                                                    <h2>
                                                                        <a href="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/">Trendiest snowboarding locations this season</a>
                                                                        <span className="hotness">Hot</span>
                                                                    </h2>
                                                                    <p>
                                                                        <a href="http://planetshine.net/demo/goliath-news/category/travel/" title="Travel" className="tag-default">Travel</a>
                                                                        <span className="legend-default">
                                                                            <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/#comments" className="comment-link"><i className="fa fa-comments" />1</a>   </span>
                                                                    </p>                      </div>
                                                            </div>
                                                        </div>
                                                    </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Efficiently push a cross media info for great value. Quickly do timely deliverables for real time schemas. Dramatically maintain..." data-overlay-url="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/">
                                                        <div className="inner-wrapper">
                                                            <div className="title-image-row">
                                                                <div className="image">
                                                                    <div className=" stars"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star-o" /><i className="fa fa-star-o" />
                                                                    </div>                            <a href="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/"><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2650397-sailing-m-70x70.jpg" alt="11 “must-see” places for every hardcore traveler" /></a>
                                                                </div>
                                                                <div className="title">
                                                                    <h2>
                                                                        <a href="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/">11 “must-see” places for every hardcore traveler</a>
                                                                        <span className="hotness">Hot</span>
                                                                    </h2>
                                                                    <p>
                                                                        <a href="http://planetshine.net/demo/goliath-news/category/review/" title="Review" className="tag-default">Review</a>
                                                                        <span className="legend-default">
                                                                            <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/#comments" className="comment-link"><i className="fa fa-comments" />2</a>   </span>
                                                                    </p>                      </div>
                                                            </div>
                                                        </div>
                                                    </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Proactively envisioned tech based expertise and cross media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and..." data-overlay-url="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/">
                                                        <div className="inner-wrapper">
                                                            <div className="title-image-row">
                                                                <div className="image">
                                                                    <a href="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/"><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/10/photodune-2242753-urban-lifestyle-m-e1417481556893-70x70.jpg" alt="Photo sharing app effect on social media juggernauts" /></a>
                                                                </div>
                                                                <div className="title">
                                                                    <h2>
                                                                        <a href="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/">Photo sharing app effect on social media juggernauts</a>
                                                                    </h2>
                                                                    <p>
                                                                        <a href="http://planetshine.net/demo/goliath-news/category/business/" title="Business" className="tag-default">Business</a>
                                                                        <span className="legend-default">
                                                                            <i className="fa fa-clock-o" />Oct 25, 2014         <a href="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/#respond" className="comment-link"><i className="fa fa-comments" />0</a>   </span>
                                                                    </p>                      </div>
                                                            </div>
                                                        </div>
                                                    </div>                          </div>
                                                <div className="items">
                                                    <div className="post-item" data-overlay={1} data-overlay-excerpt="Manage key channels for virtual e-tailers.  Seize scalable metrics for proactive e-services. Seamlessly empower fully researched growth strategies..." data-overlay-url="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/">
                                                        <div className="inner-wrapper">
                                                            <div className="title-image-row">
                                                                <div className="image">
                                                                    <a href="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/"><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2359457-extreme-ride-l-e1416940742544-70x70.jpg" alt="5 promising alternative energy sources" /></a>
                                                                </div>
                                                                <div className="title">
                                                                    <h2>
                                                                        <a href="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/">5 promising alternative energy sources</a>
                                                                        <span className="hotness">Hot</span>
                                                                    </h2>
                                                                    <p>
                                                                        <a href="http://planetshine.net/demo/goliath-news/category/business/" title="Business" className="tag-default">Business</a>
                                                                        <span className="legend-default">
                                                                            <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/#comments" className="comment-link"><i className="fa fa-comments" />4</a>   </span>
                                                                    </p>                      </div>
                                                            </div>
                                                        </div>
                                                    </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Engage large outlets with web enabled tech. Coordinate via new e-commerce and process centric &quot;outside the box&quot; thinking. Completely..." data-overlay-url="http://planetshine.net/demo/goliath-news/how-i-walked-the-entire-great-wall-of-china/">
                                                        <div className="inner-wrapper">
                                                            <div className="title-image-row">
                                                                <div className="image">
                                                                    <a href="http://planetshine.net/demo/goliath-news/how-i-walked-the-entire-great-wall-of-china/"><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-6667068-couple-camping-m-e1417481107400-70x70.jpg" alt="How I walked the entire Great Wall of China" /></a>
                                                                </div>
                                                                <div className="title">
                                                                    <h2>
                                                                        <a href="http://planetshine.net/demo/goliath-news/how-i-walked-the-entire-great-wall-of-china/">How I walked the entire Great Wall of China</a>
                                                                        <span className="hotness">Hot</span>
                                                                    </h2>
                                                                    <p>
                                                                        <a href="http://planetshine.net/demo/goliath-news/category/travel/" title="Travel" className="tag-default">Travel</a>
                                                                        <span className="legend-default">
                                                                            <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/how-i-walked-the-entire-great-wall-of-china/#respond" className="comment-link"><i className="fa fa-comments" />0</a>   </span>
                                                                    </p>                      </div>
                                                            </div>
                                                        </div>
                                                    </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing...." data-overlay-url="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/">
                                                        <div className="inner-wrapper">
                                                            <div className="title-image-row">
                                                                <div className="image">
                                                                    <a href="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2254959-snowboard-m-70x70.jpg" alt="Trendiest snowboarding locations this season" /></a>
                                                                </div>
                                                                <div className="title">
                                                                    <h2>
                                                                        <a href="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/">Trendiest snowboarding locations this season</a>
                                                                        <span className="hotness">Hot</span>
                                                                    </h2>
                                                                    <p>
                                                                        <a href="http://planetshine.net/demo/goliath-news/category/travel/" title="Travel" className="tag-default">Travel</a>
                                                                        <span className="legend-default">
                                                                            <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/#comments" className="comment-link"><i className="fa fa-comments" />1</a>   </span>
                                                                    </p>                      </div>
                                                            </div>
                                                        </div>
                                                    </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Efficiently push a cross media info for great value. Quickly do timely deliverables for real time schemas. Dramatically maintain..." data-overlay-url="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/">
                                                        <div className="inner-wrapper">
                                                            <div className="title-image-row">
                                                                <div className="image">
                                                                    <div className=" stars"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star-o" /><i className="fa fa-star-o" />
                                                                    </div>                            <a href="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/"><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2650397-sailing-m-70x70.jpg" alt="11 “must-see” places for every hardcore traveler" /></a>
                                                                </div>
                                                                <div className="title">
                                                                    <h2>
                                                                        <a href="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/">11 “must-see” places for every hardcore traveler</a>
                                                                        <span className="hotness">Hot</span>
                                                                    </h2>
                                                                    <p>
                                                                        <a href="http://planetshine.net/demo/goliath-news/category/review/" title="Review" className="tag-default">Review</a>
                                                                        <span className="legend-default">
                                                                            <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/#comments" className="comment-link"><i className="fa fa-comments" />2</a>   </span>
                                                                    </p>                      </div>
                                                            </div>
                                                        </div>
                                                    </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Completely manage resources for premier niche markets. Professionally cultivate your one-to-one customer service with robust ideas. Dynamically innovate resource..." data-overlay-url="http://planetshine.net/demo/goliath-news/how-to-never-be-late-for-a-meeting-again/">
                                                        <div className="inner-wrapper">
                                                            <div className="title-image-row">
                                                                <div className="image">
                                                                    <a href="http://planetshine.net/demo/goliath-news/how-to-never-be-late-for-a-meeting-again/"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-5341504-students-looking-into-devices-at-school-m-70x70.jpg" alt="How to never be late for a meeting again" /></a>
                                                                </div>
                                                                <div className="title">
                                                                    <h2>
                                                                        <a href="http://planetshine.net/demo/goliath-news/how-to-never-be-late-for-a-meeting-again/">How to never be late for a meeting again</a>
                                                                    </h2>
                                                                    <p>
                                                                        <a href="http://planetshine.net/demo/goliath-news/category/advice/" title="Advice" className="tag-default">Advice</a>
                                                                        <span className="legend-default">
                                                                            <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/how-to-never-be-late-for-a-meeting-again/#comments" className="comment-link"><i className="fa fa-comments" />3</a>   </span>
                                                                    </p>                      </div>
                                                            </div>
                                                        </div>
                                                    </div>                          </div>
                                                <div className="items">
                                                    <div className="post-item" data-overlay={1} data-overlay-excerpt="Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing...." data-overlay-url="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/">
                                                        <div className="inner-wrapper">
                                                            <div className="title-image-row">
                                                                <div className="image">
                                                                    <a href="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2254959-snowboard-m-70x70.jpg" alt="Trendiest snowboarding locations this season" /></a>
                                                                </div>
                                                                <div className="title">
                                                                    <h2>
                                                                        <a href="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/">Trendiest snowboarding locations this season</a>
                                                                        <span className="hotness">Hot</span>
                                                                    </h2>
                                                                    <p>
                                                                        <a href="http://planetshine.net/demo/goliath-news/category/travel/" title="Travel" className="tag-default">Travel</a>
                                                                        <span className="legend-default">
                                                                            <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/#comments" className="comment-link"><i className="fa fa-comments" />1</a>   </span>
                                                                    </p>                      </div>
                                                            </div>
                                                        </div>
                                                    </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Manage key channels for virtual e-tailers.  Seize scalable metrics for proactive e-services. Seamlessly empower fully researched growth strategies..." data-overlay-url="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/">
                                                        <div className="inner-wrapper">
                                                            <div className="title-image-row">
                                                                <div className="image">
                                                                    <a href="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/"><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2359457-extreme-ride-l-e1416940742544-70x70.jpg" alt="5 promising alternative energy sources" /></a>
                                                                </div>
                                                                <div className="title">
                                                                    <h2>
                                                                        <a href="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/">5 promising alternative energy sources</a>
                                                                        <span className="hotness">Hot</span>
                                                                    </h2>
                                                                    <p>
                                                                        <a href="http://planetshine.net/demo/goliath-news/category/business/" title="Business" className="tag-default">Business</a>
                                                                        <span className="legend-default">
                                                                            <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/#comments" className="comment-link"><i className="fa fa-comments" />4</a>   </span>
                                                                    </p>                      </div>
                                                            </div>
                                                        </div>
                                                    </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Efficiently push a cross media info for great value. Quickly do timely deliverables for real time schemas. Dramatically maintain..." data-overlay-url="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/">
                                                        <div className="inner-wrapper">
                                                            <div className="title-image-row">
                                                                <div className="image">
                                                                    <div className=" stars"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star-o" /><i className="fa fa-star-o" />
                                                                    </div>                            <a href="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/"><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2650397-sailing-m-70x70.jpg" alt="11 “must-see” places for every hardcore traveler" /></a>
                                                                </div>
                                                                <div className="title">
                                                                    <h2>
                                                                        <a href="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/">11 “must-see” places for every hardcore traveler</a>
                                                                        <span className="hotness">Hot</span>
                                                                    </h2>
                                                                    <p>
                                                                        <a href="http://planetshine.net/demo/goliath-news/category/review/" title="Review" className="tag-default">Review</a>
                                                                        <span className="legend-default">
                                                                            <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/#comments" className="comment-link"><i className="fa fa-comments" />2</a>   </span>
                                                                    </p>                      </div>
                                                            </div>
                                                        </div>
                                                    </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Proactive media based expertise and cross-media growth strategy. Seamlessly visualize quality rich capital with fast collaboration and idea sharing...." data-overlay-url="http://planetshine.net/demo/goliath-news/8-productivity-tips-for-designers/">
                                                        <div className="inner-wrapper">
                                                            <div className="title-image-row">
                                                                <div className="image">
                                                                    <div className=" stars"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                                                                    </div>                            <a href="http://planetshine.net/demo/goliath-news/8-productivity-tips-for-designers/"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/08/photodune-4161594-designer-at-work-m-70x70.jpg" alt="8 productivity tips for designers" /></a>
                                                                </div>
                                                                <div className="title">
                                                                    <h2>
                                                                        <a href="http://planetshine.net/demo/goliath-news/8-productivity-tips-for-designers/">8 productivity tips for designers</a>
                                                                    </h2>
                                                                    <p>
                                                                        <a href="http://planetshine.net/demo/goliath-news/category/advice/" title="Advice" className="tag-default">Advice</a>
                                                                        <span className="legend-default">
                                                                            <i className="fa fa-clock-o" />Aug 23, 2014         <a href="http://planetshine.net/demo/goliath-news/8-productivity-tips-for-designers/#comments" className="comment-link"><i className="fa fa-comments" />2</a>   </span>
                                                                    </p>                      </div>
                                                            </div>
                                                        </div>
                                                    </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Completely manage resources for premier niche markets. Professionally cultivate your one-to-one customer service with robust ideas. Dynamically innovate resource..." data-overlay-url="http://planetshine.net/demo/goliath-news/how-to-never-be-late-for-a-meeting-again/">
                                                        <div className="inner-wrapper">
                                                            <div className="title-image-row">
                                                                <div className="image">
                                                                    <a href="http://planetshine.net/demo/goliath-news/how-to-never-be-late-for-a-meeting-again/"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-5341504-students-looking-into-devices-at-school-m-70x70.jpg" alt="How to never be late for a meeting again" /></a>
                                                                </div>
                                                                <div className="title">
                                                                    <h2>
                                                                        <a href="http://planetshine.net/demo/goliath-news/how-to-never-be-late-for-a-meeting-again/">How to never be late for a meeting again</a>
                                                                    </h2>
                                                                    <p>
                                                                        <a href="http://planetshine.net/demo/goliath-news/category/advice/" title="Advice" className="tag-default">Advice</a>
                                                                        <span className="legend-default">
                                                                            <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/how-to-never-be-late-for-a-meeting-again/#comments" className="comment-link"><i className="fa fa-comments" />3</a>   </span>
                                                                    </p>                      </div>
                                                            </div>
                                                        </div>
                                                    </div>                          </div>
                                            </div>
                                        </div>
                                    </div> {/* After widget close div */}
                                    <div id="goliath_sidebar_banner-2" className="sidebar-item clearfix goliath_sidebar_banner">
                                        <div className="banner-300x250">
                                            <a href target="_blank"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/themes/goliath/theme/assets/images/banner-300x250.png" alt="Default 300x250" /></a>
                                        </div>
                                    </div> {/* After widget close div */}
                                    <div id="goliath_recent_posts-2" className="sidebar-item clearfix recent-posts">
                                        {/* Latest reviews */}
                                        <div className="widget-tabs mobile">
                                            <div className="title-default">
                                                <a href="http://planetshine.net/demo/goliath-news/category/review/" className="active">Latest reviews</a>
                                                <a href="http://planetshine.net/demo/goliath-news/category/review/" className="view-all">View all</a>
                                            </div>
                                            <div className="items">
                                                <div className="post-item" data-overlay={1} data-overlay-excerpt="Efficiently push a cross media info for great value. Quickly do timely deliverables for real time schemas. Dramatically maintain..." data-overlay-url="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/">
                                                    <div className="inner-wrapper">
                                                        <div className="title-image-row">
                                                            <div className="image">
                                                                <div className=" stars"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star-o" /><i className="fa fa-star-o" />
                                                                </div>                            <a href="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/"><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2650397-sailing-m-70x70.jpg" alt="11 “must-see” places for every hardcore traveler" /></a>
                                                            </div>
                                                            <div className="title">
                                                                <h2>
                                                                    <a href="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/">11 “must-see” places for every hardcore traveler</a>
                                                                    <span className="hotness">Hot</span>
                                                                </h2>
                                                                <p>
                                                                    <a href="http://planetshine.net/demo/goliath-news/category/review/" title="Review" className="tag-default">Review</a>
                                                                    <span className="legend-default">
                                                                        <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/#comments" className="comment-link"><i className="fa fa-comments" />2</a>   </span>
                                                                </p>                      </div>
                                                        </div>
                                                    </div>
                                                </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Completely manage resources for premier niche markets. Professionally cultivate your one-to-one customer service with robust ideas. Dynamically innovate resource..." data-overlay-url="http://planetshine.net/demo/goliath-news/how-to-never-be-late-for-a-meeting-again/">
                                                    <div className="inner-wrapper">
                                                        <div className="title-image-row">
                                                            <div className="image">
                                                                <a href="http://planetshine.net/demo/goliath-news/how-to-never-be-late-for-a-meeting-again/"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-5341504-students-looking-into-devices-at-school-m-70x70.jpg" alt="How to never be late for a meeting again" /></a>
                                                            </div>
                                                            <div className="title">
                                                                <h2>
                                                                    <a href="http://planetshine.net/demo/goliath-news/how-to-never-be-late-for-a-meeting-again/">How to never be late for a meeting again</a>
                                                                </h2>
                                                                <p>
                                                                    <a href="http://planetshine.net/demo/goliath-news/category/advice/" title="Advice" className="tag-default">Advice</a>
                                                                    <span className="legend-default">
                                                                        <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/how-to-never-be-late-for-a-meeting-again/#comments" className="comment-link"><i className="fa fa-comments" />3</a>   </span>
                                                                </p>                      </div>
                                                        </div>
                                                    </div>
                                                </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Objectively innovate smart tech products with parallel platforms. Holisticly manage extensible testing procedures for reliable supply chains. Dramatically engage..." data-overlay-url="http://planetshine.net/demo/goliath-news/this-summers-hotest-travel-locations/">
                                                    <div className="inner-wrapper">
                                                        <div className="title-image-row">
                                                            <div className="image">
                                                                <div className=" stars"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star-half-o" />
                                                                </div>                            <a href="http://planetshine.net/demo/goliath-news/this-summers-hotest-travel-locations/"><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-835948-outside-tea-m-70x70.jpg" alt="This summers hotest travel locations" /></a>
                                                            </div>
                                                            <div className="title">
                                                                <h2>
                                                                    <a href="http://planetshine.net/demo/goliath-news/this-summers-hotest-travel-locations/">This summers hotest travel locations</a>
                                                                </h2>
                                                                <p>
                                                                    <a href="http://planetshine.net/demo/goliath-news/category/review/" title="Review" className="tag-default">Review</a>
                                                                    <span className="legend-default">
                                                                        <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/this-summers-hotest-travel-locations/#respond" className="comment-link"><i className="fa fa-comments" />0</a>   </span>
                                                                </p>                      </div>
                                                        </div>
                                                    </div>
                                                </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Proactively envisioned tech based expertise and cross media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and..." data-overlay-url="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/">
                                                    <div className="inner-wrapper">
                                                        <div className="title-image-row">
                                                            <div className="image">
                                                                <a href="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/"><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/10/photodune-2242753-urban-lifestyle-m-e1417481556893-70x70.jpg" alt="Photo sharing app effect on social media juggernauts" /></a>
                                                            </div>
                                                            <div className="title">
                                                                <h2>
                                                                    <a href="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/">Photo sharing app effect on social media juggernauts</a>
                                                                </h2>
                                                                <p>
                                                                    <a href="http://planetshine.net/demo/goliath-news/category/business/" title="Business" className="tag-default">Business</a>
                                                                    <span className="legend-default">
                                                                        <i className="fa fa-clock-o" />Oct 25, 2014         <a href="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/#respond" className="comment-link"><i className="fa fa-comments" />0</a>   </span>
                                                                </p>                      </div>
                                                        </div>
                                                    </div>
                                                </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Proactive media based expertise and cross-media growth strategy. Seamlessly visualize quality rich capital with fast collaboration and idea sharing...." data-overlay-url="http://planetshine.net/demo/goliath-news/8-productivity-tips-for-designers/">
                                                    <div className="inner-wrapper">
                                                        <div className="title-image-row">
                                                            <div className="image">
                                                                <div className=" stars"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                                                                </div>                            <a href="http://planetshine.net/demo/goliath-news/8-productivity-tips-for-designers/"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/08/photodune-4161594-designer-at-work-m-70x70.jpg" alt="8 productivity tips for designers" /></a>
                                                            </div>
                                                            <div className="title">
                                                                <h2>
                                                                    <a href="http://planetshine.net/demo/goliath-news/8-productivity-tips-for-designers/">8 productivity tips for designers</a>
                                                                </h2>
                                                                <p>
                                                                    <a href="http://planetshine.net/demo/goliath-news/category/advice/" title="Advice" className="tag-default">Advice</a>
                                                                    <span className="legend-default">
                                                                        <i className="fa fa-clock-o" />Aug 23, 2014         <a href="http://planetshine.net/demo/goliath-news/8-productivity-tips-for-designers/#comments" className="comment-link"><i className="fa fa-comments" />2</a>   </span>
                                                                </p>                      </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> {/* After widget close div */}
                                    <div id="goliath_archive-2" className="sidebar-item clearfix goliath_archive">
                                        {/* Archive */}
                                        <div className="widget-tabs">
                                            <div className="title-default">
                                                <span className="active">Archive</span>
                                            </div>
                                            <div className="items archives">
                                                <ul>
                                                    <li><a href="http://planetshine.net/demo/goliath-news/2014/11/">November 2014</a>&nbsp;(6)</li>
                                                    <li><a href="http://planetshine.net/demo/goliath-news/2014/10/">October 2014</a>&nbsp;(2)</li>
                                                    <li><a href="http://planetshine.net/demo/goliath-news/2014/09/">September 2014</a>&nbsp;(1)</li>
                                                    <li><a href="http://planetshine.net/demo/goliath-news/2014/08/">August 2014</a>&nbsp;(1)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> {/* After widget close div */}
                                </div>
                            </div> </div></div></div><div className="vc_row wpb_row vc_row-fluid"><div className="wpb_column vc_column_container vc_col-sm-12"><div className="wpb_wrapper">			{/* Slider tabs */}
                                {/* ContainerSliderTabs */}
                                <ContainerSliderTabs />

                            </div></div></div>
                        </div>  </div>
                </div >
                {/* Footer */}
                <Footer />
                {/* Copyright */}
                <Copyright />
                {/* END body */}
            </div >
        )
    }
}
