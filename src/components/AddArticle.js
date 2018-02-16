import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import TabComponent from '../components/TabComponent';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import  articleApp  from './../reducers';

class Child extends React.Component {
  constructor(props) {
    super(props);

    this.onClickSubmitButton = this.onClickSubmitButton.bind(this);

    this.state = { 
      showing: false 
    };
  }

  onClickSubmitButton(){
    console.log('test-2');

    this.setState(
      { 
        showing: true 
      }
    );
  }

  render() {
    const { showing } = this.state;
    return (
      <div id="div_2">
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
      { showing 
                    ? <div>This is visible</div>
                    : null
      }

    </div>
    );
  }
}

export default class AddArticle extends React.Component {
  constructor(props) {
    super(props);

    this.onClickAddButton = this.onClickAddButton.bind(this);

    this.state = {
      error: undefined,
      tempArticle: undefined,
      childVisible: false,
      parentVisible: true
    };
  }

  onClickAddButton(){
    console.log('test-1');

    this.setState(
      prevState => (
        { 
          childVisible: !prevState.childVisible,
          parentVisible: !prevState.parentVisible 
        }
      )
    );
    
  }

  // this is the render method
  render() {
    
    return (
        
          <div id="div_1">
            <br/><br/>
            <button 
              type="button" 
              onClick={() => 
              this.onClickAddButton()}
            >
              Add Article
            </button>
            {
            
            this.state.childVisible
            ? <Child />
            : null

            }
          </div>

    );

  }
}
