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
const updateUserListDetails = async(listId, formData) => {
  const sendData = new FormData()
  await buildFormData(sendData, formData);
	return axios.patch(`${apiUrl}/userList/update/${listId}`, sendData)
}

const deleteUserList = (listId) => {
	return axios.delete(`${apiUrl}/userList/deleteList/${listId}`)
}
export const userListService = {
    updateUserListDetails,
    deleteUserList,
}