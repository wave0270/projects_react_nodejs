import React from 'react';
import Helmet from 'react-helmet';
import TopMenu from '../components/TopMenu';
import NavMenu from '../components/NavMenu';

let COMPONENTS = {
  1: { id: '1', name: 'Component new 1'}
  ,2: { id: '2', name: 'Component new 2'}
  ,3: { id: '3', name: 'Component new 3'}
  ,4: { id: '4', name: 'Component new 4'}
}

let EXAMPLE_DATA = [
  [
    {
      col: 6, 
      components: [
        { id: '1', name: 'Component 1'},
        { id: '2', name: 'Component 12'},
        { id: '3', name: 'Component 133'},
        { id: '4', name: 'Component 1444'},
      ]
    },
    {
      col: 6, 
      components: [
        { id: '1', name: 'Component 21'},
        { id: '2', name: 'Component 22'},
      ]
    }
  ],
  [
    {
      col: 12, 
      components: [
        { id: '1', name: 'Component 31'}
      ]
    }
  ],
  []
]

class MainLayout extends React.Component{
  constructor() { 
  	super(); 
    this.state = {
      dndStatus: {
        isDraggingnew: false
        ,isShowPopup: false
        ,newRowNo: 0
        ,colTotalOfNewRow: 0
        ,newComponentId: null
        ,dragItem: {}
        ,dropItem: {}
        ,isCanremoveCom:false
      }
      ,layoutList: EXAMPLE_DATA
      ,components: COMPONENTS
    }
    //menu
    this.onDragStartNew = this.onDragStartNew.bind(this);
    //layout
    this.onDropNew = this.onDropNew.bind(this);
    this.onDropItem = this.onDropItem.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragOverNew = this.onDragOverNew.bind(this);
    this.onRemoveRow = this.onRemoveRow.bind(this);
    this.onRemoveComponent = this.onRemoveComponent.bind(this);
    this.onRemoveCol = this.onRemoveCol.bind(this);
    //popup
    this.onClosePopup = this.onClosePopup.bind(this);
    this.onSelectCol = this.onSelectCol.bind(this);
    //main
    this.addEmptyRow = this.addEmptyRow.bind(this);
  }

  /*Different at here: step 1*/
  getChildContext() { 
  	return {
      dndStatus: this.state.dndStatus
      ,layoutList: this.state.layoutList
    	,onDragStartNew: this.onDragStartNew
      ,onDropNew: this.onDropNew
      ,onClosePopup: this.onClosePopup
      ,onSelectCol: this.onSelectCol
      ,onDropItem: this.onDropItem
      ,onDragStart: this.onDragStart
      ,onDragOver: this.onDragOver
      ,onDragOverNew: this.onDragOverNew
      ,onRemoveRow: this.onRemoveRow
      ,onRemoveComponent: this.onRemoveComponent
      ,onRemoveCol: this.onRemoveCol
    }
  }

  /** event of component */
  onDragStart(rowNo, colNo, index, event) {
    // event.preventDefault();
    console.log('onDragStart')
    this.state.dndStatus.dragItem = { rowNo, colNo, index };
    this.state.dndStatus.isDragging = true;
  }
  /** event of component */
  onDragOver(rowNo, colNo, index, event) {
    event.preventDefault();
    if(this.state.dndStatus.isDragging === true){
      console.log('onDragOver')
      let { dndStatus } = this.state;
      dndStatus.dropItem = { rowNo, colNo, index };
      this.setState({ dndStatus })
    }
  }

  onDropItem(layoutList){
    let { dndStatus } = this.state;
    dndStatus.dropItem = {};
    dndStatus.dragItem = {};
    dndStatus.isDragging = false;
    this.setState({ layoutList, dndStatus });
  }

  onDragStartNew(id){
    console.log('onDragStartNew Main')
    this.state.dndStatus.isDraggingnew = true;
    this.state.dndStatus.newComponentId = id;
  }

  onDragOverNew(rowNo, event) {
    event.preventDefault();
    const { dndStatus, layoutList } = this.state;
    if(dndStatus.isDraggingnew === true){

      console.log('onDragOverNew')
      /** check total cols */
    }
  }

  onDropNew(rowNo){
    console.log('onDragStartNew Main')
    let { dndStatus, layoutList } = this.state;
    let row = layoutList[rowNo];
    /** check row is full or not */
    let colTotalOfNewRow = 0;
    let isShowPopup = row.length === 0 ? true : false;
    if(row.length > 0){
      row.forEach((e) => colTotalOfNewRow += e.col);
      isShowPopup = colTotalOfNewRow < 12 ? true : false;
    }

    dndStatus.isShowPopup = isShowPopup;
    dndStatus.isDraggingnew = false;
    dndStatus.newRowNo = rowNo;
    dndStatus.colTotalOfNewRow = colTotalOfNewRow;
    this.setState({ dndStatus });
  }

