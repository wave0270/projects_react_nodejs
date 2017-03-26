import React, { Component, PropTypes } from 'react'

export default class PostBlock2 extends Component {

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
        )
    }
}

