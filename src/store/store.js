// import { configureStore, createSlice } from "@reduxjs/toolkit"

// const initialPostState = {posts=[]}
// const postSlice = createSlice({
//     name: 'posts',
//     initialState: initialPostState,
//     reducers:{
//         fetchAllPosts(state,action){
//             state.posts = action.payload
//         },
//         fetchAllPosts(state,action){

//         },
//         fetchAllPosts(state,action){

//         },
//     }
// })
// switch(action.type){
//     case 'FETCH_ALL':
//         return action.payload
//     case 'CREATE':
//         return [...posts,action.payload]
//     case 'UPDATE':
//         return posts.map((post)=>post.id === action.payload._id ? action.payload : post)
//     default: 
//         return posts    
// }

//  const getPosts = ()=> async(dispatch)=>{
//     try {
//         const {data}= await api.fetchPosts()
//         const action = { type :'FETCH_ALL',payload:[data]}
//         dispatch(action)
//     } catch (error) {
//         console.log(error.message)
//     }



// }

// export const createPost = (post) => async (dispatch) =>{
//     try {
//         const {data}= await api.createPost(post)
//         dispatch({type: 'CREATE',payload:data})
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// export const updatePost = (id, post)=> async(dispatch)=>{
//     try {
//       const {data} =  await api.updatePost(id,post)

//       dispatch({type:'UPDATE', payload:data})
//     } catch (error) {
//         console.log(error.message)
//     }
// }


// const store = configureStore({
//     reducer:
// })