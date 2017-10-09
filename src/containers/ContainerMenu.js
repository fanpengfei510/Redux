import { isBoole } from '../actions';
import { connect } from 'react-redux';
import Menu from '../components/Menu'

/**
|--------------------------------------------------
| @const 初始化state数据放到props里
|--------------------------------------------------
*/
const mapStateToProps = (state,ownProps) =>({
  bol : state.bol
})

/**
|--------------------------------------------------
| @const 组件props里添加方法，通过dispatch发送给reducer
|--------------------------------------------------
*/
const mapDispatchToProps = (dispatch,ownProps) =>({
  handleBoole : (bol)=>{
    dispatch(isBoole(bol))
  }
})

/**
|--------------------------------------------------
| @const Menu组件与mapStateToProps，mapDispatchToProps进行连接
|--------------------------------------------------
*/
const ContainerMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

export default ContainerMenu;