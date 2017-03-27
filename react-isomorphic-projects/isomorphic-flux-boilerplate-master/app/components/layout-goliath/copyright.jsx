import React, { Component, PropTypes } from 'react'

export default class Copyright extends Component {

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
            <div>
                < div className="container copyright" >
                    <div className="left">
                        © Planetshine 2014. All Rights Reserved.
                </div>
                    <div className="right">
                        <ul>
                            <li id="menu-item-369" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-369"><a href="http://planetshine.net/demo/goliath-news/contact/">Contact</a></li>
                            <li id="menu-item-370" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-370"><a href="http://planetshine.net/demo/goliath-news/shop/">Shop</a></li>
                            <li id="menu-item-371" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-371"><a href="http://planetshine.net/demo/goliath-news/blog/">Blog</a></li>
                            <li>
                                <a href="https://www.facebook.com/pages/Planetshine/157615154385315" target="_blank"><i className="fa fa-facebook-square" /></a>
                                <a href="https://twitter.com/ThePlanetshine" target="_blank"><i className="fa fa-twitter-square" /></a>
                                <a href="http://youtube.com" target="_blank"><i className="fa fa-youtube-square" /></a>
                                <a href="http://pinterest.com" target="_blank"><i className="fa fa-pinterest-square" /></a>
                                <a href="http://plus.google.com" target="_blank"><i className="fa fa-google-plus-square" /></a>
                                <a href="http://planetshine.net" target="_blank"><i className="fa fa-rss-square" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <a href="#" className="back-to-top"><i className="fa fa-angle-up" /></a>
            </div>
        )
    }
}

