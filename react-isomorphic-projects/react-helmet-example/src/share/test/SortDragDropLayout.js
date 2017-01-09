import React from 'react';
import Helmet from 'react-helmet';

const COMPONENTS = {
  1: { id: '1', name: 'Component new 1'}
  ,2: { id: '2', name: 'Component new 2'}
  ,3: { id: '3', name: 'Component new 3'}
  ,4: { id: '4', name: 'Component new 4'}
}

const EXAMPLE_DATA = [
  [
    {
      col: {
        xl: 6,
        md: 6,
        sm: 6,
        xs: 12
      },
      components: [
        { id: '1', name: 'Component 21'},
        { id: '2', name: 'Component 22'},
      ]
    }
  ],
  []
]

const CONSTANTS = {
  colTotalOfNewRow: {
    xl: 0,
    md: 0,
    sm: 0,
    xs: 0,
  }
}

class MainLayout extends React.Component{
  constructor() { 
  	super(); 
    this.state = {
      dndStatus: {
        isDraggingnew: false
        ,isShowPopup: false
        ,newRowNo: 0
        ,colTotalOfNewRow: Object.assign({}, CONSTANTS.colTotalOfNewRow)
        ,newComponentId: null
        ,dragItem: {}
        ,dropItem: {}
        ,isCanremoveCom: true
      }
      ,layoutList: EXAMPLE_DATA
      ,components: COMPONENTS
    }
    //drag & drop: main
    this.onUpdateLayout = this.onUpdateLayout.bind(this);
  }

  getChildContext() { 
  	return {
      dndStatus: this.state.dndStatus
      ,components: this.state.components
      ,layoutList: this.state.layoutList
      ,onUpdateLayout: this.onUpdateLayout
    }
  }

  onUpdateLayout(layoutList, dndStatus, isSetState){
    layoutList = layoutList ? layoutList : this.state.layoutList;
    dndStatus = dndStatus ? dndStatus : this.state.dndStatus;
    if(isSetState){
      this.setState({ layoutList, dndStatus });
    }else{
      this.state.layoutList = layoutList;
      this.state.dndStatus = dndStatus;
    }
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
      </div>
    )
  }
}
/*Different at here: step 1*/
MainLayout.childContextTypes = { 
  dndStatus: React.PropTypes.object
  , layoutList: React.PropTypes.array
  , components: React.PropTypes.object
  , onUpdateLayout: React.PropTypes.func
}
export default MainLayout;

class PopupLayout extends React.Component{
  constructor() { 
  	super();
    this.state = {
      col: {
        xl: 12,
        md: 12,
        sm: 12,
        xs: 12
      }
    }
    this.onAddColDnD = this.onAddColDnD.bind(this);
    this.onChangeSelect = this.onChangeSelect.bind(this);
    this.renderOption = this.renderOption.bind(this);
    this.onClosePopupDnD = this.onClosePopupDnD.bind(this);
  }

  componentWillMount(){
    const { dndStatus, layoutList } = this.context;
    const rowNo = dndStatus.newRowNo;
    let row = layoutList[rowNo];
    let colTotalOfNewRow = Object.assign({}, CONSTANTS.colTotalOfNewRow);
    if(row.length > 0){
      row.forEach((e) => {
        colTotalOfNewRow.xl += e.col.xl;
        colTotalOfNewRow.md += e.col.md;
        colTotalOfNewRow.sm += e.col.sm;
        colTotalOfNewRow.xs += e.col.xs;
      });
    }
    
    this.state.col.xl = 12 - colTotalOfNewRow.xl;
    this.state.col.md = 12 - colTotalOfNewRow.md;
    this.state.col.sm = 12 - colTotalOfNewRow.sm;
    this.state.col.xs = 12 - colTotalOfNewRow.xs;
  }
  onChangeSelect(device, event){
    let { col } = this.state;
    col[device] = Number(event.target.value);
    this.setState({ col });
  }

