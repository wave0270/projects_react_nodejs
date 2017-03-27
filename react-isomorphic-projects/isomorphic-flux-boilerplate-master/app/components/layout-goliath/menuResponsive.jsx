import React, { Component, PropTypes } from 'react'

export default class MenuResponsive extends Component {

    static propTypes = {}

    static contextTypes = {
        flux: PropTypes.object.isRequired,
        i18n: PropTypes.func.isRequired
    }

    state = {
        results: []
    }

    componentWillMount() {
        const { flux, i18n } = this.context
        flux.getActions('helmet').update({ title: i18n('users.page-title') })
        this.state ? (this.state.results = []) : ''
    }

    render() {
        return (
            <div className="navbar-wrapper navbar-wrapper-responsive">
                <div className="navbar navbar-default menu">
                    <div className="container">
                        <ul className="nav">
                            <li className="active">
                            </li>
                            <li className="dropdown bars">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-bars" /></a>
                                <div className="dropdown-menu full-width mobile-menu"><ul id="mobile-menu" className><li id="menu-item-62" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-26 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-62"><a href="http://planetshine.net/demo/goliath-news/">Home</a>
                                    <ul className="sub-menu">
                                        <li id="menu-item-281" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-26 current_page_item menu-item-281"><a href="http://planetshine.net/demo/goliath-news/">Home I</a></li>
                                        <li id="menu-item-183" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-183"><a href="http://planetshine.net/demo/goliath-news/home-ii/">Home II</a></li>
                                        <li id="menu-item-290" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-290"><a href="http://planetshine.net/demo/goliath-news/home-iii/">Home III</a></li>
                                        <li id="menu-item-301" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-301"><a href="http://planetshine.net/demo/goliath-news/home-iv/">Home IV</a></li>
                                        <li id="menu-item-308" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-308"><a href="http://planetshine.net/demo/goliath-news/home-v/">Home V</a></li>
                                    </ul>
                                </li>
                                    <li id="menu-item-13" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13"><a href="http://planetshine.net/demo/goliath-news/blog/">Blog</a></li>
                                    <li id="menu-item-68" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-68"><a href="http://planetshine.net/demo/goliath-news/category/review/">Reviews</a>
                                        <ul className="sub-menu">
                                            <li id="menu-item-65" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-65"><a href="http://planetshine.net/demo/goliath-news/category/travel/">Travel</a></li>
                                            <li id="menu-item-66" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-66"><a href="http://planetshine.net/demo/goliath-news/category/business/">Business</a></li>
                                            <li id="menu-item-67" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-67"><a href="http://planetshine.net/demo/goliath-news/category/advice/">Advice</a></li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-69" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-69"><a href="http://planetshine.net/demo/goliath-news/category/travel/">Travel</a></li>
                                    <li id="menu-item-182" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-182"><a href="http://planetshine.net/demo/goliath-news/gallery/">Galleries</a></li>
                                    <li id="menu-item-63" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-63"><a href="http://planetshine.net/demo/goliath-news/shop/">Shop</a></li>
                                    <li id="menu-item-208" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-208"><a href="http://planetshine.net/demo/goliath-news/forums/">Forums</a></li>
                                    <li id="menu-item-433" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-433"><a href="http://planetshine.net/demo/goliath-news/goliath-ads-optimized-news-reviews-magazine/">Features</a>
                                        <ul className="sub-menu">
                                            <li id="menu-item-432" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-432"><a href="http://planetshine.net/demo/goliath-news/goliath-ads-optimized-news-reviews-magazine/">Theme video</a></li>
                                            <li id="menu-item-79" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-79"><a href="http://planetshine.net/demo/goliath-news/text-styles/">Text styles</a></li>
                                            <li id="menu-item-361" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-361"><a href="http://planetshine.net/demo/goliath-news/blog/">Post styles</a>
                                                <ul className="sub-menu">
                                                    <li id="menu-item-364" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-364"><a href="http://planetshine.net/demo/goliath-news/how-i-walked-the-entire-great-wall-of-china/">Small image</a></li>
                                                    <li id="menu-item-365" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-365"><a href="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/">Medium image</a></li>
                                                    <li id="menu-item-362" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-362"><a href="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/">Medium image + sidebar</a></li>
                                                    <li id="menu-item-363" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-363"><a href="http://planetshine.net/demo/goliath-news/twitters-cfo-accidentally-tweeted-a-private-message-about-acquiring-a-company/">100% image</a></li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-464" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-464"><a href="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/">Video posts</a>
                                                <ul className="sub-menu">
                                                    <li id="menu-item-466" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-466"><a href="http://planetshine.net/demo/goliath-news/how-to-never-be-late-for-a-meeting-again/">Small video</a></li>
                                                    <li id="menu-item-465" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-465"><a href="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/">Large video + autoplay</a></li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-373" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-373"><a href="http://planetshine.net/demo/goliath-news/blog/">Blog styles</a>
                                                <ul className="sub-menu">
                                                    <li id="menu-item-374" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-374"><a href="http://planetshine.net/demo/goliath-news/blog/">Large featured posts</a></li>
                                                    <li id="menu-item-375" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-375"><a href="http://planetshine.net/demo/goliath-news/blog/?blog_style=2">Small featured posts</a></li>
                                                    <li id="menu-item-376" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-376"><a href="http://planetshine.net/demo/goliath-news/blog/?blog_style=4">Large posts</a></li>
                                                    <li id="menu-item-377" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-377"><a href="http://planetshine.net/demo/goliath-news/blog/?blog_style=1">Small posts</a></li>
                                                    <li id="menu-item-378" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-378"><a href="http://planetshine.net/demo/goliath-news/blog/?blog_style=3">Sidebar on left</a></li>
                                                    <li id="menu-item-379" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-379"><a href="http://planetshine.net/demo/goliath-news/blog/?blog_style=1">Sidebar on right</a></li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-115" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-115"><a href="http://planetshine.net/demo/goliath-news/shortcodes/">Shortcodes</a></li>
                                            <li id="menu-item-134" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-134"><a href="http://planetshine.net/demo/goliath-news/visual-composer-blocks/">Visual Composer</a></li>
                                            <li id="menu-item-72" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-72"><a href="http://planetshine.net/demo/goliath-news/contact/">Contact form</a></li>
                                            <li id="menu-item-141" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-141"><a href="http://planetshine.net/demo/goliath-news/full-width-page/">Full width page</a></li>
                                        </ul>
                                    </li>
                                </ul></div>              </li>
                            <li className="dropdown new-stories new">
                                <a href="#" data-toggle="dropdown" className="dropdown-toggle" aria-haspopup="true"><s>8</s><span>staff<br />picks</span></a>
                                <div className="dropdown-menu full-width">
                                    <div className="widget goliath_dropdown_post_list">
                                        <div className="post-block-1 dropdown-post-list">
                                            {/* Widget items START */}
                                            <div className="items">
                                                <div className="dropdown-row-wrapper"><div className="post-item" data-overlay={1} data-overlay-excerpt="Manage key channels for virtual e-tailers.  Seize scalable metrics for proactive e-services. Seamlessly empower fully researched growth strategies and interoperable internal or &quot;organic&quot; sources." data-overlay-url="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/">
                                                    <div className="inner-wrapper">
                                                        <div className="title-image-row">
                                                            <div className="image">
                                                                <a href="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2359457-extreme-ride-l-e1416940742544-119x120.jpg" alt="5 promising alternative energy sources" /></a>
                                                            </div>
                                                            <div className="title-excerpt-cell">
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
                                                                <div className="post-intro">
                                                                    Manage key channels for virtual e-tailers.  Seize scalable...                      </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Engage large outlets with web enabled tech. Coordinate via new e-commerce and process centric &quot;outside the box&quot; thinking. Completely pursue scalable customer service through sustainable potentialities." data-overlay-url="http://planetshine.net/demo/goliath-news/how-i-walked-the-entire-great-wall-of-china/">
                                                        <div className="inner-wrapper">
                                                            <div className="title-image-row">
                                                                <div className="image">
                                                                    <a href="http://planetshine.net/demo/goliath-news/how-i-walked-the-entire-great-wall-of-china/"><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-6667068-couple-camping-m-e1417481107400-119x120.jpg" alt="How I walked the entire Great Wall of China" /></a>
                                                                </div>
                                                                <div className="title-excerpt-cell">
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
                                                                    <div className="post-intro">
                                                                        Engage large outlets with web enabled tech. Coordinate via...                      </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div></div><div className="dropdown-row-wrapper"><div className="post-item" data-overlay={1} data-overlay-excerpt="Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products." data-overlay-url="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/">
                                                        <div className="inner-wrapper">
                                                            <div className="title-image-row">
                                                                <div className="image">
                                                                    <a href="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2254959-snowboard-m-119x120.jpg" alt="Trendiest snowboarding locations this season" /></a>
                                                                </div>
                                                                <div className="title-excerpt-cell">
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
                                                                    <div className="post-intro">
                                                                        Proactively envisioned multimedia based expertise and cross-media growth strategies....                      </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Efficiently push a cross media info for great value. Quickly do timely deliverables for real time schemas. Dramatically maintain clicks and mortar solutions without functional solutions." data-overlay-url="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/">
                                                        <div className="inner-wrapper">
                                                            <div className="title-image-row">
                                                                <div className="image">
                                                                    <div className=" stars"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star-o" /><i className="fa fa-star-o" />
                                                                    </div>                        <a href="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2650397-sailing-m-119x120.jpg" alt="11 “must-see” places for every hardcore traveler" /></a>
                                                                </div>
                                                                <div className="title-excerpt-cell">
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
                                                                    <div className="post-intro">
                                                                        Efficiently push a cross media info for great value....                      </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div></div><div className="dropdown-row-wrapper"><div className="post-item" data-overlay={1} data-overlay-excerpt="Completely manage resources for premier niche markets. Professionally cultivate your one-to-one customer service with robust ideas. Dynamically innovate resource leveling customer service for state of the art customer service." data-overlay-url="http://planetshine.net/demo/goliath-news/how-to-never-be-late-for-a-meeting-again/">
                                                        <div className="inner-wrapper">
                                                            <div className="title-image-row">
                                                                <div className="image">
                                                                    <a href="http://planetshine.net/demo/goliath-news/how-to-never-be-late-for-a-meeting-again/"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-5341504-students-looking-into-devices-at-school-m-119x120.jpg" alt="How to never be late for a meeting again" /></a>
                                                                </div>
                                                                <div className="title-excerpt-cell">
                                                                    <div className="title">
                                                                        <h2>
                                                                            <a href="http://planetshine.net/demo/goliath-news/how-to-never-be-late-for-a-meeting-again/">How to never be late for a meeting again</a>
                                                                        </h2>
                                                                        <p>
                                                                            <a href="http://planetshine.net/demo/goliath-news/category/advice/" title="Advice" className="tag-default">Advice</a>
                                                                            <span className="legend-default">
                                                                                <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/how-to-never-be-late-for-a-meeting-again/#comments" className="comment-link"><i className="fa fa-comments" />3</a>   </span>
                                                                        </p>                      </div>
                                                                    <div className="post-intro">
                                                                        Completely manage resources for premier niche markets. Professionally cultivate...                      </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Objectively innovate smart tech products with parallel platforms. Holisticly manage extensible testing procedures for reliable supply chains. Dramatically engage top line web services vis-a-vis cutting-edge deliverables." data-overlay-url="http://planetshine.net/demo/goliath-news/this-summers-hotest-travel-locations/">
                                                        <div className="inner-wrapper">
                                                            <div className="title-image-row">
                                                                <div className="image">
                                                                    <div className=" stars"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star-half-o" />
                                                                    </div>                        <a href="http://planetshine.net/demo/goliath-news/this-summers-hotest-travel-locations/"><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-835948-outside-tea-m-119x120.jpg" alt="This summers hotest travel locations" /></a>
                                                                </div>
                                                                <div className="title-excerpt-cell">
                                                                    <div className="title">
                                                                        <h2>
                                                                            <a href="http://planetshine.net/demo/goliath-news/this-summers-hotest-travel-locations/">This summers hotest travel locations</a>
                                                                        </h2>
                                                                        <p>
                                                                            <a href="http://planetshine.net/demo/goliath-news/category/review/" title="Review" className="tag-default">Review</a>
                                                                            <span className="legend-default">
                                                                                <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/this-summers-hotest-travel-locations/#respond" className="comment-link"><i className="fa fa-comments" />0</a>   </span>
                                                                        </p>                      </div>
                                                                    <div className="post-intro">
                                                                        Objectively innovate smart tech products with parallel platforms. Holisticly...                      </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div></div><div className="dropdown-row-wrapper"><div className="post-item" data-overlay={1} data-overlay-excerpt="Proactive media based expertise and cross-media growth strategy. Seamlessly visualize quality rich  capital with fast collaboration and idea sharing. Holistically pontificate installed base portals after maintainable products." data-overlay-url="http://planetshine.net/demo/goliath-news/twitters-cfo-accidentally-tweeted-a-private-message-about-acquiring-a-company/">
                                                        <div className="inner-wrapper">
                                                            <div className="title-image-row">
                                                                <div className="image">
                                                                    <a href="http://planetshine.net/demo/goliath-news/twitters-cfo-accidentally-tweeted-a-private-message-about-acquiring-a-company/"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/10/photodune-4283210-city-l-119x120.jpg" alt="CFO tweeted a message about buying a company" /></a>
                                                                </div>
                                                                <div className="title-excerpt-cell">
                                                                    <div className="title">
                                                                        <h2>
                                                                            <a href="http://planetshine.net/demo/goliath-news/twitters-cfo-accidentally-tweeted-a-private-message-about-acquiring-a-company/">CFO tweeted a message about buying a company</a>
                                                                            <span className="hotness">Hot</span>
                                                                        </h2>
                                                                        <p>
                                                                            <a href="http://planetshine.net/demo/goliath-news/category/business/" title="Business" className="tag-default">Business</a>
                                                                            <span className="legend-default">
                                                                                <i className="fa fa-clock-o" />Oct 25, 2014         <a href="http://planetshine.net/demo/goliath-news/twitters-cfo-accidentally-tweeted-a-private-message-about-acquiring-a-company/#respond" className="comment-link"><i className="fa fa-comments" />0</a>   </span>
                                                                        </p>                      </div>
                                                                    <div className="post-intro">
                                                                        Proactive media based expertise and cross-media growth strategy. Seamlessly...                      </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Proactively envisioned tech based expertise and cross media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea sharing. Holistically pontificate installed base portals after maintainable products." data-overlay-url="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/">
                                                        <div className="inner-wrapper">
                                                            <div className="title-image-row">
                                                                <div className="image">
                                                                    <a href="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/10/photodune-2242753-urban-lifestyle-m-e1417481556893-119x120.jpg" alt="Photo sharing app effect on social media juggernauts 2" /></a>
                                                                </div>
                                                                <div className="title-excerpt-cell">
                                                                    <div className="title">
                                                                        <h2>
                                                                            <a href="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/">Photo sharing app effect on social media juggernauts</a>
                                                                        </h2>
                                                                        <p>
                                                                            <a href="http://planetshine.net/demo/goliath-news/category/business/" title="Business" className="tag-default">Business</a>
                                                                            <span className="legend-default">
                                                                                <i className="fa fa-clock-o" />Oct 25, 2014         <a href="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/#respond" className="comment-link"><i className="fa fa-comments" />0</a>   </span>
                                                                        </p>                      </div>
                                                                    <div className="post-intro">
                                                                        Proactively envisioned tech based expertise and cross media growth...                      </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div></div>              </div>
                                            {/* Widget items END */}
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown search">
                                <form method="get" action="http://planetshine.net/demo/goliath-news/">
                                    <input type="text" name="s" className="form-control" placeholder="search here" />
                                </form>
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-search" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

