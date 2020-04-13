import axios from "axios"




const KEY = 'AIzaSyC8mxrxIbyO7A37t1i8Vq6v_Ydz3r43DE4'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
params:{
    part: 'snippet',
    maxResults: 5,
    key:`${KEY}`
}
})



