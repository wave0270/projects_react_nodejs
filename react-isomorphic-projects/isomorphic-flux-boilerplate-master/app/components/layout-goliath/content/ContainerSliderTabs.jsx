import React, { Component, PropTypes } from 'react'

export default class ContainerSliderTabs extends Component {

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
            <div className="container slider-tabs latest-galleries">
                <div id="carousel-58c09fa025be0" className="carousel slide" data-ride="carousel" data-interval="false">
                    <div className="title-default">
                        <a href="http://planetshine.net/demo/goliath-news/gallery/" className="active">Latest galleries</a>
                    </div>
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-58c09fa025be0" data-slide-to={0} className="active" />
                        <li data-target="#carousel-58c09fa025be0" data-slide-to={1} />
                    </ol>
                    <a className="carousel-control left" href="#carousel-58c09fa025be0" data-slide="prev"><i className="fa fa-chevron-left" /></a>
                    <a className="carousel-control right" href="#carousel-58c09fa025be0" data-slide="next"><i className="fa fa-chevron-right" /></a>
                    <div className="carousel-inner items">
                        <div className="item active">
                            <div className="gallery-item">
                                <div className="overlay touch-click">
                                    <div className="title">
                                        <h2>
                                            <a href="http://planetshine.net/demo/goliath-news/gallery/inspiring-photos-from-around-the-world/">Inspiring photos from around the world</a>
                                        </h2>
                                        <p>
                                            <span className="legend-default">
                                                <i className="fa fa-clock-o" />November 26, 2014                            <i className="fa fa-camera" />
                                                4                      </span>
                                        </p>
                                        <div className="intro">
                                            <a href="http://planetshine.net/demo/goliath-news/gallery/inspiring-photos-from-around-the-world/" className="more-link">View all photos</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="background">
                                    <img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-5341504-students-looking-into-devices-at-school-m-114x114.jpg" width={114} height={114} alt /><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-6667068-couple-camping-m-e1417481107400-114x114.jpg" width={114} height={114} alt /><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/08/photodune-4161594-designer-at-work-m-114x114.jpg" width={114} height={114} alt /><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/09/photodune-3642871-city-crossroad-scene-l-114x114.jpg" width={114} height={114} alt />          </div>
                            </div>
                            <div className="gallery-item">
                                <div className="overlay touch-click">
                                    <div className="title">
                                        <h2>
                                            <a href="http://planetshine.net/demo/goliath-news/gallery/how-to-make-most-of-your-weekend/">How to make the most out of your weekend</a>
                                        </h2>
                                        <p>
                                            <span className="legend-default">
                                                <i className="fa fa-clock-o" />November 26, 2014                            <i className="fa fa-camera" />
                                                4                      </span>
                                        </p>
                                        <div className="intro">
                                            <a href="http://planetshine.net/demo/goliath-news/gallery/how-to-make-most-of-your-weekend/" className="more-link">View all photos</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="background">
                                    <img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/09/photodune-3642871-city-crossroad-scene-l-114x114.jpg" width={114} height={114} alt /><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2254959-snowboard-m-114x114.jpg" width={114} height={114} alt /><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2650397-sailing-m-114x114.jpg" width={114} height={114} alt /><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-6667068-couple-camping-m-e1417481107400-114x114.jpg" width={114} height={114} alt />          </div>
                            </div>
                            <div className="gallery-item">
                                <div className="overlay touch-click">
                                    <div className="title">
                                        <h2>
                                            <a href="http://planetshine.net/demo/goliath-news/gallery/5-finalists-for-the-photo-of-the-year-award/">5 finalists for the “Photo of the year” award</a>
                                        </h2>
                                        <p>
                                            <span className="legend-default">
                                                <i className="fa fa-clock-o" />November 26, 2014                            <i className="fa fa-camera" />
                                                5                      </span>
                                        </p>
                                        <div className="intro">
                                            <a href="http://planetshine.net/demo/goliath-news/gallery/5-finalists-for-the-photo-of-the-year-award/" className="more-link">View all photos</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="background">
                                    <img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/10/photodune-4283210-city-l-114x114.jpg" width={114} height={114} alt /><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-835948-outside-tea-m-114x114.jpg" width={114} height={114} alt /><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/10/photodune-2242753-urban-lifestyle-m-e1417481556893-114x114.jpg" width={114} height={114} alt /><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2650397-sailing-m-114x114.jpg" width={114} height={114} alt />          </div>
                            </div>
                            <div className="gallery-item">
                                <div className="overlay touch-click">
                                    <div className="title">
                                        <h2>
                                            <a href="http://planetshine.net/demo/goliath-news/gallery/this-week-in-fashion/">This week in fashion</a>
                                        </h2>
                                        <p>
                                            <span className="legend-default">
                                                <i className="fa fa-clock-o" />November 26, 2014                            <i className="fa fa-camera" />
                                                4                      </span>
                                        </p>
                                        <div className="intro">
                                            <a href="http://planetshine.net/demo/goliath-news/gallery/this-week-in-fashion/" className="more-link">View all photos</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="background">
                                    <img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/08/photodune-4161594-designer-at-work-m-114x114.jpg" width={114} height={114} alt /><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-219544-pretty-young-lady-choosing-shoes-at-a-store-m-114x114.jpg" width={114} height={114} alt /><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2391595-two-glamorous-women-trying-high-heels-m-114x114.jpg" width={114} height={114} alt /><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-835948-outside-tea-m-114x114.jpg" width={114} height={114} alt />          </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="gallery-item">
                                <div className="overlay touch-click">
                                    <div className="title">
                                        <h2>
                                            <a href="http://planetshine.net/demo/goliath-news/gallery/4-awesome-vacation-destinations/">4 awesome vacation destinations</a>
                                        </h2>
                                        <p>
                                            <span className="legend-default">
                                                <i className="fa fa-clock-o" />November 26, 2014                            <i className="fa fa-camera" />
                                                4                      </span>
                                        </p>
                                        <div className="intro">
                                            <a href="http://planetshine.net/demo/goliath-news/gallery/4-awesome-vacation-destinations/" className="more-link">View all photos</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="background">
                                    <img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-5341504-students-looking-into-devices-at-school-m-114x114.jpg" width={114} height={114} alt /><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/10/photodune-4283210-city-l-114x114.jpg" width={114} height={114} alt /><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2254959-snowboard-m-114x114.jpg" width={114} height={114} alt /><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/10/photodune-2242753-urban-lifestyle-m-e1417481556893-114x114.jpg" width={114} height={114} alt />          </div>
                            </div>
                            <div className="gallery-item">
                                <div className="overlay touch-click">
                                    <div className="title">
                                        <h2>
                                            <a href="http://planetshine.net/demo/goliath-news/gallery/winter-seasons-fashion-trends/">Winter season’s fashion trends</a>
                                        </h2>
                                        <p>
                                            <span className="legend-default">
                                                <i className="fa fa-clock-o" />November 26, 2014                            <i className="fa fa-camera" />
                                                4                      </span>
                                        </p>
                                        <div className="intro">
                                            <a href="http://planetshine.net/demo/goliath-news/gallery/winter-seasons-fashion-trends/" className="more-link">View all photos</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="background">
                                    <img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-219544-pretty-young-lady-choosing-shoes-at-a-store-m-114x114.jpg" width={114} height={114} alt /><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-862936-woman-in-light-cloth-m-114x114.jpg" width={114} height={114} alt /><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-1447321-young-couple-a-city-street-m-114x114.jpg" width={114} height={114} alt /><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2391595-two-glamorous-women-trying-high-heels-m-114x114.jpg" width={114} height={114} alt />          </div>
                            </div>
                            <div className="gallery-item">
                                <div className="overlay touch-click">
                                    <div className="title">
                                        <h2>
                                            <a href="http://planetshine.net/demo/goliath-news/gallery/exclusive-look-into-5-premium-offices/">Exclusive look into 5 premium offices</a>
                                        </h2>
                                        <p>
                                            <span className="legend-default">
                                                <i className="fa fa-clock-o" />November 26, 2014                            <i className="fa fa-camera" />
                                                5                      </span>
                                        </p>
                                        <div className="intro">
                                            <a href="http://planetshine.net/demo/goliath-news/gallery/exclusive-look-into-5-premium-offices/" className="more-link">View all photos</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="background">
                                    <img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2620841-modern-bedroom-s-114x114.jpg" width={114} height={114} alt /><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2620483-modern-backyard-m-114x114.jpg" width={114} height={114} alt /><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-2540048-modern-backyard-with-pool-s-114x114.jpg" width={114} height={114} alt /><img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-1858675-hotel-room-s-114x114.jpg" width={114} height={114} alt />          </div>
                            </div>
                            <div className="gallery-item">
                                <div className="overlay touch-click">
                                    <div className="title">
                                        <h2>
                                            <a href="http://planetshine.net/demo/goliath-news/gallery/161/">Ideas for interior decorators</a>
                                        </h2>
                                        <p>
                                            <span className="legend-default">
                                                <i className="fa fa-clock-o" />November 26, 2014                            <i className="fa fa-camera" />
                                                5                      </span>
                                        </p>
                                        <div className="intro">
                                            <a href="http://planetshine.net/demo/goliath-news/gallery/161/" className="more-link">View all photos</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="background">
                                    <img src="http://cdn2.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-201018-patio-of-a-villa-m-114x114.jpg" width={114} height={114} alt /><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-213921-modern-interior-with-dining-room-and-stone-wall-s-114x114.jpg" width={114} height={114} alt /><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-663568-large-bedroom-interior-m-114x114.jpg" width={114} height={114} alt /><img src="http://cdn1.goliath-news.cdn.planetshine.net/wp-content/uploads/2014/11/photodune-862416-contemporary-bedroom-s-114x114.jpg" width={114} height={114} alt />          </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

