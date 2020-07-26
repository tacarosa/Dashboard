import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import PesertaListReducers from './PesertaListReducers'

const createRootReducer = (history) => combineReducers({
	router: connectRouter(history),
	PesertaListReducers
});

export default createRootReducer
