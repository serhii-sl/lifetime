import API from '../../../../api/axios'

export const useLogin = () => {
  const handleSignIn = async ({ email, password }: any) => {
    const { data } = await API.post('auth/login', { email, password })
    console.log(data)
    const config = {
      headers: { Authorization: `Bearer ${data.token}` },
    }
    const { data: users } = await API.get(`profile/${data.userId}`, config)
    console.log(users.items)
  }

  return {
    handleSignIn,
  }
}
