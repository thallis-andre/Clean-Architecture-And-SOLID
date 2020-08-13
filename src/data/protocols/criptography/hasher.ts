/* eslint-disable @typescript-eslint/method-signature-style */
export interface Hasher {
  hash(value: string): Promise<string>
}
