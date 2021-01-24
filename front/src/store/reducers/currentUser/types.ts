// types
import { IUser } from '../../../shared/types/user';

export type TCurrentUserStoreData = {
  user: IUser | null
  isAuth: boolean
  loading: boolean
}
