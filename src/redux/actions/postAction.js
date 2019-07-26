import {FETCH_POST, FETCH_NEW_POST, FETCH_CONTROVERSIAL_POST, FETCH_TOP_POST, FETCH_RISING_POST} from './types'

export const fetchPosts = () => dispatch =>{
    fetch('https://www.reddit.com/r/walmart.json')
    .then(res=>res.json())
    .then(posts=>dispatch({
        type:FETCH_POST,
        payload:posts.data.children
    }))
}

export const fetchNewPosts = () => dispatch =>{
    fetch('https://www.reddit.com/r/walmart/new.json')
    .then(res=>res.json())
    .then(posts=>dispatch({
        type:FETCH_NEW_POST,
        payload:posts.data.children
    }))
}

export const fetchControversialPost = () => dispatch =>{
    fetch('https://www.reddit.com/r/walmart/controversial.json')
    .then(res=>res.json())
    .then(posts=> dispatch({
        type:FETCH_CONTROVERSIAL_POST,
        payload:posts.data.children
    }))
}

export const fetchTopPost = () => dispatch =>{
    fetch('https://www.reddit.com/r/walmart/top.json')
    .then(res=>res.json())
    .then(posts=> dispatch({
        type:FETCH_TOP_POST,
        payload:posts.data.children
    }))
}

export const fetchRisingPost = () => dispatch =>{
    fetch('https://www.reddit.com/r/walmart/rising.json')
    .then(res=>res.json())
    .then(posts=> dispatch({
        type:FETCH_RISING_POST,
        payload:posts.data.children
    }))
}