  onClosePopup(){
    let { dndStatus } = this.state;
    dndStatus.isShowPopup = false;
    this.setState({ dndStatus });
  }

  onSelectCol(colNo){
    let { layoutList, components, dndStatus } = this.state;
    const newCol = {
      col: colNo, 
      components: [
        components[dndStatus.newComponentId]
      ]
    }
    
    layoutList[dndStatus.newRowNo].push(newCol)
    this.state.layoutList = layoutList;
    this.onClosePopup();
  }

  addEmptyRow(){
    console.log('addEmptyRow')
    let { layoutList } = this.state;
    layoutList.push([]);
    this.setState({ layoutList });
  }

  onRemoveRow(index){
    let { layoutList } = this.state;
    layoutList.splice(index, 1);
    this.setState({ layoutList });
  }

  onRemoveComponent(rowNo, colNo, index){
    let { layoutList } = this.state;
    layoutList[rowNo][colNo].components.splice(index, 1);
    this.setState({ layoutList });
  }

  onRemoveCol(rowNo, index){
    let { layoutList } = this.state;
    layoutList[rowNo].splice(index, 1);
    this.setState({ layoutList });
  }

  render(){
    const { dndStatus } = this.state;
    return (
      <div>
        <PageLayout />
        <MenuLayout />
        { dndStatus.isShowPopup && 
          <PopupLayout />
        }
        <div className='add-row'>
          <button className='btn btn-primary'
                  onClick={ this.addEmptyRow }>
            Add row
          </button>
        </div>
      </div>
    )
  }
}
/*Different at here: step 1*/
MainLayout.childContextTypes = { 
  dndStatus: React.PropTypes.object
  , layoutList: React.PropTypes.array
  , onDragStartNew: React.PropTypes.func
  , onDropNew: React.PropTypes.func
  , onClosePopup: React.PropTypes.func
  , onSelectCol: React.PropTypes.func
  , onDropItem: React.PropTypes.func
  , onDragStart: React.PropTypes.func
  , onDragOver: React.PropTypes.func
  , onDragOverNew: React.PropTypes.func
  , onRemoveRow: React.PropTypes.func
  , onRemoveComponent: React.PropTypes.func
  , onRemoveCol: React.PropTypes.func
}
export default MainLayout;

class PopupLayout extends React.Component{
  constructor() { 
  	super();
    this.state = {
      col: '1'
    }
    this.onSelectCol = this.onSelectCol.bind(this);
    this.onChangeSelect = this.onChangeSelect.bind(this);
    this.renderOption = this.renderOption.bind(this);
  }

  onChangeSelect(event){
    this.setState({ col: event.target.value});
  }

  onSelectCol(){
    this.context.onSelectCol(Number(this.state.col))
  }

  renderOption(){
    const { dndStatus } = this.context;
    
    let options = [];
    for(let i=1; i<=(12-dndStatus.colTotalOfNewRow); i++){
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  }

  render(){
    
    return (
      <div className='row popup-layout'>
        <hr />
        <select value={ this.state.col } onChange={ this.onChangeSelect }>
          { this.renderOption() }
        </select>
        <button className="btn btn-primary" onClick={ this.context.onClosePopup }>Close</button>
        <button className="btn btn-primary" onClick={ this.onSelectCol }>Add col</button>
      </div>
    )
  }
}
/*Different at here: step 1*/
PopupLayout.contextTypes = {
  dndStatus: React.PropTypes.object
  , onClosePopup: React.PropTypes.func
  , onSelectCol: React.PropTypes.func
}

class MenuLayout extends React.Component{
  constructor() { 
  	super();
  }

  render(){
    return (
      <div className='row menu-layout'>
        <div className='col-md-3'
              draggable={ true }
              onDragStart={ () => this.context.onDragStartNew('1') }>
          <span>Component 1</span>
        </div>
        <div className='col-md-3'
              draggable={ true }
              onDragStart={ () => this.context.onDragStartNew('2') }>
          <span>Component 2</span>
        </div>
        <div className='col-md-3'
              draggable={ true } 
              onDragStart={ () => this.context.onDragStartNew('3') }>
          <span>Component 3</span>
        </div>
        <div className='col-md-3'
              draggable={ true }
              onDragStart={ () => this.context.onDragStartNew('4') }>
          <span>Component 4</span>
        </div>
      </div>
    )
  }
}
/*Different at here: step 1*/
MenuLayout.contextTypes = {
  dndStatus: React.PropTypes.object
  , onDragStartNew: React.PropTypes.func
}

class PageLayout extends React.Component{

  constructor() { 
  	super(); 
    this.state = {
      dropItem: {}
      ,dragItem: {}
    }
    this.onDragging = this.onDragging.bind(this);
    this.onDropItem = this.onDropItem.bind(this);
    this.renderComponents = this.renderComponents.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.onDropNew = this.onDropNew.bind(this);
  }

  componentDidMount(){
    console.log('componentDidMount')
  }
  
