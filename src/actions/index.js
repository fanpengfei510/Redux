export const RECEIVE_POSTS = "RECEIVE_POSTS";

export const receivePosts = json =>({
  type : RECEIVE_POSTS,
  data : json.data.children.map( value => value.data)
})

const fetchData = () => dispatch =>{
  return fetch(`https://www.reddit.com/r/reactjs.json`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(json)))
}

export const RequestFetch = () => dispatch => {
  return dispatch(fetchData())
}