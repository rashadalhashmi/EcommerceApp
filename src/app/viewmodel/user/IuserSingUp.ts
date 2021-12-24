export interface IuserSingUp{
  userId?:string,
  firstname: string,
  lastname: string,
  email: string,
  username: string,
  password?: string,
  gender: number,
  address: string,
  phone: string,
  image?: string,
  userRole?: string
}
