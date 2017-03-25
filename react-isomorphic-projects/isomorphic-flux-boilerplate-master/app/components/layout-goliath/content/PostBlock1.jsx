import React, { Component, PropTypes } from 'react'

import Slider from 'components/layout-goliath/content/Slider'

export default class PostBlock1 extends Component {

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
            <div className="post-block-1">
                <div className="title-default">
                    <a href="http://planetshine.net/demo/goliath-news/blog/" className="active">Latest news</a>
                    <a href="http://planetshine.net/demo/goliath-news/blog/" className="view-all">View all</a>
                </div>
                <div className="items">
                    <div className="post-item" data-overlay={1} data-overlay-excerpt="Manage key channels for virtual e-tailers.  Seize scalable metrics for proactive e-services. Seamlessly empower fully researched growth strategies and interoperable internal or &quot;organic&quot; sources." data-overlay-url="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/">
                        <div className="image">
                            <a href="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2359457-extreme-ride-l-e1416940742544-119x120.jpg" alt="5 promising alternative energy sources" /></a>
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
                            </p>  </div>
                        <div className="post-intro">
                            Manage key channels for virtual e-tailers.  Seize scalable metrics for proactive e-services. Seamlessly...  </div>
                    </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Proactively envisioned tech based expertise and cross media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea sharing. Holistically pontificate installed base portals after maintainable products." data-overlay-url="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/">
                        <div className="image">
                            <a href="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/10/photodune-2242753-urban-lifestyle-m-e1417481556893-119x120.jpg" alt="Photo sharing app effect on social media juggernauts" /></a>
                        </div>
                        <div className="title">
                            <h2>
                                <a href="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/">Photo sharing app effect on social media juggernauts</a>
                            </h2>
                            <p>
                                <a href="http://planetshine.net/demo/goliath-news/category/business/" title="Business" className="tag-default">Business</a>
                                <span className="legend-default">
                                    <i className="fa fa-clock-o" />Oct 25, 2014         <a href="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/#respond" className="comment-link"><i className="fa fa-comments" />0</a>   </span>
                            </p>  </div>
                        <div className="post-intro">
                            Proactively envisioned tech based expertise and cross media growth strategies. Seamlessly visualize quality intellectual...  </div>
                    </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Collaboratively manage markets via plug and play networks. Dynamically reach B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI." data-overlay-url="http://planetshine.net/demo/goliath-news/who-will-be-this-years-top-earning-ceo/">
                        <div className="image">
                            <a href="http://planetshine.net/demo/goliath-news/who-will-be-this-years-top-earning-ceo/"><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/09/photodune-3642871-city-crossroad-scene-l-119x120.jpg" alt="Uber? Lyft? Taxi? The best ways to travel" /></a>
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
                        <div className="post-intro">
                            Collaboratively manage markets via plug and play networks. Dynamically reach B2C users after installed...  </div>
                    </div><div className="post-item" data-overlay={1} data-overlay-excerpt="Proactive media based expertise and cross-media growth strategy. Seamlessly visualize quality rich capital with fast collaboration and idea sharing. Holistically pontificate installed base portals after maintainable products." data-overlay-url="http://planetshine.net/demo/goliath-news/8-productivity-tips-for-designers/">
                        <div className="image">
                            <div className=" stars"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                            </div>                   <a href="http://planetshine.net/demo/goliath-news/8-productivity-tips-for-designers/"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/08/photodune-4161594-designer-at-work-m-119x120.jpg" alt="8 productivity tips for designers" /></a>
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
                        <div className="post-intro">
                            Proactive media based expertise and cross-media growth strategy. Seamlessly visualize quality rich capital with...  </div>
                    </div>
                </div>
                {/* Slider */}
                <Slider />
            </div>
        )
    }
}

