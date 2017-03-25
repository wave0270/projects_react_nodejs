import React, { Component, PropTypes } from 'react'

export default class Footer extends Component {

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
            < footer className="container footer" >
                <div id="text-2" className="sidebar-item footer-item widget widget_text"><div className="title-default"><span className="active">About us</span></div><div className="widget-content">			<div className="textwidget"><p><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/themes/goliath/theme/assets/images/logo-goliath-2.png" alt="goliath-logo" /></p>
                    <p>Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products.</p></div>
                </div></div> <div id="goliath_category_cloud-2" className="sidebar-item footer-item widget goliath_category_cloud">
                    <div className="widget-tabs page-map">
                        <div className="title-default">
                            <span className="active">Content Map</span>
                        </div>
                        <div className="items archives">
                            <table className="table">
                                <tbody><tr><td><a href="http://planetshine.net/demo/goliath-news/category/review/">Review</a>5</td><td /><td><a href="http://planetshine.net/demo/goliath-news/category/travel/">Travel</a>4</td></tr><tr><td><a href="http://planetshine.net/demo/goliath-news/category/business/">Business</a>4</td><td /><td><a href="http://planetshine.net/demo/goliath-news/category/advice/">Advice</a>3</td></tr><tr><td><a href="http://planetshine.net/demo/goliath-news/category/world/">World</a>2</td><td /><td><a href="http://planetshine.net/demo/goliath-news/category/tech/">Tech</a>1</td></tr>					</tbody></table>
                        </div>
                    </div>
                </div> {/* After widget close div */}
                <div id="goliath_tag_cloud-2" className="sidebar-item footer-item widget goliath_tag_cloud">
                    <div className="sidebar-item clearfix">
                        {/* Archive */}
                        <div className="widget-tabs">
                            <div className="title-default">
                                <span className="active">Tags</span>
                            </div>
                            <div className="items tag-cloud">
                                <a href="http://planetshine.net/demo/goliath-news/tag/experience/" className="tag-1"><span>experience</span><s>6</s></a><a href="http://planetshine.net/demo/goliath-news/tag/learn/" className="tag-1"><span>learn</span><s>5</s></a><a href="http://planetshine.net/demo/goliath-news/tag/smart/" className="tag-1"><span>smart</span><s>5</s></a><a href="http://planetshine.net/demo/goliath-news/tag/enjoy/" className="tag-1"><span>enjoy</span><s>5</s></a><a href="http://planetshine.net/demo/goliath-news/tag/tech-2/" className="tag-1"><span>tech</span><s>2</s></a><a href="http://planetshine.net/demo/goliath-news/tag/hiking/" className="tag-1"><span>hiking</span><s>2</s></a><a href="http://planetshine.net/demo/goliath-news/tag/apps/" className="tag-1"><span>apps</span><s>1</s></a><a href="http://planetshine.net/demo/goliath-news/tag/social/" className="tag-1"><span>social</span><s>1</s></a><a href="http://planetshine.net/demo/goliath-news/tag/surfing/" className="tag-1"><span>surfing</span><s>1</s></a>                  </div>
                        </div>
                    </div>
                </div> {/* After widget close div */}
            </footer >
        )
    }
}

