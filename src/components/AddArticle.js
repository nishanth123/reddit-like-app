import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import TabComponent from '../components/TabComponent';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import  articleApp  from './../reducers';

export default class AddArticle extends React.Component {
  constructor(props) {
    super(props);

    this.onClickAddButton = this.onClickAddButton.bind(this);

    this.state = {
      tempArticle: undefined,
      toggle: true
    };
  }

  onClickAddButton(){
    this.setState(
      prevState => (
        { 
          toggle: false
        }
      )
    );

    console.log(this.state);
    
  }

  onClickSubmitButton(){
    this.setState(
      prevState => (
        { 
          toggle: true 
        }
      )
    );
  }

  // this is the render method
  render() {
    return (
          <div>
            <div id="div_1" className={this.state.toggle ? 'visible' : 'hidden'}>
              <br/><br/>
              <button 
                type="button" 
                onClick={() => 
                this.onClickAddButton()}
              >
                Add Article
              </button>
            
            </div>
            <div id="div_2" className={this.state.toggle ? 'hidden' : 'visible'}>
            <br/>
            <input type="text" placeholder="Add the article title here" className="block_text"></input>
            <br/><br/>
            <input type="text" placeholder="Add the article text here" className="block_text"></input>
            <br/><br/>
            <button 
              type="button" 
              onClick={() => 
              this.onClickSubmitButton()}
            >
              Submit
            </button>
      
            </div>
         </div>
    );
  }
}
