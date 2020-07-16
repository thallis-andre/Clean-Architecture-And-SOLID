/* eslint-disable @typescript-eslint/method-signature-style */
export interface LogErrorRepository {
  log (stack: string): Promise<void>
}
