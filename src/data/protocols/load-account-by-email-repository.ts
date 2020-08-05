import { AccountModel } from '../../domain/models/account'

/* eslint-disable @typescript-eslint/method-signature-style */
export interface LoadAccountByEmailRepository {
  load (email: string): Promise<AccountModel>
}
