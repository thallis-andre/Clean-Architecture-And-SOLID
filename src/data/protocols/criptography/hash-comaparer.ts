/* eslint-disable @typescript-eslint/method-signature-style */
export interface HashComparer {
  compare (value: string, hash: string): Promise<boolean>
}
