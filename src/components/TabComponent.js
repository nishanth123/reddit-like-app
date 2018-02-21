import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ArticleComponent from '../components/ArticleComponent';
import {  AddArticleContainer } from '../components/AddArticle';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import  articleApp  from './../reducers';

export default class TabComponent extends React.Component {
  constructor(props) {
    super(props);

    this.articleList = [];
    
    this.handleAddArticle = this.handleAddArticle.bind(this);
    this.renderTabPanel = this.renderTabPanel.bind(this);

    this.state = 
    { 
      tabIndex: 0,
      options: [],
      completed: false 
    };
  }

  componentDidMount() {

    const myArticles = this.props.articles;
    let tabs = Object.values(myArticles)[2];

    this.setState({
        options: tabs
    });
  }

  getTabElements(){
    
    return this.state.options.map(category => {
      return (
        <Tab><p className="option__text"><a>{category}</a></p></Tab>              
      )});
  }

  getArticlePage(tabIndex) {
    var tabMap = ['hot', 'new', 'latest'];

    return tabMap.map(tabName => {
        return (
          <TabPanel>
            {this.renderTabPanel(tabName)}
            <AddArticleContainer tabIndex={this.state.tabIndex}
            
            />  
          </TabPanel>
    )});
  }

  renderTabPanel(tabName){
    const tabArticles = this.props.articles.articles.filter((article)=> article.tabName === tabName);
    
    return(
      tabArticles.map(
        article => (
          <div>
            <br />
              <p className="option__text">
                <Link to={`article/${article['id']}`} key={article.id}>{article['title']}</Link>
              </p>
              <p className="option__text">{(article['text']).substring(0, 20) + "..."}</p>
              <br/>
          </div>
        )
      )
    )
  }

  handleAddArticle(e) {
    
  }

  // this is the render method
  render() {
    
    const {
      articles,
      categories,
      tabIndex
    } = this.props;

    return (
      <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
        <TabList>
          {this.getTabElements()}       

        </TabList>
        
          {this.getArticlePage(this.state.tabIndex)}

          
      </Tabs>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles,
    categories: state.categories,
    tabIndex: state.tabIndex
  }
}

export const TabComponentContainer = connect(
  mapStateToProps,
  null
)(TabComponent);