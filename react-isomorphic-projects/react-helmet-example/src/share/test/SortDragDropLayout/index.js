import React from 'react';
import Helmet from 'react-helmet';

import PopupLayout from './PopupLayout';
import MenuLayout from './MenuLayout';
import PageLayout from './PageLayout';

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

export default class MainLayout extends React.Component{
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
      <div  className="w-pages">
        <Helmet
            title={this.props.name+" test"}
            meta={[
                {property: 'og:title', content: 'About'},
            ]} />
        <PageLayout />
        <MenuLayout />
        { dndStatus.isShowPopup && 
          <PopupLayout />
        }
        <div>
          <p>Drag Item: { JSON.stringify(this.state.dndStatus.dragItem) }</p>
          <p>Drop Item: { JSON.stringify(this.state.dndStatus.dropItem) }</p>
        </div>
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





