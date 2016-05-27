import React, {Component} from 'react';
import Helmet from 'react-helmet';
import { MiniInfoBar } from 'components';
import {SurveyForm} from 'components';

export default class NewsHome extends Component {

  state = {
    showKitten: false,
    name: 'News Home page'
  }

  handleToggleKitten = () => this.setState({showKitten: !this.state.showKitten});

  handleChange = (name, event) => {
    console.log(event)
    console.log(name)
  }

  render() {
    const {showKitten} = this.state;
    const kitten = require('./kitten.jpg');
    console.log(this.state)
    console.log(this.props)
    return (
      <div className="container">
        <Helmet title="About Us test"
            meta={[
                    {"name": "description binh", "content": "Helmet application"},
                    {"property": "og:type", "content": "article"}
                ]}
          />
        <h1>{ this.state.name }</h1>
        <p>
          This project was originally created by Erik Rasmussen
        </p>
        <h3>CHeck old workflow:</h3>


        <h3>Mini Bar <span style={{color: '#aaa'}}>(not that kind)</span></h3>
        <MiniInfoBar/>

        <h3>Images</h3>
        <p>
          <button className={'btn btn-' + (showKitten ? 'danger' : 'success')}
                  style={{marginLeft: 50}}
                  onClick={this.handleToggleKitten}>
            {showKitten ? 'No! Take it away!' : 'Yes! Please!'}</button>
        </p>

        {showKitten && <div><img src={kitten}/></div>}
      </div>
    );
  }
}
