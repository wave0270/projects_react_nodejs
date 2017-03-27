import React, { Component, PropTypes } from 'react'

export default class ContainerMosaic extends Component {

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
            <div className="container mosaic" data-category data-tag data-page={1} data-max={5}>
                <div className="item big touch-click" style={{ backgroundImage: 'url(http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2359457-extreme-ride-l-e1416940742544-690x400.jpg)' }}>
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
                                Manage key channels for virtual e-tailers.  Seize scalable metrics for proactive e-services. Seamlessly empower fully researched growth strategies and interoperable internal or "organic" sources.                <a href="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/" className="more-link">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>						<div className="item small touch-click" style={{ backgroundImage: 'url(http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-6667068-couple-camping-m-e1417481107400-690x400.jpg)' }}>
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
                </div>						<div className="item small touch-click" style={{ backgroundImage: 'url(http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2254959-snowboard-m-690x400.jpg)' }}>
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
                </div>						<div className="item small touch-click" style={{ backgroundImage: 'url(http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2650397-sailing-m-690x400.jpg)' }}>
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
                </div>						<div className="item small touch-click" style={{ backgroundImage: 'url(http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-5341504-students-looking-into-devices-at-school-m-690x400.jpg)' }}>
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
                <button type="button" className="btn btn-default center-block"><span>Load more stories</span></button>
            </div>
        )
    }
}

