import * as Api from '../../utils/Api';
import {SAVE_ALL_POSTS, ADD_NEW_POST} from '../types'

const saveAllPosts = (payload) => {
    return {
        type: SAVE_ALL_POSTS,
        payload
    }
}

export const getAllPosts = ()=> async dispatch => {
    try{
        const result = await Api.getPosts();
        dispatch(saveAllPosts(result));
    }catch(err) {
        console.log(err);
    }
}

export const addNewPost = (post)=> {
    return {
        type: ADD_NEW_POST,
        payload: post
    }
} 