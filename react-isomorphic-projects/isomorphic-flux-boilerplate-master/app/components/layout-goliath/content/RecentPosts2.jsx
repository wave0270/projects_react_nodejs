import React, { Component, PropTypes } from 'react'

export default class RecentPosts2 extends Component {

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
            </div>
        )
    }
}

