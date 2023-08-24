import { CREATE, DELETE, FETCH_ALL, FETCH_POST, LIKE, SETID, UPDATE } from "../constants/actionTypes";

const postReducer = (state = { posts: [], currentId: null }, action) => {
  switch (action.type) {
    case FETCH_POST:
      return {...state,post: action.payload}
    case FETCH_ALL:
      return { ...state, posts: action.payload };
    case CREATE:
      return [...state.posts, action.payload];
    case UPDATE:
      return state.posts.map((post) => post._id === action.payload._id ? action.payload : post );
        
     
    case DELETE:
      return state.posts.filter((post) => post._id !== action.payload);

    case SETID:
      return { ...state, currentId: action.payload };
    case LIKE:
      return state.posts.map((post) => post._id === action.payload._id ? action.payload : post);
    default:
        return state.posts;
        
      

  }
};

export default postReducer;
