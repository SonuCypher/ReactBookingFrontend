import axios from 'axios'

const API = axios.create({baseURL:"http://localhost:5000"})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization =`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req
})


export const fetchPost= (id)=> API.get(`/posts/${id}`)
export const fetchPosts= ()=> API.get('/posts')
export const createPost = (newPost)=> API.post('/posts', newPost)
export const updatePost = (id, updatedPost)=> API.patch(`/posts/${id}`,updatedPost)
export const deletePost = (id)=> API.delete(`/posts/${id}`)
export const likePost = (id) => API.patch(`/posts/${id}/likePost`)

export const signIn = (formData)=> API.post('/users/signin',formData)
export const signUp = (formData)=> API.post('/users/signup',formData)
export const getUser = (id)=>API.get(`/users/${id}`)
export const getUserFriends = (id)=>API.get(`/users/friends/${id}`)


export const fetchUserChat = (id)=> API.get(`/chat/${id}`)
export const createUserChat= (newChat)=>API.post('/chat',newChat)


export const fetchUserMessage =(id)=> API.get(`/messages/${id}`)
export const createUserMessage =(newMessage)=> API.post('/messages',newMessage)