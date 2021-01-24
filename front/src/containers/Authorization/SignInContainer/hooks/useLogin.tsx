// hooks
import { useCookies } from 'react-cookie'
import { useAxiosAPI } from '../../../../api/axios'
import { useHistory } from 'react-router-dom'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUserData } from '../../../../store/reducers/currentUser'
import { currentUserDataSelector } from '../../../../store/reducers/currentUser/selectors'
// types
import { TCurrentUserStoreData } from '../../../../store/reducers/currentUser/types'

export const useLogin = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { loading } = useSelector(currentUserDataSelector)

  const API = useAxiosAPI()

  const [, setCookie] = useCookies(['JWT-Token'])

  const setAuthStatus = (status: boolean) =>
    dispatch(
      setCurrentUserData({
        isAuth: status,
      } as TCurrentUserStoreData)
    )

  const setLoading = (loading: boolean) =>
    dispatch(
      setCurrentUserData({
        loading,
      } as TCurrentUserStoreData)
    )

  const handleSignIn = async ({ email, password }: any) => {
    try {
      setLoading(true)
      const { data } = await API.post('auth/login', { email, password })

      data.token && setAuthStatus(true)
      setCookie('JWT-Token', data.token)
      setCookie('userId', data.userId)

      history.push('/home')
    } catch (error) {
      console.log('[handleSignIn]: ', error)
    } finally {
      setLoading(false)
    }
  }

  return {
    handleSignIn,
    loading,
  }
}
