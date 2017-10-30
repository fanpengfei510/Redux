import { BOOLE ,ISMODAL} from '../constants';

/**
|--------------------------------------------------
| @const action操作
|--------------------------------------------------
*/
export const isBoole = (bol)=>{
  return{
    type : BOOLE,
    bol
  }
}

/**
|--------------------------------------------------
| @const 显示模态框
|--------------------------------------------------
*/
export const isModal = (is)=>{
  return {
    type : ISMODAL,
    is
  }
}