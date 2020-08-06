/* eslint-disable @typescript-eslint/method-signature-style */
export interface TokenGenerator {
  generate (id: string): Promise<string>
}
