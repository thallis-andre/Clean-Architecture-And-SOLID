/* eslint-disable @typescript-eslint/method-signature-style */
export interface AuthenticationModel {
  email: string
  password: string
}

export interface Authentication {
  auth (authentication: AuthenticationModel): Promise<string>
}
