import axios from 'axios'
import { config } from '../assets/config/config'

const apiUrl = config.api.url
function buildFormData(formData, data, parentKey) {
  if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
    Object.keys(data).forEach(key => {
      buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
    });
  } else {
    const value = data == null ? '' : data;
    formData.append(parentKey, value);
  }
}
const updateUserListDetails = async(uniqId, formData) => {
  const sendData = new FormData()
  await buildFormData(sendData, formData);
	return axios.patch(`${apiUrl}/userList/update/${uniqId}`, sendData)
}

const deleteUserList = (uniqId) => {
	return axios.delete(`${apiUrl}/userList/deleteList/${uniqId}`)
}
export const userListService = {
    updateUserListDetails,
    deleteUserList,
}