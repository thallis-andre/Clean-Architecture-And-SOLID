/* eslint-disable @typescript-eslint/method-signature-style */
export interface UpdateAccessTokenRepository {
  update (id: string, token: string): Promise<void>
}
