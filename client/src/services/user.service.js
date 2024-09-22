import axios from 'axios'
import { config } from '../assets/config/config'

const apiUrl = config.api.url

const getUsers = (page) => {
	return axios.get(`${apiUrl}/v1/users?limit=${config.users.resultsPerPage}&page=${page}`, {})
		.then(response => {
	    return response.data
	  })
}

const createUser = (username, email, password, role) => {
	return axios.post(`${apiUrl}/v1/users`, {
    name: username,
    email: email,
    password: password,
    role: role
  })
}

const updateUserPassword = (userId, password) => {
	return axios.patch(`${apiUrl}/v1/users/${userId}`, {
    password: password
  })
}

const updateUserDetails = (userId, username, email, lastname) => {
	return axios.patch(`${apiUrl}/v1/users/${userId}`, {
    name: username,
    email: email,
    lastname
  })
}


const deleteUser = (userId) => {
	return axios.delete(`${apiUrl}/v1/users/${userId}`, {})
}
const deleteUserList = (uniqId) => {
	return axios.delete(`${apiUrl}/v1/userList/deleteList/${uniqId}`, {})
}

export const userService = {
  getUsers,
  createUser,
  updateUserPassword,
  updateUserDetails,
  deleteUser,
  deleteUserList,
}