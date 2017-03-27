import React from 'react'

type Props = {
  body: string,
  assets: Object,
  locale: string,
  title: string,
  description: string
};

function ServerHTML(props: Props) {
  const { body, assets, locale, title, description, assetsManual } = props

  return (
    <html lang={ locale }>
      <head>
        <meta charSet='utf-8' />
 
        {/* Styles */}
        <link rel='icon' type='image/ico' href='/favicon.ico' />
        { assetsManual.style.map((href, idx) => 
          <link key={ idx } rel='stylesheet' href={ href } />) }
        { assets.style.map((href, idx) => 
          <link key={ idx } rel='stylesheet' href={ href } />) }
        {/* SEO */}
        <title>{ title }</title>
        <meta name='description' content={ description } />
      </head>
      <body>
        <div id='content' dangerouslySetInnerHTML={ { __html: body } } />
        { assets.script.map((src, idx) =>
          <link key={ idx } src={ src } />) }
        { assetsManual.script.map((src, idx) =>
          <link key={ idx } src={ src } />) }
        
        {/* <script async defer id='github-bjs' src='https://buttons.github.io/buttons.js' /> */}
      </body>
    </html>
  )
}

export default ServerHTML
