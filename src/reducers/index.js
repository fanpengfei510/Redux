import { BOOLE } from '../constants';
import { connect } from 'react-redux';

/**
|--------------------------------------------------
| @const 初始化state
|--------------------------------------------------
*/
const initialState = {
  bol : false
}

/**
|--------------------------------------------------
| @const reducer操作state
|--------------------------------------------------
*/
const ReducerApp = (state=initialState,action)=>{
  switch(action.type){
    case BOOLE:
      return Object.assign({},state,{
        bol : action.bol
      })
    default:
      return state;
  }
}

export default ReducerApp;