  onClosePopupDnD(){
    let { dndStatus } = this.context;
    dndStatus.isShowPopup = false;
    dndStatus.dropItem = {};
    dndStatus.dragItem = {};
    this.context.onUpdateLayout(null, dndStatus, true);
  }
  onAddColDnD(){
    const col = this.state.col;
    let { layoutList, components, dndStatus } = this.context;
    /* new column: */
    const newCol = {
      col, 
      components: [
        components[dndStatus.newComponentId]
      ]
    }

    layoutList[dndStatus.newRowNo].push(newCol)
    dndStatus.isShowPopup = false;
    dndStatus.dropItem = {};
    dndStatus.dragItem = {};
    this.context.onUpdateLayout(layoutList, dndStatus, true);
  }

  renderOption(device){
    const { dndStatus } = this.context;
    let options = [];
    if(dndStatus.colTotalOfNewRow[device] < 12){
      for(let i=(12 - dndStatus.colTotalOfNewRow[device]); i >= 1; i--){
        options.push(<option key={i} value={i}>{i}</option>);
      }
    }else{
      options.push(<option value={12}>12</option>);
    }
    return options;
  }

  render(){
    
    return (
      <div className='row popup-layout'>
        <div className='row'>
          <div className='col-md-3'>
            <span>XL: </span>
            <select value={ this.state.col.xl} onChange={ (e) => this.onChangeSelect('xl', e) }>
              { this.renderOption('xl') }
            </select>
          </div>
          <div className='col-md-3'>
            <span>MD: </span>
            <select value={ this.state.col.md } onChange={ (e) => this.onChangeSelect('md', e) }>
              { this.renderOption('md') }
            </select>
          </div>
          <div className='col-md-3'>
            <span>SM: </span>
            <select value={ this.state.col.sm } onChange={ (e) => this.onChangeSelect('sm', e) }>
              { this.renderOption('sm') }
            </select>
          </div>
          <div className='col-md-3'>
            <span>XS: </span>
            <select value={ this.state.col.xs } onChange={ (e) => this.onChangeSelect('xs', e) }>
              { this.renderOption('xs') }
            </select>
          </div>
        </div>
        <div className='row'>
          <button className="btn btn-primary" onClick={ this.onClosePopupDnD }>Close</button>
          <button className="btn btn-primary" onClick={ this.onAddColDnD }>Add col</button>
        </div>
      </div>
    )
  }
}
/*Different at here: step 1*/
PopupLayout.contextTypes = {
  dndStatus: React.PropTypes.object
  , layoutList: React.PropTypes.array
  , components: React.PropTypes.object
  , onUpdateLayout: React.PropTypes.func
}

class MenuLayout extends React.Component{
  constructor() { 
  	super();
    this.onDragStartNew = this.onDragStartNew.bind(this);
    this.onDragEndNew = this.onDragEndNew.bind(this);
  }

  onDragStartNew(id){
    console.log('onDragStartNew Main')
    let { dndStatus } = this.context;
    dndStatus.isDraggingnew = true;
    dndStatus.newComponentId = id;
    this.context.onUpdateLayout(null, dndStatus)
  }
  onDragEndNew(){
    let { dndStatus } = this.context;
    if(dndStatus.isDraggingnew){
      console.log('onDragEndNew')
      dndStatus.dragItem = {};
      dndStatus.dropItem = {};
      dndStatus.isDraggingnew = false;
      this.context.onUpdateLayout(null, dndStatus, true)
    }
  }

  render(){
    return (
      <div className='row menu-layout'>
        <div className='col-md-3'
              draggable={ true }
              onDragStart={ () => this.onDragStartNew('1') }
              onDragEnd={ this.onDragEndNew }>
          <span>Component 1</span>
        </div>
        <div className='col-md-3'
              draggable={ true }
              onDragStart={ () => this.onDragStartNew('2') }
              onDragEnd={ this.onDragEndNew }>
          <span>Component 2</span>
        </div>
        <div className='col-md-3'
              draggable={ true } 
              onDragStart={ () => this.onDragStartNew('3') }
              onDragEnd={ this.onDragEndNew }>
          <span>Component 3</span>
        </div>
        <div className='col-md-3'
              draggable={ true }
              onDragStart={ () => this.onDragStartNew('4') }
              onDragEnd={ this.onDragEndNew }>
          <span>Component 4</span>
        </div>
      </div>
    )
  }
}
MenuLayout.contextTypes = {
  dndStatus: React.PropTypes.object
  , onUpdateLayout: React.PropTypes.func
}

