// types
import { IUser } from '../../../shared/types/user';

export type TCurrentUserStoreData = {
  user: IUser | null
  token: string
  loading: boolean
}
