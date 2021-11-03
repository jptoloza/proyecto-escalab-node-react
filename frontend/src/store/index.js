import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import AuthReducer from './Auth/AuthReducer'
import NavReducer from './Nav/NavReducer'
import UsersReducer from './Users/UsersReducer'
import NotificationsReducer from './Notifications/NotificationsReducer';
import NewsReducer from './News/NewsReducer';

const reducers = combineReducers({
  auth: AuthReducer,
  nav: NavReducer,
  users: UsersReducer,
  notifications: NotificationsReducer,
  news: NewsReducer,
})

const store = createStore(
  reducers, 
  composeWithDevTools(
    applyMiddleware(thunk),
))

export default store
