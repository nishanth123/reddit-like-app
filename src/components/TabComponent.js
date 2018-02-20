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
    this.tabChange = this.tabChange.bind(this);
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
    let articles = Object.values(myArticles)[1];

    var hotArray = [];
    var newArray = [];
    var latestArray = [];

    for (var i in articles){
      var tabName = articles[i]['tabName'];

      if (tabName === "hot"){
        hotArray.push(articles[i]);
      } else if (tabName === "new"){
        newArray.push(articles[i]);
      } else {
        latestArray.push(articles[i]);
      }
    }

    this.articleList.push(hotArray); 
    this.articleList.push(newArray);
    this.articleList.push(latestArray);

    this.setState({
        options: tabs
    });
  }

  getTabElements(){
    
    return this.state.options.map(category => {
      return (
        <Tab><p className="option__text" onClick={this.tabChange}><a>{category}</a></p></Tab>              
      )});
  }

  tabChange(e){
    var tabName = e.target;
    var tabIndex = 0;

    var string1 = "<a>hot</a>";
    console.log(this.props.tabIndex);
    console.log(tabName);

    var n = string1.localeCompare(tabName);

    if (tabName === '<a>hot</a>'){
      tabIndex = 0;
    } else if (tabName === "<a>new</a>"){
      tabIndex = 1;
    } else if (tabName === "<a>latest</a>"){
      tabIndex = 2;
    }

    console.log(tabName, tabIndex, n);

    this.setState({
      tabIndex: tabIndex
    });
  }

  getArticlePage(tabIndex) {
    var tabMap = ['hot', 'new', 'latest'];

    console.log(tabMap[tabIndex], this.props.articles.articles);

    return tabMap.map(tabName => {
        return (
          <TabPanel>
            {this.renderTabPanel(tabName)}
          </TabPanel>
    )});
  }

  renderTabPanel(tabName){
    const tabArticles = this.props.articles.articles.filter((article)=> article.tabName === tabName);
    console.log('tabName', tabArticles, this.props.articles);
    
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

          <AddArticleContainer
            
          />
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