import API from '../../../../api/axios'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthData } from '../../../../store/reducers/auth'
import { authDataSelector } from '../../../../store/reducers/auth/selectors'
import { useHistory } from 'react-router-dom'

export const useLogin = () => {
  const dispatch = useDispatch()
  let history = useHistory()
  const setMembers = (data: any): any =>
    dispatch(
      setAuthData({
        token: data.token,
      })
    )
  const t = useSelector(authDataSelector)

  const handleSignIn = async ({ email, password }: any) => {
    const { data } = await API.post('auth/login', { email, password })

    setMembers(data)

    const config = {
      headers: { Authorization: `Bearer ${data.token}` },
    }

    const { data: users } = await API.get(`profile/${data.userId}`, config)

    history.push('/home')
  }

  return {
    handleSignIn,
  }
}
