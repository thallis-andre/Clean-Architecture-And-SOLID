import { HttpResponse, HttpRequest } from './../protocols/http'
import { EmailValidator } from '../protocols/email-validator'
import { Controller } from './../protocols/controller'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest, serverError } from '../helpers/http-helper'
import { InvalidParamError } from '../errors/invalid-param-error'
export class SignUpController implements Controller {
  private readonly emaiValidator: EmailValidator
  constructor (emailValidator: EmailValidator) {
    this.emaiValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFiels = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requiredFiels) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(`${field}`))
        }
      }
      const isValid = this.emaiValidator.isValid(httpRequest.body.email)

      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }
    } catch (error) {
      return serverError()
    }
  }
}
