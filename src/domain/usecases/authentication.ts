/* eslint-disable @typescript-eslint/method-signature-style */
export interface Authentication {
  auth (email: string, password: string): Promise<string>
}
