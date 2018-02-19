let nextArticleId = 0;

export const ADD_ARTICLE = text => {
  return {
    type: 'ADD_ARTICLE',
    id: nextArticleId++,
    text
    
  }
}