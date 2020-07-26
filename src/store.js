import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import createRootReducer from './Reducers';

// Use this if you want to use routing with hash
export const history = createBrowserHistory();

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history),
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  createRootReducer(history),
  initialState,
  composedEnhancers
)

export default store