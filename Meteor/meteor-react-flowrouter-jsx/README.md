# Example Isomorphic Meteor+React app (with SSR and FlowRouter).

> Try turning off JavaScript, it will still render the intial  state of the app, as expected! [Here's a Chrome plugin to turn JavaScript off.](https://chrome.google.com/webstore/detail/quick-javascript-switcher/geddoclleiomckbhadiaipdggiiccfje)


## Demo
http://flowrouter-jsx-templating.meteor.com

## Notice

* How fast it loads!
* It works without any JavaScript!
* Google and Search engines loves it, easy to index!
* Facebook and Social media can grab it's tags easily!
* Easily cachable, just setup Varnish or whatever in front of it and serve pages even faster.

## Features

- [x] [Meteor](http://meteor.com)
- [x] [React (```meteor add react```)](https://facebook.github.io/react)
- [x] [FlowRouter (```meteor add meteorhacks:flow-router-ssr```)](https://atmospherejs.com/meteorhacks/flow-router-ssr) - The SSR version of FlowRouter that also routes on the server (Read the full blog post about it and their plans to combine it with regular FlowRouter https://kadira.io/blog/meteor-ssr-support-using-flow-router-and-react/).
- [x] ReactLayout (See the packages folder as it's still not a published package ... yet (creds to @arunoda and @meteorhacks)).
- [x] [FastRender (```meteor add meteorhacks:fast-render```)](https://atmospherejs.com/meteorhacks/fast-render)
- [x] [JSX Templates (```meteor add timbrandin:jsx-templates```)](https://atmospherejs.com/timbrandin/jsx-templating)
- [x] Template helpers for React
- [x] Mongo collection data in reactive helpers

## Credits

This is a fork of [@arunoda's ***AWESOME*** hack using React and Meteor to get SSR.](https://github.com/arunoda/hello-react-meteor)