class PageLayout extends React.Component{
  constructor() { 
  	super(); 
    this.state = {}
    this.renderComponents = this.renderComponents.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.addEmptyRowDnD = this.addEmptyRowDnD.bind(this);
    this.onRemoveRowDnD = this.onRemoveRowDnD.bind(this);
    this.onRemoveComponentDnD = this.onRemoveComponentDnD.bind(this);
    this.onRemoveColDnD = this.onRemoveColDnD.bind(this);

    this.onDragStart = this.onDragStart.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDropItem = this.onDropItem.bind(this);
    this.onDragOverNewToRow = this.onDragOverNewToRow.bind(this);
    this.onDropNewToRow = this.onDropNewToRow.bind(this);
    this.onDropNewToCol = this.onDropNewToCol.bind(this);
    this.onDragOverNewToCol = this.onDragOverNewToCol.bind(this);
  }

  /** event when drag component : edit*/
  onDragStart(rowNo, colNo, index, event) {
    console.log('onDragStart')
    let { dndStatus } = this.context;
    dndStatus.dragItem = { rowNo, colNo, index };
    dndStatus.isDragging = true;
    this.context.onUpdateLayout(null, dndStatus);
  }
  onDragEnd() {
    let { dndStatus } = this.context;
    if(dndStatus.isDragging){
      console.log('onDragEnd')
      dndStatus.dragItem = {};
      dndStatus.dropItem = {};
      dndStatus.isDragging = false;
      this.context.onUpdateLayout(null, dndStatus, true);
    }
  }
  onDragOver(rowNo, colNo, index, event) {
    event.preventDefault();
    let { dndStatus } = this.context;
    if(dndStatus.isDragging === true){
      let { dropItem = {}} = dndStatus;
      //only setState if change
      if(dropItem.rowNo !== rowNo || dropItem.colNo !== colNo || dropItem.index !== index){
        dndStatus.dropItem = { rowNo, colNo, index };
        this.context.onUpdateLayout(null, dndStatus, true);
      }
    }
  }
  onDropItem() {
    event.preventDefault();
    let { dndStatus, layoutList } = this.context;
    if(dndStatus.isDragging === true){
      console.log('onDropItem')
      const { dropItem, dragItem } = dndStatus;
      const dragItemTmp = Object.assign({}, layoutList[dragItem.rowNo][dragItem.colNo].components[dragItem.index]);
      const dropItemTmp = Object.assign({}, layoutList[dropItem.rowNo][dropItem.colNo].components[dropItem.index]);

      layoutList[dragItem.rowNo][dragItem.colNo].components[dragItem.index] = dropItemTmp;
      layoutList[dropItem.rowNo][dropItem.colNo].components[dropItem.index] = dragItemTmp;
      /* init default */
      dndStatus.dropItem = {};
      dndStatus.dragItem = {};
      dndStatus.isDragging = false;
      this.context.onUpdateLayout(layoutList, dndStatus, true);
    }
  }

