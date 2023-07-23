import { configureStore, createSlice } from "@reduxjs/toolkit"

const initialPostState = {posts=[]}
const postSlice = createSlice({
    name: 'posts',
    initialState: initialPostState,
    reducers:{
        fetchAllPosts(state,action){
            state.posts = action.payload
        },
        fetchAllPosts(state,action){

        },
        fetchAllPosts(state,action){

        },
    }
})
switch(action.type){
    case 'FETCH_ALL':
        return action.payload
    case 'CREATE':
        return [...posts,action.payload]
    case 'UPDATE':
        return posts.map((post)=>post.id === action.payload._id ? action.payload : post)
    default: 
        return posts    
}




const store = configureStore({
    reducer:
})