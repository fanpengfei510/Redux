import React, { Component } from 'react';

const Modal = ({hanModal}) =>{
  return(
    <div className="modal">
      <span onClick={()=>hanModal(false)} >X</span>
      <h4>机器学习服务器 PredictionIO</h4>
      <p>Apache PredictionIO是一个开源机器学习服务。它旨在帮助开发人员和数据科学家为机器学习任务创建预测引擎和服务。
      Apache PredictionIO副总裁Donald Szeto表示：“PredictionIO的开始是通过使用由Apache和开源项目提供的一整套经过验证的技术，通过模板进行高度定制，从而使机器学习普及。随着越来越多的用户和开发者社区提供宝贵的反馈和贡献，推动了项目在孵化阶段的发展。为此我们感到十分兴奋，并期待在社区的帮助下继续实施项目的目标。”</p>
    </div>
  )
}

export default Modal;