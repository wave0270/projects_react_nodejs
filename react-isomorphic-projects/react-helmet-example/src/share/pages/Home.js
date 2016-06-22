import React from 'react';
/*common page components*/
import Helmet from 'react-helmet';
import TopMenu from '../components/TopMenu';
import NavMenu from '../components/NavMenu';
/*private page components*/

let Home = React.createClass({
  
    render: function() {
        return (
            <div className="w-page" >
                <Helmet
                  htmlAttributes={{"lang": "en"}}
                  title="My Title"
                  titleTemplate="wave0270.com - %s"
                  defaultTitle="My Default Title"
                  meta={[
                      {"http-equiv": "Content-Type", "content": "text/html; charset=UTF-8"},
                      {"http-equiv": "content-language", "content": "vi"},
                      {"http-equiv": "audience", "content": "General"},
                      {"property": "og:type", "content": "article"},
                      {"property": "og:url", "content": "http://kenh14.vn/news-20160603101923561.chn"},
                      {"property": "og:title", "content": "Calvin Harris lần đầu lên tiếng sau khi chia tay với Taylor Swift"},
                      {"property": "og:description", "content": "Đây cũng là lần đầu tiên Calvin Harris lên tiếng kể từ khi tin tức anh chia tay với Taylor Swift được công bố."},
                      {"property": "og:image", "content": "https://k14.vcmedia.vn/thumb_w/600/2016/34dbea5200000578-3622642-image-a-109-1464909788232-1464921981976-95-0-422-634-crop-1464922077361.jpg"},
                      {"name": "generator", "content": "VCCorp.vn"},
                      {"name": "copyright", "content": "Công ty cổ phần Vccorp"},
                      {"name": "author", "content": "VCCorp.vn"},
                      {"name": "resource-type", "content": "Document"},
                      {"name": "distribution", "content": "Global"},
                      {"name": "google-site-verification", "content": "XgyQeQB03BIvTB6xPrL22226Q"},
                      {"name": "alexaVerifyID", "content": "asK4p0adadVHkg9NcUZahzYy"},
                      {"name": "description", "id": "metaDes", "content": "Đây cũng là lần đầu tiên ris lên tiếng kể từ khi tin tức anh chia t"},
                      {"name": "keywords", "id": "metakeywords", "content": "Taylor Swift,Cặp đôi Taylor Swift - Calvin Harris,Calvin Harris,sao chia tay,Sao Hollywood"},
                      {"name": "news_keywords", "id": "newskeywords", "content": "Taylor Swift,Cặp đôi Taylor Swift - Calvin Harris,Calvin Harris,sao chia tay,Sao Hollywood"},
                      {"name": "robots", "content": "index,follow"},
                      {"name": "revisit-after", "content": "1 days"},
                      {"name": "apple-mobile-web-app-title", "content": "wave0270"},
                      {"name": "application-name", "content": "wave0270"},
                      {"prefix": "fb: http://ogp.me/ns/fbwasd", "property": "fb:app_id", "content": "1asd592847257"},
                  ]}
                  link={[
                      {"rel": "canonical", "href": "http://kenh14.vn/calvin-harris-lan-dau-len-tieng-sau-khi-chia-tay-voi-taylor-swift-20160603101923561.chn"},
                      {"rel": "alternate", "media": "only screen and (max-width: 640px)", "href": "http://m.kenh14.vn/calvin-harris-lan-dau-len-tieng-sau-khi-chia-tay-voi-taylor-swift-20160603101923561.chn"},
                      {"rel": "alternate", "media": "handheld", "href": "http://m.kenh14.vn/calvin-harris-lan-dau-len-tieng-sau-khi-chia-tay-voi-taylor-swift-20160603101923561.chn"},
                      {"rel": "shortcut icon", "href": "http://k14.vcmedia.vn/web_images/kenh14-favicon.ico", "type": "image/x-icon"},
                      {"rel": "apple-touch-icon", "href": "https://k14.vcmedia.vn/channel-icon/kenh14-57.png", "sizes": "57x57"},
                      {"rel": "icon", "href": "https://k14.vcmedia.vn/channel-icon/kenh14-32.png", "sizes": "32x32"},
                      /*css style*/
                      {"rel": "stylesheet", "href": "https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"},
                      {"rel": "stylesheet", "href": "/static/css/style.css"}
                  ]}
                  script={[
                    {"src": "", "type": "text/javascript"},
                  ]}
                    />

                  <div className="main-layout">
                    {/*Top-area*/}
                    <div className="">
                      <TopMenu />
                    </div>
                    {/*End Top-area*/}

                    {/*Main-area*/}
                    <div className="container-fluid">

                      {/*Left-area*/}
                      <div className="col-sm-3 left-content">
                        <NavMenu />
                      </div>
                      {/*End Left-area*/}

                      {/*Content-area*/}
                      <div className="col-sm-9 main-content">
                        <p>Home Page</p>
                        <div><img src="/static/img/images.jpeg" /></div>
                      </div>
                      {/*End Content-area*/}

                    </div>
                    {/*End Main-area*/}

                    {/*Bottom-area*/}
                    <div className="">
                      <p>bottom</p>
                    </div>
                    {/*End Bottom-area*/}
                </div>
            </div>
        );
    }
});

export default Home;
