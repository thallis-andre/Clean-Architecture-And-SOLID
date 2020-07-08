import { AccountModel } from '../models/account'

/* eslint-disable eol-last */
export interface AddAccountModel {
  name: string
  email: string
  password: string
}
export interface AddAccount {
  add: (account: AddAccountModel) => AccountModel
}