// libs
import { useEffect } from 'react'
// hooks
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'
import { useAxiosAPI } from '../../../../api/axios'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUserData } from '../../../../store/reducers/currentUser'
import { currentUserDataSelector } from '../../../../store/reducers/currentUser/selectors'
// types
import { TCurrentUserStoreData } from '../../../../store/reducers/currentUser/types'
import { IUser } from '../../../../shared/types/user'

export const useCurrentUser = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const API = useAxiosAPI()

  const [cookies] = useCookies(['JWT-Token'])

  const { user, loading } = useSelector(currentUserDataSelector)

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

  const setUser = (data: IUser) =>
    dispatch(setCurrentUserData({ user: data } as TCurrentUserStoreData))

  const fetchCurrentUser = async () => {
    try {
      setLoading(true)
      const { data: user } = await API.get(`profile/${cookies.userId}`)

      cookies['JWT-Token'] && setAuthStatus(true)
      setUser(user)

      history.push('/home')
    } catch (error) {
      console.log('[fetchCurrentUser]: ', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!user) {
      fetchCurrentUser()
    }
  }, [])

  return {
    fetchCurrentUser,
    loading
  }
}
