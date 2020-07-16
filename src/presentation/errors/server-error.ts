export class ServerError extends Error {
  constructor (stack: string) {
    super('Internal server erro')
    this.name = 'ServerError'
    this.stack = stack
  }
}
