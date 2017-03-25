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
            <header className="container header">
                <div className="logo-image">
                    <a href="http://planetshine.net/demo/goliath-news/"><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/goliath/logo-goliath-1%20%281%29.png" alt /></a>
                </div>
                <div className="banner-728x90 "><a href="http://planetshine.net" target="_blank"><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/goliath/banner-728x90.png" alt="My awesome banner!" /></a></div>
            </header>
        )
    }
}

