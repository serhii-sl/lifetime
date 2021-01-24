enum EDUCATION_STATUS {
  GRADUATED = 1,
  STUDYING = 2
}

export interface IUser {
  id: string,
  fullName: string,
  phone: string,
  email: string,
  status: string,
  birthday: string,
  educationStatus: EDUCATION_STATUS
  work: number,
  emailVerified: boolean
}

