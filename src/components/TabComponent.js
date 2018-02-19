import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ArticleComponent from '../components/ArticleComponent';
import AddArticle from '../components/AddArticle';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import  articleApp  from './../reducers';

export default class TabComponent extends React.Component {
  constructor(props) {
    super(props);

    this.articleList = [];
    
    this.handleAddArticle = this.handleAddArticle.bind(this);

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
        <Tab><p className="option__text"><a>{category}</a></p></Tab>              
      )});
  }

  getArticlePage(tabIndex) {
    
    return this.articleList.map(tabArticles => {
        return (
          <TabPanel>
            {tabArticles.map(
              article => (
                <div>
                  <br />
                    <p className="option__text">
                      <Link to={`article/${article['id']}`}>{article['title']}</Link>
                    </p>
                    <p className="option__text">{(article['text']).substring(0, 20) + "..."}</p>
                    <br/>
                </div>
              )
            )}
          </TabPanel>
    )});
  }

  handleAddArticle(e) {
    console.log('test-3');

    this.setState({
      articles: this.state.articles.concat(article)
    });
  }

  // this is the render method
  render() {
    
    return (
      <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
        <TabList>
          {this.getTabElements()}       

        </TabList>
        
          {this.getArticlePage(this.state.tabIndex)}

          <AddArticle
            handleAddArticle={this.handleAddArticle}
          />

      </Tabs>


    );

  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles,
    categories: state.categories,
  }
}

export const TabComponentContainer = connect(
  mapStateToProps,
  null
)(TabComponent);