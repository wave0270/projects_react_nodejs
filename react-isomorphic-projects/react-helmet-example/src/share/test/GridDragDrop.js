import React from 'react';
import Helmet from 'react-helmet';

// import ReactGridLayout from 'react-grid-layout';
// var ResponsiveReactGridLayout = require('react-grid-layout').Responsive;
import {Responsive, WidthProvider} from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default React.createClass({
  defauleLayout : [
      {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4, isDraggable: true, isResizable: true},
      {i: 'c', x: 4, y: 0, w: 1, h: 2, isDraggable: true, isResizable: true}
    ],
  /*example 1*/
  // render: function() {
  //   console.log("Render renderEx1:")
  //   var layout = [
  //     {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
  //     {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4, isDraggable: true, isResizable: true},
  //     {i: 'c', x: 4, y: 0, w: 1, h: 2, isDraggable: true, isResizable: true}
  //   ];
  //   return (
  //     <ReactGridLayout ref="ReactGridLayout" className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
  //       <div style={{background: '#dddddd'}} key={'a'}>a</div>
  //       <div style={{background: '#dddddd'}} key={'b'}>b</div>
  //       <div style={{background: '#dddddd'}} key={'c'}>c</div>
  //     </ReactGridLayout>
  //   )
  // }

  /*Example 2*/
  // render: function () {
  //   return (
  //     <ReactGridLayout className="layout" cols={12} rowHeight={30} width={1200}>
  //       <div style={{background: '#dddddd'}} key="a" _grid={{x: 0, y: 0, w: 1, h: 2, static: true}}>a</div>
  //       <div style={{background: '#dddddd'}} key="b" _grid={{x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4}}>b</div>
  //       <div style={{background: '#dddddd'}} key="c" _grid={{x: 4, y: 0, w: 1, h: 2}}>c</div>
  //     </ReactGridLayout>
  //   )
  // }

  /*Example 3*/
  // render: function() {
  //   // {lg: layout1, md: layout2, ...}
  //   var layouts = this.defauleLayout;
  //   return (
  //     <ResponsiveReactGridLayout className="layout" layouts={layouts}
  //       breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
  //       cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
  //       <div style={{background: '#dddddd'}} key={"1"}>1</div>
  //       <div style={{background: '#dddddd'}} key={"2"}>2</div>
  //       <div style={{background: '#dddddd'}} key={"3"}>3</div>
  //     </ResponsiveReactGridLayout>
  //   )
  // }

  /*Example 4*/
  render() {
    // {lg: layout1, md: layout2, ...}
    var layouts = this.defauleLayout;
    return (
      <ResponsiveReactGridLayout className="layout" layouts={layouts}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
        <div resizable style={{background: '#dddddd'}} key={"1"}>1</div>
        <div resizable style={{background: '#dddddd'}} key={"2"}>2</div>
        <div resizable style={{background: '#dddddd'}} key={"3"}>3</div>
      </ResponsiveReactGridLayout>
    )
  }

});
