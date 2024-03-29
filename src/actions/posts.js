import * as api from '../api'
import { CREATE, DELETE, FETCH_ALL,FETCH_POST, LIKE, SETID, UPDATE } from '../constants/actionTypes'



export const getPost = (id)=> async(dispatch)=>{
    try {
        const {data}= await api.fetchPost(id)
        const action = { type :FETCH_POST,payload:data}
        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }



}
export const getPosts = ()=> async(dispatch)=>{
    try {
        const {data}= await api.fetchPosts()
        const action = { type :FETCH_ALL,payload:data}
        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }



}
export const createPost = (post) => async (dispatch) =>{
    try {
        const {data}= await api.createPost(post)
        dispatch({type: CREATE,payload:data})
    } catch (error) {
        console.log(error.message)
    }
}

export const updatePost = (id, post)=> async(dispatch)=>{
    try {
      const {data} =  await api.updatePost(id,post)

      dispatch({type:UPDATE, payload:data})
    } catch (error) {
        console.log(error.message)
    }
}

export const deletePost = (id)=> async(dispatch)=>{
    try {
        await api.deletePost(id)
        dispatch({type:DELETE,payload:id})
    } catch (error) {
        console.log(error.message)
    }
}

export const likePost =(id) => async(dispatch)=>{
    try {
      const {data}=  await api.likePost(id)
      dispatch({type:LIKE, payload: data})
    } catch (error) {
        console.log(error)
        return {error: error.message}
    }
}

export const setCurrentId = (id) =>{
    return(
        {type:SETID, payload:id}
    )
}