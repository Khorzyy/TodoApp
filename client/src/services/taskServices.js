import axios from 'axios'
import App from '../App';

const apiUrl = "http://localhost:8000/api/task";

export function getTask() {
    return axios.get(apiUrl);
}

export function addTask(task) {
    return axios.post(apiUrl, task)
}

export function updateTask(id, task){
    return axios.put(apiUrl + "/" + id, task)
}

export function deleteTask(id, task){
    return axios.delete(apiUrl + "/" + id, task)
}