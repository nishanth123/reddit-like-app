import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ArticleComponent from '../components/ArticleComponent';
import { RemoveArticleContainer } from '../components/RemoveArticle';
import {  AddArticleContainer } from '../components/AddArticle';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import  articleApp  from './../reducers';
import { removeArticle } from '../actions/removeArticle';

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

  componentWillMount() {
    // this.firebaseRef = new Firebase("https://nishanth123.github.io/reddit-like-app/");

    // this.firebaseRef.push({
    //   text: this.state.text
    // });

    // this.firebaseRef.on("child_added", function(dataSnapshot) {
    //    console.log("test-15");

    //    this.items.push(dataSnapshot.val());
    //    this.setState({
    //      items: this.props.articles
    //    });
    // }.bind(this));
  }

  getTabElements(){
    
    return this.state.options.map(category => {
      return (
        <Tab><p className="option__tab_text"><a>{category}</a></p></Tab>              
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
          <div className="out__article__block">
            <div className="article__block">
              <br />
              
             <RemoveArticleContainer id={article['id']}

             />

                <p className="option__text">
                  <Link to={`article/${article['id']}`}>{article['title']}</Link>
                </p>
                <p className="option__text">{(article['text']).substring(0, 200) + "..."}</p>
                <br/>
            </div>
            <br />
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