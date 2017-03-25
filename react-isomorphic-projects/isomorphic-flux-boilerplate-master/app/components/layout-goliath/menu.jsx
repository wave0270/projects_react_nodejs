import React, { Component, PropTypes } from 'react'

export default class Menu extends Component {

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
            <div className="navbar-wrapper  sadsdad">
                <div className="navbar navbar-default menu">
                    <div className="container">
                        <div className="default-menu"><ul id="menu-primary" className="nav constellation"><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-26 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-62 dropdown active"><a title="Home" href="http://planetshine.net/demo/goliath-news/" data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle disabled" aria-haspopup="true">Home</a><div className="dropdown-menu default-dropdown">
                            <ul role="menu">
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-26 current_page_item menu-item-281 active"><a title="Home I" href="http://planetshine.net/demo/goliath-news/">Home I</a></li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-183"><a title="Home II" href="http://planetshine.net/demo/goliath-news/home-ii/">Home II</a></li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-290"><a title="Home III" href="http://planetshine.net/demo/goliath-news/home-iii/">Home III</a></li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-301"><a title="Home IV" href="http://planetshine.net/demo/goliath-news/home-iv/">Home IV</a></li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-308"><a title="Home V" href="http://planetshine.net/demo/goliath-news/home-v/">Home V</a></li>
                            </ul>
                        </div></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13 dropdown"><a title="Blog" href="http://planetshine.net/demo/goliath-news/blog/" data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle disabled" aria-haspopup="true">Blog</a><div className="dropdown-menu full-width">
                                <div id="goliath_dropdown_category_posts-2" className="sidebar-item constellation-widget widget goliath_dropdown_category_posts">
                                    <div className="dropdown-category-posts">
                                        <div className="sorting">
                                            <div className="label">
                                                Showing              </div>
                                            <div className="tags">
                                                <a href="#58c09f9fcfd56_all" className="tag-1 active"><span>All recent articles</span></a>
                                                <a href="#58c09f9fcfd56_advice" className="tag-1"><span>Advice</span></a><a href="#58c09f9fcfd56_business" className="tag-1"><span>Business</span></a><a href="#58c09f9fcfd56_travel" className="tag-1"><span>Travel</span></a>              </div>
                                        </div>
                                        <div className="items" id="58c09f9fcfd56_all">
                                            <div className="item big" style={{ backgroundImage: 'url(http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2359457-extreme-ride-l-e1416940742544-500x308.jpg)' }}>
                                                <div className="overlay">
                                                    <div className="title">
                                                        <h2>
                                                            <a href="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/">5 promising alternative energy sources</a>
                                                            <span className="hotness">Hot</span>
                                                        </h2>
                                                        <p>
                                                            <a href="http://planetshine.net/demo/goliath-news/category/business/" title="Business" className="tag-default">Business</a>
                                                            <span className="legend-default">
                                                                <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/#comments" className="comment-link"><i className="fa fa-comments" />4</a>   </span>
                                                        </p>            <div className="intro">
                                                            Manage key channels for virtual e-tailers.  Seize scalable metrics for proactive e-services. Seamlessly...                <a href="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/" className="more-link">Read more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item small" style={{ backgroundImage: 'url(http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-6667068-couple-camping-m-e1417481107400-200x308.jpg)' }}>
                                                <div className="overlay">
                                                    <div className="title">
                                                        <h2>
                                                            <a href="http://planetshine.net/demo/goliath-news/how-i-walked-the-entire-great-wall-of-china/">How I walked the entire Great Wall of China</a>
                                                            <span className="hotness">Hot</span>
                                                        </h2>
                                                        <p>
                                                            <a href="http://planetshine.net/demo/goliath-news/category/travel/" title="Travel" className="tag-default">Travel</a>
                                                            <span className="legend-default">
                                                                <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/how-i-walked-the-entire-great-wall-of-china/#respond" className="comment-link"><i className="fa fa-comments" />0</a>   </span>
                                                        </p>            <div className="intro">
                                                            Engage large outlets with web enabled tech. Coordinate via new e-commerce and process centric...                <a href="http://planetshine.net/demo/goliath-news/how-i-walked-the-entire-great-wall-of-china/" className="more-link">Read more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item small" style={{ backgroundImage: 'url(http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2254959-snowboard-m-200x308.jpg)' }}>
                                                <div className="overlay">
                                                    <div className="title">
                                                        <h2>
                                                            <a href="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/">Trendiest snowboarding locations this season</a>
                                                            <span className="hotness">Hot</span>
                                                        </h2>
                                                        <p>
                                                            <a href="http://planetshine.net/demo/goliath-news/category/travel/" title="Travel" className="tag-default">Travel</a>
                                                            <span className="legend-default">
                                                                <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/#comments" className="comment-link"><i className="fa fa-comments" />1</a>   </span>
                                                        </p>            <div className="intro">
                                                            Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital...                <a href="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/" className="more-link">Read more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item small" style={{ backgroundImage: 'url(http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2650397-sailing-m-200x308.jpg)' }}>
                                                <div className="overlay">
                                                    <div className="title">
                                                        <div className=" stars"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star-o" /><i className="fa fa-star-o" />
                                                        </div>            <h2>
                                                            <a href="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/">11 “must-see” places for every hardcore traveler</a>
                                                            <span className="hotness">Hot</span>
                                                        </h2>
                                                        <p>
                                                            <a href="http://planetshine.net/demo/goliath-news/category/review/" title="Review" className="tag-default">Review</a>
                                                            <span className="legend-default">
                                                                <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/#comments" className="comment-link"><i className="fa fa-comments" />2</a>   </span>
                                                        </p>            <div className="intro">
                                                            Efficiently push a cross media info for great value. Quickly do timely deliverables for...                <a href="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/" className="more-link">Read more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div></div><div className="items" id="58c09f9fcfd56_advice">
                                            <div className="item big" style={{ backgroundImage: 'url(http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-5341504-students-looking-into-devices-at-school-m-500x308.jpg)' }}>
                                                <div className="overlay">
                                                    <div className="title">
                                                        <h2>
                                                            <a href="http://planetshine.net/demo/goliath-news/how-to-never-be-late-for-a-meeting-again/">How to never be late for a meeting again</a>
                                                        </h2>
                                                        <p>
                                                            <a href="http://planetshine.net/demo/goliath-news/category/advice/" title="Advice" className="tag-default">Advice</a>
                                                            <span className="legend-default">
                                                                <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/how-to-never-be-late-for-a-meeting-again/#comments" className="comment-link"><i className="fa fa-comments" />3</a>   </span>
                                                        </p>            <div className="intro">
                                                            Completely manage resources for premier niche markets. Professionally cultivate your one-to-one customer service with...                <a href="http://planetshine.net/demo/goliath-news/how-to-never-be-late-for-a-meeting-again/" className="more-link">Read more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item small" style={{ backgroundImage: 'url(http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/09/photodune-3642871-city-crossroad-scene-l-200x308.jpg)' }}>
                                                <div className="overlay">
                                                    <div className="title">
                                                        <h2>
                                                            <a href="http://planetshine.net/demo/goliath-news/who-will-be-this-years-top-earning-ceo/">Uber? Lyft? Taxi? The best ways to travel</a>
                                                        </h2>
                                                        <p>
                                                            <a href="http://planetshine.net/demo/goliath-news/category/advice/" title="Advice" className="tag-default">Advice</a>
                                                            <span className="legend-default">
                                                                <i className="fa fa-clock-o" />Sep 25, 2014         <a href="http://planetshine.net/demo/goliath-news/who-will-be-this-years-top-earning-ceo/#respond" className="comment-link"><i className="fa fa-comments" />0</a>   </span>
                                                        </p>            <div className="intro">
                                                            Collaboratively manage markets via plug and play networks. Dynamically reach B2C users after installed...                <a href="http://planetshine.net/demo/goliath-news/who-will-be-this-years-top-earning-ceo/" className="more-link">Read more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item small" style={{ backgroundImage: 'url(http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/08/photodune-4161594-designer-at-work-m-200x308.jpg)' }}>
                                                <div className="overlay">
                                                    <div className="title">
                                                        <div className=" stars"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                                                        </div>            <h2>
                                                            <a href="http://planetshine.net/demo/goliath-news/8-productivity-tips-for-designers/">8 productivity tips for designers</a>
                                                        </h2>
                                                        <p>
                                                            <a href="http://planetshine.net/demo/goliath-news/category/advice/" title="Advice" className="tag-default">Advice</a>
                                                            <span className="legend-default">
                                                                <i className="fa fa-clock-o" />Aug 23, 2014         <a href="http://planetshine.net/demo/goliath-news/8-productivity-tips-for-designers/#comments" className="comment-link"><i className="fa fa-comments" />2</a>   </span>
                                                        </p>            <div className="intro">
                                                            Proactive media based expertise and cross-media growth strategy. Seamlessly visualize quality rich capital with...                <a href="http://planetshine.net/demo/goliath-news/8-productivity-tips-for-designers/" className="more-link">Read more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div></div><div className="items" id="58c09f9fcfd56_business">
                                            <div className="item big" style={{ backgroundImage: 'url(http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2359457-extreme-ride-l-e1416940742544-500x308.jpg)' }}>
                                                <div className="overlay">
                                                    <div className="title">
                                                        <h2>
                                                            <a href="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/">5 promising alternative energy sources</a>
                                                            <span className="hotness">Hot</span>
                                                        </h2>
                                                        <p>
                                                            <a href="http://planetshine.net/demo/goliath-news/category/business/" title="Business" className="tag-default">Business</a>
                                                            <span className="legend-default">
                                                                <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/#comments" className="comment-link"><i className="fa fa-comments" />4</a>   </span>
                                                        </p>            <div className="intro">
                                                            Manage key channels for virtual e-tailers.  Seize scalable metrics for proactive e-services. Seamlessly...                <a href="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/" className="more-link">Read more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item small" style={{ backgroundImage: 'url(http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/10/photodune-4283210-city-l-200x308.jpg)' }}>
                                                <div className="overlay">
                                                    <div className="title">
                                                        <h2>
                                                            <a href="http://planetshine.net/demo/goliath-news/twitters-cfo-accidentally-tweeted-a-private-message-about-acquiring-a-company/">CFO tweeted a message about buying a company</a>
                                                            <span className="hotness">Hot</span>
                                                        </h2>
                                                        <p>
                                                            <a href="http://planetshine.net/demo/goliath-news/category/business/" title="Business" className="tag-default">Business</a>
                                                            <span className="legend-default">
                                                                <i className="fa fa-clock-o" />Oct 25, 2014         <a href="http://planetshine.net/demo/goliath-news/twitters-cfo-accidentally-tweeted-a-private-message-about-acquiring-a-company/#respond" className="comment-link"><i className="fa fa-comments" />0</a>   </span>
                                                        </p>            <div className="intro">
                                                            Proactive media based expertise and cross-media growth strategy. Seamlessly visualize quality rich  capital...                <a href="http://planetshine.net/demo/goliath-news/twitters-cfo-accidentally-tweeted-a-private-message-about-acquiring-a-company/" className="more-link">Read more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item small" style={{ backgroundImage: 'url(http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/10/photodune-2242753-urban-lifestyle-m-e1417481556893-200x308.jpg)' }}>
                                                <div className="overlay">
                                                    <div className="title">
                                                        <h2>
                                                            <a href="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/">Photo sharing app effect on social media juggernauts</a>
                                                        </h2>
                                                        <p>
                                                            <a href="http://planetshine.net/demo/goliath-news/category/business/" title="Business" className="tag-default">Business</a>
                                                            <span className="legend-default">
                                                                <i className="fa fa-clock-o" />Oct 25, 2014         <a href="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/#respond" className="comment-link"><i className="fa fa-comments" />0</a>   </span>
                                                        </p>            <div className="intro">
                                                            Proactively envisioned tech based expertise and cross media growth strategies. Seamlessly visualize quality intellectual...                <a href="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/" className="more-link">Read more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item small" style={{ backgroundImage: 'url(http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/09/photodune-3642871-city-crossroad-scene-l-200x308.jpg)' }}>
                                                <div className="overlay">
                                                    <div className="title">
                                                        <h2>
                                                            <a href="http://planetshine.net/demo/goliath-news/who-will-be-this-years-top-earning-ceo/">Uber? Lyft? Taxi? The best ways to travel</a>
                                                        </h2>
                                                        <p>
                                                            <a href="http://planetshine.net/demo/goliath-news/category/advice/" title="Advice" className="tag-default">Advice</a>
                                                            <span className="legend-default">
                                                                <i className="fa fa-clock-o" />Sep 25, 2014         <a href="http://planetshine.net/demo/goliath-news/who-will-be-this-years-top-earning-ceo/#respond" className="comment-link"><i className="fa fa-comments" />0</a>   </span>
                                                        </p>            <div className="intro">
                                                            Collaboratively manage markets via plug and play networks. Dynamically reach B2C users after installed...                <a href="http://planetshine.net/demo/goliath-news/who-will-be-this-years-top-earning-ceo/" className="more-link">Read more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div></div><div className="items" id="58c09f9fcfd56_travel">
                                            <div className="item big" style={{ backgroundImage: 'url(http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-6667068-couple-camping-m-e1417481107400-500x308.jpg)' }}>
                                                <div className="overlay">
                                                    <div className="title">
                                                        <h2>
                                                            <a href="http://planetshine.net/demo/goliath-news/how-i-walked-the-entire-great-wall-of-china/">How I walked the entire Great Wall of China</a>
                                                            <span className="hotness">Hot</span>
                                                        </h2>
                                                        <p>
                                                            <a href="http://planetshine.net/demo/goliath-news/category/travel/" title="Travel" className="tag-default">Travel</a>
                                                            <span className="legend-default">
                                                                <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/how-i-walked-the-entire-great-wall-of-china/#respond" className="comment-link"><i className="fa fa-comments" />0</a>   </span>
                                                        </p>            <div className="intro">
                                                            Engage large outlets with web enabled tech. Coordinate via new e-commerce and process centric...                <a href="http://planetshine.net/demo/goliath-news/how-i-walked-the-entire-great-wall-of-china/" className="more-link">Read more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item small" style={{ backgroundImage: 'url(http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2254959-snowboard-m-200x308.jpg)' }}>
                                                <div className="overlay">
                                                    <div className="title">
                                                        <h2>
                                                            <a href="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/">Trendiest snowboarding locations this season</a>
                                                            <span className="hotness">Hot</span>
                                                        </h2>
                                                        <p>
                                                            <a href="http://planetshine.net/demo/goliath-news/category/travel/" title="Travel" className="tag-default">Travel</a>
                                                            <span className="legend-default">
                                                                <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/#comments" className="comment-link"><i className="fa fa-comments" />1</a>   </span>
                                                        </p>            <div className="intro">
                                                            Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital...                <a href="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/" className="more-link">Read more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item small" style={{ backgroundImage: 'url(http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2650397-sailing-m-200x308.jpg)' }}>
                                                <div className="overlay">
                                                    <div className="title">
                                                        <div className=" stars"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star-o" /><i className="fa fa-star-o" />
                                                        </div>            <h2>
                                                            <a href="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/">11 “must-see” places for every hardcore traveler</a>
                                                            <span className="hotness">Hot</span>
                                                        </h2>
                                                        <p>
                                                            <a href="http://planetshine.net/demo/goliath-news/category/review/" title="Review" className="tag-default">Review</a>
                                                            <span className="legend-default">
                                                                <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/#comments" className="comment-link"><i className="fa fa-comments" />2</a>   </span>
                                                        </p>            <div className="intro">
                                                            Efficiently push a cross media info for great value. Quickly do timely deliverables for...                <a href="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/" className="more-link">Read more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item small" style={{ backgroundImage: 'url(http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-835948-outside-tea-m-200x308.jpg)' }}>
                                                <div className="overlay">
                                                    <div className="title">
                                                        <div className=" stars"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star-half-o" />
                                                        </div>            <h2>
                                                            <a href="http://planetshine.net/demo/goliath-news/this-summers-hotest-travel-locations/">This summers hotest travel locations</a>
                                                        </h2>
                                                        <p>
                                                            <a href="http://planetshine.net/demo/goliath-news/category/review/" title="Review" className="tag-default">Review</a>
                                                            <span className="legend-default">
                                                                <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/this-summers-hotest-travel-locations/#respond" className="comment-link"><i className="fa fa-comments" />0</a>   </span>
                                                        </p>            <div className="intro">
                                                            Objectively innovate smart tech products with parallel platforms. Holisticly manage extensible testing procedures for...                <a href="http://planetshine.net/demo/goliath-news/this-summers-hotest-travel-locations/" className="more-link">Read more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div></div>
                                    </div>
                                </div>
                            </div></li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-68 dropdown"><a title="Reviews" href="http://planetshine.net/demo/goliath-news/category/review/" data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle disabled" aria-haspopup="true">Reviews</a><div className="dropdown-menu full-width has-side-menu">
                                <ul role="menu">
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-65"><a title="Travel" href="http://planetshine.net/demo/goliath-news/category/travel/">Travel</a></li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-66"><a title="Business" href="http://planetshine.net/demo/goliath-news/category/business/">Business</a></li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-67"><a title="Advice" href="http://planetshine.net/demo/goliath-news/category/advice/">Advice</a></li>
                                </ul>
                                <div id="goliath_dropdown_post_list-3" className="sidebar-item constellation-widget widget goliath_dropdown_post_list">
                                    <div className="post-block-1 dropdown-post-list">
                                        {/* Widget items START */}
                                        <div className="items">
                                            <div className="dropdown-row-wrapper"><div className="post-item" data-overlay={1} data-overlay-excerpt="Efficiently push a cross media info for great value. Quickly do timely deliverables for real time schemas. Dramatically maintain clicks and mortar solutions without functional solutions." data-overlay-url="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/">
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
                                            </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Completely manage resources for premier niche markets. Professionally cultivate your one-to-one customer service with robust ideas. Dynamically innovate resource leveling customer service for state of the art customer service." data-overlay-url="http://planetshine.net/demo/goliath-news/how-to-never-be-late-for-a-meeting-again/">
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
                                                </div></div><div className="dropdown-row-wrapper"><div className="post-item" data-overlay={1} data-overlay-excerpt="Objectively innovate smart tech products with parallel platforms. Holisticly manage extensible testing procedures for reliable supply chains. Dramatically engage top line web services vis-a-vis cutting-edge deliverables." data-overlay-url="http://planetshine.net/demo/goliath-news/this-summers-hotest-travel-locations/">
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
                                                </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Proactively envisioned tech based expertise and cross media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea sharing. Holistically pontificate installed base portals after maintainable products." data-overlay-url="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/">
                                                    <div className="inner-wrapper">
                                                        <div className="title-image-row">
                                                            <div className="image">
                                                                <a href="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/10/photodune-2242753-urban-lifestyle-m-e1417481556893-119x120.jpg" alt="Photo sharing app effect on social media juggernauts" /></a>
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
                            </div></li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-69 dropdown"><a title="Travel" href="http://planetshine.net/demo/goliath-news/category/travel/" data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle disabled" aria-haspopup="true">Travel</a><div className="dropdown-menu full-width">		<div id="goliath_dropdown_large_featured-2" className="sidebar-item constellation-widget widget goliath_dropdown_large_featured">
                                <div className="items">
                                    <div className="item big" style={{ backgroundImage: 'url(http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-6667068-couple-camping-m-e1417481107400-500x308.jpg)' }}>
                                        <div className="overlay">
                                            <div className="title">
                                                <h2>
                                                    <a href="http://planetshine.net/demo/goliath-news/how-i-walked-the-entire-great-wall-of-china/">How I walked the entire Great Wall of China</a>
                                                    <span className="hotness">Hot</span>
                                                </h2>
                                                <p>
                                                    <a href="http://planetshine.net/demo/goliath-news/category/travel/" title="Travel" className="tag-default">Travel</a>
                                                    <span className="legend-default">
                                                        <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/how-i-walked-the-entire-great-wall-of-china/#respond" className="comment-link"><i className="fa fa-comments" />0</a>   </span>
                                                </p>            <div className="intro">
                                                    Engage large outlets with web enabled tech. Coordinate via new e-commerce and process centric...                <a href="http://planetshine.net/demo/goliath-news/how-i-walked-the-entire-great-wall-of-china/" className="more-link">Read more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item small" style={{ backgroundImage: 'url(http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2254959-snowboard-m-200x308.jpg)' }}>
                                        <div className="overlay">
                                            <div className="title">
                                                <h2>
                                                    <a href="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/">Trendiest snowboarding locations this season</a>
                                                    <span className="hotness">Hot</span>
                                                </h2>
                                                <p>
                                                    <a href="http://planetshine.net/demo/goliath-news/category/travel/" title="Travel" className="tag-default">Travel</a>
                                                    <span className="legend-default">
                                                        <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/#comments" className="comment-link"><i className="fa fa-comments" />1</a>   </span>
                                                </p>            <div className="intro">
                                                    Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital...                <a href="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/" className="more-link">Read more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item small" style={{ backgroundImage: 'url(http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2650397-sailing-m-200x308.jpg)' }}>
                                        <div className="overlay">
                                            <div className="title">
                                                <div className=" stars"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star-o" /><i className="fa fa-star-o" />
                                                </div>            <h2>
                                                    <a href="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/">11 “must-see” places for every hardcore traveler</a>
                                                    <span className="hotness">Hot</span>
                                                </h2>
                                                <p>
                                                    <a href="http://planetshine.net/demo/goliath-news/category/review/" title="Review" className="tag-default">Review</a>
                                                    <span className="legend-default">
                                                        <i className="fa fa-clock-o" />Nov 25, 2014         <a href="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/#comments" className="comment-link"><i className="fa fa-comments" />2</a>   </span>
                                                </p>            <div className="intro">
                                                    Efficiently push a cross media info for great value. Quickly do timely deliverables for...                <a href="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/" className="more-link">Read more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>          </div>
                            </div>
                            </div></li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-182"><a title="Galleries" href="http://planetshine.net/demo/goliath-news/gallery/">Galleries</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-63"><a title="Shop" href="http://planetshine.net/demo/goliath-news/shop/">Shop</a></li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-208"><a title="Forums" href="http://planetshine.net/demo/goliath-news/forums/">Forums</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-433 dropdown"><a title="Features" href="http://planetshine.net/demo/goliath-news/goliath-ads-optimized-news-reviews-magazine/" data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle disabled" aria-haspopup="true">Features</a><div className="dropdown-menu default-dropdown">
                                <ul role="menu">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-432"><a title="Theme video" href="http://planetshine.net/demo/goliath-news/goliath-ads-optimized-news-reviews-magazine/">Theme video</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-79"><a title="Text styles" href="http://planetshine.net/demo/goliath-news/text-styles/">Text styles</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-361 dropdown"><a title="Post styles" href="http://planetshine.net/demo/goliath-news/blog/">Post styles</a><div className="dropdown-menu default-dropdown">
                                        <ul role="menu">
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-364"><a title="Small image" href="http://planetshine.net/demo/goliath-news/how-i-walked-the-entire-great-wall-of-china/">Small image</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-365"><a title="Medium image" href="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/">Medium image</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-362"><a title="Medium image + sidebar" href="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/">Medium image + sidebar</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-363"><a title="100% image" href="http://planetshine.net/demo/goliath-news/twitters-cfo-accidentally-tweeted-a-private-message-about-acquiring-a-company/">100% image</a></li>
                                        </ul>
                                    </div></li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-464 dropdown"><a title="Video posts" href="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/">Video posts</a><div className="dropdown-menu default-dropdown">
                                        <ul role="menu">
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-466"><a title="Small video" href="http://planetshine.net/demo/goliath-news/how-to-never-be-late-for-a-meeting-again/">Small video</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-465"><a title="Large video + autoplay" href="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/">Large video + autoplay</a></li>
                                        </ul>
                                    </div></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-373 dropdown"><a title="Blog styles" href="http://planetshine.net/demo/goliath-news/blog/">Blog styles</a><div className="dropdown-menu default-dropdown">
                                        <ul role="menu">
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-374"><a title="Large featured posts" href="http://planetshine.net/demo/goliath-news/blog/">Large featured posts</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-375"><a title="Small featured posts" href="http://planetshine.net/demo/goliath-news/blog/?blog_style=2">Small featured posts</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-376"><a title="Large posts" href="http://planetshine.net/demo/goliath-news/blog/?blog_style=4">Large posts</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-377"><a title="Small posts" href="http://planetshine.net/demo/goliath-news/blog/?blog_style=1">Small posts</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-378"><a title="Sidebar on left" href="http://planetshine.net/demo/goliath-news/blog/?blog_style=3">Sidebar on left</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-379"><a title="Sidebar on right" href="http://planetshine.net/demo/goliath-news/blog/?blog_style=1">Sidebar on right</a></li>
                                        </ul>
                                    </div></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-115"><a title="Shortcodes" href="http://planetshine.net/demo/goliath-news/shortcodes/">Shortcodes</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-134"><a title="Visual Composer" href="http://planetshine.net/demo/goliath-news/visual-composer-blocks/">Visual Composer</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-72"><a title="Contact form" href="http://planetshine.net/demo/goliath-news/contact/">Contact form</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-141"><a title="Full width page" href="http://planetshine.net/demo/goliath-news/full-width-page/">Full width page</a></li>
                                </ul>
                            </div></li>
                        </ul></div>                            <ul className="nav secondary-menu">
                            <li className="menu-item menu-item-type-custom menu-item-object-custom dropdown search">
                                <form method="get" action="http://planetshine.net/demo/goliath-news/" className="search">
                                    <input type="text" name="s" className="form-control" placeholder="search here" />
                                </form>                        <a href="#" data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle disabled" aria-haspopup="true"><i className="fa fa-search" /></a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-spacer" />
                            <li className="menu-item menu-item-type-custom menu-item-object-custom new-stories dropdown new">
                                <a href="#" data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle disabled" aria-haspopup="true"><s>8</s><span>staff<br />picks</span></a>
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
                                                                    <a href="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/10/photodune-2242753-urban-lifestyle-m-e1417481556893-119x120.jpg" alt="Photo sharing app effect on social media juggernauts" /></a>
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
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

