import React from 'react';
import Helmet from 'react-helmet';
import TopMenu from '../components/TopMenu';
import NavMenu from '../components/NavMenu';

var EXAMPLE_DATA = [
  { id: '1', name: 'Item 1'},
  { id: '2', name: 'Item 12'},
  { id: '3', name: 'Item 133'},
  { id: '4', name: 'Item 1444'},
];

var EXAMPLE_DATA = [
  [
    {
      col: 6, arr: [
        { id: '1', name: 'Item 1'},
        { id: '2', name: 'Item 12'},
        { id: '3', name: 'Item 133'},
        { id: '4', name: 'Item 1444'},
      ]
    }
    ,{
      col: 6, arr: [
        { id: '1', name: 'Item 1'},
        { id: '2', name: 'Item 12'},
      ]
    }
  ]
  ,[
    {
      col: 12, arr: [
        { id: '1', name: 'Item 1'}
      ]
    }
  ]
]

export default React.createClass({
  getDefaultProps: function(){
    return {
      name: 'SortDragDrop',
    };
  },
  getInitialState: function(){
    return {
      sortList: EXAMPLE_DATA,
    };
  },

  componentDidMount: function(){
    console.log('componentDidMount')
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

  handleValue: function(id,e){
    for(var i=0; i<this.state.sortList.length; i++){
      if(this.state.sortList[i].id == id){
        this.state.sortList[i].status = e.target.value
        break;
      }
    }
    this.setState(this.state);
  },

  dragStart: function(index, event) {
    console.log('dragStart')
    this.state.dragIndex = index;
  },

  dragging: function(index, event) {
    console.log('dragging')
  },

  allowDrop: function(index, event) {
    event.preventDefault();
    this.setState({dropIndex: index})
    console.log('allowDrop')
  },

  drop: function(index, event) {
    event.preventDefault();
    var temp = Object.assign({}, this.state.sortList[this.state.dragIndex]);
    this.state.sortList[this.state.dragIndex] = this.state.sortList[index];
    this.state.sortList[index] = temp;
    this.setState({dropIndex: 'df'})
    console.log('drop')
  },


  render: function() {
    console.log("render sort")
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
                    <div>
                      { this.state.sortList && this.state.sortList.map((row,i) => {
                          return (
                            <div key={i} className={`row-${i} row`} style={{background:"red", margin:"5px"}}>
                              { row.map((col,ii) => {
                                  return (
                                    <div key={ii} className={`col-md-${col.col}`} style={{background:"blue"}}>
                                      {col.col}
                                      {col.arr && col.arr.map((item,i) => {
                                        return(
                                          <div onDrop={this.drop.bind(this,i)} onDragOver={this.allowDrop.bind(this,i)} style={i==this.state.dropIndex? {background:'yellow'}:{}} key={'item-sort-'+i} className="list-group-item">
                                            <div onDragStart={this.dragStart.bind(this,i)} onDrag={this.dragging.bind(this,i)} draggable={true} className="row list-content-management">
                                              <div className="col-md-6">
                                                <span className="glyphicon fa fa-bars"></span>
                                                <span className="content-management">{item.name}</span>
                                              </div>
                                              <div className="col-md-5">
                                                <select className="form-control">
                                                    <option value="Now">Now</option>
                                                    <option value="Today">Today</option>
                                                    <option value="Next 7 Days">Next 7 Days</option>
                                                    <option value="Dark">Dark</option>
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
                                  )
                              })}
                            </div>
                          )
                        })
                      }
                    </div>
                    
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
