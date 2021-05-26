import {createStore} from 'redux';
import usersReducer from '../usersReducers'

export const Store = createStore(usersReducer)