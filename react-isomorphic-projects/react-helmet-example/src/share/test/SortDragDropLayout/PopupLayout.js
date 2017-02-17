import React from 'react';

const CONSTANTS = {
  colTotalOfNewRow: {
    xl: 0,
    md: 0,
    sm: 0,
    xs: 0,
  }
}

export default class PopupLayout extends React.Component{
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