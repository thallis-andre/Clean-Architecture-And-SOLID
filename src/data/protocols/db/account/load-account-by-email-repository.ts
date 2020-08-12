import { AccountModel } from '../../../../domain/models/account'

/* eslint-disable @typescript-eslint/method-signature-style */
export interface LoadAccountByEmailRepository {
  loadByEmail (email: string): Promise<AccountModel>
}
