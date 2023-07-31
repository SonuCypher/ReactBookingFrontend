const postReducer=(state={posts:[],currentId:null},action)=>{
    switch(action.type){
        case 'FETCH_ALL':
            return {posts:action.payload}
        case 'CREATE':
            return [...state.posts,action.payload]
        case 'UPDATE':
            return state.posts.map((post)=>post.id === action.payload._id ? action.payload : post)
        default: 
            return state.posts    
    }
}

export default postReducer