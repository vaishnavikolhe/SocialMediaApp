import * as action from './actionTypes';

export const fetch_posts_request = () => {
    return{
        type:action.FETCH_POSTS_REQUEST
    }
}
export const fetch_posts_success = (posts) => {
    return{
        type:action.FETCH_POSTS_SUCCESS,
        payload:posts
    }
}
export const fetch_posts_failure = (error) =>{
    return{
        type:action.FETCH_POSTS_FAILURE,
        payload:error
    }
}
export const fetchPosts=()=>{
    return (dispatch) => {
        dispatch(fetch_posts_request());
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(respose=>respose.json())
        .then(data => dispatch(fetch_posts_success(data)))
        .catch(error=>dispatch(fetch_posts_failure(error)))
        
    }
}
