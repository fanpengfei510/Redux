import React, { Component } from 'react';
import Modal from './Modal';

/**
|--------------------------------------------------
| @class view组件
|--------------------------------------------------
*/
const Menu = ({handleBoole,bol,handleModal,is}) => {
    return (
      <div>
        <button onClick={()=>handleBoole(!bol)}>显示标题</button>
        {bol === true ? <h3>h3</h3> : <h2>h2</h2>}

        <button onClick={()=>handleModal(true)}>显示模态框</button>
        {is === true ? <Modal hanModal={handleModal}/> : ""}
      </div>
    );
}

export default Menu;