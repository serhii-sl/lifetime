import API from '../../../../api/axios'
import { useDispatch } from 'react-redux'
import { setCurrentUserData } from '../../../../store/reducers/currentUser'
import { useHistory } from 'react-router-dom'
import { TCurrentUserStoreData } from '../../../../store/reducers/currentUser/types'
import { IUser } from '../../../../shared/types/user'

interface IHandleSignIn {
  email: string
  password: string
}

export const useLogin = () => {
  const dispatch = useDispatch()

  let history = useHistory()

  const setAuthToken = (token: string) =>
    dispatch(
      setCurrentUserData({
        token,
      } as TCurrentUserStoreData)
    )

  const setUser = (data: IUser) =>
    dispatch(setCurrentUserData({ user: data } as TCurrentUserStoreData))

  const handleSignIn = async ({ email, password }: any) => {
    const { data } = await API.post('auth/login', { email, password })

    setAuthToken(data.token)

    // const { data: user } = await API.get(`profile/${data.userId}`, config)
    //
    // setUser(user)

    history.push('/home')
  }

  return {
    handleSignIn,
  }
}
