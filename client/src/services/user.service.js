import axios from 'axios'
import { config } from '../assets/config/config'

const apiUrl = config.api.url

const getUsers = (page) => {
	return axios.get(`${apiUrl}/users?limit=${config.users.resultsPerPage}&page=${page}`, {})
		.then(response => {
	    return response.data
	  })
}

const createUser = (username, email, password, role) => {
	return axios.post(`${apiUrl}/users`, {
    name: username,
    email: email,
    password: password,
    role: role
  })
}

const updateUserPassword = (oldPassword, newPassword, confirmPassword) => {
	return axios.patch(`${apiUrl}/auth/change-password`, {
    oldPassword,
    newPassword,
    confirmPassword
  })
}

const updateUserDetails = (data) => {

  console.log("data", data)
	return axios.patch(`${apiUrl}/user/edit-profile`,
    data
  )
}


const deleteUser = (userId) => {
	return axios.delete(`${apiUrl}/users/${userId}`, {})
}
const deleteUserList = (uniqId) => {
	return axios.delete(`${apiUrl}/userList/deleteList/${uniqId}`, {})
}

export const userService = {
  getUsers,
  createUser,
  updateUserPassword,
  updateUserDetails,
  deleteUser,
  deleteUserList,
}