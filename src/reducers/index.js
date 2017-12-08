import { RECEIVE_POSTS } from '../actions/';
import { combineReducers } from 'redux';

const initState = {
  posts:[]
}

const initData = (state=initState,action)=>{
  switch(action.type){
    case RECEIVE_POSTS:
      return{
        ...state,
        posts : action.data
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  initData
})

export default rootReducer;