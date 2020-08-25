export class EmailInUseError extends Error {
  constructor () {
    super('The received email is alreay in use')
    this.name = 'EmailInUseError'
  }
}
