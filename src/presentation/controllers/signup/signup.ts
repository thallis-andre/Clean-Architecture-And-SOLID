import { Controller, HttpResponse, HttpRequest, EmailValidator, AddAccount } from './signup-protocols'
import { MissingParamError, InvalidParamError } from '../../errors'
import { badRequest, serverError } from '../../helpers/http-helper'
export class SignUpController implements Controller {
  private readonly emaiValidator: EmailValidator
  private readonly addAccount: AddAccount
  constructor (emailValidator: EmailValidator, addAccount: AddAccount) {
    this.emaiValidator = emailValidator
    this.addAccount = addAccount
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFiels = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requiredFiels) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(`${field}`))
        }
      }
      const { name, email, password, passwordConfirmation } = httpRequest.body
      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }
      const isValid = this.emaiValidator.isValid(email)

      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }

      this.addAccount.add({
        name,
        email,
        password
      })
    } catch (error) {
      return serverError()
    }
  }
}
