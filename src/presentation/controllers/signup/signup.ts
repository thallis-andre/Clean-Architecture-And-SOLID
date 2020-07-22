import { Controller, HttpResponse, HttpRequest, EmailValidator, AddAccount, Validation } from './signup-protocols'
import { InvalidParamError } from '../../errors'
import { badRequest, serverError, ok } from '../../helpers/http-helper'
export class SignUpController implements Controller {
  private readonly emaiValidator: EmailValidator
  private readonly addAccount: AddAccount
  private readonly validation: Validation
  constructor (emailValidator: EmailValidator, addAccount: AddAccount, validation: Validation) {
    this.emaiValidator = emailValidator
    this.addAccount = addAccount
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const { name, email, password } = httpRequest.body
      const isValid = this.emaiValidator.isValid(email)

      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }

      const account = await this.addAccount.add({
        name,
        email,
        password
      })

      return ok(account)
    } catch (error) {
      return serverError(error)
    }
  }
}
