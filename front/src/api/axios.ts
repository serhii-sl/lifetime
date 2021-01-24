import axios from 'axios'
// cookies
import { useCookies } from 'react-cookie'

export const useAxiosAPI = () => {
  const [cookies] = useCookies(['JWT-Token'])

  return axios.create({
    baseURL: `http://localhost:3000/`,
    headers: { Authorization: `Bearer ${cookies['JWT-Token']}` },
  })
}
