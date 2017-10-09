import React, { Component } from 'react';

/**
|--------------------------------------------------
| @class view组件
|--------------------------------------------------
*/
class Menu extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>this.props.handleBoole(!this.props.bol)}>显示标题</button>
        {this.props.bol === true ? <h3>h3</h3> : <h2>h2</h2>}
      </div>
    );
  }
}

export default Menu;