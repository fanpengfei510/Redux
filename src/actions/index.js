import { BOOLE } from '../constants';

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