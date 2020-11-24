import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import loggerMiddleware from 'redux-logger'
import calculate from './reducers/calculateReducer'
const middlewares = [loggerMiddleware, thunkMiddleware]
const reducers = combineReducers({calculate})
const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)))

export default store