  onDragOverNewToRow(rowNo, event) {
    event.preventDefault();
    let { dndStatus } = this.context;
    if(dndStatus.isDraggingnew === true){
      let { dropItem = {}} = dndStatus;
      //only setState if change
      if(dropItem.rowNo !== rowNo){
        dndStatus.dropItem.rowNo = rowNo;
        this.context.onUpdateLayout(null, dndStatus, true);
      }
    }
  }
  onDropNewToRow(rowNo){
    event.preventDefault();
    let { dndStatus, layoutList } = this.context;
    if(dndStatus.isDraggingnew){
      console.log('onDropNewToRow')
      let row = layoutList[rowNo];
      let colTotalOfNewRow = Object.assign({}, CONSTANTS.colTotalOfNewRow);
      let isShowPopup = row.length === 0 ? true : false;
      if(row.length > 0){
        row.forEach((e) => {
          colTotalOfNewRow.xl += e.col.xl;
          colTotalOfNewRow.md += e.col.md;
          colTotalOfNewRow.sm += e.col.sm;
          colTotalOfNewRow.xs += e.col.xs;
        });
        isShowPopup = this.isCanAddRow(colTotalOfNewRow) ? true : false;
      }
      /* reset state */
      dndStatus.isShowPopup = isShowPopup;
      dndStatus.isDraggingnew = false;
      dndStatus.newRowNo = rowNo;
      dndStatus.colTotalOfNewRow = colTotalOfNewRow;      
      this.context.onUpdateLayout(null, dndStatus, true);
    }
  }

  /** event when drag component : add to column*/
  onDropNewToCol(rowNo, colNo){
    event.preventDefault();  
    let { dndStatus, layoutList, components } = this.context;
    if(dndStatus.isDraggingnew){
      console.log('onDropNewToCol')  
      const newComponent = components[dndStatus.newComponentId];
      layoutList[rowNo][colNo].components.push(newComponent);
      /* reset state */
      dndStatus.isDraggingnew = false;
      this.context.onUpdateLayout(layoutList, dndStatus, true);
    }
  }
  onDragOverNewToCol(rowNo, colNo){
    event.preventDefault();  
    let { dndStatus } = this.context;
    if(dndStatus.isDraggingnew === true){
      let { dropItem = {}} = dndStatus;
      //only setState if change
      if(dropItem.rowNo !== rowNo || dropItem.colNo !== colNo){
        dndStatus.dropItem.rowNo = rowNo;
        dndStatus.dropItem.colNo = colNo;
        this.context.onUpdateLayout(null, dndStatus, true);
      }
    }
  }

  addEmptyRowDnD(){
    let { layoutList } = this.context;
    layoutList.push([]);
    this.context.onUpdateLayout(layoutList, null, true);
  }

  onRemoveRowDnD(index){
    let { layoutList } = this.context;
    layoutList.splice(index, 1);
    this.context.onUpdateLayout(layoutList, null, true);
  }

  onRemoveComponentDnD(rowNo, colNo, index){
    let { layoutList } = this.context;
    layoutList[rowNo][colNo].components.splice(index, 1);
    this.context.onUpdateLayout(layoutList, null, true);
  }

  onRemoveColDnD(rowNo, index){
    let { layoutList } = this.context;
    layoutList[rowNo].splice(index, 1);
    this.context.onUpdateLayout(layoutList, null, true);
  }
  
  renderRow(row, rowNo){
    const { dndStatus } = this.context;
    const { dropItem = {} } = dndStatus;
    return row.map((col,i) => {
        const canAddClass  = (i === dropItem.colNo && rowNo === dropItem.rowNo && dndStatus.isDraggingnew) ? `layout-row-can-add layout-is-drag-over` : 'layout-row-can-add';
        return (
          <div key={i} className={`col-lg-${col.col.xl} col-md-${col.col.md} col-sm-${col.col.sm} col-xs-${col.col.xs}`} style={{background:"white"}}>
            { col.components && col.components.length > 0 && 
              this.renderComponents(col.components, rowNo, i) 
            }
            { dndStatus.isCanremoveCom &&
              <div className= { `add-row-area' ${canAddClass}` }
                    onDrop={ this.onDropNewToCol.bind(this, rowNo, i) }
                    onDragOver={ this.onDragOverNewToCol.bind(this, rowNo, i) } >
                <p>Add Component</p>
              </div>
            }
            <button onClick={ this.onRemoveColDnD.bind(this, rowNo, i) }>X Col</button>
          </div>
        )
    })
  }

