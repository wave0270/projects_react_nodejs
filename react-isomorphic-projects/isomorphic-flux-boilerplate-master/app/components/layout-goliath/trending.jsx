import React, { Component, PropTypes } from 'react'

export default class Trending extends Component {

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
            <div className="container trending">
                <div className="title-default">
                    <a href="#" className="active">Trending binh</a>
                    <div className="controls">
                        <a href="#" id="ticker-prev" className="prev"><i className="fa fa-caret-up" /></a>
                        <a href="#" id="ticker-next" className="next"><i className="fa fa-caret-down" /></a>
                        <a href="#" className="pause"><i className="fa fa-pause" /></a>
                    </div>
                </div>
                <div className="items-wrapper">
                    <ul id="newsticker" className="items newsticker cycle-slideshow" data-index={1} data-cycle-slides="> li" data-cycle-auto-height="calc" data-cycle-paused="false" data-cycle-speed={500} data-cycle-next="#ticker-next" data-cycle-prev="#ticker-prev" data-cycle-fx="scrollVert" data-cycle-log="false" data-cycle-pause-on-hover="true" data-cycle-timeout={2000}>
                        <li className="item">
                            <a href="http://planetshine.net/demo/goliath-news/the-last-time-gas-prices-fell-this-far/">
                                5 promising alternative energy sources                              </a>
                            <span className="legend-default"><i className="fa fa-clock-o" />November 25, 2014</span>
                            <span className="hotness">Hot</span>                          </li>
                        <li className="item hot">
                            <a href="http://planetshine.net/demo/goliath-news/how-i-walked-the-entire-great-wall-of-china/">
                                <i className="tag-default">Featured</i>
                                How I walked the entire Great Wall of China                              </a>
                            <span className="legend-default"><i className="fa fa-clock-o" />November 25, 2014</span>
                            <span className="hotness">Hot</span>                          </li>
                        <li className="item">
                            <a href="http://planetshine.net/demo/goliath-news/trendiest-surfing-locations-this-summer/">
                                Trendiest snowboarding locations this season                              </a>
                            <span className="legend-default"><i className="fa fa-clock-o" />November 25, 2014</span>
                            <span className="hotness">Hot</span>                          </li>
                        <li className="item hot">
                            <a href="http://planetshine.net/demo/goliath-news/11-must-see-places-for-every-hardcore-traveler/">
                                <i className="tag-default">Featured</i>
                                11 “must-see” places for every hardcore traveler                              </a>
                            <span className="legend-default"><i className="fa fa-clock-o" />November 25, 2014</span>
                            <span className="hotness">Hot</span>                          </li>
                        <li className="item">
                            <a href="http://planetshine.net/demo/goliath-news/how-to-never-be-late-for-a-meeting-again/">
                                How to never be late for a meeting again                              </a>
                            <span className="legend-default"><i className="fa fa-clock-o" />November 25, 2014</span>
                        </li>
                        <li className="item hot">
                            <a href="http://planetshine.net/demo/goliath-news/this-summers-hotest-travel-locations/">
                                <i className="tag-default">Featured</i>
                                This summers hotest travel locations                              </a>
                            <span className="legend-default"><i className="fa fa-clock-o" />November 25, 2014</span>
                        </li>
                        <li className="item hot">
                            <a href="http://planetshine.net/demo/goliath-news/twitters-cfo-accidentally-tweeted-a-private-message-about-acquiring-a-company/">
                                <i className="tag-default">Featured</i>
                                CFO tweeted a message about buying a company                              </a>
                            <span className="legend-default"><i className="fa fa-clock-o" />October 25, 2014</span>
                            <span className="hotness">Hot</span>                          </li>
                        <li className="item hot">
                            <a href="http://planetshine.net/demo/goliath-news/7-timeless-luxury-watches-for-men/">
                                <i className="tag-default">Featured</i>
                                Photo sharing app effect on social media juggernauts                              </a>
                            <span className="legend-default"><i className="fa fa-clock-o" />October 25, 2014</span>
                        </li>
                        <li className="item hot">
                            <a href="http://planetshine.net/demo/goliath-news/who-will-be-this-years-top-earning-ceo/">
                                <i className="tag-default">Featured</i>
                                Uber? Lyft? Taxi? The best ways to travel                              </a>
                            <span className="legend-default"><i className="fa fa-clock-o" />September 25, 2014</span>
                        </li>
                        <li className="item">
                            <a href="http://planetshine.net/demo/goliath-news/8-productivity-tips-for-designers/">
                                8 productivity tips for designers                              </a>
                            <span className="legend-default"><i className="fa fa-clock-o" />August 23, 2014</span>
                        </li>
                    </ul>
                </div>
                <div className="social">
                    <a href="https://www.facebook.com/pages/Planetshine/157615154385315" target="_blank"><i className="fa fa-facebook-square" /></a> <a href="https://twitter.com/ThePlanetshine" target="_blank"><i className="fa fa-twitter-square" /></a> <a href="http://youtube.com" target="_blank"><i className="fa fa-youtube-square" /></a> <a href="http://pinterest.com" target="_blank"><i className="fa fa-pinterest-square" /></a> <a href="http://plus.google.com" target="_blank"><i className="fa fa-google-plus-square" /></a> <a href="http://planetshine.net" target="_blank"><i className="fa fa-rss-square" /></a>          </div>
            </div>
        )
    }
}

