import axios from 'axios';

export const fetchMembers = () => {
  return axios.get('/members')
}