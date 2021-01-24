import axios from 'axios'

const config = {
  headers: { Authorization: `Bearer` },
}

export default axios.create({
  baseURL: `http://localhost:3000/`,
})
