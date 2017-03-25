import React, { Component, PropTypes } from 'react'

export default class Editor extends Component {

    static propTypes = {  }

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
            <div className="style-editor" id="style-editor-">
                <a href="#" className="tab" />
                <div className="theme-title">
                    <p>Goliath</p>
                    <p>Style editor</p>
                </div>
                <div className="settings-block">
                    <p className="title">Page style presets</p>
                    <div className="settings">
                        <a href="http://planetshine.net/demo/goliath-news/" className="setting active">
                            <span className="style page active" style={{ background: 'url(http://cdn1.goliath-news.cdn.planetshine.net/wp-content/themes/goliath//demo/images/style-editor-thumb-1.jpg) 0 0 no-repeat' }} />
                            <i>News</i>
                            <s>Default</s>
                        </a>
                        <a href="http://planetshine.net/demo/goliath-fashion/" className="setting ">
                            <span className="style page" style={{ background: 'url(http://cdn1.goliath-news.cdn.planetshine.net/wp-content/themes/goliath//demo/images/style-editor-thumb-2.jpg) 0 0 no-repeat' }} />
                            <i>Fashion</i>
                            <s>Dark</s>
                        </a>
                        <a href="http://planetshine.net/demo/goliath-tech/" className="setting ">
                            <span className="style page" style={{ background: 'url(http://cdn1.goliath-news.cdn.planetshine.net/wp-content/themes/goliath//demo/images/style-editor-thumb-3.jpg) 0 0 no-repeat' }} />
                            <i>Tech</i>
                            <s>White</s>
                        </a>
                        <a href="http://planetshine.net/demo/goliath-sport/" className="setting ">
                            <span className="style page" style={{ background: 'url(http://cdn1.goliath-news.cdn.planetshine.net/wp-content/themes/goliath//demo/images/style-editor-thumb-4.jpg) 0 0 no-repeat' }} />
                            <i>Sport</i>
                            <s>Blue</s>
                        </a>
                    </div>
                </div>
                <div className="settings-block">
                    <p className="title">Accent color</p>
                    <div className="settings accent-color">
                        <a href="#" id="orange" className="setting">
                            <span className="style color" style={{ background: '#ff5732' }} />
                        </a>
                        <a href="#" id="green" className="setting">
                            <span className="style color" style={{ background: '#20c300' }} />
                        </a>
                        <a href="#" id="blue" className="setting">
                            <span className="style color" style={{ background: '#007ef4' }} />
                        </a>
                        <a href="#" id="yellow" className="setting">
                            <span className="style color" style={{ background: '#f2ab00' }} />
                        </a>
                        <a href="#" id="gray" className="setting">
                            <span className="style color" style={{ background: '#858585' }} />
                        </a>
                    </div>
                </div>
                <div className="settings-block">
                    <p className="title">Background style</p>
                    <div className="settings background-style">
                        <a href="#" id="bg_style_1" className="setting">
                            <span className="style background" style={{ background: 'url(http://cdn1.goliath-news.cdn.planetshine.net/wp-content/themes/goliath//demo/images/style-editor-bg-2.jpg) 0 0 no-repeat' }} />
                            <b>Boxed<br />active</b>
                        </a>
                        <a href="#" id="bg_style_2" className="setting">
                            <span className="style background" style={{ background: 'url(http://cdn1.goliath-news.cdn.planetshine.net/wp-content/themes/goliath//demo/images/style-editor-bg-1.jpg) 0 0 no-repeat' }} />
                            <b>Boxed<br />solid</b>
                        </a>
                        <a href="#" id="bg_style_3" className="setting">
                            <span className="style background" style={{ background: 'url(http://cdn1.goliath-news.cdn.planetshine.net/wp-content/themes/goliath//demo/images/style-editor-bg-3.jpg) 0 0 no-repeat' }} />
                            <b>Boxed<br />image</b>
                        </a>
                        <a href="#" id="bg_style_4" className="setting">
                            <span className="style background" style={{ background: 'url(http://cdn2.goliath-news.cdn.planetshine.net/wp-content/themes/goliath//demo/images/style-editor-bg-4.jpg) 0 0 no-repeat' }} />
                            <b>Full<br />width</b>
                        </a>
                    </div>
                    <div className="more">
                        <a href="#" className="background_colorpicker">Choose custom color</a> <s>#EFEFEF</s> <span style={{ background: '#efefef' }} />
                    </div>
                </div>
                <div className="settings-footer">
                    <p><a href="#" className="reset">Reset everything</a></p>
                    <a href="http://planetshine.net/" target="_blank"><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/themes/goliath//demo/images/logo-planetshine-1.png" /></a>
                </div>
            </div>
        )
    }

}

// export default Editor
