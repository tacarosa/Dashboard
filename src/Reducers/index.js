import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import PesertaListReducers from './PesertaListReducers'
import UserReducers from "./UserRedusers"

const createRootReducer = (history) => combineReducers({
	router: connectRouter(history),
	peserta : PesertaListReducers,
	user : UserReducers,
});

export default createRootReducer
