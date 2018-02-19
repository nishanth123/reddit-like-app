import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import TabComponent from '../components/TabComponent';
import addArticle from './../actions/article.js';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import  articleApp  from './../reducers';


export default class AddArticle extends React.Component {
  constructor(props) {
    super(props);

    this.onClickAddButton = this.onClickAddButton.bind(this);
    this.onClickSubmitButton = this.onClickSubmitButton.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      toggle: true
    };
  }

  componentDidMount(){

  }

  onClickAddButton(){
    this.setState(
      prevState => (
        { 
          toggle: false          
        }
      )
    );
  }

  handleTitleChange(e) {
    e.preventDefault();
    
    this.setState({ 
      title: e.target.value 
    });
  };

  handleTextChange(e) {
    e.preventDefault();

    this.setState({ 
      text: e.target.value 
    });
  };

  handleSubmit() {
    // this.setState(
    //   prevState => (
    //     { 
    //       toggle: true 
    //     }
    //   )
    // );
    
    // console.log(this.state);

    // var article = {};
    // article['id'] = 30;
    // article['title'] = this.state.title;
    // article['text'] = this.state.text;
    // article['tabName'] = "hot";

  }

  onClickSubmitButton(){
    this.setState(
      prevState => (
        { 
          toggle: true 
        }
      )
    );
    
    console.log(this.state);

    var article = {};
    article['id'] = 30;
    article['title'] = this.state.title;
    article['text'] = this.state.text;
    article['tabName'] = "hot";

    // this.setState({
    //   articles: this.state.articles.concat(article)
    // });
  }

  // this is the render method
  render() {
    const {
      title,
      text
    } = this.props;

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
            <input type="text" placeholder="Article title here" onChange={ this.handleTitleChange } className="block_text" name="titleInput"></input>
            <br/><br/>
            <textarea type="text" placeholder="Article text here" onChange={ this.handleTextChange } className="block_text" name="textInput"></textarea>
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

function mapStateToProps(state) {
  return {
    title: title,
    text: text
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    ...bindActionCreators(
      { addArticle },
      dispatch
    )    
  })
}

export const AddArticleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddArticle);