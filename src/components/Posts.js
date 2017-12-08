import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Posts = ({ posts }) =>(
  <ul>
    {
      posts.map((value,index)=>{
        return(
          <li key={index}>{value.title}</li>
        )
      })
    }
  </ul>
)

Posts.propTypes = {
  posts : PropTypes.array.isRequired
}

export default Posts;