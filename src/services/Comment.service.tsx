import axios from "axios";

const commentService = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export default commentService