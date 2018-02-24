import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import TabComponent from '../components/TabComponent';
import { removeArticle } from './../actions/removeArticle.js';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import  articleApp  from './../reducers';

export default class RemoveArticle extends React.Component {
  constructor(props) {
    super(props);

    this.onClickCloseButton = this.onClickCloseButton.bind(this);

    this.state = {
      articleId: this.props.id,
    };
  }

  componentDidMount(){
   
  }

  onClickCloseButton(){
    // this.setState(
    //   prevState => (
    //     { 
    //       refresh: true
    //     }
    //   )
    // );

    this.props.removeArticle(this.props.id);
  }

  // this is the render method
  render() {
    const {
      id
    } = this.props;

    return (
      <button type="button" className="button__close" onClick={() => 
        this.onClickCloseButton()}>
          <img src="/reddit-like-app/images/navigate_cross.png" alt="Image input control" width="20" height="20" />
        </button>
    );
  }
}

function mapStateToProps(state) {
  return {
    // tabIndex: state.tabIndex
  }
}

function mapDispatchToProps(dispatch) {
  
  return ({
    ...bindActionCreators(
      { removeArticle },
      dispatch
    )    
  })
}

export const RemoveArticleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RemoveArticle);