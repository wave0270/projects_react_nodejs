import React from 'react';


const CONSTANTS = {
  colTotalOfNewRow: {
    xl: 0,
    md: 0,
    sm: 0,
    xs: 0,
  }
}
export default class PageLayout extends React.Component{
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
    event.dataTransfer.setData( 'text/html', event.target.outerHTML );
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
  onDropItem(event) {
    console.log('onDropItem')
    event.preventDefault();
    let { dndStatus, layoutList } = this.context;
    if(dndStatus.isDragging === true){
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
  onDropNewToRow(rowNo, event){
    console.log('onDropNewToRow')
    event.preventDefault();
    let { dndStatus, layoutList } = this.context;
    if(dndStatus.isDraggingnew){
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
  onDropNewToCol(rowNo, colNo, event){
    console.log('onDropNewToCol')  
    event.preventDefault();  
    let { dndStatus, layoutList, components } = this.context;
    if(dndStatus.isDraggingnew){
      const newComponent = components[dndStatus.newComponentId];
      layoutList[rowNo][colNo].components.push(newComponent);
      /* reset state */
      dndStatus.isDraggingnew = false;
      this.context.onUpdateLayout(layoutList, dndStatus, true);
    }
  }
  onDragOverNewToCol(rowNo, colNo, event){
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
                    onDrop={ (e) => this.onDropNewToCol(rowNo, i, e) }
                    onDragOver={ (e) => this.onDragOverNewToCol(rowNo, i, e) } >
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
              onDrop={ (e) => this.onDropItem(e) }
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
      <div>

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
                            onDrop={ (e) => this.onDropNewToRow(i, e) }
                            onDragOver={ (e) => this.onDragOverNewToRow(i, e) } >
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