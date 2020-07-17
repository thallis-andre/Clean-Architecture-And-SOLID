/* eslint-disable @typescript-eslint/method-signature-style */
export interface LogErrorRepository {
  logError (stack: string): Promise<void>
}
