import React from 'react';
import Helmet from 'react-helmet';
import TopMenu from '../components/TopMenu';
import NavMenu from '../components/NavMenu';
var Sortable;

var EXAMPLE_DATA = [
  { id: '1', name: 'Item 1'},
  { id: '2', name: 'Item 12'},
  { id: '3', name: 'Item 133'},
  { id: '4', name: 'Item 1444'},
];

export default React.createClass({
  getDefaultProps: function(){
    return {
      name: 'SortDragDrop',
    };
  },
  getInitialState: function(){
    return {
      isClient: false,
      sortList: EXAMPLE_DATA
    };
  },

  componentDidMount: function(){
    console.log('componentDidMount')
    if(window && !this.state.isClient){
      Sortable = require('sortablejs') ;
      Sortable.create(sortTrue, {
        group: "sorting",
        sort: true,
        animation: 150,
        // setData: function (dataTransfer, dragEl) {
        //     dataTransfer.setData('Text', dragEl.textContent);
        // },

        // dragging started
        onStart: function (/**Event*/evt) {
            evt.oldIndex;  // element index within parent
        },

        // dragging ended
        onEnd: function (/**Event*/evt) {
          console.log(evt)
            evt.oldIndex;  // element's old index within parent
            evt.newIndex;  // element's new index within parent
        },

        // Element is dropped into the list from another list
        onAdd: function (/**Event*/evt) {
            var itemEl = evt.item;  // dragged HTMLElement
            evt.from;  // previous list
            // + indexes from onEnd
        },

        // Changed sorting within list
        onUpdate: function (/**Event*/evt) {
            var itemEl = evt.item;  // dragged HTMLElement
            // + indexes from onEnd
        },

        // Called by any change to the list (add / update / remove)
        onSort: function (/**Event*/evt) {
            // same properties as onUpdate
        },

        // Element is removed from the list into another list
        onRemove: function (/**Event*/evt) {
            // same properties as onUpdate
        },

        // Attempt to drag a filtered element
        onFilter: function (/**Event*/evt) {
            var itemEl = evt.item;  // HTMLElement receiving the `mousedown|tapstart` event.
        },

        // Event when you move an item in the list or between lists
        onMove: function (/**Event*/evt) {
            // Example: http://jsbin.com/tuyafe/1/edit?js,output
            evt.dragged; // dragged HTMLElement
            evt.draggedRect; // TextRectangle {left, top, right и bottom}
            evt.related; // HTMLElement on which have guided
            evt.relatedRect; // TextRectangle
            // return false; — for cancel
        }
      });
      this.state.isClient = true;
    }
  },

  addNew: function(){
    this.state.sortList.push({id: JSON.stringify(this.state.sortList.length+1), name: 'Item ' + new Date().getTime()});
    this.setState(this.state);
  },

  removeItem: function(id){
    for(var i=0; i<this.state.sortList.length; i++){
      if(this.state.sortList[i].id = id){
        this.state.sortList.split(i,1);
        break;
      }
    }
    this.setState(this.state);
  },

  render: function() {
    console.log("render sort")
    console.log(this.state.sortList)
    return (
      <div className="w-pages">
        <Helmet
            title={this.props.name+" test"}
            meta={[
                {property: 'og:title', content: 'About'},
            ]} />
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

                {/*Content-area*****************/}
                <div className="col-sm-9 main-content">
                  <p>{this.props.name} page</p>

                    <div id="sortTrue" className="list-group">
                      {this.state.sortList && this.state.sortList.map(function(item,i){
                        return(
                          <div key={'item-sort-'+i} className="list-group-item">
                            <div className="row list-content-management">
                              <div className="col-md-4">
                                <span className="glyphicon fa fa-bars"></span>
                                <span className="content-management">{item.name}</span>
                              </div>
                              <div className="col-md-4">
                                <select className="form-control">
                                    <option value="1">Draft</option>
                                    <option value="2">Published</option>
                                    <option value="3">Breaking</option>
                                    <option value="">Scheduled</option>
                                </select>
                              </div>
                              <div className="col-md-3">
                                <select className="form-control">
                                    <option value="1">Now</option>
                                    <option value="2">Today</option>
                                    <option value="3">Next 7 Days</option>
                                    <option value="">Dark</option>
                                </select>
                              </div>
                              <div className="col-md-1 text-right">
                                <span onClick={this.removeItem.bind(this, item.id)} className="delete-snapshot fa fa-trash-o"></span>
                              </div>
                            </div>
                          </div>
                        )
                      },this)}
                    </div>
                    <button onClick={this.addNew} className="btn btn-primary">Add new</button>

                </div>
                {/*End Content-area****************/}

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
