/* eslint-disable @typescript-eslint/method-signature-style */
export interface UpdateAccessTokenRepository {
  updateAccessToken (id: string, token: string): Promise<void>
}
