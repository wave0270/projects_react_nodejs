import React from 'react';

export default class MenuLayout extends React.Component{
  constructor() { 
  	super();
    this.onDragStartNew = this.onDragStartNew.bind(this);
    this.onDragEndNew = this.onDragEndNew.bind(this);
  }

  onDragStartNew(id, event){
    console.log('onDragStartNew Main')
    event.dataTransfer.setData( 'text/html', event.target.outerHTML );
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
              onDragStart={ (e) => this.onDragStartNew('1', e) }
              onDragEnd={ this.onDragEndNew }>
          <span>Component 1</span>
        </div>
        <div className='col-md-3'
              draggable={ true }
              onDragStart={ (e) => this.onDragStartNew('2', e) }
              onDragEnd={ this.onDragEndNew }>
          <span>Component 2</span>
        </div>
        <div className='col-md-3'
              draggable={ true } 
              onDragStart={ (e) => this.onDragStartNew('3', e) }
              onDragEnd={ this.onDragEndNew }>
          <span>Component 3</span>
        </div>
        <div className='col-md-3'
              draggable={ true }
              onDragStart={ (e) => this.onDragStartNew('4', e) }
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