import { BOOLE,ISMODAL } from '../constants';
import { connect } from 'react-redux';

/**
|--------------------------------------------------
| @const 初始化state
|--------------------------------------------------
*/
const initialState = {
  bol : false,
  is : false,
  data : {"id":"123","name":"aibo"}
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

    case ISMODAL:
      return Object.assign({},state,{
        is : action.is
      })
    default:
      return state;
  }
}

export default ReducerApp;