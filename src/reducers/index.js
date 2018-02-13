import { combineReducers } from 'redux'
import articles from './articles'
import visibilityFilter from './visibilityFilter'

const articleApp = combineReducers({
  articles,
  visibilityFilter
})

export default articleApp