  isCanAddRow(colTotalOfNewRow){
    return colTotalOfNewRow.xl < 12 || colTotalOfNewRow.md < 12 || colTotalOfNewRow.sm < 12 || colTotalOfNewRow.xs < 12
  };

  renderComponents(components, rowNo, colNo) {
    return components.map((item,i) => {
      let { dropItem } = this.context.dndStatus;
      return (
        <div  className="list-group-item"
              key={'item-sort-'+i} 
              onDrop={ this.onDropItem }
              onDragOver={ this.onDragOver.bind(this, rowNo, colNo, i) } 
              style={ (i === dropItem.index && rowNo === dropItem.rowNo && colNo === dropItem.colNo)? {background:'yellow'}:{}} 
              >
          <div  onDragStart={ this.onDragStart.bind(this, rowNo, colNo, i) }
                onDragEnd={this.onDragEnd}
                draggable={ true } 
                className="row list-content-management">
            <div className="col-md-6">
              <span className="glyphicon fa fa-bars"></span>
              <span className="content-management">{item.name}</span>
            </div>
            <div className="col-md-6">
              <img draggable={ false }  width='100px' src='https://1.bp.blogspot.com/-NFIfiFmg8SA/Ti0xrNqB4OI/AAAAAAAADno/fB_2wYQBiv4/s1600/silence-between-two-people.jpg' />
            </div>
          </div>
          { this.context.dndStatus.isCanremoveCom && 
            <button onClick={ this.onRemoveComponentDnD.bind(this, rowNo, colNo, i) }>X</button>
          }
        </div>
      )
    });
  }

  render() {
    const { layoutList, dndStatus } = this.context;
    return (
      <div className="w-pages">col-
        <Helmet
            title={this.props.name+" test"}
            meta={[
                {property: 'og:title', content: 'About'},
            ]} />


            {/*Content-area*****************/}
              <div id='page-layout-area'>
                { layoutList && layoutList.map((row,i) => {
                    let colTotalOfNewRow = Object.assign({}, CONSTANTS.colTotalOfNewRow);
                    let canAddRowClass = row.length === 0 ? 'layout-row-can-add' : '';
                    if(row.length > 0){
                      row.forEach((e) => {
                        colTotalOfNewRow.xl += e.col.xl;
                        colTotalOfNewRow.md += e.col.md;
                        colTotalOfNewRow.sm += e.col.sm;
                        colTotalOfNewRow.xs += e.col.xs;
                      });
                      canAddRowClass = this.isCanAddRow(colTotalOfNewRow) ? 'layout-row-can-add' : '';
                    }
                    canAddRowClass  = canAddRowClass && i === dndStatus.dropItem.rowNo? `${canAddRowClass} layout-is-drag-over` : canAddRowClass;

                    return (
                      <div key={i} className={`layout-row row-${i} ${canAddRowClass} row`} 
                            onDrop={ this.onDropNewToRow.bind(this, i) }
                            onDragOver={ this.onDragOverNewToRow.bind(this, i) } >
                            {/** render row */}
                            { this.renderRow(row, i) }
                            <button onClick={ this.onRemoveRowDnD.bind(this, i) }>X Row</button>
                      </div>
                    )
                  })
                }
              </div>
            {/*End Content-area****************/}
            <div className='add-row'>
              <button className='btn btn-primary'
                      onClick={ this.addEmptyRowDnD }>
                Add row
              </button>
            </div>
            <div>
              <p>Drag Item: { JSON.stringify(this.context.dndStatus.dragItem) }</p>
              <p>Drop Item: { JSON.stringify(this.context.dndStatus.dropItem) }</p>
            </div>
    </div>
    );
  }
}
PageLayout.contextTypes = {
  dndStatus: React.PropTypes.object
  , components: React.PropTypes.object
  , layoutList: React.PropTypes.array
  , onUpdateLayout: React.PropTypes.func
}

