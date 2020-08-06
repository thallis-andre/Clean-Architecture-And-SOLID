import { AddAccountModel } from '../../../domain/usecases/add-account'
import { AccountModel } from '../../../domain/models/account'

/* eslint-disable @typescript-eslint/method-signature-style */
export interface AddAccountRepository {
  add (accountData: AddAccountModel): Promise<AccountModel>
}
