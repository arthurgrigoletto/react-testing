import { combineReducers } from 'redux';
import commentsReducer from 'reducers/commentReducer';
import authReducer from 'reducers/authReducer';

export default combineReducers({
  comments: commentsReducer,
  auth: authReducer
});
