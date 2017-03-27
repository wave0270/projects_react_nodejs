import React, { Component, PropTypes } from 'react'

export default class Header extends Component {

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
        )
    }
}