  /** event of component */
  onDragging(index, event) {  }
  
  
  /** event of component */
  onDropItem() {
    event.preventDefault();
    if(this.context.dndStatus.isDragging === true){
      console.log('onDrop')
      const { layoutList, dndStatus } = this.context;
      const { dropItem, dragItem } = dndStatus;
      const dragItemTmp = Object.assign({}, layoutList[dragItem.rowNo][dragItem.colNo].components[dragItem.index]);
      const dropItemTmp = Object.assign({}, layoutList[dropItem.rowNo][dropItem.colNo].components[dropItem.index]);

      layoutList[dragItem.rowNo][dragItem.colNo].components[dragItem.index] = dropItemTmp;
      layoutList[dropItem.rowNo][dropItem.colNo].components[dropItem.index] = dragItemTmp;

      console.log(layoutList)
      this.context.onDropItem(layoutList);
      // this.setState({ dropItem: {}, dragItem: {}, isDragging: false })
    }
  }

  onDropNew(rowNo) {
    event.preventDefault();
    if(this.context.dndStatus.isDraggingnew === true){
      this.context.onDropNew(rowNo)
      console.log('onDropNew')
    }
  }

  renderRow(row, rowNo){
    return row.map((col,i) => {
        return (
          <div key={i} className={`col-md-${col.col}`} style={{background:"white"}}>
            { col.components && col.components.length > 0 && 
              this.renderComponents(col.components, rowNo, i) 
            }
            { this.context.dndStatus.isCanremoveCom &&
              <div className='add-row-area'>
              <p>Add Component</p>
            </div>
            }
            <button onClick={ this.context.onRemoveCol.bind(this, rowNo, i) }>X Col</button>
          </div>
        )
    })
  }

  renderComponents(components, rowNo, colNo) {
    return components.map((item,i) => {
      let { dropItem } = this.context.dndStatus;
      return (
        <div  className="list-group-item"
              key={'item-sort-'+i} 
              onDrop={ this.onDropItem }
              onDragOver={ this.context.onDragOver.bind(this, rowNo, colNo, i) } 
              style={ (i === dropItem.index && rowNo === dropItem.rowNo && colNo === dropItem.colNo)? {background:'yellow'}:{}} 
              >
          <div  onDragStart={ this.context.onDragStart.bind(this, rowNo, colNo, i) }
                onDrag={ this.onDragging } 
                draggable={ true } 
                className="row list-content-management">
            <div className="col-md-6">
              <span className="glyphicon fa fa-bars"></span>
              <span className="content-management">{item.name}</span>
            </div>
            <div className="col-md-6">
              Content
            </div>
          </div>
          { this.context.dndStatus.isCanremoveCom && 
            <button onClick={ this.context.onRemoveComponent.bind(this, rowNo, colNo, i) }>X</button>
          }
        </div>
      )
    });
  }

  render() {
    const { layoutList } = this.context;
    return (
      <div className="w-pages">
        <div className="main-layout">
          {/*Top-area*/}
          <div className="">
            <TopMenu />
          </div>
          {/*End Top-area*/}

          {/*Main-area*/}
          <div className="container-fluid">


            {/*Content-area*****************/}
              <div id='page-layout-area'>
                { layoutList && layoutList.map((row,i) => {
                    let canAddRowClass = row.length === 0 ? 'layout-row-can-add' : '';
                    if(row.length > 0){
                      let colTotal = 0;
                      row.forEach((e) => colTotal += e.col);
                      canAddRowClass = colTotal < 12 ? 'layout-row-can-add' : '';
                    }
                    return (
                      <div key={i} className={`layout-row row-${i} ${canAddRowClass} row`} 
                            onDrop={ this.onDropNew.bind(this, i) }
                            onDragOver={ this.context.onDragOverNew.bind(this, i) } >
                            {/** render row */}
                            { this.renderRow(row, i) }
                            <button onClick={ this.context.onRemoveRow.bind(this, i) }>X Row</button>
                      </div>
                    )
                  })
                }
              </div>
            {/*End Content-area****************/}
            <div>
              <p>Drag Item: { JSON.stringify(this.context.dndStatus.dragItem) }</p>
              <p>Drop Item: { JSON.stringify(this.context.dndStatus.dropItem) }</p>
            </div>
            
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
}
/*Different at here: step 1*/
PageLayout.contextTypes = {
  dndStatus: React.PropTypes.object
  , layoutList: React.PropTypes.array
  , onDragStartNew: React.PropTypes.func
  , onDropNew: React.PropTypes.func
  , onDropItem: React.PropTypes.func
  , onDragStart: React.PropTypes.func
  , onDragOver: React.PropTypes.func
  , onDragOverNew: React.PropTypes.func
  , onRemoveRow: React.PropTypes.func
  , onRemoveComponent: React.PropTypes.func
  , onRemoveCol: React.PropTypes.func
}

