import { combineReducers } from 'redux';
import commentsReducer from 'reducers/commentReducer';

export default combineReducers({
  comments: commentsReducer
});
