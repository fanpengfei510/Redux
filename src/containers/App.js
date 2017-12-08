import React, { Component } from 'react';
import { RequestFetch } from '../actions';
import Posts from '../components/Posts';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const {posts} = this.props;
    return (
      <Posts posts={posts}/>
    );
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(RequestFetch())
  }
}

const mapStateToProps = (state, ownProps) => {
  const { initData } = state;
  return {
    posts : initData.posts
  }
}

export default connect(mapStateToProps)(App);