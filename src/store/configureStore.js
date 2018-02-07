import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import articleReducer from '../reducers/article';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
	const store = createStore(
		combineReducers({
			article: articleReducer,			
		}),
		composeEnhancers(applyMiddleware(thunk))
	);

	return store;
};
