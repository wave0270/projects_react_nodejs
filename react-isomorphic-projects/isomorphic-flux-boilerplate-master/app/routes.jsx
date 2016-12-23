import React from 'react'
import { Route } from 'react-router'

import { generateRoute } from 'utils/localized-routes'
import { isConnected } from 'utils/routes-hooks'

export default function (flux) { /* eslint react/display-name: 0 */
  return (
    <Route component={ require('./components/app') }>
      { generateRoute({
        paths: [ '/users-static', '/utilisateurs' ],
        component: require('./components/users-static')
      }) }
      { generateRoute({
        paths: [ '/account', '/mon-compte' ],
        component: require('./pages/account'),
        onEnter: isConnected(flux)
      }) }
      { generateRoute({
        paths: [ '/guides' ],
        component: require('./components/guides')
      }) }
      { generateRoute({
        paths: [ '/profile/:seed', '/profil/:seed' ],
        component: require('./components/profile')
      }) }
      { generateRoute({
        paths: [ '/login', '/connexion' ],
        component: require('./pages/login')
      }) }
      { generateRoute({
        paths: [ '/', 'users' ],
        component: require('./components/users')
      }) }
      { generateRoute({
        paths: [ '/manager/news' ],
        component: require('./components/manager-news'),
        onEnter: isConnected(flux)
      }) }
      { generateRoute({
        paths: [ '/manager/news/:id' ],
        component: require('./components/manager-news-detail'),
        onEnter: isConnected(flux)
      }) }
      { generateRoute({
        paths: [ '/news' ],
        component: require('./components/layout-news/home')
      }) }
      { generateRoute({
        paths: [ '/manager/crawl' ],
        component: require('./components/manager-crawl'),
        onEnter: isConnected(flux)
      }) }
      <Route path='*' component={ require('./pages/not-found') } />
    </Route>
  )
}
