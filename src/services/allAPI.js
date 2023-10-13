import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

// uploading video
export const uploadVideo = async (body)=>{
    // call post http request to http://localhost:4000/videos to add video in json server return response to Add component
    return await commonAPI("POST",`${serverURL}/videos`,body)
}

// get all videos
export const getAllVideos = async ()=>{
    // call get http request to http://localhost:4000/videos to get videos from json server return response to View component
    return await commonAPI("GET",`${serverURL}/videos`,"")
}

// get a single video
export const getAVideo = async (id)=>{
    // call get http request to http://localhost:4000/videos to get video from json server return response to VideoCard component
    return await commonAPI("GET",`${serverURL}/videos/${id}`,"")
}

// delete a single video
export const deleteAVideo = async (id)=>{
    // call get http request to http://localhost:4000/videos to remove video from json server return response to VideoCard component
    return await commonAPI("DELETE",`${serverURL}/videos/${id}`,{})
}

// adding category 
export const addCategory = async (body)=>{
    // http post request to  http://localhost:4000/videos for adding category in json server and return response
    return await commonAPI("POST",`${serverURL}/categories`,body)
}


// store video watching history to json  server
export const addHistory = async (videoHistory)=>{
    // call post http request to http://localhost:4000/videos to add video history in json server return response to videocard component
    return await commonAPI("POST",`${serverURL}/history`,videoHistory)
}

// store video watching history to json  server
export const getHistory = async ()=>{
    // call get http request to http://localhost:4000/videos to add video history from json server return response to watch history component
    return await commonAPI("GET",`${serverURL}/history`,"")
}

// delete video watching history from json  server
export const deleteHistory = async (id)=>{
    // call delete http request to http://localhost:4000/videos to delete video history from json server return response to watch history component
    return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
}

// add category to json server
export const saveCategory = async (body)=>{
    // call post http request to  http://localhost:4000/categories for adding category in json server and return response to Category component
    return await commonAPI("POST",`${serverURL}/categories`,body)
}

// get category from json server
export const getAllCategory = async ()=>{
    // call get http request to  http://localhost:4000/categories for adding category to get all categories from json server and return response to Category component
    return await commonAPI("GET",`${serverURL}/categories`,"")
}

// delete a category from json server
export const deleteCategory = async (id)=>{
    // call delete http request to http://localhost:4000/categories/id to delete  from json server return response to category component
    return await commonAPI("DELETE",`${serverURL}/categories/${id}`,{})
}

// update a category from json server
export const updateCategory = async (id,body)=>{
    // call put http request to http://localhost:4000/categories/id to update category  from json server return response to category component
    return await commonAPI("PUT",`${serverURL}/categories/${id}`,body)
}

